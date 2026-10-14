# EHMS — end-to-end workflows

Each workflow states the intended handoffs and invariants. **Observed** elements are named from the live interface or the published product material. Decision rules labeled **proposed** require facility approval before implementation.

## 1. Patient arrival to checkout

**Actors:** patient, reception, vitals, biometry, doctor, lab, pharmacy, cashier.  
**Observed surfaces:** patient index, registration, appointments, OPD queue, journey stages, lab worklist, prescription entry, pharmacy counter, invoices and deposits.

1. Search by MRN, name, identity document or phone before creating a patient. Show potential matches and enough non-sensitive context for safe selection. **Proposed:** uncertain matches require a second identifier; never merge automatically.
2. Register the patient if no match exists. Identity document type and ownership are separate fields. Assign a unique MRN from the configured numbering scheme. Record who registered and the branch.
3. Book an appointment or mark a walk-in arrival. Issue a token once for the visit. An arrival should join the correct department queue without creating a second encounter on repeat click.
4. Run the configured journey stages. The published example is Registration → Vitals → Biometry → Consultation → optional Lab → optional Pharmacy → Checked Out. A person advances manual stages; verified lab order and completed dispense can advance system stages.
5. Queue screen shows on-board count, longest wait, moving/waiting totals, blocked patients, stuck patients and wait thresholds. A blocked stage needs a reason, owner and escalation path. **Proposed:** define the exact timer start, pause and reset events with operational staff.
6. Doctor reviews history and encounter, records diagnosis and orders, and decides treatment, follow-up, admission or surgery. Clinical documentation must retain author and amendment history. **Proposed:** critical results need acknowledgement.
7. Lab receives an accession, captures structured results from a test template and verifies them. Verification should be distinct from draft entry, with a visible verifier and time.
8. Pharmacy receives an order or paper prescription. The paper-entry surface explicitly separates the prescriber from the operator. Validate stock and dispense quantity; capture substitutions, partial fills and returns as distinct actions. **Proposed:** controlled items require the appropriate extra register and authorization.
9. Bill all services and items with the correct tariff, payer and funding source. Show gross, discount, net, paid, deposit applied and balance. A funded discount identifies exactly one eligible charitable fund.
10. Close the visit only when required stages and unresolved blockers meet the facility's policy. A later return should appear as a new visit under the same MRN, and repeat-visit alerts should be reviewable rather than automatically labeling a clinician's care as inappropriate.

**Exception paths:** patient cannot identify themselves; duplicate profile; emergency bypass; missed appointment; stage skipped by authorized override; lab order cancelled; pharmacy out of stock; patient leaves early; partial payment; network interruption. Each exception requires a reason and audit event. Do not let a front-desk override silently alter a posted financial event.

## 2. Appointment to live OPD board

The observed appointment page supports booking, rescheduling and cancellation for any day, and says issuing a token places an arrived patient on the board. The screen contains previous/next date navigation and token, patient, time and status columns. The OPD board offers table and board modes with department and wait filters.

**Required behavior:** booking checks doctor/department availability and collisions; rescheduling retains previous slot in history; cancellation retains reason; token issue is idempotent; duplicate active tokens for the same visit are flagged; queue order distinguishes scheduled arrival, walk-in and authorized priority. A manager can inspect why a patient is stuck, who owns the next step and how long they have waited. **Proposed:** allow priority policy to be configured by facility rather than hard-coded.

## 3. Cataract package and surgery day

**Observed:** surgical packages contain procedure, lens, one quoted price, included cost and margin. Package leakage reports waived extra medicine/consumables with authorizer. The surgery schedule distinguishes advised-not-booked, upcoming booked cases and booked cases awaiting an advance. The surgery-day board shows scheduled, arrived and in-theatre states. The case register filters by surgeon, status and date. Theatre master data defines working hours; OT stock forecast compares booked-case needs with store on-hand.

