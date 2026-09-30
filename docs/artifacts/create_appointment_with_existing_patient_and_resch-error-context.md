# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: appointment-create-and-reschedule.spec.ts >> Expert Dashboard | Create & Reschedule Appointment >> create appointment with existing patient and reschedule
- Location: tests/appointment-create-and-reschedule.spec.ts:5:7

# Error details

```
Error: No active appointment found after checking 1 pages (target date: 30 Sep 2026)
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
  286 |       await filtersToggle.click();
  287 |     }
  288 | 
  289 |     // Required for QA/test-flagged bookings to appear in the grid
  290 |     await this._setIncludeTestingAppointmentsYes();
  291 | 
  292 |     // The "From Date" label has a textbox sibling — fill with tomorrow's date (DD/MM/YYYY)
  293 |     const tomorrow = new Date();
  294 |     tomorrow.setDate(tomorrow.getDate() + 1);
  295 |     const fromDateStr = `${String(tomorrow.getDate()).padStart(2, '0')}/${String(tomorrow.getMonth() + 1).padStart(2, '0')}/${tomorrow.getFullYear()}`;
  296 | 
  297 |     const fromDateLabel = this.page.getByText('From Date', { exact: true });
  298 |     await fromDateLabel.waitFor({ state: 'visible', timeout: 10000 });
  299 |     const fromDateInput = fromDateLabel.locator('xpath=following::input[1]');
  300 |     await fromDateInput.fill(fromDateStr);
  301 | 
  302 |     // Click Apply Filters
  303 |     const applyBtn = this.page.getByRole('button', { name: 'Apply Filters' });
  304 |     await applyBtn.waitFor({ state: 'visible', timeout: 10000 });
  305 |     await applyBtn.click();
  306 | 
  307 |     await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  308 |     console.log(
  309 |       `✅ Applied appointments filters (include testing=yes, from=${fromDateStr}) — hides stale completed-from-today`
  310 |     );
  311 |   }
  312 | 
  313 |   /* ===============================
  314 |      OPEN FIRST APPOINTMENT
  315 |   =============================== */
  316 |   async openFirstAppointment(pagesChecked = 0) {
  317 |     // Wait for first appointment card to be visible (or fail fast)
  318 |     const firstCard = this.page.locator('.MuiCard-root').first();
  319 |     await firstCard.waitFor({ state: 'visible', timeout: 20000 }).catch(async () => {
  320 |       if (pagesChecked === 0) {
  321 |         await this.page.reload();
  322 |         await this.page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  323 |         await this._applyFutureDateFilter().catch(() => {});
  324 |         await firstCard.waitFor({ state: 'visible', timeout: 20000 });
  325 |       } else {
  326 |         throw new Error('No appointment cards visible on this page');
  327 |       }
  328 |     });
  329 | 
  330 |     const cards = this.page.locator('.MuiCard-root');
  331 |     const count = await cards.count();
  332 |     const targetDate = this.lastBookedDateDisplay;
  333 | 
  334 |     // Pass 1: target the exact appointment we just booked (by date string)
  335 |     if (targetDate) {
  336 |       for (let i = 0; i < count; i++) {
  337 |         const card = cards.nth(i);
  338 |         const text = await card.textContent();
  339 |         if (text?.includes(targetDate) && !text?.includes('Cancelled')) {
  340 |           const viewBtn = card.getByRole('button', { name: /View Details/i });
  341 |           if (await viewBtn.isVisible().catch(() => false)) {
  342 |             console.log(`✅ Found booked appointment for ${targetDate} on page ${pagesChecked + 1}`);
  343 |             await viewBtn.click();
  344 |             return;
  345 |           }
  346 |         }
  347 |       }
  348 |     }
  349 | 
  350 |     // Pass 2: any "Upcoming" status appointment
  351 |     for (let i = 0; i < count; i++) {
  352 |       const card = cards.nth(i);
  353 |       const text = await card.textContent();
  354 |       if (text?.includes('Upcoming')) {
  355 |         const viewBtn = card.getByRole('button', { name: /View Details/i });
  356 |         if (await viewBtn.isVisible().catch(() => false)) {
  357 |           await viewBtn.click();
  358 |           return;
  359 |         }
  360 |       }
  361 |     }
  362 | 
  363 |     // Pass 3: any non-terminal status (not cancelled/completed/ongoing)
  364 |     for (let i = 0; i < count; i++) {
  365 |       const card = cards.nth(i);
  366 |       const text = await card.textContent();
  367 |       if (text?.includes('Cancelled') || text?.includes('Completed') || text?.includes('Ongoing')) continue;
  368 |       const viewBtn = card.getByRole('button', { name: /View Details/i });
  369 |       if (await viewBtn.isVisible().catch(() => false)) {
  370 |         await viewBtn.click();
  371 |         return;
  372 |       }
  373 |     }
  374 | 
  375 |     // Paginate to next page (up to 30 pages — bounded by test timeout)
  376 |     if (pagesChecked < 30) {
  377 |       const nextBtn = this.page.getByRole('button', { name: 'Go to next page' });
  378 |       if (await nextBtn.isVisible().catch(() => false) && !(await nextBtn.isDisabled().catch(() => true))) {
  379 |         await nextBtn.click();
  380 |         // Wait for the new page's cards to load (don't use a flat sleep)
  381 |         await this.page.locator('.MuiCard-root').first().waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
  382 |         return this.openFirstAppointment(pagesChecked + 1);
  383 |       }
  384 |     }
  385 | 
> 386 |     throw new Error(`No active appointment found after checking ${pagesChecked + 1} pages (target date: ${targetDate || 'any upcoming'})`);
      |           ^ Error: No active appointment found after checking 1 pages (target date: 30 Sep 2026)
  387 |   }
  388 |   async openReschedule() {
  389 |     // Wait for the appointment details panel to fully load
  390 |     await this.page.waitForTimeout(3000);
  391 | 
  392 |     // Try button role first, then fall back to text-based locator
  393 |     const rescheduleBtn = this.page.getByRole('button', { name: /Reschedule/i });
  394 |     const rescheduleText = this.page.locator('button, [role="button"], a').filter({ hasText: /Reschedule/i }).first();
  395 | 
  396 |     try {
  397 |       await rescheduleBtn.waitFor({ state: 'visible', timeout: 15000 });
  398 |       await rescheduleBtn.click();
  399 |     } catch {
  400 |       // Fallback: some UI renders Reschedule as a link or styled element
  401 |       await rescheduleText.waitFor({ state: 'visible', timeout: 15000 });
  402 |       await rescheduleText.click();
  403 |     }
  404 | 
  405 |     // wait till modal header appears
  406 |     await this.page
  407 |       .getByText('Reschedule Appointment')
  408 |       .waitFor({ timeout: 30000 });
  409 |   }
  410 | 
  411 |   /* ===============================
  412 |      RESCHEDULE APPOINTMENT (DYNAMIC – FINAL)
  413 |   =============================== */
  414 |   async rescheduleAppointment() {
  415 |     // Use locator instead of getByRole to avoid strict mode violation
  416 |     // MUI renders multiple [role="dialog"] elements (backdrop + content)
  417 |     const modal = this.page.locator('[role="dialog"]').last();
  418 | 
  419 |     await modal.waitFor({ state: 'visible', timeout: 20000 });
  420 | 
  421 |     // Slot elements are styled divs, not buttons — match "08:00 AM", "01:30 PM" etc.
  422 |     const slots = modal.locator('div').filter({
  423 |       hasText: /^\d{1,2}:\d{2}\s*(AM|PM)$/,
  424 |     });
  425 | 
  426 |     let slotPicked = false;
  427 | 
  428 |     // First try: slots on the default date
  429 |     try {
  430 |       await slots.first().waitFor({ state: 'visible', timeout: 10000 });
  431 |       await slots.first().click();
  432 |       slotPicked = true;
  433 |     } catch {
  434 |       // Try different dates via the date input
  435 |       const dateInput = modal.locator('input[placeholder="DD/MM/YYYY"]');
  436 |       // Search up to 45 days ahead for reschedule slot
  437 |       for (let dayOffset = 2; dayOffset <= 45; dayOffset++) {
  438 |         const d = new Date();
  439 |         d.setDate(d.getDate() + dayOffset);
  440 |         const formatted = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
  441 | 
  442 |         await dateInput.fill(formatted);
  443 |         await this.page.waitForTimeout(2000);
  444 | 
  445 |         if (await slots.first().isVisible().catch(() => false)) {
  446 |           await slots.first().click();
  447 |           slotPicked = true;
  448 |           break;
  449 |         }
  450 |       }
  451 |     }
  452 | 
  453 |     if (!slotPicked) {
  454 |       throw new Error('No available slot found for reschedule');
  455 |     }
  456 | 
  457 |     // Confirm
  458 |     const confirmBtn = modal.getByRole('button', {
  459 |       name: /Confirm and Reschedule/i,
  460 |     });
  461 | 
  462 |     await expect(confirmBtn).toBeEnabled({ timeout: 20000 });
  463 |     await confirmBtn.click();
  464 | 
  465 |     // Success toast
  466 |     await this.page.getByRole('alert').waitFor({ timeout: 30000 });
  467 |   }
  468 | 
  469 |   /* ===============================
  470 |    CANCEL APPOINTMENT (FINAL & STABLE)
  471 | =============================== */
  472 | // async cancelAppointment() {
  473 | //   // 1️⃣ Click Cancel button
  474 | //   const cancelBtn = this.page.getByRole('button', { name: /^Cancel$/i });
  475 | //   await cancelBtn.waitFor({ state: 'visible', timeout: 20000 });
  476 | //   await cancelBtn.click();
  477 | 
  478 | //   // 2️⃣ Confirm modal
  479 | //   const confirmCancelBtn = this.page.getByRole('button', {
  480 | //     name: /Yes, Cancel it/i,
  481 | //   });
  482 | 
  483 | //   await confirmCancelBtn.waitFor({ state: 'visible', timeout: 20000 });
  484 | //   await confirmCancelBtn.click();
  485 | 
  486 | //   // 3️⃣ Success toast
```