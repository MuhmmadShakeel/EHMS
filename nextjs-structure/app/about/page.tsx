import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import ConnectedGlobe from "../../components/ConnectedGlobe";
import CareNetwork from "../../components/CareNetwork";

export const metadata: Metadata = {
  title: "About | EHMS Hospital Management",
  description: "Learn how EHMS connects the patient journey, clinical teams, hospital operations and financial oversight."
};

export default function AboutPage() {
  return <main className="about-page">
    <SiteHeader active="about" />

    <section id="top" className="about-hero" aria-labelledby="about-hero-title"><div className="about-hero-image" aria-hidden="true"/><div className="container about-hero-content"><h1 id="about-hero-title">Built for the people<br/><em>who keep care moving.</em></h1><p>A connected view of patients, teams and the operations behind every hospital day.</p><div className="about-hero-actions"><a className="button button-light" href="#approach">Our approach <span aria-hidden="true">↓</span></a><a className="button button-outline" href="https://cal.com/muhammad-safdar-iqbal-xbsbvn/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a call <span aria-hidden="true">↗</span></a></div></div></section>

    <section id="approach" className="about-story" aria-labelledby="about-story-title"><div className="container about-story-grid"><div className="about-story-image"><Image src="/media/about-story.webp" alt="Illustration of a hospital clinician, receptionist and administrator planning the day's work together" width={900} height={1125} sizes="(max-width: 800px) 100vw, 43vw"/><span>Illustrative image</span></div><div className="about-story-copy"><h2 id="about-story-title">Shaped by the reality of hospital work.</h2><p>The published EHMS story began with a trust eye hospital in Chishtian. What started as a desktop ERP later grew into a web platform for multiple branches.</p><p>That history points to a simple idea: hospital software works best when a receptionist, clinician, ward team and finance office can all see the context needed for their next step.</p><div className="about-story-tags"><span>Patient journeys</span><span>Clinical services</span><span>Hospital operations</span><span>Financial oversight</span></div><a className="about-text-link" href="/solutions">Explore the solutions <span aria-hidden="true">↗</span></a></div></div></section>

    <section className="about-connected" aria-labelledby="about-connected-title"><div className="container about-connected-grid"><div className="about-connected-copy"><h2 id="about-connected-title">Many teams.<br/>One care journey.</h2><p>Patient care passes between people and departments. EHMS brings the steps into a shared operational picture, from registration and OPD to wards, supplies and funds.</p><ul><li><span/>Front desk sees arrivals and waits.</li><li><span/>Clinical teams see the next care stage.</li><li><span/>Ward and surgery teams plan capacity.</li><li><span/>Operations can follow stock and finance.</li></ul></div><ConnectedGlobe /></div></section>

    <section className="about-network-section" aria-labelledby="about-network-title"><div className="container about-network-head"><h2 id="about-network-title">One system. Every handoff in view.</h2><p>Follow how a patient journey links clinical work with the teams that keep the hospital running.</p></div><CareNetwork /><div className="container about-network-actions"><a className="button button-light" href="/features">Explore all features <span aria-hidden="true">↗</span></a></div></section>

    <section className="about-case-study" aria-labelledby="about-case-title"><div className="container about-case-grid"><div className="about-case-copy"><h2 id="about-case-title">A platform shaped around the people doing the work.</h2><p>EHMS is a project by Eaquirstech. It grew from the day-to-day needs of a trust eye hospital into a connected web platform for branches and care teams.</p><p>The Eaquirstech team brings the same care-led thinking to each workflow: listen to the people doing the work, then make their next step clearer.</p><a className="button button-dark" href="https://eaquirstech.com/en/work/ehms-hospital-management" target="_blank" rel="noopener noreferrer">Read the case study <span aria-hidden="true">↗</span></a></div><div className="about-case-portrait"><Image src="/media/about-portrait.webp" alt="Illustrative portrait of Eaquirstech's CEO" width={900} height={900} sizes="(max-width: 700px) 100vw, 43vw"/><div className="about-case-portrait-note"><span>EAQUIRSTECH CEO</span><p>Leading the team behind the EHMS project with a focus on the people who deliver care.</p></div></div></div></section>


    <SiteFooter />
  </main>;
}
