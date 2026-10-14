import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Hospital Management Solutions for Care and Operations | EHMS",
  description: "Explore EHMS hospital management solutions for patient registration, OPD queues, lab and pharmacy, bed management, surgery, stock and finance."
};

const benefits = [
  { title: "Patient records", text: "Link each hospital visit to the right patient.", icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21v-2a8 8 0 0 1 16 0v2" },
  { title: "Clinical handoffs", text: "Show the care stage and who takes the next step.", icon: "M4 12h16m-5-5 5 5-5 5M4 5h8M4 19h8" },
  { title: "Ward and case planning", text: "Check beds, surgery cases and supply needs.", icon: "M3 18V7m0 8h18v4M7 15V9h10v6m4 4v-4" },
  { title: "Hospital oversight", text: "Review billing, funds and daily activity.", icon: "M4 5v14h16M7 15l4-4 3 2 5-6" }
];

const journeySteps = [
  { number: "01", label: "ARRIVAL", title: "Register the patient", text: "Find the patient record and manage appointments from the front desk." },
  { number: "02", label: "CARE", title: "Manage outpatient care", text: "Follow the OPD queue, lab orders and pharmacy work through each visit." },
  { number: "03", label: "CAPACITY", title: "Plan beds and surgery", text: "Check ward capacity, booked cases and supplies before care moves ahead." },
  { number: "04", label: "OVERSIGHT", title: "Review hospital activity", text: "See billing, charity funds and operational work in focused views." }
];

const services = [
  { title: "Patient registration and OPD", text: "Manage appointments, live OPD queues and care stages from arrival to checkout." },
  { title: "Laboratory and pharmacy", text: "Track lab orders and verified results, then follow prescriptions through dispensing." },
  { title: "Bed and surgery management", text: "Check ward beds, admissions and surgery bookings alongside theatre stock needs." },
  { title: "Procurement and stock", text: "Review purchase requests, goods receipts and supply gaps for scheduled cases." },
  { title: "Hospital finance and funds", text: "See billing, deposits, accounting and separate charity fund ledgers." }
];

const stories = [
  { label: "PATIENT FLOW", title: "Patient journey stages", text: "The EHMS journey screen shows care stages, optional services and when a visit moves forward.", image: "/media/journey-stages.webp", alt: "EHMS patient journey stages" },
  { label: "WARD OPERATIONS", title: "Hospital bed board", text: "See rooms by ward, including occupied, available, cleaning and blocked beds.", image: "/media/bed-board.webp", alt: "EHMS hospital bed management board" },
  { label: "OPERATIONAL VIEW", title: "Facility dashboard", text: "Review registrations, tokens, collections and tasks that need attention.", image: "/media/dashboard.webp", alt: "EHMS hospital facility dashboard" }
];

const questions = [
  { question: "How does EHMS track a patient journey?", answer: "Hospitals can set stages for registration, vitals, consultation and optional lab or pharmacy work. A visit moves to the next stage when its completion rule is met." },
  { question: "What does the EHMS OPD queue show?", answer: "The OPD board shows patient tokens, departments and waiting times. Teams can search for a visit and filter patients who have waited longer or need attention." },
  { question: "Can EHMS manage hospital beds and surgery?", answer: "EHMS screens include a hospital bed board, admissions, housekeeping status, a surgery schedule, a surgery day board and a case register." },
  { question: "How does EHMS forecast operating theatre stock?", answer: "The stock forecast compares supplies needed for booked procedures with stock on hand, so theatre teams can spot shortages before surgery day." },
  { question: "How does EHMS manage hospital charity funds?", answer: "The fund view keeps separate ledgers and balances for Trust, Zakat, Sadqa and Charity Box funds. Eligible patient discounts are recorded against the selected fund." }
];

export default function SolutionsPage() {
  return <main className="solutions-page">
    <SiteHeader active="solutions" />

    <section id="top" className="solutions-hero" aria-labelledby="solutions-hero-title">
      <div className="solutions-hero-image" aria-hidden="true" />
      <div className="container solutions-hero-content">
        <h1 id="solutions-hero-title">Hospital management<br/><em>from arrival to discharge.</em></h1>
        <p>Connect patient flow, clinical services and daily hospital operations with EHMS.</p>
        <div className="solutions-hero-actions"><a className="button button-light" href="#solution-highlights">Explore solutions <span aria-hidden="true">↓</span></a><a className="button button-outline" href="https://cal.com/muhammad-safdar-iqbal-xbsbvn/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a call <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>

    <section id="solution-highlights" className="solutions-highlights" aria-labelledby="solutions-highlights-title">
      <div className="container solutions-section-intro"><h2 id="solutions-highlights-title">One system for hospital teams.</h2><p>Keep patient records, clinical handoffs, ward planning and finance within reach of the people doing the work.</p></div>
      <div className="container solutions-benefit-grid">{benefits.map((benefit) => <article className="solutions-benefit-card" key={benefit.title}><span className="solutions-benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={benefit.icon}/></svg></span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div>
    </section>

    <section className="solutions-journey" aria-labelledby="solutions-journey-title">
      <div className="container solutions-journey-inner">
        <div className="solutions-journey-heading"><span>A DAY IN THE HOSPITAL</span><h2 id="solutions-journey-title">A hospital day, from arrival to billing.</h2><p>Follow a visit through outpatient care, wards, surgery and administration.</p></div>
        <div className="solutions-journey-track">{journeySteps.map((step) => <article className="solutions-journey-step" key={step.number}><span className="solutions-journey-number">{step.number}</span><div><small>{step.label}</small><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div>
      </div>
    </section>

    <section className="solutions-services" aria-labelledby="solutions-services-title"><div className="container solutions-services-grid"><div className="solutions-services-copy"><h2 id="solutions-services-title">Hospital management solutions for daily work.</h2><p>Explore how EHMS supports patient care, wards, supplies and hospital finance.</p><div className="solutions-service-list">{services.map((service,index) => <details key={service.title} open={index === 0}><summary>{service.title}<span aria-hidden="true">↗</span></summary><p>{service.text}</p></details>)}</div></div><div className="solutions-services-media"><Image src="/media/journey-stages-refined.png" alt="EHMS patient journey configuration with registration, vitals, consultation, lab, pharmacy and checkout stages" width={1586} height={992} sizes="(max-width: 800px) 100vw, 48vw" /><span>EHMS / Patient journey</span></div></div></section>

    <section className="solutions-stories" aria-labelledby="solutions-stories-title"><div className="container solutions-section-intro"><h2 id="solutions-stories-title">See the hospital workflows in EHMS.</h2><p>These product screens show patient journey stages, the hospital bed board and the facility dashboard.</p></div><div className="container solutions-story-grid">{stories.map((story) => <article className="solutions-story-card" key={story.title}><div className="solutions-story-image"><Image src={story.image} alt={story.alt} width={1280} height={720} sizes="(max-width: 700px) 100vw, 33vw" /></div><div className="solutions-story-copy"><span>{story.label}</span><h3>{story.title}</h3><p>{story.text}</p></div></article>)}</div></section>

    <section className="solutions-about" aria-labelledby="solutions-about-title"><div className="container solutions-about-grid"><div className="solutions-about-image"><Image src="/media/care-team-round.webp" alt="Illustrative healthcare team collaborating around a tablet" width={900} height={900} sizes="(max-width: 800px) 100vw, 42vw" /><span>Illustrative image</span></div><div className="solutions-about-copy"><h2 id="solutions-about-title">Built for the people running a hospital.</h2><p>Reception, clinicians, ward staff and administrators need different information. EHMS keeps patient visits and operational tasks connected, so each team can focus on its part of the day.</p><div className="solutions-about-points"><div><strong>Patient records</strong><small>Visits linked to one person.</small></div><div><strong>Clinical workflow</strong><small>Care stages and handoffs.</small></div><div><strong>Ward capacity</strong><small>Beds and planned cases.</small></div><div><strong>Hospital finance</strong><small>Billing and fund ledgers.</small></div></div><a className="button button-light" href="/features">Explore the features <span aria-hidden="true">↗</span></a></div></div></section>

    <section className="solutions-faq" aria-labelledby="solutions-faq-title"><div className="container solutions-faq-grid"><div className="solutions-faq-copy"><h2 id="solutions-faq-title">Questions about EHMS hospital software.</h2><div className="solutions-faq-list">{questions.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div><div className="solutions-faq-image"><Image src="/media/doctor-care.webp" alt="Illustrative clinician in a hospital corridor" width={900} height={1125} sizes="(max-width: 800px) 100vw, 43vw" /><span>Illustrative image</span></div></div></section>

    <SiteFooter />
  </main>;
}
