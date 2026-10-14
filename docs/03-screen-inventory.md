# EHMS screen inventory

**Observed in the authenticated interface on 12 October 2026.** This is a structural inventory of visible pages, actions and fields. A visible action does not prove its full workflow has been tested. No patient rows or credentials are included.

The route paths below are current EHMS observations; the empty Next.js folder tree is a future structure.

## Front desk

### 1. Dashboard — `/dashboard`


### 2. Patients — `/patients`

**Purpose:** Master patient index — search, manage and import.
**Visible controls:** ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** MRN · NAME · AGE · ID NUMBER · GENDER · BLOOD GROUP · PHONE · LEGACY REFERENCE ID · PATIENT CATEGORY · STATUS · REGISTERED · TIME · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 3. Register — `/patients/new`

**Purpose:** MRN is assigned automatically via the numbering scheme.
**Sections:** Identity · Demographics · Contact · Additional.
**Visible controls:** Self · Relative · Active · Inactive · Register Patient.
**Form fields:** ID Type · ID Number · ID belongs to · Legacy Reference ID · First Name * · Last Name * · Guardian · Guardian Name · Date of Birth · Gender · Blood Group · Marital Status · Status · Phone · Email · Province · District · City · Street / House · Emergency Contact · Emergency Relation · Emergency Phone · Remarks · Photo.

### 4. OPD Queue — `/opd/queue`

**Purpose:** LIVE.
**Visible controls:** ⌘K · quick actions · New Appointment · ▦ Table · ⫴ Board.
**Views:** ▦ Table · ⫴ Board.

### 5. Appointments — `/appointments`

**Purpose:** Book, reschedule and cancel — any day. Issue a token to put an arrived patient on the board..
**Visible controls:** New Appointment · ‹ · › · Import / Export · Columns · ← · →.
**List fields:** TOKEN · PATIENT · TIME · STATUS · Actions.

### 6. Visit alerts — `/alerts/visit-frequency`

**Purpose:** Patients who visited more than the configured threshold — investigate why the case keeps re-presenting..
**Visible controls:** All time · OPEN BREACHES 0 awaiting investigation · RESOLVED 0 closed with a reason · Columns · ← · →.
**List fields:** PATIENT · VISITS · DOCTOR(S) SEEN · RAISED · STATUS · Actions.

## Billing

### 7. Invoices — `/billing/invoices`

**Purpose:** Charge capture to cash — draft, finalize, collect..
**Visible controls:** ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ← · →.
**List fields:** INVOICE # · PATIENT · MRN · STATUS · SOURCE · NET · BALANCE · REGISTERED · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards.

### 8. Deposits — `/billing/deposits`

**Purpose:** Patient advances: what was taken, what it paid for, and what is still held..
**Visible controls:** HELD BALANCE PKR — · APPLIED TO BILLS — · All · Held (open) · Held · Partly applied · Fully applied · Refunded · Expired · All · Surgery · Appointment · Admission · Walk-in · Import / Export.
**List fields:** TAKEN · PATIENT · SOURCE · AMOUNT · APPLIED · BALANCE · AGE · STATUS.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

## Laboratory

### 9. Lab Worklist — `/lis/worklist`

**Purpose:** Accession, results and verification for lab orders..
**Visible controls:** ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ← · →.
**List fields:** ACCESSION # · PATIENT · MRN · TEST · STATUS · SCHEDULED · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards.

## Pharmacy

### 10. Held carts — `/pharmacy/held`

**Purpose:** Parked baskets — expire 24h after hold, then move to Discarded..
**Visible controls:** Open (0) · Discarded (0).
**List fields:** RECEIPT · HELD AT · PATIENT · CASHIER · LINES.

### 11. Pharmacy Counter — `/pharmacy/pos`

**Purpose:** Scan or search, build the basket, take payment.
**Visible controls:** Return · Find patient F4 · Take payment F9 · Hold · Held.

### 12. Returns — `/pharmacy/returns`

**Purpose:** Every sale with a reversal — opens the receipt + the refund GL journal..
**List fields:** RECEIPT · TIME · PATIENT · CASHIER · STATUS · VALUE · GL.

### 13. Sales — `/pharmacy/sales`

**Purpose:** Every receipt the counter posted — drill to the sale, the shift, or the GL journal behind it..
**Visible controls:** Import / Export · Columns · ▦ Table · ▤ Cards · ⫴ Board · ← · →.
**Form fields:** Include voided.
**List fields:** RECEIPT # · TIME · CASHIER · PATIENT · STORE · LINES · GROSS · DISCOUNT · NET · TENDER · GL · SHIFT · STATUS.
**Views:** ▦ Table · ▤ Cards · ⫴ Board.

