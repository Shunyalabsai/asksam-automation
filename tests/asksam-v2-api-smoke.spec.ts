import { test, expect } from '@playwright/test';
import {
  ASKSAM_V2,
  asksamV2Url,
  asksamV2Headers,
  isAsksamV2ClinicHoursIst,
  buildGenerateNoteFieldsSmokePayload,
  parseFirstNdjsonLine,
} from '../utils/asksamV2Api';
import { readResponseBody, attachApiProof, fetchWithGatewayRetry } from '../utils/apiProof';

/**
 * AskSam v2 read-only smokes (asksam.uwc.world) — per DS team guidance Oct 2026.
 * No writes on production. Optional AI check skips during Sydney clinic hours (03:30–11:30 IST).
 */
test.describe('AskSam v2 API smoke (read-only)', () => {
  test('TC_V2_01 - GET /health returns Ok', async ({ request }, testInfo) => {
    const endpoint = '/health';
    const url = asksamV2Url(endpoint);
    const response = await request.get(url, { headers: asksamV2Headers() });
    const body = await readResponseBody(response);
    await attachApiProof(testInfo, { endpoint, method: 'GET', status: response.status(), body, url });
    expect(response.status()).toBe(200);
    expect(body).toMatchObject({ Health: 'Ok' });
  });

  test('TC_V2_02 - GET /redis/health returns Redis healthy', async ({ request }, testInfo) => {
    const endpoint = '/redis/health';
    const url = asksamV2Url(endpoint);
    const response = await request.get(url, { headers: asksamV2Headers() });
    const body = await readResponseBody(response);
    await attachApiProof(testInfo, { endpoint, method: 'GET', status: response.status(), body, url });
    expect(response.status()).toBe(200);
    expect(body).toMatchObject({ status: 'healthy', detail: 'Redis is running' });
  });

  test('TC_V2_03 - GET /vectorstore/health returns Ok', async ({ request }, testInfo) => {
    const endpoint = '/vectorstore/health';
    const url = asksamV2Url(endpoint);
    const response = await request.get(url, { headers: asksamV2Headers() });
    const body = await readResponseBody(response);
    await attachApiProof(testInfo, { endpoint, method: 'GET', status: response.status(), body, url });
    expect(response.status()).toBe(200);
    expect(body).toMatchObject({ Health: 'Ok' });
  });

  test('TC_V2_04 - GET /health/stores returns neo4j mongo redis ok', async ({ request }, testInfo) => {
    const endpoint = '/health/stores';
    const url = asksamV2Url(endpoint);
    const response = await request.get(url, { headers: asksamV2Headers() });
    const body = await readResponseBody(response);
    await attachApiProof(testInfo, { endpoint, method: 'GET', status: response.status(), body, url });
    expect(response.status()).toBe(200);
    const record = body as Record<string, { ok?: boolean }>;
    expect(record.neo4j?.ok).toBe(true);
    expect(record.mongo?.ok).toBe(true);
    expect(record.redis?.ok).toBe(true);
  });

  test('TC_V2_05 - GET /note-fields/manifest has 53 fields and 4 sections', async ({
    request,
  }, testInfo) => {
    const endpoint = '/note-fields/manifest';
    const url = asksamV2Url(endpoint);
    const response = await request.get(url, { headers: asksamV2Headers() });
    const body = await readResponseBody(response);
    await attachApiProof(testInfo, { endpoint, method: 'GET', status: response.status(), body, url });
    expect(response.status()).toBe(200);
    const record = body as { total?: number; sections?: Record<string, unknown> };
    expect(record.total).toBe(53);
    expect(Object.keys(record.sections || {}).sort()).toEqual(
      ['case_history', 'follow_up_summary', 'prescription', 'progress_note'].sort(),
    );
  });

  test('TC_V2_06 - GET /clinical-note/{session_id} finds approved test session', async ({
    request,
  }, testInfo) => {
    const endpoint = `/clinical-note/${ASKSAM_V2.sessionId}`;
    const url = asksamV2Url(endpoint);
    const response = await request.get(url, { headers: asksamV2Headers() });
    const body = await readResponseBody(response);
    await attachApiProof(testInfo, { endpoint, method: 'GET', status: response.status(), body, url });
    expect(response.status()).toBe(200);
    const record = body as {
      found?: boolean;
      session_id?: string;
      sections?: unknown;
      filled_fields?: number;
    };
    expect(record.found).toBe(true);
    expect(record.session_id).toBe(ASKSAM_V2.sessionId);
    expect(record.sections).toBeTruthy();
    expect(typeof record.sections).toBe('object');
    expect(Number(record.filled_fields || 0)).toBeGreaterThan(0);
  });

  test('TC_V2_07 - GET /chat-history returns message list shape', async ({ request }, testInfo) => {
    const endpoint = `/chat-history?user_id=${encodeURIComponent(ASKSAM_V2.userId)}&session_id=${encodeURIComponent(ASKSAM_V2.sessionId)}`;
    const url = asksamV2Url(endpoint);
    const response = await request.get(url, { headers: asksamV2Headers() });
    const body = await readResponseBody(response);
    await attachApiProof(testInfo, { endpoint, method: 'GET', status: response.status(), body, url });
    expect(response.status()).toBe(200);
    const record = body as { messages?: Array<Record<string, unknown>> };
    expect(Array.isArray(record.messages)).toBe(true);
    for (const msg of record.messages || []) {
      expect(['human', 'ai']).toContain(msg.role);
      expect(typeof msg.content).toBe('string');
      expect(msg.timestamp).toBeTruthy();
    }
  });

  test('TC_V2_08 - POST /drugs-interaction/graph-fe-user-year returns nodes and links', async ({
    request,
  }, testInfo) => {
    test.setTimeout(120000);
    const endpoint = '/drugs-interaction/graph-fe-user-year';
    const url = asksamV2Url(endpoint);
    const response = await fetchWithGatewayRetry(
      request,
      url,
      {
        method: 'POST',
        headers: asksamV2Headers({ 'Content-Type': 'application/json' }),
        data: { user_id: ASKSAM_V2.userId },
      },
      { retries: 2, retryDelayMs: 5000 },
    );
    const body = await readResponseBody(response);
    await attachApiProof(testInfo, { endpoint, method: 'POST', status: response.status(), body, url });
    expect(response.status()).toBe(200);
    const record = body as {
      nodes?: Array<Record<string, unknown>>;
      links?: Array<Record<string, unknown>>;
    };
    expect(Array.isArray(record.nodes)).toBe(true);
    expect((record.nodes || []).length).toBeGreaterThan(0);
    expect(Array.isArray(record.links)).toBe(true);
    const node = record.nodes![0];
    expect(node).toMatchObject({
      id: expect.anything(),
      name: expect.anything(),
      colour: expect.anything(),
      description: expect.anything(),
    });
    if ((record.links || []).length > 0) {
      const link = record.links![0];
      expect(link).toMatchObject({
        source: expect.anything(),
        target: expect.anything(),
        name: expect.anything(),
      });
    }
  });

  test('TC_V2_09 - GET /org-documents/{organization_id} returns shape', async ({
    request,
  }, testInfo) => {
    const endpoint = `/org-documents/${ASKSAM_V2.organizationId}`;
    const url = asksamV2Url(endpoint);
    const response = await request.get(url, { headers: asksamV2Headers() });
    const body = await readResponseBody(response);
    await attachApiProof(testInfo, { endpoint, method: 'GET', status: response.status(), body, url });
    expect(response.status()).toBe(200);
    const record = body as {
      organization_id?: string;
      documents?: unknown[];
      total_records?: number;
    };
    expect(record.organization_id).toBe(ASKSAM_V2.organizationId);
    expect(Array.isArray(record.documents)).toBe(true);
    expect(typeof record.total_records).toBe('number');
  });

  test('TC_V2_10 - POST /generate-note-fields (one field, persist false) NDJSON', async ({
    request,
  }, testInfo) => {
    test.skip(!ASKSAM_V2.includeAi, 'ASKSAM_V2_INCLUDE_AI=false');
    test.skip(
      isAsksamV2ClinicHoursIst(),
      'Skip AI generate during Sydney clinic hours (03:30–11:30 IST)',
    );
    test.setTimeout(200000);

    const endpoint = '/generate-note-fields';
    const url = asksamV2Url(endpoint);
    const payload = buildGenerateNoteFieldsSmokePayload();
    const response = await fetchWithGatewayRetry(
      request,
      url,
      {
        method: 'POST',
        headers: asksamV2Headers({ 'Content-Type': 'application/json', Accept: 'application/x-ndjson, application/json' }),
        data: payload,
        timeout: 180000,
      },
      { retries: 1, retryDelayMs: 60000 },
    );

    const rawText = await response.text();
    let line: unknown = null;
    try {
      line = parseFirstNdjsonLine(rawText);
    } catch {
      line = rawText.slice(0, 2000);
    }

    await attachApiProof(testInfo, {
      endpoint,
      method: 'POST',
      status: response.status(),
      body: line,
      url,
      extra: { persist: false, fields: ['chief_complaints'] },
    });

    expect(response.status()).toBe(200);
    const contentType = response.headers()['content-type'] || '';
    expect(contentType).toMatch(/ndjson|json/i);

    expect(line && typeof line === 'object').toBe(true);
    const record = line as Record<string, unknown>;
    expect(record.field).toBe('chief_complaints');
    expect(record.section).toBe('progress_note');
    expect(record.done).toBe(1);
    expect(record.total).toBe(1);
    // persist:false → nothing written; API may send "" or omit `stored`
    expect(record.stored === '' || record.stored == null).toBe(true);

    if (record.value == null) {
      throw new Error(`generate-note-fields failed: ${String(record.error || 'value is null')}`);
    }
    const value = record.value as { text?: string };
    expect(value?.text && String(value.text).trim().length > 0).toBe(true);
  });
});
