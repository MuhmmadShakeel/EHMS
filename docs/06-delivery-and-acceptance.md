# EHMS — delivery plan and acceptance

## 1. Discovery before build

Hold role-based walkthroughs with reception, doctor, lab, pharmacy, theatre, ward, stores, finance, claims, HR and administration. Use a synthetic demo tenant to exercise every important transition. Confirm exact branch boundaries, data ownership, clinical documentation policies, patient identity rules, fund restrictions, payer contracts, stock valuation, payroll rules, print requirements and migration sources. Turn every “proposed” rule in these docs into an approved decision or remove it.

## 2. Dependency-based release sequence

| Stage | Deliverable | Why first/next |
| --- | --- | --- |
| Foundation | Tenant/branch, sign-in, roles, audit, language, master data, numbering, design system | All modules depend on identity and scope |
| Patient flow | Patient index/registration, appointments, tokens, journey stages, OPD queue | Establishes the main care path |
| Clinical services | Encounter, diagnoses, orders, lab, prescription, pharmacy | Produces clinically linked charges and stock use |
| Revenue | Tariffs, invoices, deposits, payments, fund allocations, shifts | Makes patient and trust money traceable |
| Surgery/IPD | Packages, theatre, cases, admissions, bed board, housekeeping | Depends on patient, stock and billing foundations |
| Supply chain | Items, stores, procurement, batch/expiry, transfers, audits, OT forecast | Supports care and cost accuracy |
| Claims/finance | Coverage, pre-auth, claims, denial work, GL, reports, bank and close | Reconciles operational events to books |
| People/governance | HR, payroll, doctor accruals, dashboard customization, backup | Completes administrative operations |

This is a **proposed delivery order**, not a claim about EHMS's historical build sequence. Some modules may need to be released together for a particular hospital cutover.

## 3. Scenario acceptance set

### Patient and OPD

- Existing patient found through allowed identifiers; no duplicate is created.
- A new patient receives one MRN and can be retrieved immediately.
- Rescheduled appointment preserves history; arrival issues one token; queue shows current stage and elapsed wait.
- Manual and system-advanced journey stages hand off to the correct worklist; blocked/stuck filters explain their counts.
- Cancellation, missed visit, urgent bypass and duplicate click leave a correct audit trail.

### Lab, pharmacy and surgery

- An order appears once in the lab worklist; entered results remain draft until verification; corrected report retains its original.
- Prescription entry retains distinct prescriber and operator; dispensing uses an eligible batch and updates stock and bill once.
- Held cart expires according to policy; a return references the original receipt and produces the correct refund/stock/journal effects.
- Package quote freezes its inclusion version; extra consumption is either billed or explicitly waived with approval; margin and leakage reports reconcile.
- Surgery-day readiness exposes missing advance, consent or stock; completion and cancellation have reversible, documented effects.

### IPD, stock and procurement

- A bed cannot be assigned to two active admissions. Discharge triggers cleaning; inspection releases availability when required.
- Requisition approval, PO, partial receipt, quarantine and invoice variance remain linked. Repeating receipt submission does not double stock.
- Physical count adjustment reports its before/after quantity, reason and approver. Inter-store transfer balances at both ends.
- OT forecast reports item shortfall from booked cases and current eligible stock.

### Claims, funds and accounting

- Coverage validity and pre-auth affect claim readiness. A claim cannot be built from an unfinalized invoice.
- Denial can be categorized, appealed or written off with supporting evidence and proper balance effects.
- Contribution increases exactly one fund. Funded discount reduces exactly that fund; reversal restores it. Fund report traces to patient bills and GL.
- Shift expected/count variance, cheque clearance/bounce and bank statement match reconcile to GL.
- Unmapped GL posting blocks day close. Period close prevents ordinary backdated posting. Every journal balances.

### HR and administration

- Payroll draft, review, approval, posting and disbursement are separate actions with appropriate permissions.
- A loan installment appears once in payroll; doctor accrual stays separate from employee payroll.
- Seeded role is read-only, a cloned role is editable, and branch-scoped permissions are enforced throughout.
- Import preview reports row errors before commit; export contains only the user's authorized data scope.

## 4. Quality gates

1. **Clinical safety review:** clinicians sign off orders, results, medication and surgery transitions.
2. **Financial reconciliation:** known test scenarios tie invoices, funds, stock, claims and journal entries to trial balance and reports.
3. **Accessibility and language:** keyboard, screen reader, zoom, contrast, Urdu RTL and Arabic RTL are verified with actual target devices and staff.
4. **Security/privacy:** role matrix, branch isolation, audit, backups, restore, session handling and export limits are exercised.
5. **Performance:** measure agreed p95 paths under realistic concurrent use and data volume. Publish baseline and result.
6. **Migration rehearsal:** counts and balances reconcile; exceptions have owners; rollback and contingency are rehearsed.
7. **Operational readiness:** training, support handoff, downtime procedure, monitoring, owner sign-off and first-week staffing are in place.

## 5. Migration sign-off sheet

Sign off separately on patient count and duplicates; MRN/legacy identifier mapping; appointments and active visits; diagnoses and lab history; stock on-hand by item/lot/store; supplier and payer balances; deposits and cheques; fund balances by restricted fund; trial balance; employee/loan balances; and sample printed records. Capture source extract date, mapping version, transformed count, rejected count, reviewer and resolution. This avoids the appearance of a successful migration that only transferred visible patient names.

## 6. Risks and decisions to resolve

| Decision | Why it matters | Owner to name |
| --- | --- | --- |
| Patient merge authority and ID policy | Prevents unsafe clinical record combination | Clinical lead + privacy lead |
| Zakat and donor restriction rules | Determines eligibility and traceability | Trust governance + finance |
| Pricing, package and stock costing basis | Affects margin and leakage | Finance + theatre + pharmacy |
| Emergency downtime process | Keeps care running during outage | Operations + clinical lead |
| Claim format and payer integration | Determines submission and evidence | Revenue cycle lead |
| Statutory payroll and controlled-drug obligations | Requires local policy/legal review | HR + compliance |
| Hosting, backup retention and recovery targets | Sets continuity and privacy posture | IT + owner |
| Clinic edition scope and branch model | Affects configuration and data isolation | Product owner |

## 7. Definition of done for documentation phase

The planning set is complete when stakeholders can trace each screen to a role and workflow; each workflow to its records, statuses, permissions and financial effects; each major requirement to observed/published/proposed evidence; and each release to acceptance scenarios. The current package satisfies the structural planning portion. Detailed field-level walkthroughs of record detail and action dialogs still require a synthetic-data session and stakeholder validation before code is written.
