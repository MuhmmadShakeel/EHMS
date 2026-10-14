# EHMS frontend

Frontend-only Next.js website for EHMS. The home page is implemented at `app/page.tsx`; the remaining domain folders are a proposed structure for future UI routes, not active features.

## Run

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`. Run `npm run build` for a production build and `npm audit` to check the installed dependency tree against known npm advisories.

For Vercel, set the project **Root Directory** to `nextjs-structure`. The `vercel.json` in this directory selects Next.js, so direct visits and refreshes use its page routes (`/features`, `/solutions`, `/about`, and `/contact`).

## Structure

- `app/` — routes, document metadata and page composition.
- `styles/` — global visual system and responsive styling.
- `components/` — reserved for reusable UI as the frontend grows.
- `features/` — reserved for domain-specific frontend composition.
- `lib/` — reserved for shared frontend utilities.
- `public/media/` — optimized WebP assets used on the page.
- `tests/` — reserved for future workflow tests.

The domain directories under `app/(workspace)` reflect the proposed information architecture in the repository's product documentation. They contain no backend or patient data.

## Media provenance

`hero-care.webp` is an AI-generated editorial background created for this frontend with this prompt: “Premium photorealistic editorial healthcare technology hero background, wide landscape, modern South Asian hospital corridor and clinical team on the right, dark teal negative space on the left and center, no text, logos, UI, or identifiable patients.” It is illustrative, not a photograph of an EHMS customer facility.

`doctor-care.webp` is an AI-generated illustrative portrait made for the feature section with this prompt: “Photorealistic vertical editorial portrait of one South Asian adult female doctor in a white coat and muted teal scrubs, standing in a bright contemporary hospital corridor, natural light, no patients, text, logos, UI, badges or identifiable real person.” It does not portray an actual EHMS user or employee.

`dashboard.webp`, `bed-board.webp` and `journey-stages.webp` are optimized copies of published EHMS product reference images in `../media/reference/`. `opd-queue.webp` is an optimized copy of `../media/screenshots/05-live-opd-queue.jpg`, captured without patient rows. These are real EHMS interface images; their figures and configuration should not be treated as current operational data.

The page makes no measured outcome, security-certification or pricing claims. The external product links lead to the existing EHMS application and its published case study.

The six SVG marks in `public/media/hospital-logos/` are original illustrative identities created for the scrolling design. They are not logos of verified EHMS customers. The strip has no external links.

## Original planning notes

This directory contains **folders only**. No route files, components, stylesheets, configuration, tests or application code have been written. The current EHMS route paths recorded in the [99-screen inventory](../docs/03-screen-inventory.md) have been mirrored as empty directories under `app/(workspace)`; the broad domain folders below also show the intended future information architecture. The exact routing and naming can be chosen before implementation.

## Route groups

| Folder | Planned responsibility |
| --- | --- |
| `app/(auth)/login` | Sign-in and language choice |
| `app/(workspace)/dashboard` | Facility overview and attention queue |
| `app/(workspace)/patients` | Master patient index, registration and patient record |
| `app/(workspace)/appointments` | Booking, arrival and rescheduling |
| `app/(workspace)/opd` | Queue, tokens, journey stages and encounters |
| `app/(workspace)/billing` | Invoices, payments and deposits |
| `app/(workspace)/laboratory` | Orders, worklist, results and verification |
| `app/(workspace)/pharmacy` | Counter, prescriptions, sales, returns and shifts |
| `app/(workspace)/surgery` | Scheduling, surgery day and cases |
| `app/(workspace)/ipd` | Admissions, beds and housekeeping |
| `app/(workspace)/procurement` | Purchase to pay, stock and transfers |
| `app/(workspace)/claims` | Coverage, authorization, claims and denials |
| `app/(workspace)/accounting` | Ledgers, journals, reporting, close and opening balances |
| `app/(workspace)/hr` | Employees, attendance, loans and payroll |
| `app/(workspace)/administration` | Master data, permissions and facility setup |
| `app/(workspace)/settings` | Personal appearance and account preferences |

## Shared folders

`components` is divided by navigation, forms, tables, charts, clinical work, finance and feedback. `features` is reserved for domain-level UI composition; `lib` for shared client infrastructure; `styles` for design tokens and typography; `public/media` for approved product assets; and `tests` for later acceptance coverage. All remain empty at this stage.

The route names here are a proposed information architecture. The [screen inventory](../docs/03-screen-inventory.md) preserves the **actual observed EHMS paths** so route decisions can be made later without confusing the two.