### 14. Shifts — `/pharmacy/shifts`

**Purpose:** Every drawer the counter opened — Open / Reconciled / Locked..
**Visible controls:** ALL · OPEN · RECONCILED · LOCKED.
**List fields:** SHIFT · CASHIER · OPENED · CLOSED · FLOAT · SYSTEM · COUNTED · VARIANCE · STATUS.

### 15. Prescription entry — `/prescriptions/new`

**Purpose:** Type the prescription off the paper — who prescribed it and who entered it are kept apart.
**Visible controls:** Add medicine · Save prescription.
**Form fields:** Patient · Token So the pharmacy loads it from the QR scan · Prescribed by — The doctor who wrote it (you are recorded as the one who entered it) · Medicine · Dosage — · Days · Quantity — Dosage × days, in the medicine’s unit · Dispense as written · Instructions.

## Surgery

### 16. Surgery schedule — `/surgery/schedule`

**Purpose:** Who has to be booked, and what is coming up.
**Visible controls:** TO SCHEDULE 0 Advised, not yet booked · UPCOMING 0 Booked and advance-paid cases · AWAITING ADVANCE 0 Booked, advance required, none held · ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ← · →.
**List fields:** CASE · PATIENT · PROCEDURE / PACKAGE · SURGEON · DATE · MONEY · STATUS · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards.

### 17. Surgery day — `/surgery/day`

**Purpose:** The day's list: who has arrived, who is next, what is held.
**Visible controls:** Today · Postpone day · ON THE BOARD 0 · LONGEST WAIT — · All 0 · Scheduled 0 · Arrived 0 · In theatre 0 · Completed 0 · Post-op 0 · Import / Export · Columns · ▦ Table · ▤ Cards · ⫴ Board.
**List fields:** QUEUE · CASE · PATIENT · PROCEDURE / PACKAGE · SURGEON · MONEY · STATUS · Actions.
**Views:** ▦ Table · ▤ Cards · ⫴ Board.

### 18. Cases — `/surgery/cases`

**Purpose:** Every surgery case, every state — filter by surgeon, status or date range..
**Visible controls:** Columns · ▦ Table · ▤ Cards · ← · →.
**Form fields:** Status Any ADVISED BOOKED ADVANCE_PAID PRE_OP ARRIVED IN_OR COMPLETED POST_OP DISCHARGED RECONCILED CANCELLED · Surgeon Any · From · To.
**List fields:** CASE # · PATIENT · PROCEDURE / PACKAGE · SURGEON · SCHEDULED · EST. VALUE · STATUS.
**Views:** ▦ Table · ▤ Cards.

## IPD

### 19. Bed board — `/ipd/beds`

**Purpose:** Ward by ward — who is in, what is free, what needs cleaning.
**Visible controls:** OCCUPANCY 0% 0/0 beds.

### 20. Admissions — `/ipd/admissions`

**Purpose:** Everyone currently admitted — days, running bill, bed, doctor.
**Visible controls:** Import / Export · Columns · ▦ Table · ▤ Cards · ← · →.
**List fields:** ADMISSION · PATIENT · BED · DOCTOR · DAYS · RUNNING BILL · Actions.
**Views:** ▦ Table · ▤ Cards.

### 21. Housekeeping — `/ipd/housekeeping`

**Purpose:** Beds waiting to be cleaned after a discharge or transfer — oldest first.
**Visible controls:** Import / Export · Columns · ▦ Table · ▤ Cards · ← · →.
**List fields:** BED · CLASS · LAST PATIENT · WAITING · Actions.
**Views:** ▦ Table · ▤ Cards.

## Procurement

### 22. Requisitions — `/procurement/requisitions`

**Purpose:** What a store or department needs — tracked through approval to ordering.
**Sections:** By state · Raised — 6 months · Pending by store · Ageing of the approval queue.
**Visible controls:** Suggest · New requisition · AWAITING APPROVAL — · NEED YOUR APPROVAL — · DRAFTS — · APPROVED — · ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** REQ # · STORE · STATUS · ORDERED TO · LINES · EST. VALUE · WAITING · REQUESTED BY · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 23. Purchase orders — `/procurement/purchase-orders`

**Purpose:** What we order from one supplier, at what rate.
**Sections:** By state · Ordered value — 6 months · Committed by supplier · Delivery risk (open orders).
**Visible controls:** New purchase order · OPEN (ISSUED / RECEIVING) — · OVERDUE — · PARTIALLY RECEIVED — · FULLY RECEIVED — · ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** PO # · SUPPLIER · CHAIN · STATUS · TOTAL · RECEIVED · BILLED · EXPECTED · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 24. Goods receipt — `/procurement/grns`