**Proposed flow:** consultation advises procedure → surgeon/package/lens choice → quote and informed financial explanation → coverage or fund approval as applicable → booking and advance policy check → preoperative checklist and consent → theatre slot → OT stock reservation and shortage review → patient arrives → in theatre → procedure completed → consumed items reconciled → post-op recovery and discharge → invoice and package variance review → follow-up appointment.

**Rules:** package inclusions are versioned at booking; changing the master price later must not rewrite a prior quote. Record covered quantity and over-limit billable quantity per line. Waived overage needs approver and reason. A cancellation releases reservations and reconciles deposits according to policy. A procedure cannot be marked complete without its required clinical documentation. **Proposed:** clinical sign-off and consent requirements must be set by the hospital's clinical lead.

## 4. Admission, bed and housekeeping

**Observed:** admissions lists admission, patient, bed, doctor, days and running bill. The published bed-board image groups by ward/room and shows occupancy, free, cleaning and blocked states. Housekeeping shows beds waiting after discharge or transfer, oldest first.

**Proposed state path:** free → reserved → occupied → discharge/transfer pending → needs cleaning → cleaning in progress → inspection → free. A blocked bed has a reason and is excluded from availability. Only an authorized role may override reservation conflicts. Transfer records both source and destination with effective time. The current admission remains linked to all bed moves and charges. Discharge should trigger cleaning automatically and display outstanding clinical and financial tasks. A housekeeping completion should not release a bed if infection-control inspection is required.

## 5. Laboratory order to verified report

**Observed:** lab worklist is described as accession, results and verification; test templates define fields, reference ranges, units and print layout.

**Proposed flow:** clinician orders a service → system creates accession and specimen requirements → collection labels specimen and records collector/time → accession acceptance or rejection with reason → result entry against the active template version → abnormal/critical flag calculation → technical verification → clinician notification/acknowledgement when required → release/print through the correct language template. Cancellations and corrected reports retain original values and reason. Results should not be presented as verified while still draft. Every printed report needs patient/MRN, order/accession, collected/reported timestamps, method and verifier where applicable.

## 6. Pharmacy prescription, counter sale and return

**Observed:** counter offers barcode/name search, basket, patient lookup, take payment, hold and held baskets. Shortcuts shown are Enter to add, F4 patient, F9 payment and Esc close. Held carts expire after 24 hours to Discarded. Sales link to receipt, shift and GL journal. Returns open the original receipt and refund journal. Cashier shifts are Open, Reconciled or Locked.

**Proposed behavior:** verify patient and prescription where required; show unit, batch/expiry, stock by store and sale price; warn on expired or restricted stock; calculate tax/discount; select tender(s); post sale, stock issue and journal atomically; print receipt. A hold reserves nothing unless facility policy explicitly says so. Resume of an expired hold requires recreating a basket. A return references original sale lines, enforces remaining returnable quantity, captures reason and refund method, reverses stock and finance as appropriate. A locked shift cannot accept new sales; variance reconciliation records counted cash and approver.

## 7. Requisition to supplier payment

**Observed:** requisitions progress through approval to ordering; purchase orders specify supplier and rate; goods receipt records what arrived; supplier invoices are matched against purchase order and receipt; supplier payments track outstanding and uncleared cheques. Additional pages handle quarantine, near expiry, returns, controlled drugs, audits, transfers and internal needs.

1. Department/store raises need with item, quantity, urgency and reason. Approval may change quantity but must preserve the request history.
2. Buyer selects supplier and agreed rates, issues a purchase order, tracks expected date and partial receipts.
3. Receiver records accepted, rejected and quarantined quantities by batch and expiry. Accepted stock increases on-hand only once. Rejected stock never becomes saleable.
4. Supplier invoice links the PO and one or more receipts. The visible interface calls this a three-way match. **Proposed:** configurable tolerances govern quantity/price variance; exceptions require explicit approval.
5. Payables arise from an approved invoice. Payment method and cheque lifecycle are recorded. Reconciliation matches the bank event.
6. A supplier return records reason and settlement as replacement, credit or refund, with inventory and GL effects.
7. Physical count compares actual to system quantity. A posted adjustment needs discrepancy reason and independent approval above threshold.

