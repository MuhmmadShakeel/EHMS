import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | EHMS Hospital Management",
  description: "Talk with the team behind EHMS about hospital workflows, patient journeys, clinical operations and a product conversation."
};

const steps = [
  { number: "01", title: "Share your context", text: "Tell us which teams, workflows or handoffs you want to improve." },
  { number: "02", title: "Talk through the work", text: "Use a conversation to surface constraints, priorities and useful next steps." },
  { number: "03", title: "See a relevant path", text: "Explore the EHMS areas that connect to your hospital's needs." }
];

export default function ContactPage() {
  return <main className="contact-page">
    <SiteHeader active="contact" />

    <section className="about-hero contact-hero" aria-labelledby="contact-hero-title"><div className="about-hero-image" aria-hidden="true"/><div className="container about-hero-content"><h1 id="contact-hero-title">Let&apos;s make more room<br/><em>for better care.</em></h1><p>Tell us what your hospital team is navigating. We&apos;ll help you find a clearer way forward.</p><div className="about-hero-actions"><a className="button button-light" href="#get-in-touch">Start a conversation <span aria-hidden="true">↓</span></a><a className="button button-outline" href="https://cal.com/muhammad-safdar-iqbal-xbsbvn/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a call <span aria-hidden="true">↗</span></a></div></div></section>

    <section id="get-in-touch" className="contact-main-section" aria-labelledby="contact-intro-title"><div className="container contact-main-grid"><div className="contact-intro"><h2 id="contact-intro-title">The right conversation starts with your real workflow.</h2><p>Whether you are exploring a connected hospital platform or focusing on one part of the patient journey, share the challenge your team sees every day.</p><div className="contact-direct"><a href="mailto:teams@eaquirstech.com"><span className="contact-direct-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg></span><span><small>EMAIL THE TEAM</small><strong>teams@eaquirstech.com</strong></span><span className="contact-direct-arrow" aria-hidden="true">↗</span></a><a href="https://cal.com/muhammad-safdar-iqbal-xbsbvn/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer"><span className="contact-direct-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 5h3"/></svg></span><span><small>PLAN A CONVERSATION</small><strong>Book a call</strong></span><span className="contact-direct-arrow" aria-hidden="true">↗</span></a></div><div className="contact-context"><span className="contact-context-dot"/><p>From the front desk to clinical, ward and operations teams, EHMS is shaped around the handoffs that keep care moving.</p></div></div><ContactForm /></div></section>

    <section className="contact-next" aria-labelledby="contact-next-title"><div className="container contact-next-head"><h2 id="contact-next-title">A useful conversation, from the first step.</h2><p>Keep the focus on your people, your process and the decisions that matter.</p></div><div className="container contact-next-grid">{steps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>

    <SiteFooter />
  </main>;
}