**Purpose:** What actually arrived against a purchase order.
**Sections:** Invoice state · Receipt value — 6 months · Received by supplier · Expiry of accepted stock.
**Visible controls:** QC · Quarantine · Near-expiry stock · Receive goods · RECEIVED TODAY — · AWAITING INVOICE — · NEAR-EXPIRY ACCEPTED — · ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** GRN # · SUPPLIER · FROM · INVOICE · VALUE · VARIANCE · OPEN · RECEIVED BY · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 25. Opening stock — `/procurement/opening-stock`

**Purpose:** Set the go-live starting balance for items, per store.
**Visible controls:** OPENING ENTERED 0 0% of items initialised · MOVED AFTER OPENING 0 Editing posts a delta, not an overwrite · Opening-stock ledger · Import / Export · Columns · ▦ Table · ▤ Cards · ← · →.
**Form fields:** Store · Ledger Opening-stock ledger.
**List fields:** Expand · ITEM · CURRENT ON-HAND · OPENING QTY · UNIT COST · OPENING VALUE.
**Views:** ▦ Table · ▤ Cards.

### 26. Purchase returns — `/procurement/returns`

**Purpose:** Goods sent back to a supplier — replacement, credit or refund.
**Sections:** Returns by reason · Return value — 6 months · Top suppliers · Ageing of open returns.
**Visible controls:** Apr 12, 2026 – Oct 12, 2026 · AWAITING SETTLEMENT — · CREDIT NOTES — · REPLACEMENTS — · REFUNDS — · SETTLED — · ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** RETURN # · SUPPLIER · FROM · STATUS · REASON · SETTLEMENT · VALUE · UNRESOLVED · DAYS · CREATED · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 27. Supplier invoices — `/procurement/supplier-invoices`

**Purpose:** What a supplier billed us — matched three ways against the PO and receipts.
**Sections:** By state · Aging · Forecast · Payable by supplier.
**Visible controls:** New supplier invoice · ON HOLD — · OUTSTANDING — · OVERDUE — · DUE THIS WEEK — · ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** INVOICE # · SUPPLIER · CHAIN · STATUS · TOTAL · VARIANCE · DUE DATE · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 28. Supplier Payments — `/procurement/supplier-payments`

**Purpose:** What you owe, what you have paid, and cheques not yet cleared.
**Visible controls:** Apr 12, 2026 – Oct 12, 2026 · Pay a supplier · PAYABLE OUTSTANDING — · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** VOUCHER · PAYEE · METHOD · STATUS · AMOUNT · DATE.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 29. Controlled-Drug Register — `/procurement/controlled-register`

**Purpose:** Statutory receiving ledger for controlled & narcotic items — what came in, which batch, from whom, and the running balance.
**Visible controls:** ＋ Filter · Columns · ▦ Table · ☰ List · ← · →.
**List fields:** DATE · DIR · ITEM · BATCH / EXPIRY · QTY · BALANCE · SUPPLIER / STORE · DOCUMENT.
**Views:** ▦ Table · ☰ List.

### 30. Stock Audits — `/procurement/stock-audits`

**Purpose:** Physical counts against system quantity — variance computed automatically.
**Visible controls:** Start audit · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** # · STORE · SCOPE · ITEMS · VARIANCE · STARTED · STATUS.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 31. Inter-store Transfers — `/procurement/stock-transfers`

**Purpose:** Request → accept or reject → stock moves, both directions.
**Visible controls:** Request transfer · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** FROM STORE · TO STORE · ITEM · QUANTITY · REQUESTED · STATUS.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 32. Internal Need Requests — `/procurement/stock-needs`

**Purpose:** “We're running low, please send some” — every request needs a reason.
**Visible controls:** Raise request · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** REQUESTING STORE · ITEM · QUANTITY · REASON · REQUESTED · STATUS.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 33. OT Stock Forecast — `/procurement/stock-forecast`

**Purpose:** Today's booked cases, summed against on-hand at the OT store.
**List fields:** ITEM · NEEDED · ON HAND · SHORTFALL.

## Claims and revenue cycle

### 34. Coverage Check — `/rcm/eligibility`

**Purpose:** Every patient’s payer coverage, dated — what an invoice checks eligibility against.
**Visible controls:** Add coverage · Columns · ▦ Table · ☰ List · ▤ Cards · ← · →.
**List fields:** PATIENT · PAYER · MEMBER # · PLAN NAME · EFFECTIVE FROM · EFFECTIVE TO · STATUS.
**Views:** ▦ Table · ☰ List · ▤ Cards.

