# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: appointment-z-cancel.spec.ts >> Expert Dashboard | Create & Cancel Appointment >> create appointment with existing patient and cancel non-cancelled one
- Location: tests/appointment-z-cancel.spec.ts:5:7

# Error details

```
Error: No non-cancelled appointment found after checking 1 pages (target date: 30 Sep 2026)
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - generic [ref=e5]:
      - link [ref=e8] [cursor=pointer]:
        - /url: https://www.asksam.com.au/
      - generic [ref=e9]:
        - link "appointments" [ref=e10] [cursor=pointer]:
          - /url: /expert/appointments
          - img [ref=e11]
        - link "chat" [ref=e13] [cursor=pointer]:
          - /url: /expert/chat
          - img [ref=e14]
        - link "notifications" [ref=e16] [cursor=pointer]:
          - /url: /expert/notifications
          - img [ref=e17]
        - button "Open user menu" [ref=e20] [cursor=pointer]:
          - img "Anthony Smith's logo" [ref=e23]
  - generic [ref=e26]:
    - list [ref=e28]:
      - link "Dashboard" [ref=e29] [cursor=pointer]:
        - /url: /expert/dashboard
        - img [ref=e31]
        - generic [ref=e34]: Dashboard
      - link "Appointments" [ref=e35] [cursor=pointer]:
        - /url: /expert/appointments
        - img [ref=e37]
        - generic [ref=e40]: Appointments
      - button "Copilot" [ref=e41] [cursor=pointer]:
        - img [ref=e43]
        - generic [ref=e46]: Copilot
        - img [ref=e47]
      - link "Session Management" [ref=e49] [cursor=pointer]:
        - /url: /expert/sessionmanagement
        - img [ref=e51]
        - generic [ref=e54]: Session Management
      - link "Patients" [ref=e55] [cursor=pointer]:
        - /url: /expert/patients
        - img [ref=e57]
        - generic [ref=e60]: Patients
      - link "Chat" [ref=e61] [cursor=pointer]:
        - /url: /expert/chat
        - img [ref=e63]
        - generic [ref=e66]: Chat
      - link "Notifications" [ref=e67] [cursor=pointer]:
        - /url: /expert/notifications
        - img [ref=e69]
        - generic [ref=e72]: Notifications
      - link "Help Center" [ref=e73] [cursor=pointer]:
        - /url: /expert/help-center
        - img [ref=e75]
        - generic [ref=e78]: Help Center
      - link "Payouts" [ref=e79] [cursor=pointer]:
        - /url: /expert/payouts
        - img [ref=e81]
        - generic [ref=e84]: Payouts
      - link "Settings" [ref=e85] [cursor=pointer]:
        - /url: /expert/settings
        - img [ref=e87]
        - generic [ref=e90]: Settings
    - generic [ref=e92]:
      - generic [ref=e93]:
        - generic [ref=e94]:
          - heading "Appointments" [level=2] [ref=e96]
          - generic [ref=e97]:
            - button "Upcoming appointments tab" [pressed] [ref=e98] [cursor=pointer]: Upcoming
            - button "Past appointments tab" [ref=e99] [cursor=pointer]: Past
          - generic [ref=e100]:
            - button "Switch to calendar view" [ref=e101] [cursor=pointer]:
              - img [ref=e102]
              - text: View Calendar
            - button "Book new appointment" [ref=e104] [cursor=pointer]:
              - img [ref=e105]
              - text: Book Appointment
        - generic [ref=e108]:
          - generic [ref=e109]:
            - generic [ref=e110]:
              - generic [ref=e111]:
                - generic [ref=e112]:
                  - img [ref=e113]
                  - heading "Filters" [level=6] [ref=e115]
                  - generic [ref=e117]: "2"
                - button [ref=e118] [cursor=pointer]:
                  - img [ref=e119]
              - button "Clear All" [ref=e121] [cursor=pointer]:
                - img [ref=e123]
                - text: Clear All
            - generic [ref=e128]:
              - generic [ref=e129]:
                - generic [ref=e130]: "Active Filters:"
                - generic [ref=e131]:
                  - 'button "From: 01/10/2026" [ref=e132]':
                    - generic [ref=e133]: "From: 01/10/2026"
                    - img [ref=e134] [cursor=pointer]
                  - 'button "Testing: Included" [ref=e136]':
                    - generic [ref=e137]: "Testing: Included"
                    - img [ref=e138] [cursor=pointer]
              - separator [ref=e140]
              - generic [ref=e141]:
                - generic [ref=e142]:
                  - generic [ref=e143]:
                    - img [ref=e144]
                    - text: Created By
                  - generic [ref=e147]:
                    - combobox [ref=e148] [cursor=pointer]: All
                    - textbox: all
                    - img
                    - group
                - generic [ref=e149]:
                  - generic [ref=e150]:
                    - img [ref=e151]
                    - text: From Date
                  - generic [ref=e154]:
                    - textbox "Select date" [ref=e155]: 01/10/2026
                    - button "Choose date, selected date is Oct 1, 2026" [ref=e157] [cursor=pointer]:
                      - img [ref=e158]
                    - group
                - generic [ref=e160]:
                  - generic [ref=e161]:
                    - img [ref=e162]
                    - text: To Date
                  - generic [ref=e165]:
                    - textbox "Select date" [ref=e166]
                    - button "Choose date" [ref=e168] [cursor=pointer]:
                      - img [ref=e169]
                    - group
                - generic [ref=e171]:
                  - generic [ref=e172]:
                    - img [ref=e173]
                    - text: Appointment Type
                  - generic [ref=e176]:
                    - combobox [ref=e177] [cursor=pointer]: All
                    - textbox: all
                    - img
                    - group
                - generic [ref=e178]:
                  - generic [ref=e179]:
                    - img [ref=e180]
                    - text: Category
                  - generic [ref=e185]:
                    - combobox [ref=e186] [cursor=pointer]: All
                    - textbox: all
                    - img
                    - group
                - generic [ref=e187]:
                  - generic [ref=e188]:
                    - img [ref=e189]
                    - text: Appointment Status
                  - generic [ref=e192]:
                    - combobox [ref=e193] [cursor=pointer]: All
                    - textbox: all
                    - img
                    - group
                - generic [ref=e194]:
                  - generic [ref=e195]:
                    - img [ref=e196]
                    - text: Session Status
                  - generic [ref=e200]:
                    - combobox [ref=e201] [cursor=pointer]: All
                    - textbox: all
                    - img
                    - group
                - generic [ref=e202]:
                  - generic [ref=e203]:
                    - img [ref=e204]
                    - text: Include Testing Appointments
                  - generic [ref=e207]:
                    - combobox [ref=e208] [cursor=pointer]: "Yes"
                    - textbox: "true"
                    - img
                    - group
              - generic [ref=e209]:
                - button "Clear Filters" [ref=e210] [cursor=pointer]:
                  - img [ref=e212]
                  - text: Clear Filters
                - button "Apply Filters" [active] [ref=e214] [cursor=pointer]:
                  - img [ref=e216]
                  - text: Apply Filters
          - generic "Search appointments input" [ref=e219]:
            - generic [ref=e220]:
              - img [ref=e222]
              - textbox "Search appointments..." [ref=e224]
              - group
      - generic [ref=e227]:
        - generic [ref=e229]:
          - generic [ref=e231]:
            - button "More Options" [ref=e233] [cursor=pointer]:
              - img [ref=e234]
            - generic [ref=e236]:
              - img [ref=e238]
              - generic [ref=e240]:
                - generic [ref=e241]:
                  - generic [ref=e242]: Follow up Consult
                  - generic [ref=e243]: Natural Medicine
                - heading "Testtt The Sairaa" [level=6] [ref=e244]
                - 'heading "Appointment With : Dr Anthony Smith" [level=6] [ref=e245]'
                - 'heading "Created By : Anthony Smith" [level=6] [ref=e246]'
                - generic [ref=e247]:
                  - generic "Appointment Status" [ref=e248]:
                    - generic [ref=e250]: Appt
                    - generic [ref=e251]: Cancelled
                  - generic "Session Status" [ref=e252]:
                    - generic [ref=e254]: Sess
                    - generic [ref=e255]: Not Marked
            - separator [ref=e256]
            - generic [ref=e257]:
              - generic [ref=e258]:
                - img [ref=e259]
                - paragraph [ref=e261]: 17 Dec 2026
              - generic [ref=e262]:
                - img [ref=e263]
                - paragraph [ref=e265]: 01:30 AM
          - button "View Details" [ref=e268] [cursor=pointer]: View Details
        - generic [ref=e270]:
          - generic [ref=e272]:
            - button "More Options" [ref=e274] [cursor=pointer]:
              - img [ref=e275]
            - generic [ref=e277]:
              - img [ref=e279]
              - generic [ref=e281]:
                - generic [ref=e282]:
                  - generic [ref=e283]: Follow up Consult
                  - generic [ref=e284]: Natural Medicine
                - heading "Testtt The Sairaa" [level=6] [ref=e285]
                - 'heading "Appointment With : Dr Anthony Smith" [level=6] [ref=e286]'
                - 'heading "Created By : Anthony Smith" [level=6] [ref=e287]'
                - generic [ref=e288]:
                  - generic "Appointment Status" [ref=e289]:
                    - generic [ref=e291]: Appt
                    - generic [ref=e292]: Cancelled
                  - generic "Session Status" [ref=e293]:
                    - generic [ref=e295]: Sess
                    - generic [ref=e296]: Not Marked
            - separator [ref=e297]
            - generic [ref=e298]:
              - generic [ref=e299]:
                - img [ref=e300]
                - paragraph [ref=e302]: 17 Dec 2026
              - generic [ref=e303]:
                - img [ref=e304]
                - paragraph [ref=e306]: 01:30 AM
          - button "View Details" [ref=e309] [cursor=pointer]: View Details
```