**Guardrails:** no negative saleable stock without an explicit facility policy; batch and expiry traceability for medicines and implants; transfer request → accept/reject → paired stock movement; controlled-drug movements have enhanced audit detail. OT forecast translates booked cases into required stock and shows shortfall before surgery day.

## 8. Insurance and panel claims

**Observed:** dated coverage records, pre-authorizations (pending → approved/denied), claims built from finalized payer-billed invoices, denials and payer AR ageing by submission date.

**Proposed flow:** verify active coverage and benefits → request authorization for services needing payer sign-off → finalize invoice split between patient and payer → build claim with supporting documents → validate coding/completeness → submit → record acknowledgement → post adjudication, payment, denial or partial approval → work denial by category and appeal/write-off decision → reconcile payment to claim and GL. Preserve each payer response, amount and date. Prevent duplicate claim submission for the same invoice/version unless it is an explicit corrected claim.

## 9. Charity contribution to funded patient discount

The public product material states that zakat, sadqa, trust and charity-box funds have distinct ledger accounts and balances. Contributions increase the chosen fund; a funded discount reduces exactly the fund selected by the operator. The live charity-fund list shows code, type, ledger, balance, available and status.

**Required controls:** contribution records donor/source, restriction, receipt and deposit reference as permitted by donor privacy policy. A discount records patient visit, invoice line or bill, amount, fund, eligibility/approval and operator. A single fund cannot silently pay more than its available restricted balance. Reversal restores only the original fund. Transfers between funds are prohibited by default and, if legally and organizationally permitted, require an explicit authorized transfer with justification. Trustee reports drill from opening balance through contributions, allocations, reversals and closing balance. **Proposed:** zakat eligibility and donor restrictions must be approved by the trust's policy owner; software should implement that policy, not invent it.

## 10. Day close, period close and cash

**Observed:** GL exceptions are unmapped postings that block day close; cash shifts reconcile float to counted cash and Z-report; bank reconciliation matches statement to ledger; period close locks posting. Cheques in hand run from received through clearing or bounce. Opening balances have separate patient, payer, supplier and GL import pages.

**Proposed day-close checklist:** all shifts counted and variances approved; unposted invoices and receipts reviewed; GL exceptions mapped; deposit and fund movements balanced; bank/cheque exceptions identified; trial balance reconciles; manager signs the close. Closing generates a durable report, not a silent status change. Period close freezes posting into that period; a correction uses authorized reopening or adjustment in the next permitted period. Preserve the exact close snapshot and approver. Opening balances are one-time migration entries with source reference and a balancing equity account, reviewed before go-live.

## 11. Monthly HR and doctor payments

**Observed:** employees, monthly attendance, loans/advances, payroll runs and doctor accruals are distinct pages. Payroll runs are generated, reviewed, approved and disbursed. Doctor retainers accrue to Doctor Payable separately from payroll.

**Proposed flow:** active staff roster and salary terms → attendance and leave review → loan installment calculation → draft payroll → exception report → independent approval → GL posting → bank/cash disbursement → payslip and audit archive. A posted run cannot be edited directly. Doctor accruals need period, basis, outstanding balance and settlement record. Changes to employee bank or salary details require a separate approval path.

## 12. Migration without stopping care

The public case study reports on-site migration from the legacy PHP system and no closure days. A new migration needs a written cutover plan: profile and mapping of source data; duplicate-patient review; opening balances; item/service and code normalization; trial conversion; reconciliation totals; staff training; parallel run where practical; cutover freeze; rollback criteria; and first-week support. Define who signs off patient counts, balances, stock quantities and sample records. No historic source record should be discarded simply because the new UI lacks a matching field.
