# AskSam API: endpoints and request payloads

**Base URL:** `https://asksam.uwc.world`

All request bodies are JSON (`Content-Type: application/json`). In the field lists, `*` marks a required key. A required key typed "string or null" must be present, even when its value is `null`.

## Shared objects

**Headers**
```json
{"user_id": "714838", "session_id": "6adddef85724764f6fbb1019", "registered_id": "6adddef85724764f6fbb1019"}
```
`user_id*` (patient id), `session_id*` (consultation id), `registered_id*` (appointment/registration id)

**OptionalChatHeaders**: the same three keys, all optional.

**MasterPatientMetaData**: all keys optional.
```json
{"patient_name": "Test Patient", "dob": "14/01/1995", "age": "31", "sex": "Female"}
```

**DataLevel**: `"organization"` | `"country"` | `"global"`

**Note field envelope**: as returned for a field, and as posted inside `session_data`.
```json
{"text": "- Headache for three days.", "options": [], "is_edited": "true", "accepted": "false",
 "dislike": "false", "regenerate": "false", "display": "true", "feedback": "", "sources": [],
 "timestamp": "2026-10-26T00:00:00Z"}
```

---

## Health

| Method and path | Request | Response |
|---|---|---|
| `GET /health` | none | `{"Health": "Ok"}` |
| `GET /redis/health` | none | `{"status": "healthy", "detail": "Redis is running"}` |
| `GET /vectorstore/health` | none | `{"Health": "Ok"}` |
| `GET /health/stores` | none | `{"neo4j": {"ok": true, "nodes": 0}, "mongo": {"ok": true, "collections": []}, "redis": {"ok": true, "keys": 0}}` |

---

## Clinical note fields

### POST /generate-note-fields
```json
{
  "user_id": "714838",
  "headers": {"user_id": "714838", "session_id": "6adddef85724764f6fbb1019", "registered_id": "6adddef85724764f6fbb1019"},
  "time_stamp": "2026-10-26T10:00:00Z",
  "fields": ["chief_complaints"],
  "temperature": 0.0,
  "persist": true
}
```

| Field | Type | Required | Default |
|---|---|---|---|
| `user_id` | string | yes | |
| `headers` | Headers | yes | |
| `time_stamp` | string or null | no | `null` |
| `fields` | array of field names, or null | no | `null` (all fields) |
| `temperature` | number | no | `0.0` |
| `persist` | boolean | no | `true` |

**Response:** a streamed NDJSON body, one JSON object per line, one line per field:
```json
{"user_id": "714838", "session_id": "6adddef85724764f6fbb1019", "section": "progress_note",
 "field": "chief_complaints", "value": {"text": "...", "...": "..."}, "done": 1, "total": 53,
 "time_taken": 7.2, "stored": "written"}
```
A field that fails has `"value": null` and an `"error"` string.

**Field names** (also returned by `GET /note-fields/manifest`):
- `progress_note`: chief_complaints, history_of_present_illness_hpi, session_summary, advise, future_treatment_plan, homework_assigned
- `case_history`: history_of_self_harm_aggression, history_of_trauma, history_of_contagious_medical_conditions, medication_history, hospitalization_history, surgical_history_shx, histopathological_pathological_history, allergy_history, nutritional_history, genetics, languages_spoken, lifestyle_history, developmental_history, marital_status, employment_status, marital_functioning, social_functioning, academic_functioning, substance_use_issues, psychosocial_history, family_history_of_mental_illness_or_substance_abuse_issues, medical_history
- `prescription`: vitals, mental_status_exam_results, physical_exam_results, histopathological_pathological_diagnostics, imaging_and_radiological_diagnostics, biochemical_diagnostics, microbiological_diagnostics, cardiological_diagnostics, pulmonary_diagnostics, gastro_intestinal_hepatological_diagnostics, neurological_diagnostics, nephrological_diagnostics, urological_diagnostics, ophthalmological_diagnostics, dermatological_diagnostics, reproductive_diagnostics, ent_diagnostics, endocrinological_diagnostics, orthopedic_diagnostics, pediatric_diagnostics
- `follow_up_summary`: treatment_plan_progress, assessment_summary, worksheet_journal_summary, stella_sos_summary, compliance

### GET /clinical-note/{session_id}
- **Path parameter:** `session_id*` (string)
- **Response, note found:**
  ```json
  {"session_id": "6adddef85724764f6fbb1019", "found": true, "filled_fields": 17, "submitted": false,
   "sections": {"progress_note": {"chief_complaints": {"text": "...", "...": "..."}}}}
  ```