### 35. Pre-Authorization — `/rcm/pre-auth`

**Purpose:** Requests requiring payer sign-off before billing — PENDING → APPROVED or DENIED.
**Visible controls:** Raise request · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** SERVICE · MODULE · REQUESTED · STATUS.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 36. Claims Register — `/rcm/claims`

**Purpose:** Built from finalized, payer-billed invoices — DRAFT → SUBMITTED → adjudicated or denied.
**Visible controls:** Build claim · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** CLAIM # · PATIENT · PAYER · INVOICE · PAYER AMOUNT · PATIENT AMOUNT · REQUESTED · STATUS.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 37. Denial Workqueue — `/rcm/denials`

**Purpose:** Every denied claim and claim line — categorize, write off, or appeal..
**Visible controls:** Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** CLAIM # · PATIENT · PAYER · REASON · CATEGORY · AMOUNT · RAISED · STATUS.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 38. Payer AR Aging — `/rcm/aging`

**Purpose:** What every payer still owes, per claim, aged by submission date — not by invoice date.
**Sections:** Receivables ageing (by amount outstanding).
**Visible controls:** Full AR ageing (patients + payers) · Columns · ▦ Table · ▤ Cards · ← · →.
**List fields:** PAYER · AGEING · OUTSTANDING.
**Views:** ▦ Table · ▤ Cards.

## Accounting

### 39. Chart of Accounts — `/accounting/chart-of-accounts`

**Purpose:** General-ledger master · tenant-wide.
**Visible controls:** New account · ＋ Filter · Columns · ▦ Table · ⑂ Tree · ▤ Cards · ← · →.
**List fields:** CODE · ACCOUNT · TYPE · BALANCE · ACTIVITY · STATUS · Actions.
**Views:** ▦ Table · ⑂ Tree · ▤ Cards.

### 40. Trial Balance — `/accounting/trial-balance`

**Purpose:** Every posting account · opening → movement → closing.
**Visible controls:** Grouped · Flat · Jan 01, 2026 – Oct 12, 2026 · Export.
**Form fields:** Compare No comparison Prior period Prior year.

### 41. General Ledger — `/accounting/ledger`

**Purpose:** Pick an account.
**Visible controls:** Select an account… · Jan 01, 2026 – Oct 12, 2026 · Columns · ← · →.
**List fields:** DATE · JOURNAL # · NARRATION · DEBIT · CREDIT · BALANCE.

### 42. Profit & Loss — `/accounting/profit-loss`

**Purpose:** Income statement · live from the general ledger.
**Visible controls:** Jan 01, 2026 – Oct 12, 2026.
**Form fields:** Compare No comparison Prior period Prior year.

### 43. Balance Sheet — `/accounting/balance-sheet`

**Purpose:** Financial position · live from the general ledger.
**Form fields:** Compare No comparison Prior year · As of.

### 44. Cash Flow — `/accounting/cash-flow`

**Purpose:** Cash movement by activity · live from the general ledger.
**Visible controls:** Jan 01, 2026 – Oct 12, 2026.

### 45. Cost Centres — `/accounting/cost-centers`

**Purpose:** Departmental P&L · revenue, expense and net by centre.
**Visible controls:** Jan 01, 2026 – Oct 12, 2026 · Export.

### 46. Journal Register — `/accounting/journals`

**Purpose:** Every GL journal · the double-entry behind each document.
**Visible controls:** All time · Columns · ← · →.
**List fields:** DATE · JOURNAL # · NARRATION · MODULE · AMOUNT · STATUS.

### 47. Manual Journal — `/accounting/manual-journal`

**Purpose:** Adjusting entries · accruals, corrections, reclassifications.
**Visible controls:** Add line · Review & post.
**Form fields:** Date · Narration.

### 48. GL Exceptions — `/accounting/gl-exceptions`

**Purpose:** Unmapped postings that block the day-close.
**Visible controls:** Columns · ← · →.
**List fields:** SOURCE TYPE · OCCURRENCES · OLDEST · AMOUNT STUCK.

### 49. Fund Ledger — `/accounting/fund-ledger`

**Purpose:** Charity funds · zakat, sadqa, trust, charity box.
**Visible controls:** Columns · ▦ Table · ▤ Cards · ← · →.
**List fields:** FUND LEDGER · NAME · BALANCE · MOVEMENTS.
**Views:** ▦ Table · ▤ Cards.

### 50. Cash Shifts — `/accounting/cash-shifts`

