import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import ConnectedGlobe from "../../components/ConnectedGlobe";
import CareNetwork from "../../components/CareNetwork";

export const metadata: Metadata = {
  title: "About EHMS | Hospital Management Software by Eaquirstech",
  description: "Learn how EHMS grew from a trust eye hospital in Chishtian into hospital management software for patient flow, OPD, wards, finance and multiple branches."
};

export default function AboutPage() {
  return <main className="about-page">
    <SiteHeader active="about" />

    <section id="top" className="about-hero" aria-labelledby="about-hero-title"><div className="about-hero-image" aria-hidden="true"/><div className="container about-hero-content"><h1 id="about-hero-title">Hospital software shaped<br/><em>by the people using it.</em></h1><p>Meet the story behind EHMS and the hospital teams it was built to support.</p><div className="about-hero-actions"><a className="button button-light" href="#approach">Our story <span aria-hidden="true">↓</span></a><a className="button button-outline" href="https://cal.com/muhammad-safdar-iqbal-xbsbvn/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a call <span aria-hidden="true">↗</span></a></div></div></section>

    <section id="approach" className="about-story" aria-labelledby="about-story-title"><div className="container about-story-grid"><div className="about-story-image"><Image src="/media/about-story.webp" alt="Illustration of a hospital clinician, receptionist and administrator planning the day's work together" width={900} height={1125} sizes="(max-width: 800px) 100vw, 43vw"/><span>Illustrative image</span></div><div className="about-story-copy"><h2 id="about-story-title">It started in a Chishtian eye hospital.</h2><p>Staff at a trust eye hospital needed software they could rely on. Eaquirstech built a desktop ERP for their daily work, then developed EHMS as a web platform for multiple branches.</p><p>That experience still shapes the product. Registration, clinical care, ward planning and accounts need to work together because the people using them do.</p><div className="about-story-tags"><span>Patient flow</span><span>OPD and clinical care</span><span>Ward operations</span><span>Hospital finance</span></div><a className="about-text-link" href="/solutions">Explore hospital solutions <span aria-hidden="true">↗</span></a></div></div></section>

    <section className="about-connected" aria-labelledby="about-connected-title"><div className="container about-connected-grid"><div className="about-connected-copy"><h2 id="about-connected-title">From registration<br/>to the ward.</h2><p>A patient visit touches more than one desk. EHMS links OPD, lab, pharmacy, beds and hospital operations so staff can see where the work stands.</p><ul><li><span/>Front desk manages arrivals and OPD waits.</li><li><span/>Clinicians follow consultations and results.</li><li><span/>Ward teams check beds and surgery plans.</li><li><span/>Operations reviews stock, billing and funds.</li></ul></div><ConnectedGlobe /></div></section>

    <section className="about-network-section" aria-labelledby="about-network-title"><div className="container about-network-head"><h2 id="about-network-title">How EHMS connects hospital work.</h2><p>See how registration and clinical care connect with wards, surgery, stock and finance.</p></div><CareNetwork /><div className="container about-network-actions"><a className="button button-light" href="/features">Explore EHMS features <span aria-hidden="true">↗</span></a></div></section>

    <section className="about-case-study" aria-labelledby="about-case-title"><div className="container about-case-grid"><div className="about-case-copy"><h2 id="about-case-title">From a local hospital to a web platform.</h2><p>EHMS is an Eaquirstech project that began at a trust eye hospital in Chishtian. After years on the desktop ERP, the hospital asked for a web version that could serve multiple branches.</p><p>The resulting system brings patient journey tracking, OPD, beds, lab, pharmacy and separate charity fund ledgers into one hospital platform.</p><a className="button button-dark" href="https://eaquirstech.com/en/work/ehms-hospital-management" target="_blank" rel="noopener noreferrer">Read the EHMS case study <span aria-hidden="true">↗</span></a></div><div className="about-case-portrait"><Image src="/media/about-portrait.webp" alt="Portrait of Eaquirstech's CEO" width={900} height={900} sizes="(max-width: 700px) 100vw, 43vw"/><div className="about-case-portrait-note"><span>EAQUIRSTECH CEO</span><p>Leading the Eaquirstech team that developed EHMS for hospital staff and administrators.</p></div></div></div></section>


    <SiteFooter />
  </main>;
}
