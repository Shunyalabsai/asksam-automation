#!/usr/bin/env bash
#
# AskSam v2 API pipeline (asksam.uwc.world) — read-only smokes only.
# One cron → one JSON report → one Google Sheet update → one dashboard push.
#
# Optional env:
#   AUTOMATION_SKIP_GIT_PUSH=true  — run tests + dashboard + email only
#

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if [[ ! -f .env ]]; then
  echo "Missing .env in $ROOT — copy .env.example (ASKSAM_V2_* + Sheets/email vars)."
  exit 1
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not a git repository — clone the repo first."
  exit 1
fi

BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")"
if [[ "$BRANCH" != "main" ]]; then
  echo "Checking out main (was on: $BRANCH)"
  git checkout main
fi

echo "==> Pull latest code from origin/main (auto-sync before every run)"
git fetch origin main
git reset --hard origin/main
echo "==> Running commit: $(git rev-parse --short HEAD) — $(git log -1 --format='%ci %s')"

export CI=true

echo "==> npm ci"
npm ci

echo "==> AskSam v2 read-only API smokes (asksam.uwc.world) — TC_V2_01…10"
set +e
npm run test:ds-api
set -e

echo "==> Generate dashboard data"
node scripts/generate-dashboard.js

if [[ "${AUTOMATION_SKIP_GIT_PUSH:-}" == "true" ]]; then
  echo "==> Skipping git push (AUTOMATION_SKIP_GIT_PUSH=true)"
else
  echo "==> Commit and push dashboard data"
  git fetch origin main
  git reset --mixed origin/main
  git add docs/data/ docs/history/ docs/exports/ docs/artifacts/
  if git diff --cached --quiet; then
    echo "No dashboard changes to commit."
  else
    git commit -m "Update AskSam v2 dashboard — $(TZ='Asia/Kolkata' date '+%b %d, %Y %I:%M %p IST')"
    git push origin HEAD:main
    echo "Dashboard data pushed."
  fi
fi

echo "==> Failure email (no-ops when all passed / env missing)"
node scripts/send-email-report.js

echo "==> Done (AskSam v2 read-only only)"