- **Response, no note:** `{"session_id": "...", "found": false, "sections": {}}`
- **Response, store unavailable:** `{"session_id": "...", "found": false, "store_unavailable": true, "sections": {}}`

### POST /clinical-note/submit
```json
{"session_id": "6adddef85724764f6fbb1019", "submitted": true}
```
`session_id*` (string), `submitted` (boolean, default `true`)
- **Response:** `{"stored": "written", "session_id": "...", "submitted": true}`
- **Store unavailable:** `{"stored": "unavailable", "detail": "note store unreachable", "retry": true}`

### POST /note-field/feedback
```json
{"session_id": "6adddef85724764f6fbb1019", "section": "progress_note", "field": "chief_complaints",
 "accepted": true, "dislike": false, "feedback": "Clear and complete"}
```
`session_id*`, `section*`, `field*` (strings); `accepted` (boolean or null), `dislike` (boolean or null), `feedback` (string or null)
- **Response:** `{"stored": "written", "session_id": "...", "section": "...", "field": "..."}`
- **Rejected:** `{"stored": "rejected", "detail": "..."}`
- **Store unavailable:** `{"stored": "unavailable", "detail": "note store unreachable", "retry": true}`

### GET /note-fields/manifest
- **Request:** none
- **Response:** `{"sections": {"progress_note": ["chief_complaints", "..."], "...": []}, "options": {"<field>": ["<option>", "..."]}, "total": 53}`

---

## Summaries

**Summary** body, used by all four endpoints in this section:
```json
{
  "user_id": "714838",
  "classify": "summary",
  "time_stamp": "2026-10-26T10:00:00Z",
  "headers": {"user_id": "714838", "session_id": "6adddef85724764f6fbb1019", "registered_id": "6adddef85724764f6fbb1019"},
  "max_tokens": 512,
  "temperature": 0,
  "meta_data": {"patient_name": "Test Patient", "dob": "14/01/1995", "age": "31", "sex": "Female"}
}
```
- **Required:** `user_id*` (string), `classify*` (string), `time_stamp*` (string or null), `headers*` (Headers)
- **Optional:** `max_tokens` (integer, default 512), `temperature` (number, default 0), `meta_data` (MasterPatientMetaData)

| Method and path | Query parameters | Response |
|---|---|---|
| `POST /gen-master-patient-summary` | `regenerate` (boolean, default `false`) | summary envelope |
| `POST /gen-session-note-summary` | `regenerate` (boolean, default `false`) | summary envelope |
| `POST /gen-summary` | none | summary envelope |
| `POST /summary` | none | summary envelope (the same as `/gen-summary`) |

**Summary envelope:**
```json
{"response_id": "714838_6adddef85724764f6fbb1019", "time_stamp": "2026-10-26T10:00:00Z", "user_id": "714838",
 "headers": {"user_id": "714838", "session_id": "6adddef85724764f6fbb1019", "registered_id": "6adddef85724764f6fbb1019"},
 "response": {"summary": "..."}}
```

---

## Clinical assistant (chat)

### POST /chat
```json
{
  "question": "Summarise the latest consultation",
  "user_id": "714838",
  "headers": {"user_id": "714838", "session_id": "6adddef85724764f6fbb1019", "registered_id": "6adddef85724764f6fbb1019"},
  "use_user_context": true,
  "time_stamp": "2026-10-26T10:00:00Z",
  "country": "Australia",
  "organization_id": null,
  "classify": null,
  "document_template": null,
  "template_document_id": null,
  "max_tokens": 512,
  "temperature": 0
}
```
- **Required:** `question*` (string).
- **Optional:**
  - `user_id`, `classify`, `organization_id`, `time_stamp`, `document_template`, `template_document_id`: string or null;
  - `headers`: OptionalChatHeaders;
  - `country`: string, default `"India"`;
  - `use_user_context`: boolean, default `true`;
  - `max_tokens`: integer, default 512;
  - `temperature`: number, default 0.
- **Optional request headers:** `x-asksam-trace: 1` (adds `"trace"` to the response), `Origin`, `Referer`.
- **Response:** `{"response": "...", "citations": [{"source_url": "...", "source_type": "...", "...": "..."}]}`. The `citations` key is present only when there are citations.

