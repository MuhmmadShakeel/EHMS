# EHMS — experience and visual direction

## North star

Create a calm, trustworthy clinical workspace that stays fast under pressure. The references show pale blue-gray surfaces, white cards, teal clinical actions, restrained violet fund accents, amber warnings and compact left navigation. Keep this visual character, but place information hierarchy and legibility ahead of decoration. A nurse, cashier or receptionist should understand the next action at a glance.

## Screen anatomy

1. **Persistent context:** facility/branch, role, language, current user and connectivity state.
2. **Navigation:** domain groups matching staff mental models; compact mode; command palette or quick nav for keyboard users; recent and pinned pages.
3. **Breadcrumb, title and one-line purpose:** explain where the user is and what the page does. Use the observed descriptions as starting copy.
4. **Primary action:** one clear page-level action such as Register Patient, Receive goods, Build claim or New fund.
5. **Attention band:** only actionable exceptions, with count, severity, owner and direct link. Never use a red badge for informational totals.
6. **Summary cards:** 2–4 key measures with date/branch scope and drill-down. Avoid cards that repeat table totals without a decision to make.
7. **Work area:** filters, search, saved views, table/board/cards when useful, and a deliberate empty state with next action.
8. **Record detail:** contextual action rail, status timeline, linked documents and audit history.

## Visual tokens to establish during design

| Token family | Intent |
| --- | --- |
| Surface | Cool neutral app canvas, white content panels, subtle border separation |
| Primary | Deep teal/blue for active navigation and main action |
| Success | Green/teal with label and icon; never color alone |
| Warning | Amber for expiring, waiting and variance |
| Critical | Red only for safety, blocked work and irreversible financial exceptions |
| Restricted funds | Violet accent can distinguish fund governance, but fund type must remain text |
| Typography | Readable Latin sans; tested Urdu Nastaliq or Naskh; Arabic font with correct shaping |
| Density | Comfortable and compact options without hiding required labels or reducing target size below accessibility needs |
| Motion | Short, optional feedback for transitions; no animation that delays queue or POS operation |

The live appearance page says user choices follow the profile across devices, and the public article advertises 24 themes. Treat 24 as a product claim to confirm; the design system should start with a small tested set of light, dark and high-contrast themes, then add variants without fragmenting component behavior.

## Key page treatments

### Dashboard

The published screenshot shows a greeting, **Needs attention** list, registrations/tokens/invoices/collection cards, a 30-day collection chart, and lower finance sections. Make the attention list the first operational decision point. Each exception links to the filtered work queue and shows when its count was computed. The chart needs a date range, units, a table alternative and clarity about value versus count. A manager dashboard and a receptionist dashboard should differ by role; administration's dashboard page suggests personalization is already contemplated.

### Patient index and registration

The live patient page has search, filters, import/export, column choice and table/list/card/board modes. Default to minimal identifiers appropriate to role. In registration, group fields into Identity, Demographics, Contact and Additional as observed. Show required fields, document ownership and the automatically assigned MRN. Preserve entered values after validation failure. Warn about likely duplicates before save. A blank registration screenshot is in `media/screenshots/04-live-blank-registration.jpg`.

### OPD queue

The live queue shows on-board, longest wait, moving and waiting, with blocked/stuck/15-minute/30-minute filters. Treat these as a traffic-control board: large status labels, stable positions, live refresh time and a visible pause/error state if updates stop. Switching table/board views must preserve department and search filters. Show what qualifies as “stuck.” Do not silently move a patient because a background refresh races with a manual action.

### Surgical schedule and bed board

For surgery, use a day timeline and a focused readiness checklist: patient, procedure/package, surgeon, advance/coverage, consent, pre-op checks, theatre and stock. For beds, group by ward and room as the published image does; cards show bed name, class and state, with an accessible legend. Occupied cards should reveal only the minimum patient identity for the viewer's role. Cleaning tasks should be visible without requiring staff to open clinical records.

### Charity funds

The published fund page shows available total, fund count, funded count, a clear explanatory banner, search, alternate views and ledger/balance/status columns. Keep the distinction between **balance** and **available** explicit. A fund detail should show contributions, patient-funded allocations, reversals and closing balance, with dates and document links. Use plain-language explanations for restricted-use rules and require a reason for overrides that policy permits.

### Finance and procurement work queues

Use status-first filters with counts and age: awaiting approval, overdue, partially received, on hold, unreconciled and unmatched. Show document chain in detail view: requisition → PO → GRN → supplier invoice → payment; charge → invoice → payment → journal; contribution → fund → funded discount → journal. Every total can be drilled to the underlying lines.

## Accessibility and multilingual behavior

- Design for keyboard navigation from sidebar through actions, filters, grid and dialogs. The command palette must not trap focus. Preserve focus after modal close and row actions.
- Status uses word + icon + color. Charts have table alternatives and announced summaries. Data tables expose column headers and row action names to assistive technology.
- Form errors appear beside fields and in an accessible summary; validation tells the user how to fix the value. Touch targets and zoomed layouts must remain usable.
- English, Urdu and Arabic are full product languages, including menu labels, statuses, dates, numbers, currency, print templates, empty states and errors. Keep identifiers such as MRN and invoice number readable in RTL. Mirror layout where it helps directionality; do not mirror medical symbols or numeric signs.
- Test Urdu typography at compact density with real staff. User language choice should persist, while a facility may set default language and print output separately.
- Give printable A4 and thermal 80 mm templates distinct layout review. The live print-template page exposes A4, Thermal 80mm and EN/UR/AR choices.

## Responsive behavior

The current authenticated browser viewport was narrow, and its sticky registration action remained visible. Preserve that practical behavior. On desktop, the sidebar and work table can coexist; on smaller screens, use an accessible navigation drawer, stacked summary cards and horizontal table access with frozen identity/action columns where feasible. Do not remove critical fields or approval context on mobile. POS, theatre and bed-board views should be tested on the devices actually used in the hospital.

## Empty, loading and failure states

The live review saw empty OPD and journey-stage screens in this facility. Every empty state should say what the absence means and offer a valid next action. Distinguish **no records**, **filters found nothing**, **insufficient permission**, **loading** and **service unavailable**. For delayed writes, show a pending state and safe retry without duplicate transaction creation. Display the last successful refresh time for live boards and finance cards.

## Visual reference notes

See [Sources and media](07-sources-and-media.md) for image provenance and image-by-image feature analysis. The public screenshots are useful composition references but include demo figures and a different facility state; they are not data fixtures for the future product.
