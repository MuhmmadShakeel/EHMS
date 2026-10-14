const nodes = [
  { label: "Registration", detail: "Patient arrives", side: "left", position: "one", number: "01" },
  { label: "OPD & consultation", detail: "Care moves forward", side: "left", position: "two", number: "02" },
  { label: "Lab & diagnostics", detail: "Results are connected", side: "left", position: "three", number: "03" },
  { label: "Pharmacy", detail: "Medicine is dispensed", side: "left", position: "four", number: "04" },
  { label: "Wards", detail: "Capacity stays visible", side: "right", position: "one", number: "05" },
  { label: "Surgery", detail: "Plans stay coordinated", side: "right", position: "two", number: "06" },
  { label: "Stock & supplies", detail: "Essentials are tracked", side: "right", position: "three", number: "07" },
  { label: "Billing & funds", detail: "Support is traceable", side: "right", position: "four", number: "08" }
];

const desktopPaths = [
  "M600 280 C450 280 430 75 180 75",
  "M600 280 C460 280 430 205 290 205",
  "M600 280 C460 280 430 365 290 365",
  "M600 280 C450 280 430 485 180 485",
  "M600 280 C750 280 770 75 1020 75",
  "M600 280 C740 280 770 205 910 205",
  "M600 280 C740 280 770 365 910 365",
  "M600 280 C750 280 770 485 1020 485"
];

const mobilePaths = [
  "M180 99 C180 165 90 170 90 248",
  "M180 99 C180 165 270 170 270 248",
  "M180 99 C180 260 90 265 90 348",
  "M180 99 C180 260 270 265 270 348",
  "M180 99 C180 365 90 370 90 448",
  "M180 99 C180 365 270 370 270 448",
  "M180 99 C180 465 90 470 90 548",
  "M180 99 C180 465 270 470 270 548"
];

export default function CareNetwork() {
  return <div className="container about-network-visual" role="img" aria-label="EHMS connects registration, OPD, lab, pharmacy, wards, surgery, stock, billing and funds through one care journey">
    <svg className="about-network-lines about-network-lines-desktop" viewBox="0 0 1200 560" preserveAspectRatio="none" aria-hidden="true">
      {desktopPaths.map((path, index) => <path key={path} d={path} style={{ animationDelay: `${index * .18}s` }} />)}
    </svg>
    <svg className="about-network-lines about-network-lines-mobile" viewBox="0 0 360 620" preserveAspectRatio="none" aria-hidden="true">
      {mobilePaths.map((path, index) => <path key={path} d={path} style={{ animationDelay: `${index * .18}s` }} />)}
    </svg>
    <div className="about-network-hub"><span className="about-network-hub-ring"/><strong>EHMS</strong><small>One connected<br/>care journey</small></div>
    {nodes.map((node) => <div className={`about-network-node about-network-node-${node.side} about-network-node-${node.position}`} key={node.number}><span>{node.number}</span><div><strong>{node.label}</strong><small>{node.detail}</small></div></div>)}
  </div>;
}