**Purpose:** Cashier drawer sessions · float → reconcile → Z-report.
**Visible controls:** All time · ＋ Filter · Columns · ← · →.
**List fields:** OPENED · CASHIER · STATUS · EXPECTED · COUNTED · VARIANCE.

### 51. Expenses — `/accounting/expenses`

**Purpose:** Operating expenses & petty cash · posted to the general ledger.
**Visible controls:** New expense · ＋ Filter · Columns · ▦ Table · ▤ Cards · ← · →.
**List fields:** VOUCHER · DATE · EXPENSE ACCOUNT · PAID TO · METHOD · A.EXP.AMOUNT · STATUS.
**Views:** ▦ Table · ▤ Cards.

### 52. Treasury — `/accounting/treasury`

**Purpose:** Liquidity, payables & cheque float · live from the general ledger.
**Visible controls:** Columns · ▦ Table · ▤ Cards · ← · →.
**List fields:** CODE · NAME · MOVEMENTS · BALANCE.
**Views:** ▦ Table · ▤ Cards.

### 53. Payables Ageing — `/accounting/ap-aging`

**Purpose:** What the hospital owes suppliers · aged · live from the general ledger.
**Sections:** Payables ageing (by amount outstanding).
**Visible controls:** Columns · ▦ Table · ▤ Cards · ← · →.
**List fields:** SUPPLIER · AGEING · OUTSTANDING.
**Views:** ▦ Table · ▤ Cards.

### 54. Receivables Ageing — `/accounting/ar-aging`

**Purpose:** What is owed to the hospital · aged · patients & payers.
**Sections:** Receivables ageing (by amount outstanding).
**Visible controls:** ＋ Filter · Columns · ▦ Table · ▤ Cards · ← · →.
**List fields:** DEBTOR · TYPE · AGEING · OUTSTANDING.
**Views:** ▦ Table · ▤ Cards.

### 55. Bank Reconciliation — `/accounting/bank-reconciliation`

**Purpose:** Match a bank statement to the general ledger.
**Visible controls:** Export · Import statement.

### 56. Cheques in Hand — `/accounting/cheques-in-hand`

**Purpose:** Every patient cheque received, tracked through clearing or bounce.
**Visible controls:** RECEIVED 0 PKR 0 · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** CHEQUE # · BANK · PATIENT · INVOICE · CHEQUE DATE · AMOUNT · MODE · STATUS.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 57. Day Close — `/accounting/day-close`

**Purpose:** Facility financial close.
**Visible controls:** Month-end close.

### 58. Period Close — `/accounting/period-close`

**Purpose:** Lock accounting periods · posting freeze.
**Visible controls:** Day Close · Export.

### 59. Opening — Patients — `/accounting/opening-balances/patients`

**Purpose:** Go-live receivables owed by patients. Positive = owes us; negative = advance/credit..
**Visible controls:** Opening Balance Equity (3001)… · Import / Export · Columns · ▦ Table · ▤ Cards · ← · →.
**Form fields:** Counter ledger Opening Balance Equity (3001)… · As-of date.
**List fields:** MRN · NAME · OPENING RECEIVABLE (THEY OWE YOU) · GL.
**Views:** ▦ Table · ▤ Cards.

### 60. Opening — Payers — `/accounting/opening-balances/payers`

**Purpose:** Go-live receivables owed by payers / corporate accounts..
**Visible controls:** Opening Balance Equity (3001)… · Import / Export · Columns · ▦ Table · ▤ Cards · ← · →.
**Form fields:** Counter ledger Opening Balance Equity (3001)… · As-of date.
**List fields:** CODE · NAME · TYPE · OPENING RECEIVABLE (THEY OWE YOU) · GL.
**Views:** ▦ Table · ▤ Cards.

### 61. Opening — Suppliers — `/accounting/opening-balances/suppliers`

**Purpose:** Go-live payables we owe suppliers. Positive = we owe them..
**Visible controls:** Opening Balance Equity (3001)… · Import / Export · Columns · ▦ Table · ▤ Cards · ← · →.
**Form fields:** Counter ledger Opening Balance Equity (3001)… · As-of date.
**List fields:** CODE · NAME · TYPE · OPENING PAYABLE (YOU OWE THEM) · GL.
**Views:** ▦ Table · ▤ Cards.

### 62. Opening — GL accounts — `/accounting/opening-balances/gl`

**Purpose:** Go-live balance on any posting account. Positive = debit; negative = credit..
**Visible controls:** Opening Balance Equity (3001)… · Import / Export · Columns · ▦ Table · ▤ Cards · ← · →.
**Form fields:** Counter ledger Opening Balance Equity (3001)… · As-of date.
**List fields:** ACCOUNT · NAME · TYPE · OPENING BALANCE (DEBIT + / CREDIT −) · GL.
**Views:** ▦ Table · ▤ Cards.

