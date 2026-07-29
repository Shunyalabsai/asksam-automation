# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: clinical-notes-api-smoke.spec.ts >> Clinical Notes API smoke >> TC_CN_04 - GET static / countries
- Location: tests/clinical-notes-api-smoke.spec.ts:51:9

# Error details

```
TimeoutError: apiRequestContext.fetch: Timeout 120000ms exceeded.
Call log:
  - → GET https://session-note.uwc.world/static/countries
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - sec-ch-ua-platform: "Windows"
    - referer: https://copilot.asksam.com.au/
    - accept-language: en-US
    - sec-ch-ua: "Not/A)Brand";v="99", "Chromium";v="148"
    - sec-ch-ua-mobile: ?0
    - content-type: application/json
    - authorization: Bearer eyJhbGciOiJSUzI1NiIsImNhdCI6ImNsX0I3ZDRQRDExMUFBQSIsImtpZCI6Imluc18ydk9pZVpHanJhQXVKckJZMVhlRzI3cFJLUm4iLCJvaWF0IjoxNzgxNTExMTA1LCJ0eXAiOiJKV1QifQ.eyJhenAiOiJodHRwczovL2NvcGlsb3QuYXNrc2FtLmNvbS5hdSIsImNyZWF0ZWRfYXQiOjE3NDc3OTQwMTcsImVtYWlsIjoiZS5jbGluaWNpYW50ZXN0dXNlckBhc2tzYW0uY29tLmF1IiwiZXhwIjoxNzgxNTExMTY1LCJleHRlcm5hbF9pZCI6IjE1Mjg1MyIsImZpcnN0X25hbWUiOiJBbnRob255IiwiZnZhIjpbMCwtMV0sImlhdCI6MTc4MTUxMTEwNSwiaW1hZ2VfdXJsIjoiaHR0cHM6Ly9pbWcuY2xlcmsuY29tL2V5SjBlWEJsSWpvaWNISnZlSGtpTENKemNtTWlPaUpvZEhSd2N6b3ZMMmx0WVdkbGN5NWpiR1Z5YXk1a1pYWXZkWEJzYjJGa1pXUXZhVzFuWHpNMVVGWm9NSGczUWsxeVdGcEdZM0E0VlVKV2NGSk9TVFJMWVNKOSIsImlzcyI6Imh0dHBzOi8vY2xlcmsuYXNrc2FtLmNvbS5hdSIsImp0aSI6IjI2MjgwYjkxMGFlM2Y0MjZkYjhlIiwibGFzdF9uYW1lIjoiU21pdGgiLCJsYXN0X3NpZ25faW5fYXQiOjE3ODE1MTEwNTUsIm5iZiI6MTc4MTUxMTA5NSwicGhvbmUiOiIrNjE0MTM4MDEzODQiLCJwdWJsaWNfbWV0YWRhdGEiOnsiYWRtaW4iOnRydWUsImRpc2NsYWltZXJfYWNjZXB0ZWQiOnRydWV9LCJzaWQiOiJzZXNzXzNGQUhmUElSSmxnMFBYdk9SemwzTW9mbXBEVCIsInN0cyI6ImFjdGl2ZSIsInN1YiI6InVzZXJfMnhPMHNGcFVxYW5ZVFh4d1FvY2l3cVVTNzNSIiwidW5zYWZlX21ldGFkYXRhIjp7ImNvdW50cnkiOiJBdXN0cmFsaWEiLCJ0aW1lWm9uZSI6IkF1c3RyYWxpYS9TeWRuZXkiLCJ0b3VyR3VpZCI6eyJmbGFnIjp0cnVlLCJzdGF0dXMiOnsiY3JlYXRlQ2xpbmljYWxOb3RlIjpmYWxzZSwiY3JlYXRlUGF0aWVudCI6dHJ1ZSwiZ3JlZW5CdXR0b24iOnRydWUsIm1pY0J1dHRvbiI6dHJ1ZSwicmFpc2VUaWNrZXQiOnRydWUsInNpZGVNZW51IjpmYWxzZX19fSwidXBkYXRlZF9hdCI6MTc4MTUxMTA1NSwidXNlcl9pZCI6InVzZXJfMnhPMHNGcFVxYW5ZVFh4d1FvY2l3cVVTNzNSIiwidiI6Mn0.rxsHhKvo11r9D_-jC0aeNFuh9gZDwnCJRduo8CShppeCCJhcx9WikEARH9RDbLvUHBUggez9jz-eJFOylnVipSuHWHwep6Ptn9yVCX9EY8Sn-RpQ3O4n235uMobDa5EuA186YlJMqArOlSsOCxt2uNzIrfGDx8wUXiX7OwORc29G7276F60rrPPaLzq3VPBliNsXrR1IKj3plWz7L0LxqpwfYecefBFSCjcPOwZwDxiD17FtL0DCgJSX2zkZQGcsFGN6Bb3oi0UMoX_HiWFkz1Gqa5trllck7dsYn82nmb2oX-YZ5_5HbyCImchYh-erRZGqHYHlOpQ417FxSd7U_w
    - x-api-key: 76d802e426a2cb28f3760c8c8f669983f67ed775

```