### GET /chat-history
- **Query parameters:** `user_id*` (string), `session_id*` (string)
- **Response:** `{"user_id": "...", "session_id": "...", "messages": [{"role": "human", "content": "...", "timestamp": "..."}, {"role": "ai", "content": "...", "timestamp": "...", "citations": []}]}`

### DELETE /delete-chat
```json
{"user_id": "714838", "session_id": "6adddef85724764f6fbb1019", "raw": false, "current": false, "history": false}
```
All keys optional: `user_id` and `session_id` (string or null); `raw`, `current` and `history` (boolean, default `false`).
- **Response:** `{"message": "Chat Deleted"}`, or `{"message": "Invalid ID"}`

### POST /chat-graph-only
```json
{"prompt_header": "", "question": "Drugs that interact with warfarin", "few_shot_examples": "", "max_tokens": 512, "temperature": 0}
```
All keys optional: `prompt_header`, `question` and `few_shot_examples` (string, default `""`); `max_tokens` (integer, default 512); `temperature` (number, default 0).
- **Response:** `{"response": "...", "graph_context": "..."}`

### POST /gen-chat
```json
{"user_id": "714838", "response": "text to work from", "classify": null, "time_stamp": null,
 "headers": {"user_id": "714838", "session_id": "6adddef85724764f6fbb1019", "registered_id": "6adddef85724764f6fbb1019"},
 "max_tokens": 512, "temperature": 0}
```
- **Required:** `user_id*` (string), `response*` (string), `classify*` (string or null), `time_stamp*` (string or null), `headers*` (Headers or null)
- **Optional:** `max_tokens` (default 512), `temperature` (default 0)

---

## Patient data

These three endpoints accept any JSON body that contains a `header` object. `header.user_id` is required. `header.session_id` is optional and falls back to `"default_"`.
- **Response:** `{"message": "714838 inserted"}`
- **Missing `header.user_id`:** `{"message": "Invalid ID"}`
- **Body is not JSON:** `{"message": "Invalid format"}`

### POST /insert-into-context
```json
{
  "header": {"user_id": "714838", "session_id": "6adddef85724764f6fbb1019", "expert_id": "714001",
             "appointment_id": "6adddef85724764f6fbb1019", "appointment_date": "2026-10-26",
             "booking_date": "2026-10-26", "name": "Test Patient", "dob": "14/01/1995",
             "email": "test@example.com", "number": "+61 400000000", "country": "Australia",
             "timezone": "Australia/Sydney"},
  "text": "Doctor: What brings you in today? Patient: ..."
}
```

### POST /insert-session-doc
```json
{
  "header": {"user_id": "714838", "expert_id": "714001", "session_id": "6adddef85724764f6fbb1019",
             "appointment_id": "6adddef85724764f6fbb1019"},
  "session_data": {
    "submitted": false,
    "summary": "",
    "progress_note": {"chief_complaints": {"text": "- Headache for three days.", "is_edited": "true"}},
    "prescription": {},
    "follow_up_summary": {},
    "case_history": {},
    "template": []
  }
}
```

### POST /insert-into-context-stella
```json
{"header": {"user_id": "714838", "session_id": "6adddef85724764f6fbb1019"}, "text": "..."}
```

---

## Clinical text generation

**Chat** body, used by every endpoint in this section:
```json
{
  "user_id": "714838",
  "question": "the clinical text or question to work on",
  "classify": null,
  "time_stamp": null,
  "headers": {"user_id": "714838", "session_id": "6adddef85724764f6fbb1019", "registered_id": "6adddef85724764f6fbb1019"},
  "max_tokens": 512,
  "temperature": 0
}
```
- **Required:** `user_id*` (string), `question*` (string), `classify*` (string or null), `time_stamp*` (string or null), `headers*` (Headers)
- **Optional:** `max_tokens` (integer, default 512), `temperature` (number, default 0)

| Method and path |
|---|
| `POST /generate-case-history-v2` |
| `POST /generate-note-prescription-summary-v2` |
| `POST /similarity-search` |
| `POST /generate-graph-data` |
| `POST /generate-prescription` |
| `POST /process-drugs-information` |
| `POST /generate-drugs-labs-diseaes` |
| `POST /generate-assessment` |
| `POST /generate-case-history-dropdown` |

