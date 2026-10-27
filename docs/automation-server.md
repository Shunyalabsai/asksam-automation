# AskSam DS — automation server runbook

VM: `saira@136.119.127.72`  
Repo: [asksam-automation](https://github.com/Shunyalabsai/asksam-automation)

## Location

| Item | Value |
|------|--------|
| Clone path | `$HOME/asksam-automation` |
| Env file | `$HOME/asksam-automation/.env` |
| Node version | 20 (via nvm) |

## Failure email

| Field | Value |
|-------|--------|
| **From** | `saira@shunyalabs.ai` (`REPORT_FROM_EMAIL`) |
| **To** | `REPORT_RECIPIENTS` list below |

From is controlled by the Google Apps Script web app. Deploy/run that script while signed in as **saira@shunyalabs.ai** (see `scripts/google-apps-script-email.js`), then set `EMAIL_WEB_APP_URL` on the VM to that deployment URL.

### Recipients (To)

Set in `.env` as comma-separated addresses (`REPORT_RECIPIENTS`). Current list:

1. arti@shunyalabs.ai  
2. saira@shunyalabs.ai  
3. sb@shunyalabs.ai  
4. ritu@shunyalabs.ai  
5. saheb@shunyalabs.ai  
6. ahiri@shunyalabs.ai  

```bash
# On VM — update before next cron run
cd ~/asksam-automation
grep -q '^REPORT_RECIPIENTS=' .env \
  && sed -i 's|^REPORT_RECIPIENTS=.*|REPORT_RECIPIENTS=arti@shunyalabs.ai,saira@shunyalabs.ai,sb@shunyalabs.ai,ritu@shunyalabs.ai,saheb@shunyalabs.ai,ahiri@shunyalabs.ai|' .env \
  || echo 'REPORT_RECIPIENTS=arti@shunyalabs.ai,saira@shunyalabs.ai,sb@shunyalabs.ai,ritu@shunyalabs.ai,saheb@shunyalabs.ai,ahiri@shunyalabs.ai' >> .env
```

Requires `EMAIL_WEB_APP_URL` in the same `.env`. Email sends only when tests fail.

## Required `.env` for daily AskSam v2 cron

| Variable | Purpose |
|----------|---------|
| `GOOGLE_APPS_SCRIPT_URL` | Google Sheet updates |
| `EMAIL_WEB_APP_URL` | Failure email |
| `REPORT_RECIPIENTS` | Email recipients |
| `ASKSAM_V2_*` | Optional overrides (defaults in `.env.example` / code) |
| `ASKSAM_V2_API_KEY` | Empty for now; set when team enables `x-api-key` |

Going forward, scheduled monitoring is **AskSam v2 only** (`asksam.uwc.world`, read-only). Old RAG / Clinical Notes / Assistant / ASR smokes are not on cron (still available via manual `npm run test:rag-api` etc.).


| Mode | Command | Schedule | Log file |
|------|---------|----------|----------|
| **AskSam v2 API** (active on VM) | `npm run automation:run-rag-api` | Daily **4:00 AM** + **5:00 PM IST** | `~/automation-cron-asksam-rag-api.log` |
| **Full suite** (optional, UI + API) | `npm run automation:run` | Manual or add your own cron | `~/automation-cron-asksam-automation.log` |

VM timezone is **UTC**. IST = UTC+5:30, so cron uses `30 22` (4 AM IST) and `30 11` (5 PM IST).

---

## Cron — AskSam v2 (daily 4 AM + 5 PM IST)

```bash
crontab -e
```

Add (VM is UTC; times below = **4:00 AM** and **5:00 PM IST**):

```bash
30 22 * * * /bin/bash -lc 'export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm use 20 >/dev/null && cd "$HOME/asksam-automation" && npm run automation:run-rag-api' >> "$HOME/automation-cron-asksam-rag-api.log" 2>&1
30 11 * * * /bin/bash -lc 'export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm use 20 >/dev/null && cd "$HOME/asksam-automation" && npm run automation:run-rag-api' >> "$HOME/automation-cron-asksam-rag-api.log" 2>&1
```

Tests: **10 AskSam v2 read-only smokes** (`TC_V2_01`…`TC_V2_10`) on `https://asksam.uwc.world`.  
No Chromium, no `TEST_EMAIL`, no ASR key, no ds-api-headers required.

---

## Cron — Full suite (optional, UI + API)

Not scheduled by default. Add your own cron if needed:

Requires `TEST_EMAIL` in `.env` and Playwright Chromium.

---

## Auto pull — no manual `git pull` needed

Every cron run uses `npm run automation:run-rag-api` (or `automation:run-ds-api`), which **automatically**:

1. `git fetch origin main`
2. `git reset --hard origin/main` — always runs latest code from GitHub
3. `npm ci` — reinstall deps to match that commit
4. Run **AskSam v2 only** (`TC_V2_01`…`10`) → Sheet + dashboard push + failure email if needed

You only need `git pull` manually if you run tests **outside** the automation script (e.g. `npm run test:ds-api` alone).

Check the log for: `Running commit: abc1234 — ...` to confirm which version ran.

## Manual run

```bash
cd ~/asksam-automation

# AskSam v2 only (includes auto pull)
AUTOMATION_SKIP_GIT_PUSH=true npm run automation:run-rag-api   # trial
npm run automation:run-rag-api                                 # + push dashboard

# Same pipeline (alias)
npm run automation:run-ds-api

# Full UI + API (optional, not on cron)
AUTOMATION_SKIP_GIT_PUSH=true npm run automation:run
npm run automation:run
```

## Logs

```bash
tail -f ~/automation-cron-asksam-rag-api.log
tail -f ~/automation-cron-asksam-automation.log
```

## GitHub Pages

Dashboard: [https://shunyalabsai.github.io/asksam-automation/](https://shunyalabsai.github.io/asksam-automation/)

Ensure Pages source = **`/docs`** folder on `main`.

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Stale code on VM | `git fetch origin main && git reset --hard origin/main` |
| `git push` fails | Deploy key + SSH host `github.com-asksam-automation` |
| RAG tests fail | Check `RAG_API_BASE_URL` in `.env` |
| UI tests fail | Set `TEST_EMAIL`; run `npx playwright install chromium` |
| Dashboard empty | Confirm cron log shows `Dashboard data pushed` |
