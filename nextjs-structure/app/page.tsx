import Image from "next/image";
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

const modules = [
  { number: "01", category: "PATIENT FLOW", title: "Patient journeys", body: "Keep registration, appointments and OPD handoffs in one clear flow.", image: "/media/journey-stages.webp", alt: "EHMS patient journey stage configuration" },
  { number: "02", category: "FRONT DESK", title: "Live OPD queue", body: "See who is waiting, who is being seen, and which visit needs attention.", image: "/media/opd-queue.webp", alt: "EHMS OPD queue without patient records" },
  { number: "03", category: "WARD MANAGEMENT", title: "Bed management", body: "Give ward teams a clear view of occupancy, availability and patient placement.", image: "/media/bed-board.webp", alt: "EHMS hospital bed board" },
  { number: "04", category: "SURGERY", title: "Surgery schedule", body: "Keep upcoming cases, booking status and required advances in one view.", image: "/media/surgery-schedule.webp", alt: "EHMS surgery schedule interface" },
  { number: "05", category: "PROCUREMENT", title: "Stock forecast", body: "Compare the supplies planned for booked cases with stock on hand.", image: "/media/stock-forecast.webp", alt: "EHMS operating theatre stock forecast" },
  { number: "06", category: "ADMINISTRATION", title: "Charity funds", body: "Track each fund and its available balance with a dedicated ledger.", image: "/media/charity-funds.webp", alt: "EHMS charity funds ledger and balances" }
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
        <h1 id="hero-title">More time for care.<br/><em>Less friction</em> everywhere.</h1>
        <p className="hero-lede">One connected workspace for every step of hospital care.</p>
        <div className="hero-actions"><a className="button button-light" href="#platform">Explore the platform <span aria-hidden="true">↗</span></a><a className="button button-outline" href="#contact">Talk to our team <span aria-hidden="true">→</span></a></div>
        <div className="hero-caption"><span className="caption-pulse"></span> Built around the real rhythm of hospital work</div>
        <p className="hero-project">An Eaquirstech project · <a href="mailto:teams@eaquirstech.com">teams@eaquirstech.com</a></p>
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
          <h2 id="doctor-heading">Give every team a<br/><em>clearer next step.</em></h2>
          <p className="doctor-intro">A busy hospital is a chain of handoffs. EHMS helps staff see where a patient is, what comes next, and which team owns the next action.</p>
          <DoctorSteps />
          <a className="doctor-link" href="#solutions">Explore the workflows <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <section id="solutions" className="solutions-section" aria-labelledby="flow-heading">
      <div className="flow-stage">
        <div className="container flow-stage-inner">
          <div className="flow-stage-heading"><h2 id="flow-heading">One journey. Every team connected.</h2><p>Follow care from the first patient touchpoint through clinical services and the operational work that supports it.</p></div>
          <FlowTreeViewport />
        </div>
      </div>
      <div id="work-context" className="container product-evidence">
        <h2>See the work in context.</h2>
        <div className="solution-grid">{modules.map((module) => <article className="solution-card" key={module.number}><div className="solution-image"><Image src={module.image} alt={module.alt} width={1280} height={720} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" /></div><div className="solution-content"><span>{module.number} / {module.category}</span><h3>{module.title}</h3><p>{module.body}</p></div></article>)}</div>
      </div>
    </section>

    <CareCapabilities />
    <ProductShowcase />
    <FaqSection />

    <SiteFooter home />
  </main>;
}
