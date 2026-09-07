/**
 * Google Apps Script — Email Sender Web App
 *
 * This file is a REFERENCE for Google Apps Script (not executed by Node.js).
 * Copy this code into a new Google Apps Script project at https://script.google.com
 *
 * Setup (important for From address):
 * 1. Open script.google.com while signed in as saira@shunyalabs.ai
 * 2. Create/open the email sender project and paste this code into Code.gs
 * 3. Deploy as Web App:
 *    - Deploy > New deployment
 *    - Type: Web app
 *    - Execute as: Me  (must be saira@shunyalabs.ai)
 *    - Who has access: Anyone
 * 4. Copy the Web App URL into VM .env as EMAIL_WEB_APP_URL
 *
 * How it works:
 * - Receives POST { to, subject, body, from? }
 * - Sends HTML email via GmailApp (From = saira@shunyalabs.ai)
 * - Returns JSON { ok: true/false }
 *
 * Note: GmailApp "from" only works when that address is the signed-in account
 * or a verified "Send mail as" alias on that account.
 */

var DEFAULT_FROM = "saira@shunyalabs.ai";
var DEFAULT_FROM_NAME = "AskSam DS Automation";

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents || "{}");
    var to = payload.to || "";
    var subject = payload.subject || "QC Automation Report";
    var body = payload.body || "";
    var from = payload.from || DEFAULT_FROM;

    if (!to) {
      return ContentService.createTextOutput(
        JSON.stringify({ ok: false, error: "Missing recipient(s)." })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    GmailApp.sendEmail(to, subject, "", {
      htmlBody: body,
      from: from,
      name: DEFAULT_FROM_NAME,
    });

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true, from: from })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        ok: false,
        error: error && error.message ? error.message : String(error),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({
      ok: true,
      message: "Use POST to send email.",
      defaultFrom: DEFAULT_FROM,
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
