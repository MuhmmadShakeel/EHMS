# EHMS — information model and business rules

This is a **conceptual data specification**, not a database schema or code. It names records, relationships and invariants so every page can be designed consistently. Fields visible in the live interface are identified where useful; additional governance fields are proposed.

## 1. Scope and identity

| Record | Meaning | Key relationships and rules |
| --- | --- | --- |
| Tenant / organization | Legal operator and data boundary | Owns branches, policies, users and master data; no cross-tenant access by default |
| Facility / branch | Operating location | Has departments, stores, tills, wards, services, pricing and local reporting scope |
| Department | Clinical or operational unit | May override default journey stages; belongs to a facility or shared template |
| User / role / permission | Actor and allowed actions | A user may hold multiple roles with branch scope; effective access is reviewed and auditable |
| Patient | Long-lived person record | One MRN within its defined numbering scope; identity ownership, demographics and contact history |
| Patient identifier | MRN, government ID, legacy ID, phone | Type, value, issuer/owner, verification state and effective dates; duplicates flagged |
| Appointment | Planned visit slot | Patient, service/department, doctor, branch, time, status and reschedule history |
| Encounter / visit | Actual care episode | Patient, branch, token, arrival, journey instance, clinicians, orders and checkout |
| Journey stage definition | Configured step | Order, department, mode, trigger, optional/terminal flag and responsibility |
| Journey stage instance | Step in a visit | State, entered/completed time, operator, blocked reason and override trail |

**Observed registration fields:** ID type/number/ownership, legacy reference, first/last name, guardian, date of birth, gender, blood group, marital status, status, phone, email, province/district/city/street, emergency contact/relation/phone, remarks and photo. **Proposed:** consent, preferred language, communication preference and provenance are separate records so they can change without overwriting historical entries.

**Identity rules:** MRN is never recycled; a duplicate merge retains both source identifiers and the reviewer; a patient can have multiple visits and payer coverages; an ID may belong to a relative and must not be treated as patient-owned; ages are derived from date of birth and observation date rather than stored as permanent values. Search results should minimize exposed identifiers based on role.

## 2. Clinical and service records

| Record | Required concepts |
| --- | --- |
| Observation | Type, value, unit, method, date/time, performer, reference context and correction trail |
| Diagnosis | ICD-10 or local code, display name, encounter, author, primary/secondary status and date |
| Clinical order | Service, patient/encounter, requester, priority, indications, status, cancellation reason |
| Lab accession/specimen | Order, specimen identity, collection/receipt time, collector, acceptance/rejection and chain of custody |
| Lab template/result | Template version, fields, units, ranges, entered values, flags, verifier and report revision |
| Prescription | Prescriber, entry operator, patient, medicine, dose pattern, duration, quantity, instructions and status |
| Dispense | Prescription/sale reference, item, batch, expiry, quantity, store, dispenser and reversal |
| Surgery case | Procedure, package, surgeon, theatre, scheduled date, readiness, consent, status and completion |
| Package | Procedure/lens, versioned inclusions, price, cost basis, allowed quantities and eligibility |
| Package variance | Extra item/service, cost, charged/waived amount, reason, approver and case |
| Admission | Encounter, bed, admitting doctor, start/end, transfers, daily charges and discharge state |
| Bed / housekeeping task | Ward/room/class, availability state, occupant, block reason, cleaning and inspection |

**Clinical invariants proposed:** a result can be displayed as verified only after verifier action; a correction retains the original; a prescription and dispense are different events; a bed can have at most one active occupant; a completed surgery case retains the checklist and the version of package terms used at booking. Clinical safety checks should be reviewed by clinicians before launch.

## 3. Billing, funding and claims

| Record | Required concepts |
| --- | --- |
| Service/tariff | Code, category, department, standard price, effective dates and tax applicability |
| Price list | Payer, effective window, service prices and contract/version reference |
| Invoice | Patient, visit, payer split, lines, gross, adjustments, net, status, source and finalization |
| Payment | Amount, tender, payer, receipt, cashier shift, date, allocation and reversal |
| Deposit | Patient advance, source, held/applied/refunded/expired balance and linked bills |
| Fund | Type, restriction, ledger account, balance, available balance and active state |
| Contribution | Fund, amount, source/donor, receipt, restriction and posting reference |
| Funded discount | Patient bill/line, fund, amount, eligibility approval, operator and reversal |
| Coverage | Patient, payer, member/plan, effective dates, status and evidence |
| Pre-authorization | Requested service, payer decision, reference, valid window and status |
| Claim | Finalized invoice version, payer/patient amounts, submitted amount, response and status |
| Denial / appeal | Claim or line, reason/category, amount, action, owner, due date and outcome |

**Money rules:** store currency and precision consistently; never use rounded display values as posting source; sum lines and allocations to their parent totals; record balance changes through immutable entries; prevent duplicate receipt or claim posting using a stable transaction key; preserve the original financial period of an event; reversals reference the original; report all fund amounts with opening, in, out and closing. A fund is not a generic discount label: the selected fund must map to its ledger and decrement only that available balance.

**Claim rules:** only finalized payer-billed invoices may produce normal claims, as described by the live page. A changed invoice after submission requires a documented correction path. Payer ageing uses claim submission date per the live screen, and patient ageing should be separately defined.