# Test source

```ts
  1  | import type { APIResponse, TestInfo } from '@playwright/test';
  2  | import { formatApiProof } from './ragApi';
  3  | 
  4  | const MAX_BODY_CHARS = 8000;
  5  | 
  6  | function truncateBody(text: string): string {
  7  |   if (text.length <= MAX_BODY_CHARS) return text;
  8  |   return `${text.substring(0, MAX_BODY_CHARS)}... [truncated ${text.length - MAX_BODY_CHARS} chars]`;
  9  | }
  10 | 
  11 | /** Read response body as JSON when possible; otherwise return raw text (e.g. 502 HTML). */
  12 | export async function readResponseBody(response: APIResponse): Promise<unknown> {
  13 |   const text = await response.text();
  14 |   if (!text) return '';
  15 | 
  16 |   const contentType = response.headers()['content-type'] || '';
  17 |   const trimmed = text.trim();
  18 |   const looksJson =
  19 |     contentType.includes('application/json') ||
  20 |     trimmed.startsWith('{') ||
  21 |     trimmed.startsWith('[');
  22 | 
  23 |   if (looksJson) {
  24 |     try {
  25 |       return JSON.parse(text);
  26 |     } catch {
  27 |       return truncateBody(text);
  28 |     }
  29 |   }
  30 | 
  31 |   return truncateBody(text);
  32 | }
  33 | 
  34 | export type ApiProofInput = {
  35 |   endpoint: string;
  36 |   method: string;
  37 |   status: number;
  38 |   body: unknown;
  39 |   url?: string;
  40 |   extra?: Record<string, unknown>;
  41 | };
  42 | 
  43 | /** Attach API response proof before assertions so pass and fail both retain the payload. */
  44 | export async function attachApiProof(testInfo: TestInfo, opts: ApiProofInput): Promise<void> {
  45 |   const { extra, ...formatOpts } = opts;
  46 |   const proof = { ...formatApiProof(formatOpts), ...extra };
  47 |   await testInfo.attach('api-response', {
  48 |     body: JSON.stringify(proof, null, 2),
  49 |     contentType: 'application/json',
  50 |   });
  51 | }
  52 | 
  53 | const GATEWAY_RETRY_STATUSES = new Set([502, 503, 504]);
  54 | 
  55 | function sleep(ms: number) {
  56 |   return new Promise((resolve) => setTimeout(resolve, ms));
  57 | }
  58 | 
  59 | /** Retry transient gateway / timeout failures (502/503/504) a few times before failing. */
  60 | export async function fetchWithGatewayRetry(
  61 |   request: { fetch: (url: string, options?: Record<string, unknown>) => Promise<APIResponse> },
  62 |   url: string,
  63 |   options: Record<string, unknown> = {},
  64 |   opts?: { retries?: number; retryDelayMs?: number },
  65 | ): Promise<APIResponse> {
  66 |   const retries = opts?.retries ?? 2;
  67 |   const retryDelayMs = opts?.retryDelayMs ?? 3000;
  68 |   let lastError: unknown;
  69 | 
  70 |   for (let attempt = 0; attempt <= retries; attempt++) {
  71 |     try {
> 72 |       const response = await request.fetch(url, options);
     |                                      ^ TimeoutError: apiRequestContext.fetch: Timeout 120000ms exceeded.
  73 |       if (!GATEWAY_RETRY_STATUSES.has(response.status()) || attempt === retries) {
  74 |         return response;
  75 |       }
  76 |       await response.dispose().catch(() => {});
  77 |       await sleep(retryDelayMs * (attempt + 1));
  78 |     } catch (error) {
  79 |       lastError = error;
  80 |       const message = error instanceof Error ? error.message : String(error);
  81 |       const isTimeout = /timeout|timed out|ECONNRESET|ECONNREFUSED|socket hang up/i.test(message);
  82 |       if (!isTimeout || attempt === retries) {
  83 |         throw error;
  84 |       }
  85 |       await sleep(retryDelayMs * (attempt + 1));
  86 |     }
  87 |   }
  88 | 
  89 |   throw lastError instanceof Error ? lastError : new Error(String(lastError));
  90 | }
  91 | 
```