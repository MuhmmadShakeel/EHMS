import Image from "next/image";
import type { Metadata } from "next";
import HospitalMarquee, { type Hospital } from "../components/HospitalMarquee";
import FlowTreeViewport from "../components/FlowTreeViewport";
import CareCapabilities from "../components/CareCapabilities";
import ProductShowcase from "../components/ProductShowcase";
import FaqSection from "../components/FaqSection";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import DoctorSteps from "../components/DoctorSteps";

const sampleHospitals: Hospital[] = [
  { name: "Asterfield Health", logo: "/media/hospital-logos/asterfield.svg" },
  { name: "Nivara Medical", logo: "/media/hospital-logos/nivara.svg" },
  { name: "Calmbridge Hospital", logo: "/media/hospital-logos/calmbridge.svg" },
  { name: "Lumora Eye Centre", logo: "/media/hospital-logos/lumora.svg" },
  { name: "Verdant Grove Care", logo: "/media/hospital-logos/verdant.svg" },
  { name: "Serein Clinics", logo: "/media/hospital-logos/serein.svg" }
];

export const metadata: Metadata = {
  title: "Hospital Management Software for Patient Care and Operations | EHMS",
  description: "Explore EHMS hospital management software for patient registration, OPD queues, bed management, surgery scheduling, stock planning and hospital finance."
};

const modules = [
  { number: "01", category: "PATIENT FLOW", title: "Patient journey tracking", body: "Link registration, appointments and OPD visits in a guided patient workflow.", image: "/media/journey-stages.webp", alt: "EHMS patient journey stage configuration" },
  { number: "02", category: "FRONT DESK", title: "Live OPD queue", body: "Track waiting patients, consultations and delays from the front desk.", image: "/media/opd-queue.webp", alt: "EHMS outpatient queue showing waiting and active visits" },
  { number: "03", category: "WARD MANAGEMENT", title: "Hospital bed management", body: "Check ward occupancy, open beds and patient placement in one board.", image: "/media/bed-board.webp", alt: "EHMS hospital bed board" },
  { number: "04", category: "SURGERY", title: "Surgery scheduling", body: "Review theatre bookings, upcoming cases and required advances together.", image: "/media/surgery-schedule.webp", alt: "EHMS surgery schedule interface" },
  { number: "05", category: "PROCUREMENT", title: "Hospital stock forecast", body: "Compare supplies needed for booked procedures with stock on hand.", image: "/media/stock-forecast.webp", alt: "EHMS operating theatre stock forecast" },
  { number: "06", category: "ADMINISTRATION", title: "Charity fund tracking", body: "See fund balances and activity in separate hospital finance ledgers.", image: "/media/charity-funds.webp", alt: "EHMS charity funds ledger and balances" }
];

const orbitBubbles = Array.from({ length: 11 }, (_, index) => {
  const angle = (index * 137.5 * Math.PI) / 180;
  const radius = 13 + ((index * 29) % 27);
  return { left: `${50 + Math.cos(angle) * radius}%`, top: `${50 + Math.sin(angle) * radius}%`, animationDelay: `${-index * .64}s`, animationDuration: `${5 + (index % 4)}s` };
});

