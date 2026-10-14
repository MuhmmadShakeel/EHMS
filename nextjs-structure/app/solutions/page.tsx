import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Solutions | EHMS Hospital Management",
  description: "Explore EHMS solutions for patient journeys, clinical services, wards, surgery, procurement and hospital finance."
};

const benefits = [
  { title: "One patient identity", text: "Keep visits connected to a stable patient record.", icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21v-2a8 8 0 0 1 16 0v2" },
  { title: "Clear handoffs", text: "Show the next stage and the team that owns it.", icon: "M4 12h16m-5-5 5 5-5 5M4 5h8M4 19h8" },
  { title: "Visible capacity", text: "See beds, cases and planned stock needs.", icon: "M3 18V7m0 8h18v4M7 15V9h10v6m4 4v-4" },
  { title: "Traceable work", text: "Follow activity through focused operational views.", icon: "M4 5v14h16M7 15l4-4 3 2 5-6" }
];

const journeySteps = [
  { number: "01", label: "ARRIVAL", title: "Start with one patient record", text: "Registration and appointments give the next team a clear starting point." },
  { number: "02", label: "CARE", title: "Keep each handoff visible", text: "OPD, diagnostics, and pharmacy stay connected to the care journey." },
  { number: "03", label: "CAPACITY", title: "See what the day needs", text: "Beds, surgery plans, and supplies help teams prepare for the next step." },
  { number: "04", label: "OVERSIGHT", title: "Bring the picture together", text: "Billing, funds, and operational views support clearer decisions." }
];

const services = [
  { title: "Patient journey & OPD", text: "Connect registration, appointments, live queues and configurable stages from arrival through check-out." },
  { title: "Lab & pharmacy", text: "Follow orders through result verification, prescription entry, dispensing and the related clinical handoff." },
  { title: "Beds & surgery", text: "View ward capacity, admissions, case bookings and the operating theatre stock needed for planned procedures." },
  { title: "Procurement & stock", text: "See requisitions, orders, goods receipts, audits and forecast shortfalls against booked cases." },
  { title: "Finance & charity funds", text: "Bring billing, deposits, accounting and separate restricted-fund ledgers into clearer view." }
];

const stories = [
  { label: "PATIENT FLOW", title: "A journey with a next step", text: "The published EHMS journey view shows ordered stages, optional services and the rule that advances each handoff.", image: "/media/journey-stages.webp", alt: "Published EHMS patient journey stages" },
  { label: "WARD OPERATIONS", title: "Capacity in context", text: "The published bed board groups rooms by ward and shows occupancy, free, cleaning and blocked states.", image: "/media/bed-board.webp", alt: "Published EHMS bed management board" },
  { label: "OPERATIONAL VIEW", title: "The work behind the day", text: "The facility dashboard brings registration, tokens, collections and items needing attention into one screen.", image: "/media/dashboard.webp", alt: "Published EHMS facility dashboard" }
];

const questions = [
  { question: "How does EHMS show the patient journey?", answer: "The documented journey uses configurable stages, including registration, vitals, consultation and optional lab or pharmacy steps. The next stage depends on each stage's completion rule." },
  { question: "What can teams see on the OPD board?", answer: "The observed board includes table and board views, department filters, token and patient search, elapsed waits and filters for patients who are blocked or waiting longer." },
  { question: "Does EHMS include bed and surgery workflows?", answer: "Yes. The documented interfaces include a bed board, admissions, housekeeping, a surgery schedule, a surgery-day board and a case register." },
  { question: "How are operating theatre supplies planned?", answer: "The OT stock forecast compares the needs of booked cases with stock on hand, helping teams see potential shortfalls before surgery day." },
  { question: "How are charity funds kept separate?", answer: "The published fund view shows distinct ledgers and available balances for Trust, Zakat, Sadqa and Charity Box funds. Funded discounts draw from the selected eligible fund." }
];

export default function SolutionsPage() {
  return <main className="solutions-page">
    <SiteHeader active="solutions" />

    <section id="top" className="solutions-hero" aria-labelledby="solutions-hero-title">
      <div className="solutions-hero-image" aria-hidden="true" />
      <div className="container solutions-hero-content">
        <h1 id="solutions-hero-title">One hospital.<br/><em>One clearer picture.</em></h1>
        <p>Connect the people, stages and operational details behind every care journey.</p>
        <div className="solutions-hero-actions"><a className="button button-light" href="#solution-highlights">Explore solutions <span aria-hidden="true">↓</span></a><a className="button button-outline" href="https://cal.com/muhammad-safdar-iqbal-xbsbvn/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a call <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>

    <section id="solution-highlights" className="solutions-highlights" aria-labelledby="solutions-highlights-title">
      <div className="container solutions-section-intro"><h2 id="solutions-highlights-title">What makes the work feel connected.</h2><p>From a patient&apos;s first arrival to the decisions that support care, each team can work from a clearer view of what comes next.</p></div>
      <div className="container solutions-benefit-grid">{benefits.map((benefit) => <article className="solutions-benefit-card" key={benefit.title}><span className="solutions-benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={benefit.icon}/></svg></span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div>
    </section>

    <section className="solutions-journey" aria-labelledby="solutions-journey-title">
      <div className="container solutions-journey-inner">
        <div className="solutions-journey-heading"><span>ONE CONNECTED DAY</span><h2 id="solutions-journey-title">From first arrival to a clearer next step.</h2><p>Follow how the work moves through a hospital, one handoff at a time.</p></div>
        <div className="solutions-journey-track">{journeySteps.map((step) => <article className="solutions-journey-step" key={step.number}><span className="solutions-journey-number">{step.number}</span><div><small>{step.label}</small><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div>
      </div>
    </section>

    <section className="solutions-services" aria-labelledby="solutions-services-title"><div className="container solutions-services-grid"><div className="solutions-services-copy"><h2 id="solutions-services-title">Solutions for the work that fills a hospital day.</h2><p>Explore the connected areas shown in EHMS product materials and the observed interface.</p><div className="solutions-service-list">{services.map((service,index) => <details key={service.title} open={index === 0}><summary>{service.title}<span aria-hidden="true">↗</span></summary><p>{service.text}</p></details>)}</div></div><div className="solutions-services-media"><Image src="/media/journey-stages.webp" alt="Published EHMS patient journey configuration interface" width={1280} height={800} sizes="(max-width: 800px) 100vw, 48vw" /><span>EHMS / Patient journey</span></div></div></section>

    <section className="solutions-stories" aria-labelledby="solutions-stories-title"><div className="container solutions-section-intro"><h2 id="solutions-stories-title">Three views of a connected day.</h2><p>Published EHMS screens show how patient flow, ward capacity and operational priorities come into focus.</p></div><div className="container solutions-story-grid">{stories.map((story) => <article className="solutions-story-card" key={story.title}><div className="solutions-story-image"><Image src={story.image} alt={story.alt} width={1280} height={720} sizes="(max-width: 700px) 100vw, 33vw" /></div><div className="solutions-story-copy"><span>{story.label}</span><h3>{story.title}</h3><p>{story.text}</p></div></article>)}</div></section>

    <section className="solutions-about" aria-labelledby="solutions-about-title"><div className="container solutions-about-grid"><div className="solutions-about-image"><Image src="/media/care-team-round.webp" alt="Illustrative healthcare team collaborating around a tablet" width={900} height={900} sizes="(max-width: 800px) 100vw, 42vw" /><span>Illustrative image</span></div><div className="solutions-about-copy"><h2 id="solutions-about-title">Built around the people behind care.</h2><p>Hospital work crosses reception, clinical services, wards and administration. EHMS brings those tasks into a more consistent workspace while keeping each team&apos;s next action visible.</p><div className="solutions-about-points"><div><strong>Patient identity</strong><small>One record across visits.</small></div><div><strong>Clinical handoffs</strong><small>Clear stages and ownership.</small></div><div><strong>Ward readiness</strong><small>Capacity and case context.</small></div><div><strong>Financial clarity</strong><small>Billing and separate funds.</small></div></div><a className="button button-light" href="/features">Explore the features <span aria-hidden="true">↗</span></a></div></div></section>

    <section className="solutions-faq" aria-labelledby="solutions-faq-title"><div className="container solutions-faq-grid"><div className="solutions-faq-copy"><h2 id="solutions-faq-title">Answers about the way EHMS works.</h2><div className="solutions-faq-list">{questions.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div><div className="solutions-faq-image"><Image src="/media/doctor-care.webp" alt="Illustrative clinician in a hospital corridor" width={900} height={1125} sizes="(max-width: 800px) 100vw, 43vw" /><span>Illustrative image</span></div></div></section>

    <SiteFooter />
  </main>;
}