### 63. Employees — `/hr/employees`

**Purpose:** The staff roster — headcount, salary base, tenure and links to payroll.
**Visible controls:** Add employee · ACTIVE HEADCOUNT — · JOINED THIS MONTH — · ＋ Filter · Import / Export · Columns · ▦ Table · ▤ Cards · ← · →.
**List fields:** CODE · NAME · DESIGNATION · DEPARTMENT · TYPE · GROSS SALARY · TENURE · STATUS.
**Views:** ▦ Table · ▤ Cards.

## Human resources

### 64. Attendance — `/hr/attendance`

**Purpose:** Monthly attendance — mark absence and see the pay it costs, per employee.
**Visible controls:** Import / Export · All · Not marked · Exceptions · Columns · ▦ Table · ▤ Cards · ← · →.
**List fields:** CODE · NAME · DEPARTMENT · PER DAY · ABSENT · UNPAID LEAVE · PAID LEAVE · PRESENT · DEDUCTION · STATUS.
**Views:** ▦ Table · ▤ Cards.

### 65. Loans & advances — `/hr/loans`

**Purpose:** Staff loans as open items — disbursed to GL, recovered via payroll.
**Visible controls:** Import / Export · New loan · Columns · ▦ Table · ▤ Cards · ← · →.
**List fields:** LOAN # · EMPLOYEE · TYPE · PRINCIPAL · OUTSTANDING · NEXT INSTALLMENT · PAID · STATUS.
**Views:** ▦ Table · ▤ Cards.

### 66. Payroll runs — `/hr/payroll/runs`

**Purpose:** Generate, review, approve and disburse the monthly payroll.
**Visible controls:** New run · IN REVIEW 0 awaiting approval · NOT YET POSTED 0 draft / approved, no GL · Import / Export · Columns · ▦ Table · ▤ Cards · ⫴ Board · ← · →.
**List fields:** PERIOD · STATUS · GROSS · NET · POSTED · CREATED.
**Views:** ▦ Table · ▤ Cards · ⫴ Board.

### 67. Doctor accruals — `/hr/doctor-accruals`

**Purpose:** Monthly doctor retainer → Doctor Payable (separate from payroll).
**Visible controls:** Import / Export · Accrue period.
**List fields:** DOCTOR · RETAINER · OUTSTANDING · ON STAFF · STATUS.

### 68. Organisation — `/admin/organisation`

**Purpose:** Your hospital’s own details — these appear on every printed page..
**Sections:** Letterhead extras.
**Visible controls:** Edit details · Edit letterhead.

## Administration

### 69. Departments — `/admin/departments`

**Purpose:** Clinical departments and their pre-encounter workflow..
**Visible controls:** New Department · ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** CODE · NAME · STATUS · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 70. Journey Stages — `/admin/journey-stages`

**Purpose:** Configure the per-department stages a patient moves through..
**Visible controls:** Add stage.
**Form fields:** Department Facility default.

### 71. Doctors — `/admin/doctors`

**Purpose:** Doctor master — specialty, department, registration and fees..
**Visible controls:** New Doctor · ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** NAME · SPECIALTY · DEPARTMENTS · REGISTRATION # · FEE CONFIGURATION · STATUS · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 72. Doctor scoreboard — `/admin/doctors/ranking`

**Purpose:** Ranked by how many patients each doctor handled without tipping into over-visiting. Score = resolved ÷ seen..
**Visible controls:** Apr 12, 2026 – Oct 12, 2026 · Columns · ← · →.
**List fields:** DOCTOR · PATIENTS SEEN · BREACHES · RESOLVED · SCORE.

### 73. Services & Tariff — `/admin/services`

**Purpose:** Service catalog — category drives order routing; price feeds billing..
**Visible controls:** New Service · ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** CODE · NAME · CATEGORY · DEPARTMENTS · DEFAULT PRICE · STANDARD PRICE · STATUS · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 74. Payers — `/admin/payers`

**Purpose:** Insurers, corporates and panels the hospital bills beyond a walk-in patient.
**Visible controls:** New payer · Columns · ▦ Table · ☰ List · ▤ Cards · ← · →.
**List fields:** CODE · NAME · TYPE · STATUS · PRICE LISTS.
**Views:** ▦ Table · ☰ List · ▤ Cards.

### 75. Price Lists — `/admin/price-lists`