export default function Home() {
  return <main className="home-page">
    <SiteHeader active="home" />

    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-photo" aria-hidden="true"></div>
      <div className="hero-shade" aria-hidden="true"></div>
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => <span key={index} />)}
      </div>
      <div className="container hero-content">
        <h1 id="hero-title">Hospital management<br/><em>software built for care.</em></h1>
        <p className="hero-lede">Patient care and hospital operations in one connected workspace.</p>
        <div className="hero-actions"><a className="button button-light" href="#platform">Explore EHMS <span aria-hidden="true">&rarr;</span></a><a className="button button-outline" href="#contact">Talk to our team <span aria-hidden="true">&rarr;</span></a></div>
        <div className="hero-caption"><span className="caption-pulse"></span> Built for the everyday work of hospital teams</div>
        <p className="hero-project">An Eaquirstech project. <a href="mailto:teams@eaquirstech.com">teams@eaquirstech.com</a></p>
      </div>
      <div className="hero-gallery" aria-label="EHMS interface preview">
        <div className="hero-screen hero-screen-left">
          <div className="hero-screen-bar"><span className="screen-brand">EHMS</span><span>Patient journey</span><span className="screen-bar-dot" aria-hidden="true"></span></div>
          <Image src="/media/journey-stages.webp" alt="Published EHMS patient journey configuration screen" width={1600} height={1000} sizes="(max-width: 700px) 65vw, 48vw" />
        </div>
        <div className="hero-screen hero-screen-right">
          <div className="hero-screen-bar"><span className="screen-brand">EHMS</span><span>Bed management</span><span className="screen-bar-dot" aria-hidden="true"></span></div>
          <Image src="/media/bed-board.webp" alt="Published EHMS hospital bed board screen" width={1600} height={1000} sizes="(max-width: 700px) 65vw, 48vw" />
        </div>
        <div className="hero-screen hero-screen-center">
          <div className="hero-screen-bar"><span className="screen-brand">EHMS</span><span>Facility dashboard</span><span className="screen-bar-dot" aria-hidden="true"></span></div>
          <Image src="/media/dashboard.webp" alt="Published EHMS facility dashboard screen" width={1600} height={1000} sizes="(max-width: 700px) 78vw, 60vw" priority />
        </div>
      </div>
      <div className="hero-orbit hero-orbit-one" aria-hidden="true">{orbitBubbles.map((bubble, index) => <span className="orbit-bubble" style={bubble} key={index}/>)}</div>
      <div className="hero-orbit hero-orbit-two" aria-hidden="true">{orbitBubbles.slice(0, 7).map((bubble, index) => <span className="orbit-bubble" style={bubble} key={index}/>)}</div>
      <div className="hero-orbit hero-orbit-three" aria-hidden="true">{orbitBubbles.slice(2, 9).map((bubble, index) => <span className="orbit-bubble" style={bubble} key={index}/>)}</div>
      <div className="hero-orbit hero-orbit-four" aria-hidden="true">{orbitBubbles.slice(4, 9).map((bubble, index) => <span className="orbit-bubble" style={bubble} key={index}/>)}</div>
    </section>

    <HospitalMarquee hospitals={sampleHospitals} />

    <section id="platform" className="doctor-section" aria-labelledby="doctor-heading">
      <div className="container doctor-grid">
        <div className="doctor-visual">
          <div className="doctor-image-wrap"><Image src="/media/doctor-care.webp" alt="Illustrative portrait of a clinician in a hospital corridor" width={900} height={1125} sizes="(max-width: 800px) 90vw, 42vw" /></div>
          <div className="doctor-overlay"><span className="doctor-overlay-icon" aria-hidden="true">✳</span><span>Care moves better<br/>when every step is clear.</span></div>
          <span className="doctor-image-note">Illustrative image</span>
        </div>
        <div className="doctor-copy">
          <h2 id="doctor-heading">Patient care starts with<br/><em>a clear next step.</em></h2>
          <p className="doctor-intro">From registration to consultation, EHMS helps hospital staff track each patient visit and see which team needs to act next.</p>
          <DoctorSteps />
          <a className="doctor-link" href="#solutions">Explore hospital workflows <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </section>

    <section id="solutions" className="solutions-section" aria-labelledby="flow-heading">
      <div className="flow-stage">
        <div className="container flow-stage-inner">
          <div className="flow-stage-heading"><h2 id="flow-heading">One patient journey. Every team connected.</h2><p>See how registration, OPD, lab, pharmacy, billing and ward teams work across a hospital visit.</p></div>
          <FlowTreeViewport />
        </div>
      </div>
      <div id="work-context" className="container product-evidence">
        <h2>Hospital workflows at a glance.</h2>
        <div className="solution-grid">{modules.map((module) => <article className="solution-card" key={module.number}><div className="solution-image"><Image src={module.image} alt={module.alt} width={1280} height={720} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" /></div><div className="solution-content"><span>{module.number} / {module.category}</span><h3>{module.title}</h3><p>{module.body}</p></div></article>)}</div>
      </div>
    </section>

    <CareCapabilities />
    <ProductShowcase />
    <FaqSection />

    <SiteFooter home />
  </main>;
}
