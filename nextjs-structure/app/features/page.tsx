import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Hospital Management Software Features | EHMS",
  description: "Explore EHMS features for patient registration, OPD queue management, hospital beds, surgery scheduling, stock forecasting and charity fund tracking."
};

const features = [
  { number: "01", category: "PATIENT FLOW", title: "Patient registration and care stages", text: "Set a patient journey from registration and vitals to consultation, lab, pharmacy and checkout. Staff can see the current stage and the next handoff.", image: "/media/feature-registration.webp", alt: "Illustrative hospital registration conversation" },
  { number: "02", category: "OUTPATIENT CARE", title: "Live OPD queue management", text: "See waiting patients, active consultations and visits that need attention. Front desk and clinical staff can work from the same queue view.", image: "/media/feature-opd.webp", alt: "Illustrative outpatient staff coordinating the queue" },
  { number: "03", category: "WARD OPERATIONS", title: "Hospital bed and ward management", text: "Check bed occupancy, availability and patient placement across wards. Plan an admission or transfer with the latest bed status in view.", image: "/media/feature-ward.webp", alt: "Illustrative nurse preparing an available hospital bed" },
  { number: "04", category: "SURGERY", title: "Surgery scheduling and planning", text: "Review booked procedures, case status and required advances in one surgery schedule for theatre and administration teams.", image: "/media/feature-surgery.webp", alt: "Illustrative operating theatre team planning a procedure" },
  { number: "05", category: "PROCUREMENT", title: "Medical stock forecasting", text: "Compare supplies needed for scheduled theatre cases with stock on hand. Spot shortages before the procedure day arrives.", image: "/media/feature-supplies.webp", alt: "Illustrative hospital staff member checking medical supplies" },
  { number: "06", category: "ADMINISTRATION", title: "Hospital charity fund tracking", text: "Review charitable contributions and available balances in separate fund ledgers that support patient care.", image: "/media/feature-funds.webp", alt: "Illustrative hospital administrators reviewing a fund folder" }
];

export default function FeaturesPage() {
  return <main className="features-page">
    <SiteHeader active="features" />

    <section id="top" className="features-hero" aria-labelledby="features-hero-heading"><div className="features-hero-image" aria-hidden="true" /><div className="container features-hero-content"><h1 id="features-hero-heading">Hospital features for every care team.</h1><p>Manage patient visits, OPD queues, beds, surgery and hospital finance with EHMS.</p><div className="features-hero-actions"><a className="button button-light" href="#feature-list">Explore features <span aria-hidden="true">↓</span></a><a className="button button-outline" href="https://cal.com/muhammad-safdar-iqbal-xbsbvn/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a call <span aria-hidden="true">↗</span></a></div></div></section>

    <section id="feature-list" className="features-section" aria-labelledby="features-heading"><div className="container features-intro"><h2 id="features-heading">Hospital workflows in one system.</h2><p>Explore the EHMS tools for patient flow, outpatient care, wards, surgery, supplies and funds.</p></div><div className="container features-timeline">{features.map((feature) => <article className="feature-timeline-item" key={feature.number}><div className="feature-timeline-media"><Image src={feature.image} alt={feature.alt} width={1280} height={720} sizes="(max-width: 700px) 100vw, 45vw" /></div><span className="feature-timeline-marker" aria-hidden="true" /><div className="feature-timeline-copy"><span>{feature.number} / {feature.category}</span><h3>{feature.title}</h3><p>{feature.text}</p></div></article>)}</div></section>

    <section className="features-journey" aria-labelledby="features-journey-heading"><div className="container"><div className="features-journey-head"><div><h2 id="features-journey-heading">Follow the patient journey.</h2></div><p>From registration to checkout, each hospital team sees the stage that needs its attention.</p></div><div className="features-journey-grid">{[
      { number: "01", title: "Register", text: "Find or create a patient record." },
      { number: "02", title: "Schedule", text: "Book appointments and arrivals." },
      { number: "03", title: "Consult", text: "Manage the live OPD queue." },
      { number: "04", title: "Treat", text: "Follow lab and pharmacy work." },
      { number: "05", title: "Coordinate", text: "Check beds and surgery plans." },
      { number: "06", title: "Review", text: "Review funds and operations." }
    ].map((step) => <article className="features-journey-card" key={step.number}><span className="features-journey-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}<svg className="features-journey-path" viewBox="0 0 1200 240" preserveAspectRatio="none" aria-hidden="true"><path d="M100 82 C200 82 200 138 300 138 S400 82 500 82 S600 138 700 138 S800 82 900 82 S1000 138 1100 138" /><path className="features-journey-path-motion" pathLength="100" d="M100 82 C200 82 200 138 300 138 S400 82 500 82 S600 138 700 138 S800 82 900 82 S1000 138 1100 138" /></svg></div></div></section>

    <section className="features-close" aria-labelledby="features-close-heading"><div className="container features-close-grid"><div className="features-close-visual" aria-label="EHMS dashboard and hospital bed board"><div className="features-close-screen"><Image src="/media/dashboard.webp" alt="EHMS facility dashboard" width={1280} height={720} sizes="(max-width: 800px) 90vw, 48vw" /></div><div className="features-close-small"><Image src="/media/bed-board.webp" alt="EHMS hospital bed board" width={800} height={500} sizes="(max-width: 800px) 40vw, 20vw" /></div></div><div className="features-close-copy"><h2 id="features-close-heading">See hospital activity in one view.</h2><p>EHMS brings patient visits, ward beds and daily operations into a shared hospital dashboard. Staff can check what is happening and plan the next task.</p><a className="button button-dark" href="https://cal.com/muhammad-safdar-iqbal-xbsbvn/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Discuss your hospital workflow <span aria-hidden="true">↗</span></a></div></div></section>

    <section className="features-teams" aria-labelledby="features-teams-heading"><div className="container"><div className="features-teams-head"><h2 id="features-teams-heading">Built for the teams running a hospital.</h2><p>Front desk, clinical and operations staff can each focus on the work they manage.</p></div><div className="features-teams-grid"><article><span className="features-team-icon" aria-hidden="true">01</span><h3>Front desk</h3><p>Manage patient registration, appointments, arrivals and the live OPD queue.</p><a href="#feature-list">Explore patient flow <span aria-hidden="true">↗</span></a></article><article><span className="features-team-icon" aria-hidden="true">02</span><h3>Clinical teams</h3><p>Follow consultations, lab results, ward beds and scheduled procedures.</p><a href="#feature-list">Explore care delivery <span aria-hidden="true">↗</span></a></article><article><span className="features-team-icon" aria-hidden="true">03</span><h3>Operations</h3><p>Review medical stock forecasts, charity funds and hospital finance.</p><a href="#feature-list">Explore operations <span aria-hidden="true">↗</span></a></article></div></div></section>

    <SiteFooter />
  </main>;
}