**Purpose:** Payer tariffs and the default list, each effective-dated.
**Visible controls:** New price list · Columns · ▦ Table · ☰ List · ▤ Cards · ← · →.
**List fields:** CODE · NAME · PAYER · EFFECTIVE FROM · EFFECTIVE TO · LINES.
**Views:** ▦ Table · ☰ List · ▤ Cards.

### 76. Surgical Packages — `/admin/packages`

**Purpose:** One price the patient hears — and whether it covers what we hand over.
**Sections:** Packaged cases delivered · Revenue by package.
**Visible controls:** How this works · ACTIVE PACKAGES 0 0 inactive · 0 in pipeline · PRICED BELOW COST 0 Package price is under what the inclusions cost us · ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ← · →.
**List fields:** PROCEDURE · LENS · CODE · NAME · PRICE · INCLUDED COST · MARGIN · CASES · LAST USED · STATUS · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards.

### 77. Package leakage — `/admin/packages/leakage`

**Purpose:** Medicine the hospital gave away beyond what its packages cover — every waived line, with who authorised it..
**Visible controls:** Jan 01, 2026 – Oct 12, 2026 · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ← · →.
**List fields:** PACKAGE · LINES · AMOUNT · REASON · LINES · AMOUNT · ITEM · WAIVED ON · PACKAGE · ADMISSION · AMOUNT · REASON · NOTE · AUTHORISED BY.
**Views:** ▦ Table · ☰ List · ▤ Cards.

### 78. Operating Theatres — `/admin/operating-theatres`

**Purpose:** Each theatre has its own working hours — they decide how full the day board says each one is..
**Visible controls:** New theatre · ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** CODE · NAME · WORKING HOURS · AVAILABLE / DAY · OPEN CASES · STATUS · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 79. Test Templates — `/admin/test-templates`

**Purpose:** Author a test as data — fields, ranges, units and a print layout.
**Visible controls:** New Template · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ← · →.
**List fields:** CODE · NAME · SERVICE (FEE) · PRINT LAYOUT · FIELDS · STATUS · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards.

### 80. Stock Items — `/admin/items`

**Purpose:** Medicines, consumables, implants — the pharmacy & inventory master.
**Sections:** Stock health · Value by category · Items by category · By type.
**Visible controls:** New item · BELOW REORDER — · OUT OF STOCK — · EXPIRING ≤90D — · DEAD STOCK — · ＋ Filter · Import / Export · Columns · ▦ Table · ▤ Cards · ⫴ Board · ← · →.
**List fields:** CODE · NAME · TYPE · ON HAND · COVER · TREND · REORDER VALUE · STOCK VALUE · SUPPLIERS · SALE PRICE · NEAREST EXPIRY · ACTIVE · Actions.
**Views:** ▦ Table · ▤ Cards · ⫴ Board.

### 81. Units of measure — `/admin/uoms`

**Purpose:** The unit vocabulary, grouped by base unit — a sub-unit belongs to a base, not just a dimension.
**Visible controls:** Import / Export · New base unit.

### 82. Suppliers — `/admin/suppliers`

**Purpose:** Vendors you buy from — per-item rates live on the item form.
**Sections:** By standing · Payable by supplier · Items by supplier · By type.
**Visible controls:** New supplier · PAYABLES OUTSTANDING — · OPEN RETURNS — · ＋ Filter · Import / Export · Columns · ▦ Table · ▤ Cards · ⫴ Board · ← · →.
**List fields:** CODE · NAME · ITEMS · PAYABLES · OPEN RETURNS · LEAD · SCORECARD · STANDING · STATUS · Actions.
**Views:** ▦ Table · ▤ Cards · ⫴ Board.

### 83. Stores — `/admin/stores`

**Purpose:** Physical stock locations — pharmacies, central store, OT.
**Sections:** Stock value by store · Today's movements by store · By type.
**Visible controls:** New store · BELOW REORDER — · MOVEMENTS TODAY — in, out, transfers · Import / Export · Columns · ▦ Table · ▤ Cards · ← · →.
**List fields:** CODE · NAME · ITEMS · STOCK VALUE · BELOW REORDER · OUT · TODAY · NET FLOW 30D · STATUS · Actions.
**Views:** ▦ Table · ▤ Cards.

### 84. Charity Funds — `/admin/funds`

**Purpose:** Trust, zakat, sadqa, charity box — each its own ledger and balance.
**Visible controls:** New fund · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ← · →.
**List fields:** CODE · NAME · TYPE · LEDGER · BALANCE · AVAILABLE · STATUS · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards.

### 85. Dosages — `/admin/dosages`

