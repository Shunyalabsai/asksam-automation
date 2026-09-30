# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: appointment-session-management.spec.ts >> Expert Dashboard | Session Management >> create appointment and manage session lifecycle
- Location: tests/appointment-session-management.spec.ts:5:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /Mark Session/i }).first() to be visible

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
      - link "Session Management" [active] [ref=e41] [cursor=pointer]:
        - /url: /expert/sessionmanagement
        - img [ref=e43]
        - generic [ref=e46]: Session Management
      - link "Patients" [ref=e47] [cursor=pointer]:
        - /url: /expert/patients
        - img [ref=e49]
        - generic [ref=e52]: Patients
      - link "Chat" [ref=e53] [cursor=pointer]:
        - /url: /expert/chat
        - img [ref=e55]
        - generic [ref=e58]: Chat
      - link "Notifications" [ref=e59] [cursor=pointer]:
        - /url: /expert/notifications
        - img [ref=e61]
        - generic [ref=e64]: Notifications
      - link "Help Center" [ref=e65] [cursor=pointer]:
        - /url: /expert/help-center
        - img [ref=e67]
        - generic [ref=e70]: Help Center
      - link "Payouts" [ref=e71] [cursor=pointer]:
        - /url: /expert/payouts
        - img [ref=e73]
        - generic [ref=e76]: Payouts
      - link "Settings" [ref=e77] [cursor=pointer]:
        - /url: /expert/settings
        - img [ref=e79]
        - generic [ref=e82]: Settings
    - generic [ref=e84]:
      - generic [ref=e85]:
        - heading "Session Management" [level=5] [ref=e86]
        - generic [ref=e87]:
          - button "Unmarked" [ref=e88] [cursor=pointer]: Unmarked
          - button "Completed" [ref=e89] [cursor=pointer]: Completed
          - button "Not Completed" [ref=e90] [cursor=pointer]: Not Completed
      - generic [ref=e95]:
        - img [ref=e96]
        - paragraph [ref=e183]: No Sessions Found
```

# Test source

```ts
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
  580 |   throw new Error(`No non-cancelled appointment found after checking ${pagesChecked + 1} pages (target date: ${targetDate || 'any'})`);
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
> 612 |   await markButtons.first().waitFor({ timeout: 20000 });
      |                             ^ TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
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
  681 |    CREATE PATIENT (PATIENTS MODULE)
  682 | =============================== */
  683 | async createPatientFromPatientsModule() {
  684 |   const uniq = Math.floor(100000 + Math.random() * 900000);
  685 | 
  686 |   const patient = {
  687 |     firstName: 'test',
  688 |     lastName: `autouser-${uniq}`,
  689 |     email: `testautouser-${uniq}@tmail.com`,
  690 |   };
  691 | 
  692 |   // Open Patients → Create Patient
  693 |   await this.page.getByRole('button', { name: 'Create Patient' }).click();
  694 | 
  695 |   // ✅ REAL WAIT (not dialog)
  696 |   await this.page
  697 |     .getByRole('textbox', { name: 'First Name' })
  698 |     .waitFor({ state: 'visible', timeout: 20000 });
  699 | 
  700 |   await this.page.getByRole('textbox', { name: 'First Name' }).fill(patient.firstName);
  701 |   await this.page.getByRole('textbox', { name: 'Last Name' }).fill(patient.lastName);
  702 |   await this.page.getByRole('textbox', { name: 'Email' }).fill(patient.email);
  703 | 
  704 |   await this.page.getByRole('combobox', { name: 'Gender' }).click();
  705 |   await this.page.getByRole('option', { name: 'Male', exact: true }).click();
  706 | 
  707 |   await this.page.getByRole('textbox', { name: 'Date of Birth' }).fill('04/02/2001');
  708 | 
  709 |   await this.page.getByRole('button', { name: 'Create Patient' }).click();
  710 | 
  711 |   await this.page
  712 |     .getByText(/Patient registered|Patient created|successfully/i)
```