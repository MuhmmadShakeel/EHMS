import Image from "next/image";

const features = [
  { icon: "identity", title: "One patient identity", text: "Search before registration and keep every visit connected to a stable patient record." },
  { icon: "handoff", title: "Clearer handoffs", text: "Make the next stage, its owner and pending work visible across the care journey." },
  { icon: "surgery", title: "Surgery readiness", text: "Bring bookings, advances and theatre stock needs into a focused planning view." },
  { icon: "beds", title: "Beds & wards", text: "See occupancy, availability and cleaning work in the same operational picture." },
  { icon: "stock", title: "Stock awareness", text: "Compare planned case needs with supplies on hand before the day begins." },
  { icon: "funds", title: "Traceable funds", text: "Keep charitable balances in their own ledgers and follow how care is funded." }
] as const;

function FeatureIcon({ kind }: { kind: typeof features[number]["icon"] }) {
  return <svg viewBox="0 0 28 28" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "identity" && <><circle cx="14" cy="9" r="4"/><path d="M5.5 23a8.5 8.5 0 0 1 17 0M21 5h4M23 3v4"/></>}
    {kind === "handoff" && <><path d="M4 8h13l-3-3m3 3-3 3M24 20H11l3-3m-3 3 3 3"/><circle cx="6" cy="20" r="2"/><circle cx="22" cy="8" r="2"/></>}
    {kind === "surgery" && <><rect x="4" y="6" width="20" height="18" rx="3"/><path d="M9 4v4M19 4v4M4 12h20M11 18h6M14 15v6"/></>}
    {kind === "beds" && <><path d="M3 22V9M25 22V9M3 19h22M6 14h8a3 3 0 0 1 3 3v2M17 15h5a3 3 0 0 1 3 3"/><circle cx="9" cy="11" r="2"/></>}
    {kind === "stock" && <><path d="m14 3 10 5v12l-10 5-10-5V8l10-5ZM4 8l10 5 10-5M14 13v12"/></>}
    {kind === "funds" && <><rect x="4" y="5" width="20" height="18" rx="3"/><path d="M8 10h12M8 14h12M8 18h6M19 17v3M17.5 18.5h3"/></>}
  </svg>;
}

export default function CareCapabilities() {
  return <section id="why-ehms" className="care-capabilities" aria-labelledby="capabilities-heading">
    <div className="container">
      <div className="capabilities-heading">
        <h2 id="capabilities-heading">The details that keep care moving.</h2>
        <p>From the front desk to the ward and finance office, EHMS gives each team the context it needs for the next step.</p>
      </div>
      <div className="capabilities-layout">
        <div className="capabilities-rail capabilities-rail-left">
          {features.slice(0, 3).map((feature) => <article className="capability-card" key={feature.title}><div className="capability-title"><span className="capability-icon"><FeatureIcon kind={feature.icon}/></span><h3>{feature.title}</h3></div><p>{feature.text}</p></article>)}
        </div>
        <div className="capabilities-center">
          <div className="capabilities-image-ring"><Image src="/media/care-team-round.webp" alt="Illustrative healthcare team working together around a tablet" width={620} height={620} sizes="(max-width: 700px) 70vw, 330px" /></div>
          <span className="capabilities-image-label">One connected team</span>
        </div>
        <div className="capabilities-rail capabilities-rail-right">
          {features.slice(3).map((feature) => <article className="capability-card" key={feature.title}><div className="capability-title"><span className="capability-icon"><FeatureIcon kind={feature.icon}/></span><h3>{feature.title}</h3></div><p>{feature.text}</p></article>)}
        </div>
      </div>
      <p className="capabilities-image-note">Illustrative image</p>
    </div>
  </section>;
}