**Purpose:** The 1×1×1 patterns a doctor picks — and what makes the quantity computable.
**Visible controls:** New dosage · Import / Export · Columns · ▦ Table · ☰ List · ← · →.
**List fields:** CODE · NAME · MORNING · AFTERNOON · EVENING · NIGHT · PER DAY · INSTRUCTION · STATUS · Actions.
**Views:** ▦ Table · ☰ List.

### 86. Diagnoses (ICD-10) — `/admin/diagnoses`

**Purpose:** Disease master — ICD codes, custom entries, clinical guidance..
**Visible controls:** New Diagnosis · ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ← · →.
**List fields:** ICD CODE · NAME · LOCAL NAME · NOTIFIABLE · FOLLOW-UP (DAYS) · STATUS · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards.

### 87. Lookups — `/admin/lookups`

**Purpose:** Business lists — types, categories, units. Admin-editable, no code..
**Visible controls:** New Type · ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** CODE · LABEL · SORT · STATUS · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 88. Custom Fields — `/admin/custom-fields`

**Purpose:** Design extra form fields; the preview shows exactly what forms render..
**Visible controls:** New Field · ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** CODE · LABEL · TYPE · LOOKUP · APPLIES TO · REQUIRED · STATUS · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 89. Categories — `/admin/categories`

**Purpose:** Grouping tree used by lists, filters and custom-field scoping..
**Visible controls:** New Category · ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ⫴ Board · ← · →.
**List fields:** CATEGORY · LABEL · STATUS · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards · ⫴ Board.

### 90. Numbering — `/admin/numbering`

**Purpose:** Document number formats — MRN, invoices, tokens. Forward-only..
**Visible controls:** ＋ Filter · Import / Export · Columns · ▦ Table · ☰ List · ▤ Cards · ← · →.
**List fields:** DOCUMENT · PREFIX · DIGITS · NEXT # · SAMPLE · RESETS · STATUS · Actions.
**Views:** ▦ Table · ☰ List · ▤ Cards.

### 91. System Configuration — `/admin/config`

**Purpose:** Settings and features for this facility. High-impact changes ask you to confirm..
**Visible controls:** Settings · Features · Details · Details · Details · Details · Details · Details · Details · Details · Details · Details · Details · Details · Details.
**Form fields:** Show technical keys · Inactive · Inactive · Inactive · Inactive · Inactive · Inactive · Inactive · Inactive · Inactive · Inactive · Inactive · Senior citizen · Staff · Medical camp · Charity · Inactive · Medicine · Surgical supply · Implant · Inactive · Inactive · Inactive · Inactive · Inactive · Lowercase letter · Uppercase letter · Digit · Symbol.

### 92. Payroll config — `/admin/payroll-config`

**Purpose:** Statutory and run-level knobs for payroll.

### 93. Print Templates — `/admin/print-templates`

**Purpose:** Choose the default template each document prints with — A4 and thermal both use it..
**Visible controls:** Set as default · A4 · Thermal 80mm · EN · UR · AR.

### 94. Roles & Permissions — `/admin/roles`

**Purpose:** What each role can do. Pick a role and tick its capabilities. Seeded roles are read-only — clone one to customise..
**Visible controls:** New role.

### 95. Staff Users — `/admin/users`

**Purpose:** Who can sign in, as whom, and with which roles..
**Visible controls:** New user · ＋ Filter · Import / Export · Columns · ▦ Table · ▤ Cards · ← · →.
**List fields:** USERNAME · FULL NAME · ROLES · LINKED TO · STATUS · Actions.
**Views:** ▦ Table · ▤ Cards.

### 96. Dashboards — `/admin/dashboards`

**List fields:** USER · DASHBOARD.

### 97. Backup — `/admin/backups`

**Purpose:** Download a full backup of the database to your computer..

## System

### 98. Appearance — `/settings/appearance`

**Purpose:** Your choice is saved to your profile — it follows you across devices..
**Visible controls:** Comfortable · Compact · Custom · Theme default · English · اردو · العربية · Aa Theme default · Aa Inter · Aa Space Grotesk · Aa Manrope · Aa DM Sans · Aa IBM Plex Serif · اب نستعلیق — Nastaliq · اب نسخ — Naskh.

### 99. My password — `/settings/profile`

**Purpose:** Update your own sign-in password..
**Visible controls:** Change password.
**Form fields:** Current password · New password Use at least 8 characters, including a lowercase letter and a digit. · Confirm new password.

## Interpretation

The list includes 99 navigation destinations. The page survey captured headings, labels, controls and table headers only. Status wording, validation, permissions, posting effects and screen transitions need scenario-based acceptance testing before implementation.