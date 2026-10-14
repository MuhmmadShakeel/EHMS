import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Features | EHMS Hospital Management",
  description: "Explore EHMS features for patient journeys, OPD queues, bed management, surgery planning, stock forecasts and charity funds."
};

const features = [
  { number: "01", category: "PATIENT FLOW", title: "Guide each patient through care", text: "Configure the stages from registration and vitals through consultation, laboratory, pharmacy and check-out. Each team can see the next step in the journey.", image: "/media/feature-registration.webp", alt: "Illustrative hospital registration conversation" },
  { number: "02", category: "OUTPATIENT CARE", title: "Keep the OPD queue in view", text: "See who is waiting, who is being seen and which visit needs attention. Shared queue visibility helps the front desk and clinicians coordinate the day.", image: "/media/feature-opd.webp", alt: "Illustrative outpatient staff coordinating the queue" },
  { number: "03", category: "WARD OPERATIONS", title: "Know where beds are available", text: "Give ward teams a clear picture of occupancy, availability and patient placement, so they can prepare for the next admission or transfer.", image: "/media/feature-ward.webp", alt: "Illustrative nurse preparing an available hospital bed" },
  { number: "04", category: "SURGERY", title: "Plan surgery with more context", text: "Bring upcoming cases, booking status and required advances into one schedule for theatre and administration teams.", image: "/media/feature-surgery.webp", alt: "Illustrative operating theatre team planning a procedure" },
  { number: "05", category: "PROCUREMENT", title: "See stock needs ahead of time", text: "Compare supplies planned for booked operating theatre cases with stock on hand, so teams can spot gaps before the day begins.", image: "/media/feature-supplies.webp", alt: "Illustrative hospital staff member checking medical supplies" },
  { number: "06", category: "ADMINISTRATION", title: "Track charity funds clearly", text: "Keep charitable balances in dedicated ledgers and follow the funds available to support patient care.", image: "/media/feature-funds.webp", alt: "Illustrative hospital administrators reviewing a fund folder" }
];

export default function FeaturesPage() {
  return <main className="features-page">
    <SiteHeader active="features" />

    <section id="top" className="features-hero" aria-labelledby="features-hero-heading"><div className="features-hero-image" aria-hidden="true" /><div className="container features-hero-content"><h1 id="features-hero-heading">Every team. One clearer way forward.</h1><p>From the first patient interaction to ward operations and financial oversight, EHMS brings the work of a hospital into focus.</p><div className="features-hero-actions"><a className="button button-light" href="#feature-list">Explore features <span aria-hidden="true">↓</span></a><a className="button button-outline" href="https://cal.com/muhammad-safdar-iqbal-xbsbvn/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a call <span aria-hidden="true">↗</span></a></div></div></section>

    <section id="feature-list" className="features-section" aria-labelledby="features-heading"><div className="container features-intro"><h2 id="features-heading">The details behind a better care day.</h2><p>Follow the work from arrival to discharge and see how connected information helps every team take the next step with confidence.</p></div><div className="container features-timeline">{features.map((feature) => <article className="feature-timeline-item" key={feature.number}><div className="feature-timeline-media"><Image src={feature.image} alt={feature.alt} width={1280} height={720} sizes="(max-width: 700px) 100vw, 45vw" /></div><span className="feature-timeline-marker" aria-hidden="true" /><div className="feature-timeline-copy"><span>{feature.number} / {feature.category}</span><h3>{feature.title}</h3><p>{feature.text}</p></div></article>)}</div></section>

    <section className="features-journey" aria-labelledby="features-journey-heading"><div className="container"><div className="features-journey-head"><div><h2 id="features-journey-heading">Care does not happen in silos.</h2></div><p>Each stage adds context for the next team. EHMS brings those stages into a clearer operational picture.</p></div><div className="features-journey-grid">{[
      { number: "01", title: "Register", text: "Begin with one patient identity." },
      { number: "02", title: "Schedule", text: "Manage arrival and appointments." },
      { number: "03", title: "Consult", text: "Keep the OPD queue in view." },
      { number: "04", title: "Treat", text: "Connect lab and pharmacy steps." },
      { number: "05", title: "Coordinate", text: "Plan beds and surgery work." },
      { number: "06", title: "Review", text: "See operations and funds clearly." }
    ].map((step) => <article className="features-journey-card" key={step.number}><span className="features-journey-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}<svg className="features-journey-path" viewBox="0 0 1200 240" preserveAspectRatio="none" aria-hidden="true"><path d="M100 82 C200 82 200 138 300 138 S400 82 500 82 S600 138 700 138 S800 82 900 82 S1000 138 1100 138" /><path className="features-journey-path-motion" pathLength="100" d="M100 82 C200 82 200 138 300 138 S400 82 500 82 S600 138 700 138 S800 82 900 82 S1000 138 1100 138" /></svg></div></div></section>

    <section className="features-close" aria-labelledby="features-close-heading"><div className="container features-close-grid"><div className="features-close-visual" aria-label="EHMS dashboard and care team"><div className="features-close-screen"><Image src="/media/dashboard.webp" alt="EHMS facility dashboard" width={1280} height={720} sizes="(max-width: 800px) 90vw, 48vw" /></div><div className="features-close-small"><Image src="/media/bed-board.webp" alt="EHMS hospital bed board" width={800} height={500} sizes="(max-width: 800px) 40vw, 20vw" /></div></div><div className="features-close-copy"><h2 id="features-close-heading">Make room for what matters most.</h2><p>Care moves through many teams. EHMS helps bring patient flow, ward activity and operational priorities together so staff can work with a clearer picture of the day.</p><a className="button button-dark" href="https://cal.com/muhammad-safdar-iqbal-xbsbvn/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Talk through your workflow <span aria-hidden="true">↗</span></a></div></div></section>

    <section className="features-teams" aria-labelledby="features-teams-heading"><div className="container"><div className="features-teams-head"><h2 id="features-teams-heading">A clearer view for every team.</h2><p>Different roles need different details. The same connected journey helps each team see where its work fits.</p></div><div className="features-teams-grid"><article><span className="features-team-icon" aria-hidden="true">01</span><h3>Front desk</h3><p>Keep arrival, registration, appointments and live waits visible from the first interaction.</p><a href="#feature-list">Explore patient flow <span aria-hidden="true">↗</span></a></article><article><span className="features-team-icon" aria-hidden="true">02</span><h3>Clinical teams</h3><p>Follow consultations, results, ward capacity and procedure plans as care moves forward.</p><a href="#feature-list">Explore care delivery <span aria-hidden="true">↗</span></a></article><article><span className="features-team-icon" aria-hidden="true">03</span><h3>Operations</h3><p>See stock forecasts, funding activity and the wider hospital picture in focused views.</p><a href="#feature-list">Explore operations <span aria-hidden="true">↗</span></a></article></div></div></section>

    <SiteFooter />
  </main>;
}