## 4. Inventory and procurement

| Record | Required concepts |
| --- | --- |
| Item | Medicine/consumable/implant type, code, base unit, sell/buy settings, reorder point and restrictions |
| Unit of measure | Base/sub-unit relationship and conversion factor with precision rules |
| Store | Branch, physical location, type and manager |
| Lot/batch | Item, supplier, receipt, batch number, expiry, cost and quality status |
| Stock movement | Item, lot, from/to store, direction, quantity, reason, source document and actor |
| Requisition | Requesting department/store, lines, reason, approval and ordered quantities |
| Purchase order | Supplier, rates, expected dates, approval, receipt and closure status |
| Goods receipt | PO, actual quantity, accepted/quarantined/rejected amounts, batch and receiver |
| Supplier invoice | Supplier bill, PO/GRN match, variance, approval, due date and posting |
| Supplier payment | Open bill allocations, method, cheque/bank reference and clearing state |
| Supplier return | Original receipt, item/lot, reason, settlement and financial/stock effects |
| Audit/count | Scope, system quantity, physical quantity, variance, approver and adjustment |
| Transfer / internal need | Source/destination, item, quantity, reason, accept/reject, paired movements |

**Inventory invariants proposed:** stock quantity is derived from movements, never silently overwritten; each receipt lot has an expiry where the item requires it; quarantine is excluded from saleable on-hand; transfers have one outbound and one inbound side tied to the same transaction; adjustments require reason; controlled-drug movements are queryable by batch, document and running balance. An OT forecast uses booked cases and active package inclusion versions, not static averages alone.

## 5. Accounting and people

| Record | Required concepts |
| --- | --- |
| GL account | Code, type, parent, posting/summary flag, status and tenant scope |
| Journal | Date, period, module/source, narration, balanced debit/credit lines and posting status |
| Cost centre | Department or service line dimension for income and expense reporting |
| Cash shift | Cashier, opening float, expected/count, variance, reconciliation and lock |
| Cheque | Bank, payer/payee, date, amount, source, received/posted/cleared/bounced state |
| Bank statement match | Statement line, ledger line(s), match amount, difference and reviewer |
| Day/period close | Scope, checklist, exception snapshot, approver, timestamp and reopening trail |
| Employee | Employment terms, salary basis, department, status and effective history |
| Attendance | Period, present/absent/leave counts, deductions and reviewer |
| Loan/advance | Principal, disbursement, installments, outstanding and payroll allocations |
| Payroll run | Period, draft/review/approved/posted/disbursed state and frozen calculation version |
| Doctor accrual | Doctor, period, retainer/fee basis, payable posting and settlement |

**Accounting invariants:** every posted journal balances; posting date must lie in an open period; source transaction and journal are linked both ways; an unmapped GL exception blocks close; closed periods reject ordinary edits; opening balances are traceable to migration source and balancing equity. Day-close permissions should be distinct from cash handling.

## 6. Status and event vocabulary

Use one meaning per status within a domain, with explicit transitions. Examples observed in the live UI include pharmacy shift **Open → Reconciled → Locked**, pre-authorization **Pending → Approved/Denied**, claim **Draft → Submitted → adjudicated/denied**, and held cart **Open → Discarded** after its 24-hour expiry. Surgery-day filters include Scheduled, Arrived and In theatre. Deposit filters include Held, Partly applied, Fully applied, Refunded and Expired.

For each workflow, define: allowed transition, actor/permission, required fields, side effects, notifications, reversal, timeout and audit event. A status change is not sufficient evidence that downstream stock, invoice or journal events occurred; each must have a linked document and reconciliation check.

## 7. Access, audit and privacy

The live administration menu includes roles/permissions and staff users. **Proposed:** define permissions by resource and action, then branch scope. Highly sensitive operations need separate capabilities: patient merge, clinical amendment, discount approval, fund reallocation, invoice reversal, stock adjustment, bank match, payroll approval, period reopen and user-role change. Seeded roles remain read-only as indicated by the UI; a customized role is cloned and versioned.

Audit events should record actor, timestamp, branch, record, action, before/after summary, reason and correlation ID. Keep the audit log tamper-evident and restrict viewing. Sensitive values such as passwords must never appear in audit diffs. Exports must respect access scope and leave an export event. Analytics should use aggregate or de-identified data wherever possible. Screenshots and training materials use synthetic records only.

## 8. Import, export and data provenance

Many live lists offer import/export. Each importer needs template/version, field mapping, validation preview, duplicate detection, row-level error report, commit summary and rollback strategy. Imported rows retain source system/file and batch ID. Each export declares branch/time filters, included fields, generation time and requester. An admin backup is different from a user export and requires protected storage, retention and restore testing.

## 9. Reports and reconciliation

Every report displays scope, date basis, currency, last refresh and drill path. Finance reports (trial balance, P&L, balance sheet, cash flow, fund ledger and ageing) must reconcile to posted GL entries according to their basis. Operational reports (queue, stock health, package leakage, supplier scorecard, doctor scoreboard) should expose how counts and rates were calculated. The live doctor scoreboard says score = resolved ÷ seen; define exactly what counts as resolved and how repeat-visit breaches affect that number before treating it as a performance judgment.
