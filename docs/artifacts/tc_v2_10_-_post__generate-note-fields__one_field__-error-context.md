# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: asksam-v2-api-smoke.spec.ts >> AskSam v2 API smoke (read-only) >> TC_V2_10 - POST /generate-note-fields (one field, persist false) NDJSON
- Location: tests/asksam-v2-api-smoke.spec.ts:176:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: ""
Received: undefined
```

# Test source

```ts
  128 |       { retries: 2, retryDelayMs: 5000 },
  129 |     );
  130 |     const body = await readResponseBody(response);
  131 |     await attachApiProof(testInfo, { endpoint, method: 'POST', status: response.status(), body, url });
  132 |     expect(response.status()).toBe(200);
  133 |     const record = body as {
  134 |       nodes?: Array<Record<string, unknown>>;
  135 |       links?: Array<Record<string, unknown>>;
  136 |     };
  137 |     expect(Array.isArray(record.nodes)).toBe(true);
  138 |     expect((record.nodes || []).length).toBeGreaterThan(0);
  139 |     expect(Array.isArray(record.links)).toBe(true);
  140 |     const node = record.nodes![0];
  141 |     expect(node).toMatchObject({
  142 |       id: expect.anything(),
  143 |       name: expect.anything(),
  144 |       colour: expect.anything(),
  145 |       description: expect.anything(),
  146 |     });
  147 |     if ((record.links || []).length > 0) {
  148 |       const link = record.links![0];
  149 |       expect(link).toMatchObject({
  150 |         source: expect.anything(),
  151 |         target: expect.anything(),
  152 |         name: expect.anything(),
  153 |       });
  154 |     }
  155 |   });
  156 | 
  157 |   test('TC_V2_09 - GET /org-documents/{organization_id} returns shape', async ({
  158 |     request,
  159 |   }, testInfo) => {
  160 |     const endpoint = `/org-documents/${ASKSAM_V2.organizationId}`;
  161 |     const url = asksamV2Url(endpoint);
  162 |     const response = await request.get(url, { headers: asksamV2Headers() });
  163 |     const body = await readResponseBody(response);
  164 |     await attachApiProof(testInfo, { endpoint, method: 'GET', status: response.status(), body, url });
  165 |     expect(response.status()).toBe(200);
  166 |     const record = body as {
  167 |       organization_id?: string;
  168 |       documents?: unknown[];
  169 |       total_records?: number;
  170 |     };
  171 |     expect(record.organization_id).toBe(ASKSAM_V2.organizationId);
  172 |     expect(Array.isArray(record.documents)).toBe(true);
  173 |     expect(typeof record.total_records).toBe('number');
  174 |   });
  175 | 
  176 |   test('TC_V2_10 - POST /generate-note-fields (one field, persist false) NDJSON', async ({
  177 |     request,
  178 |   }, testInfo) => {
  179 |     test.skip(!ASKSAM_V2.includeAi, 'ASKSAM_V2_INCLUDE_AI=false');
  180 |     test.skip(
  181 |       isAsksamV2ClinicHoursIst(),
  182 |       'Skip AI generate during Sydney clinic hours (03:30–11:30 IST)',
  183 |     );
  184 |     test.setTimeout(200000);
  185 | 
  186 |     const endpoint = '/generate-note-fields';
  187 |     const url = asksamV2Url(endpoint);
  188 |     const payload = buildGenerateNoteFieldsSmokePayload();
  189 |     const response = await fetchWithGatewayRetry(
  190 |       request,
  191 |       url,
  192 |       {
  193 |         method: 'POST',
  194 |         headers: asksamV2Headers({ 'Content-Type': 'application/json', Accept: 'application/x-ndjson, application/json' }),
  195 |         data: payload,
  196 |         timeout: 180000,
  197 |       },
  198 |       { retries: 1, retryDelayMs: 60000 },
  199 |     );
  200 | 
  201 |     const rawText = await response.text();
  202 |     let line: unknown = null;
  203 |     try {
  204 |       line = parseFirstNdjsonLine(rawText);
  205 |     } catch {
  206 |       line = rawText.slice(0, 2000);
  207 |     }
  208 | 
  209 |     await attachApiProof(testInfo, {
  210 |       endpoint,
  211 |       method: 'POST',
  212 |       status: response.status(),
  213 |       body: line,
  214 |       url,
  215 |       extra: { persist: false, fields: ['chief_complaints'] },
  216 |     });
  217 | 
  218 |     expect(response.status()).toBe(200);
  219 |     const contentType = response.headers()['content-type'] || '';
  220 |     expect(contentType).toMatch(/ndjson|json/i);
  221 | 
  222 |     expect(line && typeof line === 'object').toBe(true);
  223 |     const record = line as Record<string, unknown>;
  224 |     expect(record.field).toBe('chief_complaints');
  225 |     expect(record.section).toBe('progress_note');
  226 |     expect(record.done).toBe(1);
  227 |     expect(record.total).toBe(1);
> 228 |     expect(record.stored).toBe('');
      |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  229 | 
  230 |     if (record.value == null) {
  231 |       expect(record.error, `field failed: ${String(record.error || 'unknown')}`).toBeFalsy();
  232 |     }
  233 |     const value = record.value as { text?: string } | null;
  234 |     expect(value?.text && String(value.text).trim().length > 0).toBe(true);
  235 |   });
  236 | });
  237 | 
```