import type { APIResponse, TestInfo } from '@playwright/test';
import { formatApiProof } from './ragApi';

const MAX_BODY_CHARS = 8000;

function truncateBody(text: string): string {
  if (text.length <= MAX_BODY_CHARS) return text;
  return `${text.substring(0, MAX_BODY_CHARS)}... [truncated ${text.length - MAX_BODY_CHARS} chars]`;
}

/** Read response body as JSON when possible; otherwise return raw text (e.g. 502 HTML). */
export async function readResponseBody(response: APIResponse): Promise<unknown> {
  const text = await response.text();
  if (!text) return '';

  const contentType = response.headers()['content-type'] || '';
  const trimmed = text.trim();
  const looksJson =
    contentType.includes('application/json') ||
    trimmed.startsWith('{') ||
    trimmed.startsWith('[');

  if (looksJson) {
    try {
      return JSON.parse(text);
    } catch {
      return truncateBody(text);
    }
  }

  return truncateBody(text);
}

export type ApiProofInput = {
  endpoint: string;
  method: string;
  status: number;
  body: unknown;
  url?: string;
  extra?: Record<string, unknown>;
};

/** Attach API response proof before assertions so pass and fail both retain the payload. */
export async function attachApiProof(testInfo: TestInfo, opts: ApiProofInput): Promise<void> {
  const { extra, ...formatOpts } = opts;
  const proof = { ...formatApiProof(formatOpts), ...extra };
  await testInfo.attach('api-response', {
    body: JSON.stringify(proof, null, 2),
    contentType: 'application/json',
  });
}

const GATEWAY_RETRY_STATUSES = new Set([502, 503, 504]);

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Retry transient gateway / timeout failures (502/503/504) a few times before failing. */
export async function fetchWithGatewayRetry(
  request: { fetch: (url: string, options?: Record<string, unknown>) => Promise<APIResponse> },
  url: string,
  options: Record<string, unknown> = {},
  opts?: { retries?: number; retryDelayMs?: number },
): Promise<APIResponse> {
  const retries = opts?.retries ?? 2;
  const retryDelayMs = opts?.retryDelayMs ?? 3000;
  let lastError: unknown;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await request.fetch(url, options);
      if (!GATEWAY_RETRY_STATUSES.has(response.status()) || attempt === retries) {
        return response;
      }
      await response.dispose().catch(() => {});
      await sleep(retryDelayMs * (attempt + 1));
    } catch (error) {
      lastError = error;
      const message = error instanceof Error ? error.message : String(error);
      const isTimeout = /timeout|timed out|ECONNRESET|ECONNREFUSED|socket hang up/i.test(message);
      if (!isTimeout || attempt === retries) {
        throw error;
      }
      await sleep(retryDelayMs * (attempt + 1));
    }
  }

  throw lastError instanceof Error ? lastError : new Error(String(lastError));
}
