const leaves = [
  { group: "CARE DELIVERY", title: "Registration", detail: "Patient records", icon: "patient", x: 12.5, y: 295 },
  { group: "CARE DELIVERY", title: "Appointments", detail: "Bookings and arrivals", icon: "calendar", x: 37.5, y: 295 },
  { group: "CARE DELIVERY", title: "OPD consultation", detail: "Live patient queue", icon: "stethoscope", x: 12.5, y: 455 },
  { group: "CARE DELIVERY", title: "Lab results", detail: "Orders and verification", icon: "flask", x: 37.5, y: 455 },
  { group: "OPERATIONS", title: "Pharmacy", detail: "Prescriptions and stock", icon: "pill", x: 62.5, y: 295 },
  { group: "OPERATIONS", title: "Billing and funds", detail: "Payments and ledgers", icon: "receipt", x: 87.5, y: 295 },
  { group: "OPERATIONS", title: "Beds and surgery", detail: "Wards and schedules", icon: "bed", x: 62.5, y: 455 },
  { group: "OPERATIONS", title: "Reports and finance", detail: "Hospital oversight", icon: "chart", x: 87.5, y: 455 }
] as const;

const branches = [
  "M600 82 C600 118 300 108 300 151",
  "M600 82 C600 118 900 108 900 151",
  "M300 211 C300 258 150 247 150 295",
  "M300 211 C300 258 450 247 450 295",
  "M300 211 C300 347 150 370 150 455",
  "M300 211 C300 347 450 370 450 455",
  "M900 211 C900 258 750 247 750 295",
  "M900 211 C900 258 1050 247 1050 295",
  "M900 211 C900 347 750 370 750 455",
  "M900 211 C900 347 1050 370 1050 455"
];

type FlowIconKind = (typeof leaves)[number]["icon"] | "journey" | "care" | "operations";

function FlowIcon({ kind }: { kind: FlowIconKind }) {
  return <svg viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "journey" && <><path d="M4 14h5l3-6 4 12 3-6h5"/><path d="M14 3a11 11 0 1 0 0 22 11 11 0 0 0 0-22Z"/></>}
    {kind === "care" && <><path d="M14 24s-9-5.5-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-9 12-9 12Z"/><path d="M9 15h3l2-3 2 5 2-2h2"/></>}
    {kind === "operations" && <><path d="M5 22V7h18v15H5Z"/><path d="M10 7V4h8v3M9 13h10M14 10v6M9 19h3M16 19h3"/></>}
    {kind === "patient" && <><circle cx="14" cy="8" r="3"/><path d="M7 23v-3a7 7 0 0 1 14 0v3H7Z"/></>}
    {kind === "calendar" && <><rect x="4" y="6" width="20" height="18" rx="2"/><path d="M9 3v6M19 3v6M4 12h20M9 17h4M17 17h2"/></>}
    {kind === "stethoscope" && <><path d="M5 5v8a6 6 0 0 0 12 0V5M17 13v5a4 4 0 0 0 8 0v-2"/><circle cx="25" cy="14" r="2"/><path d="M3 5h4M15 5h4"/></>}
    {kind === "flask" && <><path d="M11 3h6M12 3v8L5 23h18l-7-12V3M9 17h10"/></>}
    {kind === "pill" && <><rect x="4" y="8" width="20" height="12" rx="6" transform="rotate(-35 14 14)"/><path d="M10 10l8 8"/></>}
    {kind === "receipt" && <><path d="M6 3h16v22l-3-2-3 2-3-2-3 2-4-2V3Z"/><path d="M10 9h8M10 14h8M10 19h5"/></>}
    {kind === "bed" && <><path d="M3 22V9M25 22V9M3 19h22M6 13h7a3 3 0 0 1 3 3v3M16 15h6a3 3 0 0 1 3 3"/><circle cx="9" cy="10" r="2"/></>}
    {kind === "chart" && <><path d="M4 23V5M4 23h20M9 19v-5M15 19V9M21 19V6"/><path d="m8 9 5-4 4 2 5-4"/></>}
  </svg>;
}

export default function ClinicalFlowTree() {
  return <div className="flow-tree" aria-label="EHMS connects eight care and hospital operations workflows">
    <svg className="flow-tree-branches" viewBox="0 0 1200 590" preserveAspectRatio="none" aria-hidden="true">
      {branches.map((path, index) => <g key={path}>
        <path className="flow-branch-base" d={path} />
        <path className="flow-branch-signal" d={path} pathLength={100} style={{ animationDelay: `${index * .38}s` }} />
      </g>)}
    </svg>
    <div className="flow-root"><span className="flow-root-icon"><FlowIcon kind="journey" /></span><span><strong>Patient journey management</strong><small>From arrival to checkout</small></span></div>
    <div className="flow-hubs">
      <div className="flow-hub flow-hub-care"><FlowIcon kind="care" /><strong>Care delivery</strong></div>
      <div className="flow-hub flow-hub-operations"><FlowIcon kind="operations" /><strong>Hospital operations</strong></div>
    </div>
    <div className="flow-leaves">
      {leaves.map((leaf) => <div className="flow-leaf" key={leaf.title} style={{ left: `${leaf.x}%`, top: `${leaf.y / 590 * 100}%` }}>
        <span className="flow-leaf-icon"><FlowIcon kind={leaf.icon} /></span>
        <span className="flow-leaf-copy"><small>{leaf.group}</small><strong>{leaf.title}</strong><span>{leaf.detail}</span></span>
      </div>)}
    </div>
  </div>;
}
