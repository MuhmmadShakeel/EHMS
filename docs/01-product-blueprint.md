# EHMS — product blueprint

**Version:** discovery draft, 12 October 2026  
**Purpose:** a buildable, multi-page specification for a hospital management platform.  
**Evidence:** live authenticated navigation and screens, public case study, published feature article, and the supplied pasted brief.

## 1. Product statement

EHMS joins the patient's journey, hospital operations and financial truth in one system. A receptionist should see the next patient action; a clinician should see the right record and pending work; a cashier should know what is payable and why; a manager should see blocked work; a trustee should trace a donation to the patient benefit it funded. Each transaction must have an owner, status, timestamp and audit trail.

The initial client was a trust eye hospital in Chishtian. The public [case study](https://eaquirstech.com/en/work/ehms-hospital-management) describes a six-week desktop ERP followed years later by a three-month, multi-branch web ERP. It states that the migration caused zero days of patient-care closure, core workflows became 95% faster, and a second hospital ordered the product. Those are **published historical claims**, not metrics measured during this review.

## 2. People and jobs

| Role | Main job | Home screen should answer |
| --- | --- | --- |
| Receptionist | Identify/register a patient, book or mark arrival, issue a token | Who is here, what is next, what is waiting? |
| Vitals/biometry staff | Complete assigned clinical stages | Which patients are ready and which measurements are missing? |
| Doctor | Review encounter, record diagnosis and orders | What is known, what must be decided, what needs follow-up? |
| Lab technician/verifier | Receive accession, enter and verify results | Which samples are pending, urgent or blocked? |
| Pharmacist/cashier | Validate and dispense prescription, sell and reconcile | What can be dispensed, what was paid, what needs review? |
| Surgeon/theatre coordinator | Plan cases, track consent, supplies and operating list | Who is scheduled, ready, delayed or awaiting advance? |
| Ward nurse/housekeeper | Manage admission, beds, cleaning and transfer | Which beds are occupied, free, blocked or dirty? |
| Procurement/store staff | Request, order, receive, count and move stock | What is needed, due, quarantined, expiring or short? |
| Claims team | Check coverage, obtain authorization, submit and follow claims | Which claim is stuck and what action clears it? |
| Accountant/finance lead | Reconcile money and ledgers, close periods | What is unmatched, unreconciled or blocking close? |
| HR/payroll lead | Maintain employment, attendance and pay | What is ready for review, approval and disbursement? |
| Hospital owner/trustee | Govern performance, fund use and access | Where did money go and what needs intervention? |
| Facility administrator | Configure master data, roles, templates and rules | Is the facility correctly configured and auditable? |

## 3. Product principles

1. **One patient identity.** MRN is stable. Search before registration. Preserve source and history when merging duplicates.
2. **Next action is visible.** A stage shows its owner, prerequisites, elapsed time and handoff target.
3. **Clinical and financial actions reconcile.** A completed service, dispense, admission or package has a traceable billing and stock effect where applicable.
4. **Restricted funds stay separate.** Zakat, sadqa, trust and charity-box balances have distinct ledger identities; funded discounts consume only the selected eligible fund.
5. **Never silently rewrite history.** Corrections use reversals, amendments and audit events. Finalized invoices and posted journals retain their original trail.
6. **Fast at the counter.** Search, queue, POS and registration are keyboard-friendly and responsive under ordinary clinic load.
7. **Accessible in all three languages.** English, Urdu and Arabic receive complete labels, print output, validation and right-to-left layouts where appropriate.
8. **Branch scope is explicit.** Every patient, visit, stock movement, financial transaction and role is scoped to the correct facility, branch or tenant.
9. **Safe failure.** Network interruption, duplicate clicks or a delayed response must not create duplicate charges, tokens, stock movements or journals.
10. **Reports explain themselves.** A metric links to its source records, time range, branch scope and calculation.

## 4. Product surfaces

### Front desk and outpatient care

The live interface shows a dashboard, patient index, registration form, OPD queue, appointments and visit-frequency alerts. Registration includes document type and ownership, name, guardian, date of birth, gender, blood group, contact, address, emergency contact, remarks and photo. The system says the MRN is assigned by a numbering scheme. The patient index offers quick search, filters, import/export, column choice and table/list/card/board views. The queue has table/board views, a department filter, search by name/token/MRN, elapsed wait and filters for blocked, stuck and waiting over 15 or 30 minutes.

### Billing and clinical services

The live billing menu shows invoices and patient deposits. Invoices move from charge capture to finalization and collection. Deposits track amount taken, application to bills, held balance and refund/expiry statuses. The lab worklist covers accession, results and verification. The pharmacy area covers POS, held baskets, prescription entry, sales, returns and cashier shifts. A prescription records the prescriber separately from the person entering a paper order.

### Surgery and inpatient care

The surgery area contains schedule, surgery-day board and case register. It highlights unscheduled advice, upcoming paid cases and bookings awaiting an advance. The administration area contains surgical packages, package leakage and operating theatre hours. IPD exposes a bed board, admissions and housekeeping. The published product image shows ward/room grouping and bed states; the live facility visited during this review displayed an empty board, so specific current bed inventory is not inferred.

### Supply chain

The live system exposes requisitions, purchase orders, goods receipts, opening stock, supplier returns, invoices, payments, controlled-drug register, stock audits, transfers, internal requests and OT stock forecast. Master data covers stock items, units of measure, suppliers and stores. The visible copy describes three-way matching of supplier invoices to purchase orders and receipts, physical count variance, near-expiry stock and stock shortfall against booked theatre cases.

### Claims and revenue cycle

Coverage checks, pre-authorizations, claims, denials and payer ageing are separate pages. Visible page descriptions say claims are built from finalized payer-billed invoices; denials can be categorized, written off or appealed; payer ageing uses claim submission date.

### Finance and charitable funds

The accounting navigation contains chart of accounts, trial balance, general ledger, P&L, balance sheet, cash flow, cost centres, journal register, manual journal, GL exceptions, fund ledger, cash shifts, expenses, treasury, AP/AR ageing, bank reconciliation, cheques in hand, day close, period close and four classes of opening balance. The charity-fund page shows each fund's own ledger and available balance. The published [fund article](https://eaquirstech.com/en/blog/zakat-charity-fund-software-trust-hospital) explains the contribution and funded-discount direction of those balances.

### People and governance

HR pages cover employees, attendance, loans, payroll runs and doctor accruals. Administration includes departments, journey stages, doctors, services/tariffs, payers, price lists, test templates, dosages, diagnoses, lookups, custom fields, numbering, print templates, roles, staff users, dashboard configuration and backup. Appearance and password settings are personal surfaces. The visible role page states seeded roles are read-only and must be cloned for customization.

## 5. Editions and tenancy

The published story says EHMS supports multiple branches and a lighter clinic edition. The future product should define a capability matrix before building: **clinic** for patient, appointment, OPD, billing and essential pharmacy/lab; **hospital** adds IPD, surgery, procurement, claims, accounting and HR; **trust hospital** adds restricted fund governance. This is a **proposed packaging model** rather than a confirmed commercial offer. Tenant, branch, department and store selection must be visible anywhere they affect data or totals. A user may work across authorized branches without losing audit context.

## 6. Non-functional targets to validate

- Accessibility: WCAG 2.2 AA evaluation, keyboard operation, visible focus, color-independent status, screen-reader labels and readable Urdu/Arabic typography. The login page *claims* WCAG AA verification; this review did not audit that claim.
- Performance: define actual p95 targets for registration, search, queue update, POS line addition, invoice finalization and report loading with hospital staff. The published 95% improvement is not a future service-level objective.
- Availability: document hours of operation, downtime procedure, offline contingency and recovery targets with the hospital.
- Security: role and branch scoped access, least privilege, session expiry, audit logs, encryption in transit and at rest, backup verification and breach response.
- Data lifecycle: retention, export, migration, correction, deletion and consent policies must be set by the operating hospital and applicable law before launch.

## 7. Success measures

Measure registration time, duplicate MRN rate, median and high-percentile OPD wait, stuck journey rate, unverified lab age, pharmacy stockouts, package leakage, unallocated deposits, unreconciled shifts, claim denial resolution age, fund ledger reconciliation, day-close delay and support tickets per active user. Each measure needs a baseline and an owner. No target numbers are invented here.

## 8. Boundaries of this draft

The 99 observed pages establish the product's breadth. Their full actions, permissions, data side effects and edge cases were not exercised on live records. The detailed requirements in the remaining documents combine **observed UI**, **published descriptions** and **proposed rules**; they should be confirmed against stakeholder walkthroughs and a synthetic demo tenant before implementation.
