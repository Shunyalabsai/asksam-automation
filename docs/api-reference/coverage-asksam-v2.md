# AskSam v2 automation coverage

Base: `https://asksam.uwc.world`  
Source: Ahiri Mukherjee guidance (Oct 2026) + `asksam-v2-api-reference-2026-10-26.md`

**Scheduled monitoring going forward = this pack only** (`npm run test:ds-api` / cron).  
Old RAG / Clinical Notes / Assistant / ASR smokes are off cron (manual scripts only if needed).

## Daily / cron (read-only)

| ID | Method | Endpoint | Notes |
|----|--------|----------|-------|
| TC_V2_01 | GET | `/health` | Expect `Health: Ok` |
| TC_V2_02 | GET | `/redis/health` | Expect healthy |
| TC_V2_03 | GET | `/vectorstore/health` | Expect `Health: Ok` |
| TC_V2_04 | GET | `/health/stores` | neo4j/mongo/redis `ok: true` |
| TC_V2_05 | GET | `/note-fields/manifest` | `total: 53`, 4 sections |
| TC_V2_06 | GET | `/clinical-note/{session_id}` | Approved test session; assert `found` |
| TC_V2_07 | GET | `/chat-history` | Message shape only |
| TC_V2_08 | POST | `/drugs-interaction/graph-fe-user-year` | `{"user_id":"714823"}` |
| TC_V2_09 | GET | `/org-documents/asksam` | Shape only (count may be 0) |
| TC_V2_10 | POST | `/generate-note-fields` | One field, `persist:false`; skip 03:30–11:30 IST |

Auth: none today. `ASKSAM_V2_API_KEY` / `x-api-key` ready for later (empty = omit header).

## Explicitly not automated on prod (writes)

`/insert-into-context`, `/insert-session-doc`, `/insert-into-context-stella`, `/chat`, `/delete-chat`, `/gen-master-patient-summary`, `/gen-session-note-summary`, `/clinical-note/submit`, `/note-field/feedback`, `/generate-graph-data`, org-document mutate/delete, `/generate-note-fields` with `persist:true`, `/gen-chat` (placeholder).

## Still separate packs

- AskSam v1: `rag.uwc.world` (existing RAG smokes)
- Stella / on-append / ASR: existing projects
