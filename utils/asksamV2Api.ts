import * as dotenv from 'dotenv';

dotenv.config();

/** AskSam v2 (asksam.uwc.world) — read-only automation config. */
export const ASKSAM_V2 = {
  baseUrl: (process.env.ASKSAM_V2_BASE_URL || 'https://asksam.uwc.world').replace(/\/$/, ''),
  /** Empty until backend enables auth; then set ASKSAM_V2_API_KEY in .env. */
  apiKey: (process.env.ASKSAM_V2_API_KEY || '').trim(),
  userId: process.env.ASKSAM_V2_USER_ID || '714823',
  sessionId: process.env.ASKSAM_V2_SESSION_ID || '6adb50e45724764f6fbb1005',
  registeredId: process.env.ASKSAM_V2_REGISTERED_ID || '6adb50e45724764f6fbb1005',
  organizationId: process.env.ASKSAM_V2_ORGANIZATION_ID || 'asksam',
  /** Set ASKSAM_V2_INCLUDE_AI=false to skip generate-note-fields. */
  includeAi: process.env.ASKSAM_V2_INCLUDE_AI !== 'false',
};

export function asksamV2Url(path: string): string {
  return `${ASKSAM_V2.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Headers for v2 calls. Sends x-api-key only when configured (ready for future auth). */
export function asksamV2Headers(extra?: Record<string, string>): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: 'application/json',
    ...extra,
  };
  if (ASKSAM_V2.apiKey) {
    headers['x-api-key'] = ASKSAM_V2.apiKey;
  }
  return headers;
}

/**
 * Sydney clinic hours in IST: 03:30–11:30.
 * AI generate-note-fields should run outside that window.
 */
export function isAsksamV2ClinicHoursIst(now = new Date()): boolean {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now);
  const hour = Number(parts.find((p) => p.type === 'hour')?.value || '0');
  const minute = Number(parts.find((p) => p.type === 'minute')?.value || '0');
  const mins = hour * 60 + minute;
  return mins >= 3 * 60 + 30 && mins < 11 * 60 + 30;
}

export function buildGenerateNoteFieldsSmokePayload() {
  return {
    user_id: ASKSAM_V2.userId,
    headers: {
      user_id: ASKSAM_V2.userId,
      session_id: ASKSAM_V2.sessionId,
      registered_id: ASKSAM_V2.registeredId,
    },
    fields: ['chief_complaints'],
    persist: false,
  };
}

/** Parse NDJSON body; returns the first JSON object line. */
export function parseFirstNdjsonLine(text: string): unknown {
  const line = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .find((l) => l.length > 0);
  if (!line) return null;
  return JSON.parse(line);
}
