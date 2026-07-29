import { test, expect } from '@playwright/test';
import {
  loadClinicalNotesManifest,
  getSmokeEndpoints,
  clinicalNotesUrl,
  resolveEndpointHeaders,
  loadDsApiHeaders,
  DS_API_HEADERS_PATH,
  type ClinicalNotesEndpoint,
} from '../utils/clinicalNotesApi';
import { readResponseBody, attachApiProof, fetchWithGatewayRetry } from '../utils/apiProof';

function assertBody(endpoint: ClinicalNotesEndpoint, body: unknown) {
  if (endpoint.bodyMatch && body && typeof body === 'object') {
    expect(body).toMatchObject(endpoint.bodyMatch);
  }
  if (endpoint.bodyContains?.length) {
    const serialized = JSON.stringify(body).toLowerCase();
    for (const fragment of endpoint.bodyContains) {
      expect(serialized).toContain(fragment.toLowerCase());
    }
  }
}

test.describe('Clinical Notes API smoke', () => {
  const manifest = loadClinicalNotesManifest();
  const smokeEndpoints = getSmokeEndpoints(manifest);
  const dsApiHeaders = loadDsApiHeaders();

  if (Object.keys(dsApiHeaders).length === 0) {
    test('TC_CN_00 - auth headers pending', async () => {
      test.skip(
        true,
        `Missing ${DS_API_HEADERS_PATH} — scp from discovery machine or run: npm run discover:clinical-notes-apis`,
      );
    });
    return;
  }

  if (smokeEndpoints.length === 0) {
    test('TC_CN_00 - manifest pending discovery', async () => {
      test.skip(
        true,
        'No smoke endpoints in fixtures/clinical-notes-apis.json — run: npm run discover:clinical-notes-apis',
      );
    });
    return;
  }

  for (const endpoint of smokeEndpoints) {
    test(`${endpoint.id} - ${endpoint.method} ${endpoint.name}`, async ({ request }, testInfo) => {
      // GET session-note endpoints can be slow under load; POSTs (RAG insert) need more headroom.
      const timeoutMs = endpoint.method === 'POST' ? 180000 : 120000;
      // Retries for gateway timeouts add wall time beyond a single request.
      test.setTimeout(timeoutMs * 3 + 30000);

      let targetUrl: string;
      try {
        targetUrl = clinicalNotesUrl(manifest, endpoint);
      } catch (error) {
        test.skip(true, (error as Error).message);
        return;
      }

      // Smoke: lighter list-clients page size reduces timeout risk on session-note.
      if (endpoint.id === 'TC_CN_03') {
        targetUrl = targetUrl.replace(/([?&]count=)\d+/i, '$120');
      }

      const headers = resolveEndpointHeaders(endpoint);

      const options: Record<string, unknown> = {
        method: endpoint.method,
        headers,
        timeout: timeoutMs,
      };

      if (endpoint.method !== 'GET' && endpoint.method !== 'HEAD' && endpoint.samplePayload !== undefined) {
        options.data =
          endpoint.id === 'TC_CN_02'
            ? slimInsertIntoContextPayload(endpoint.samplePayload)
            : endpoint.samplePayload;
      }

      const response = await fetchWithGatewayRetry(request, targetUrl, options, {
        retries: 2,
        retryDelayMs: 4000,
      });
      const body = await readResponseBody(response);
      const pathOrUrl = endpoint.fullUrl || endpoint.path;

      await attachApiProof(testInfo, {
        endpoint: pathOrUrl,
        method: endpoint.method,
        status: response.status(),
        body,
        url: targetUrl,
        extra: { id: endpoint.id, name: endpoint.name },
      });

      expect(response.status()).toBe(endpoint.expectedStatus);
      assertBody(endpoint, body);
    });
  }
});

/** Keep insert-into-context smoke payload small — large clinical text often triggers RAG nginx 504. */
function slimInsertIntoContextPayload(sample: unknown): unknown {
  if (!sample || typeof sample !== 'object') return sample;
  const record = sample as Record<string, unknown>;
  return {
    ...record,
    text: 'Automation smoke ping for insert-into-context.',
  };
}
