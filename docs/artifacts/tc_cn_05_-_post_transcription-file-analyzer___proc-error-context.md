# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: clinical-notes-api-smoke.spec.ts >> Clinical Notes API smoke >> TC_CN_05 - POST transcription-file-analyzer / process-document
- Location: tests/clinical-notes-api-smoke.spec.ts:57:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 500
```

# Test source

```ts
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
  25  | /**
  26  |  * Temporarily disabled session-note smokes (re-enable in fixtures/clinical-notes-apis.json):
  27  |  *   TC_CN_03 — GET jwt-clinicalnotes/list-clients  → set "smoke": true
  28  |  *   TC_CN_04 — GET static/countries                 → set "smoke": true
  29  |  * Reason: session-note.uwc.world timing out (120s+) in prod.
  30  |  */
  31  | test.describe('Clinical Notes API smoke', () => {
  32  |   const manifest = loadClinicalNotesManifest();
  33  |   const smokeEndpoints = getSmokeEndpoints(manifest);
  34  |   const dsApiHeaders = loadDsApiHeaders();
  35  | 
  36  |   if (Object.keys(dsApiHeaders).length === 0) {
  37  |     test('TC_CN_00 - auth headers pending', async () => {
  38  |       test.skip(
  39  |         true,
  40  |         `Missing ${DS_API_HEADERS_PATH} — scp from discovery machine or run: npm run discover:clinical-notes-apis`,
  41  |       );
  42  |     });
  43  |     return;
  44  |   }
  45  | 
  46  |   if (smokeEndpoints.length === 0) {
  47  |     test('TC_CN_00 - manifest pending discovery', async () => {
  48  |       test.skip(
  49  |         true,
  50  |         'No smoke endpoints in fixtures/clinical-notes-apis.json — run: npm run discover:clinical-notes-apis',
  51  |       );
  52  |     });
  53  |     return;
  54  |   }
  55  | 
  56  |   for (const endpoint of smokeEndpoints) {
  57  |     test(`${endpoint.id} - ${endpoint.method} ${endpoint.name}`, async ({ request }, testInfo) => {
  58  |       // GET session-note endpoints can be slow under load; POSTs (RAG insert) need more headroom.
  59  |       const timeoutMs = endpoint.method === 'POST' ? 180000 : 120000;
  60  |       // Retries for gateway timeouts add wall time beyond a single request.
  61  |       test.setTimeout(timeoutMs * 3 + 30000);
  62  | 
  63  |       let targetUrl: string;
  64  |       try {
  65  |         targetUrl = clinicalNotesUrl(manifest, endpoint);
  66  |       } catch (error) {
  67  |         test.skip(true, (error as Error).message);
  68  |         return;
  69  |       }
  70  | 
  71  |       // Smoke: lighter list-clients page size reduces timeout risk on session-note.
  72  |       if (endpoint.id === 'TC_CN_03') {
  73  |         targetUrl = targetUrl.replace(/([?&]count=)\d+/i, '$120');
  74  |       }
  75  | 
  76  |       const headers = resolveEndpointHeaders(endpoint);
  77  | 
  78  |       const options: Record<string, unknown> = {
  79  |         method: endpoint.method,
  80  |         headers,
  81  |         timeout: timeoutMs,
  82  |       };
  83  | 
  84  |       if (endpoint.method !== 'GET' && endpoint.method !== 'HEAD' && endpoint.samplePayload !== undefined) {
  85  |         options.data =
  86  |           endpoint.id === 'TC_CN_02'
  87  |             ? slimInsertIntoContextPayload(endpoint.samplePayload)
  88  |             : endpoint.samplePayload;
  89  |       }
  90  | 
  91  |       const response = await fetchWithGatewayRetry(request, targetUrl, options, {
  92  |         retries: 2,
  93  |         retryDelayMs: 4000,
  94  |       });
  95  |       const body = await readResponseBody(response);
  96  |       const pathOrUrl = endpoint.fullUrl || endpoint.path;
  97  | 
  98  |       await attachApiProof(testInfo, {
  99  |         endpoint: pathOrUrl,
  100 |         method: endpoint.method,
  101 |         status: response.status(),
  102 |         body,
  103 |         url: targetUrl,
  104 |         extra: { id: endpoint.id, name: endpoint.name },
  105 |       });
  106 | 
> 107 |       expect(response.status()).toBe(endpoint.expectedStatus);
      |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  108 |       assertBody(endpoint, body);
  109 |     });
  110 |   }
  111 | });
  112 | 
  113 | /** Keep insert-into-context smoke payload small — large clinical text often triggers RAG nginx 504. */
  114 | function slimInsertIntoContextPayload(sample: unknown): unknown {
  115 |   if (!sample || typeof sample !== 'object') return sample;
  116 |   const record = sample as Record<string, unknown>;
  117 |   return {
  118 |     ...record,
  119 |     text: 'Automation smoke ping for insert-into-context.',
  120 |   };
  121 | }
  122 | 
```