### POST /note-summary
```json
{"user_id": "714838", "note": "note text", "classify": null, "time_stamp": null,
 "headers": {"user_id": "714838", "session_id": "6adddef85724764f6fbb1019", "registered_id": "6adddef85724764f6fbb1019"},
 "max_tokens": 512, "temperature": 0}
```
- **Required:** `user_id*`, `note*`, `classify*` (string or null), `time_stamp*` (string or null), `headers*`
- **Optional:** `max_tokens` (default 512), `temperature` (default 0)

---

## Knowledge graph

### POST /drugs-interaction/graph-fe-user-year
```json
{"user_id": "714838"}
```
- **Required:** `user_id*` (string or integer)
- **Optional:** `session_id`, `labtest`, `drugs`, `assistant`, `user_summary` (any type)
- **Response:** `{"nodes": [{"id": "...", "name": "...", "colour": "...", "description": ""}], "links": [{"source": "...", "target": "...", "name": "..."}]}`

### POST /drugs-interaction/graph-fe-nodes
```json
{"node_id": "714838", "limit": 25}
```
- **Required:** `node_id*` (string or integer)
- **Optional:** `limit` (integer, default 25)
- **Response:** `{"nodes": [...], "links": [...]}`

### POST /fetch-graph-data
```json
{"user_id": "714838", "session_id": "6adddef85724764f6fbb1019", "registered_id": "6adddef85724764f6fbb1019"}
```
The body is a **Headers** object: `user_id*`, `session_id*`, `registered_id*`.

---

## Organisation documents

### POST /ingest-document-url
```json
{"document_url": "https://example.org/guideline.pdf", "title": "Guideline title", "organization_id": "org-1",
 "data_level": "country", "country": "Australia", "version": "2026-10"}
```
- **Required:** `document_url*`, `title*`, `organization_id*`, `data_level*` (DataLevel), `country*`
- **Optional:** `version` (string or null)

### PUT /org-documents
```json
{"document_url": "https://example.org/guideline.pdf", "title": "Guideline title", "organization_id": "org-1",
 "data_level": "country", "country": "Australia"}
```
All required: `document_url*`, `title*`, `organization_id*`, `data_level*`, `country*`

### PATCH /org-documents
```json
{"organization_id": "org-1", "data_level": "country", "title": "Guideline title",
 "document_url": "https://example.org/guideline-v2.pdf", "country": "Australia"}
```
- **Required:** `organization_id*`, `data_level*`, `title*`
- **Optional:** `document_url`, `country` (string or null)

### DELETE /org-documents
```json
{"organization_id": "org-1", "data_level": "country", "title": "Guideline title", "version": "2026-10",
 "source_url": "https://example.org/guideline.pdf"}
```
- **Required:** `organization_id*`
- **Optional:** `data_level`, `title`, `version`, `source_url` (all may be null)

### DELETE /org-documents/version
```json
{"organization_id": "org-1", "data_level": "country", "title": "Guideline title", "version": "2026-10"}
```
All required: `organization_id*`, `data_level*`, `title*`, `version*`

### PUT /org-documents/select-versions
```json
{"organization_id": "org-1", "selections": [{"Guideline title": "2026-10"}]}
```
Both required: `organization_id*` (string), `selections*` (array of objects mapping string to string)

### POST /org-documents/search
```json
{"organization_id": "org-1", "data_level": "country", "title": "Guideline title", "version": "2026-10"}
```
- **Required:** `organization_id*`
- **Optional:** `data_level`, `title`, `version` (all may be null)

### GET /org-documents/{organization_id}
- **Path parameter:** `organization_id*`
- **Query parameter:** `include_chunks` (boolean, default `false`)

### GET /org-documents/{organization_id}/selected-versions
- **Path parameter:** `organization_id*`
- **Query parameter:** `data_level` (string, optional)

### GET /org-documents/{organization_id}/{data_level}/{title}/versions
- **Path parameters:** `organization_id*`, `data_level*`, `title*`

### GET /org-documents/{organization_id}/{data_level}/{title}/version
- **Path parameters:** `organization_id*`, `data_level*`, `title*`
- **Query parameter:** `version` (string, optional)

---

## Other

### POST /classify
```json
{"text": "text to classify"}
```
`text*` (string)

### POST /user-documents
```json
{"user_id": "714838", "query": "blood test results", "k": 4, "classify": "documents"}
```
- **Required:** `user_id*` (string), `query*` (string or null), `classify*` (string)
- **Optional:** `k` (integer, default 4)
