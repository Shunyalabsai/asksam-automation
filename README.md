# AskSam DS Automation

Playwright E2E automation for **AskSam Expert Dashboard** and **CCOP (Copilot)** with a public GitHub Pages dashboard, optional Google Sheets reporting, VM cron runner, and failure email alerts.

## Quick start (local)

```bash
cp .env.example .env
# Set TEST_EMAIL and other values in .env

npm ci
npx playwright install chromium
npm test                    # run tests + generate dashboard + email (if configured)
```

## Test modules

| Module | Command |
|--------|---------|
| Expert navigation | `npm run test:expert-dashboard-navigation` |
| Appointment booking | `npm run test:expert-appointment-booking` |
| Clinical note | `npm run test:clinical-note` |
| AI assistant panel | `npm run test:ai-assistant-panel` |
| RAG API smoke (health + LLM) | `npm run test:rag-api` |
| All modules | `npm test` |

See `package.json` for the full list of `test:<module>` scripts.

## Architecture

```
cron (VM) → auth.setup → Playwright specs → reporters → generate-dashboard → git push docs/ → GitHub Pages
                                                      ↘ send-email (on failure)
```

## Documentation

- [VM setup guide](docs/vm-automation-migration-guide.md)
- [Automation server runbook](docs/automation-server.md)

## Environment

All URLs and secrets come from `.env` — see `.env.example`. Never commit `.env` or `playwright/.auth/`.

## Dashboard

After a test run, open `docs/index.html` locally or visit GitHub Pages after deploy.

Dashboard (GitHub Pages): [https://shunyalabsai.github.io/asksam-automation/](https://shunyalabsai.github.io/asksam-automation/)

Repo: [https://github.com/Shunyalabsai/asksam-automation](https://github.com/Shunyalabsai/asksam-automation)
