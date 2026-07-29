# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: clinical-notes-api-smoke.spec.ts >> Clinical Notes API smoke >> TC_CN_02 - POST insert-into-context
- Location: tests/clinical-notes-api-smoke.spec.ts:51:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 504
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import {
  3   |   loadClinicalNotesManifest,
  4   |   getSmokeEndpoints,
  5   |   clinicalNotesUrl,
  6   |   resolveEndpointHeaders,
  7   |   loadDsApiHeaders,
  8   |   DS_API_HEADERS_PATH,
  9   |   type ClinicalNotesEndpoint,
  10  | } from '../utils/clinicalNotesApi';
  11  | import { readResponseBody, attachApiProof, fetchWithGatewayRetry } from '../utils/apiProof';
  12  | 
  13  | function assertBody(endpoint: ClinicalNotesEndpoint, body: unknown) {
  14  |   if (endpoint.bodyMatch && body && typeof body === 'object') {
  15  |     expect(body).toMatchObject(endpoint.bodyMatch);
  16  |   }
  17  |   if (endpoint.bodyContains?.length) {
  18  |     const serialized = JSON.stringify(body).toLowerCase();
  19  |     for (const fragment of endpoint.bodyContains) {
  20  |       expect(serialized).toContain(fragment.toLowerCase());
  21  |     }
  22  |   }
  23  | }
  24  | 
  25  | test.describe('Clinical Notes API smoke', () => {
  26  |   const manifest = loadClinicalNotesManifest();
  27  |   const smokeEndpoints = getSmokeEndpoints(manifest);
  28  |   const dsApiHeaders = loadDsApiHeaders();
  29  | 
  30  |   if (Object.keys(dsApiHeaders).length === 0) {
  31  |     test('TC_CN_00 - auth headers pending', async () => {
  32  |       test.skip(
  33  |         true,
  34  |         `Missing ${DS_API_HEADERS_PATH} — scp from discovery machine or run: npm run discover:clinical-notes-apis`,
  35  |       );
  36  |     });
  37  |     return;
  38  |   }
  39  | 
  40  |   if (smokeEndpoints.length === 0) {
  41  |     test('TC_CN_00 - manifest pending discovery', async () => {
  42  |       test.skip(
  43  |         true,
  44  |         'No smoke endpoints in fixtures/clinical-notes-apis.json — run: npm run discover:clinical-notes-apis',
  45  |       );
  46  |     });
  47  |     return;
  48  |   }
  49  | 
  50  |   for (const endpoint of smokeEndpoints) {
  51  |     test(`${endpoint.id} - ${endpoint.method} ${endpoint.name}`, async ({ request }, testInfo) => {
  52  |       // GET session-note endpoints can be slow under load; POSTs (RAG insert) need more headroom.
  53  |       const timeoutMs = endpoint.method === 'POST' ? 180000 : 120000;
  54  |       // Retries for gateway timeouts add wall time beyond a single request.
  55  |       test.setTimeout(timeoutMs * 3 + 30000);
  56  | 
  57  |       let targetUrl: string;
  58  |       try {
  59  |         targetUrl = clinicalNotesUrl(manifest, endpoint);
  60  |       } catch (error) {
  61  |         test.skip(true, (error as Error).message);
  62  |         return;
  63  |       }
  64  | 
  65  |       // Smoke: lighter list-clients page size reduces timeout risk on session-note.
  66  |       if (endpoint.id === 'TC_CN_03') {
  67  |         targetUrl = targetUrl.replace(/([?&]count=)\d+/i, '$120');
  68  |       }
  69  | 
  70  |       const headers = resolveEndpointHeaders(endpoint);
  71  | 
  72  |       const options: Record<string, unknown> = {
  73  |         method: endpoint.method,
  74  |         headers,
  75  |         timeout: timeoutMs,
  76  |       };
  77  | 
  78  |       if (endpoint.method !== 'GET' && endpoint.method !== 'HEAD' && endpoint.samplePayload !== undefined) {
  79  |         options.data =
  80  |           endpoint.id === 'TC_CN_02'
  81  |             ? slimInsertIntoContextPayload(endpoint.samplePayload)
  82  |             : endpoint.samplePayload;
  83  |       }
  84  | 
  85  |       const response = await fetchWithGatewayRetry(request, targetUrl, options, {
  86  |         retries: 2,
  87  |         retryDelayMs: 4000,
  88  |       });
  89  |       const body = await readResponseBody(response);
  90  |       const pathOrUrl = endpoint.fullUrl || endpoint.path;
  91  | 
  92  |       await attachApiProof(testInfo, {
  93  |         endpoint: pathOrUrl,
  94  |         method: endpoint.method,
  95  |         status: response.status(),
  96  |         body,
  97  |         url: targetUrl,
  98  |         extra: { id: endpoint.id, name: endpoint.name },
  99  |       });
  100 | 
> 101 |       expect(response.status()).toBe(endpoint.expectedStatus);
      |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  102 |       assertBody(endpoint, body);
  103 |     });
  104 |   }
  105 | });
  106 | 
  107 | /** Keep insert-into-context smoke payload small — large clinical text often triggers RAG nginx 504. */
  108 | function slimInsertIntoContextPayload(sample: unknown): unknown {
  109 |   if (!sample || typeof sample !== 'object') return sample;
  110 |   const record = sample as Record<string, unknown>;
  111 |   return {
  112 |     ...record,
  113 |     text: 'Automation smoke ping for insert-into-context.',
  114 |   };
  115 | }
  116 | 
```