# Test source

```ts
  480 | //     name: /Yes, Cancel it/i,
  481 | //   });
  482 | 
  483 | //   await confirmCancelBtn.waitFor({ state: 'visible', timeout: 20000 });
  484 | //   await confirmCancelBtn.click();
  485 | 
  486 | //   // 3️⃣ Success toast
  487 | //   await this.page
  488 | //     .getByText(/Appointment cancelled/i)
  489 | //     .waitFor({ timeout: 30000 });
  490 | 
  491 | //   // 4️⃣ Close Appointment Details panel (same as recording)
  492 | //   const closeBtn = this.page
  493 | //     .locator('div')
  494 | //     .filter({ hasText: /^Appointment Details$/ })
  495 | //     .getByRole('button');
  496 | 
  497 | //   await closeBtn.waitFor({ timeout: 20000 });
  498 | //   await closeBtn.click();
  499 | // }
  500 | 
  501 | /* ===============================
  502 |    OPEN & CANCEL FIRST NON-CANCELLED APPOINTMENT
  503 | =============================== */
  504 | async openAndCancelNonCancelledAppointment(pagesChecked = 0) {
  505 |   const firstCard = this.page.locator('.MuiCard-root').first();
  506 |   await firstCard.waitFor({ state: 'visible', timeout: 20000 }).catch(async () => {
  507 |     if (pagesChecked === 0) {
  508 |       await this.page.reload();
  509 |       await this.page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  510 |       await this._applyFutureDateFilter().catch(() => {});
  511 |       await firstCard.waitFor({ state: 'visible', timeout: 20000 });
  512 |     } else {
  513 |       throw new Error('No appointment cards visible on this page');
  514 |     }
  515 |   });
  516 | 
  517 |   const cards = this.page.locator('.MuiCard-root');
  518 |   const count = await cards.count();
  519 |   const targetDate = this.lastBookedDateDisplay;
  520 | 
  521 |   // Helper: open details panel and cancel
  522 |   const cancelCard = async (card) => {
  523 |     const viewDetailsBtn = card.getByRole('button', { name: /View Details/i });
  524 |     await viewDetailsBtn.waitFor({ state: 'visible', timeout: 15000 });
  525 |     await viewDetailsBtn.click();
  526 | 
  527 |     const cancelBtn = this.page.getByRole('button', { name: /^Cancel$/i });
  528 |     await cancelBtn.waitFor({ state: 'visible', timeout: 20000 });
  529 |     await cancelBtn.click();
  530 | 
  531 |     const confirmBtn = this.page.getByRole('button', { name: /Yes, Cancel it/i });
  532 |     await confirmBtn.waitFor({ state: 'visible', timeout: 15000 });
  533 |     await confirmBtn.click();
  534 | 
  535 |     await this.page.getByText(/Appointment cancelled/i).waitFor({ timeout: 30000 });
  536 |   };
  537 | 
  538 |   // Pass 1: target the exact appointment we just booked (by date string)
  539 |   if (targetDate) {
  540 |     for (let i = 0; i < count; i++) {
  541 |       const card = cards.nth(i);
  542 |       const text = await card.textContent();
  543 |       if (text?.includes(targetDate) && !text?.includes('Cancelled')) {
  544 |         console.log(`✅ Found booked appointment for ${targetDate} on page ${pagesChecked + 1}`);
  545 |         await cancelCard(card);
  546 |         return;
  547 |       }
  548 |     }
  549 |   }
  550 | 
  551 |   // Pass 2: any "Upcoming" appointment
  552 |   for (let i = 0; i < count; i++) {
  553 |     const card = cards.nth(i);
  554 |     const text = await card.textContent();
  555 |     if (text?.includes('Upcoming')) {
  556 |       await cancelCard(card);
  557 |       return;
  558 |     }
  559 |   }
  560 | 
  561 |   // Pass 3: any non-terminal status
  562 |   for (let i = 0; i < count; i++) {
  563 |     const card = cards.nth(i);
  564 |     const text = await card.textContent();
  565 |     if (text?.includes('Cancelled') || text?.includes('Completed') || text?.includes('Ongoing')) continue;
  566 |     await cancelCard(card);
  567 |     return;
  568 |   }
  569 | 
  570 |   // Paginate to next page (up to 30 pages — bounded by test timeout)
  571 |   if (pagesChecked < 30) {
  572 |     const nextBtn = this.page.getByRole('button', { name: 'Go to next page' });
  573 |     if (await nextBtn.isVisible().catch(() => false) && !(await nextBtn.isDisabled().catch(() => true))) {
  574 |       await nextBtn.click();
  575 |       await this.page.locator('.MuiCard-root').first().waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
  576 |       return this.openAndCancelNonCancelledAppointment(pagesChecked + 1);
  577 |     }
  578 |   }
  579 | 
> 580 |   throw new Error(`No non-cancelled appointment found after checking ${pagesChecked + 1} pages (target date: ${targetDate || 'any'})`);
      |         ^ Error: No non-cancelled appointment found after checking 1 pages (target date: 30 Sep 2026)
  581 | }
  582 | 
  583 | /* ===============================
  584 |    OPEN SESSION MANAGEMENT (FIXED)
  585 | =============================== */
  586 | /* ===============================
  587 |    OPEN SESSION MANAGEMENT (STRICT SAFE)
  588 | =============================== */
  589 | async openSessionManagement() {
  590 |   await this.page.getByRole('link', {
  591 |     name: 'Session Management',
  592 |     exact: true,
  593 |   }).click();
  594 | 
  595 |   // ✅ Correct URL
  596 |   await this.page.waitForURL(/sessionmanagement/, { timeout: 30000 });
  597 | 
  598 |   // ✅ Wait ONLY for page heading (unique)
  599 |   await this.page
  600 |     .getByRole('heading', { name: 'Session Management' })
  601 |     .waitFor({ timeout: 30000 });
  602 | }
  603 | 
  604 | /* ===============================
  605 |    CLICK FIRST AVAILABLE MARK SESSION
  606 | =============================== */
  607 | async clickFirstMarkSession() {
  608 |   const markButtons = this.page.getByRole('button', {
  609 |     name: /Mark Session/i,
  610 |   });
  611 | 
  612 |   await markButtons.first().waitFor({ timeout: 20000 });
  613 |   await markButtons.first().click();
  614 | }
  615 | 
  616 | /* ===============================
  617 |    SUBMIT SESSION NOTE
  618 | =============================== */
  619 | async submitSession(note = 'test completed') {
  620 |   const noteBox = this.page.getByRole('textbox', {
  621 |     name: /Note \(Optional\)/i,
  622 |   });
  623 | 
  624 |   await noteBox.waitFor({ timeout: 20000 });
  625 |   await noteBox.fill(note);
  626 | 
  627 |   await this.page.getByRole('button', { name: 'Submit' }).click();
  628 | 
  629 |   await this.page
  630 |     .getByText(/Form submitted Successfully/i)
  631 |     .waitFor({ timeout: 30000 });
  632 | }
  633 | 
  634 | /* ===============================
  635 |    SWITCH SESSION TAB (ROBUST)
  636 | =============================== */
  637 | async switchSessionTab(tabName) {
  638 |   const tab = this.page.getByText(tabName, { exact: true });
  639 | 
  640 |   await tab.waitFor({ timeout: 15000 });
  641 |   await tab.click();
  642 | }
  643 | 
  644 | /* ===============================
  645 |    MARK NOT COMPLETED
  646 | =============================== */
  647 | async markNotCompleted() {
  648 |   await this.page
  649 |     .getByRole('button', { name: 'Not Completed' })
  650 |     .waitFor({ timeout: 15000 });
  651 | 
  652 |   await this.page
  653 |     .getByRole('button', { name: 'Not Completed' })
  654 |     .click();
  655 | }
  656 | 
  657 | /* ===============================
  658 |    OPEN & CLOSE SESSION DETAILS
  659 | =============================== */
  660 | async openAndCloseSessionDetails() {
  661 |   const viewBtn = this.page
  662 |     .locator('button')
  663 |     .filter({ hasText: /View/i })
  664 |     .first();
  665 | 
  666 |   await viewBtn.waitFor({ timeout: 15000 });
  667 |   await viewBtn.click();
  668 | 
  669 |   await this.page.getByRole('button', { name: 'close' }).click();
  670 | }
  671 | 
  672 | /* ===============================
  673 |    OPEN PATIENTS MODULE
  674 | =============================== */
  675 | async openPatients() {
  676 |   await this.page.getByRole('link', { name: 'Patients' }).click();
  677 |   await this.page.waitForURL(/expert\/patients/, { timeout: 30000 });
  678 | }
  679 | 
  680 | /* ===============================
```