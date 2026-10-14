import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact EHMS | Discuss Hospital Management Software",
  description: "Contact the EHMS team about patient registration, OPD queues, hospital beds, surgery, stock or finance. Share your workflow and book a product call."
};

const steps = [
  { number: "01", title: "Tell us about your hospital", text: "Share the teams, patient flow or daily tasks you want to improve." },
  { number: "02", title: "Talk with the EHMS team", text: "We can discuss your current process and the problems staff face." },
  { number: "03", title: "Explore the right features", text: "See the EHMS tools that fit your hospital's workflow." }
];

export default function ContactPage() {
  return <main className="contact-page">
    <SiteHeader active="contact" />

    <section className="about-hero contact-hero" aria-labelledby="contact-hero-title"><div className="about-hero-image" aria-hidden="true"/><div className="container about-hero-content"><h1 id="contact-hero-title">Talk to us about<br/><em>your hospital workflow.</em></h1><p>Ask the EHMS team about patient care, OPD, wards or daily hospital operations.</p><div className="about-hero-actions"><a className="button button-light" href="#get-in-touch">Contact the team <span aria-hidden="true">↓</span></a><a className="button button-outline" href="https://cal.com/muhammad-safdar-iqbal-xbsbvn/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a call <span aria-hidden="true">↗</span></a></div></div></section>

    <section id="get-in-touch" className="contact-main-section" aria-labelledby="contact-intro-title"><div className="container contact-main-grid"><div className="contact-intro"><h2 id="contact-intro-title">Tell us where hospital work gets difficult.</h2><p>Is the challenge at registration, in the OPD queue, on the ward or in finance? Tell us how your team works today and what you need to change.</p><div className="contact-direct"><a href="mailto:teams@eaquirstech.com"><span className="contact-direct-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg></span><span><small>EMAIL THE EHMS TEAM</small><strong>teams@eaquirstech.com</strong></span><span className="contact-direct-arrow" aria-hidden="true">↗</span></a><a href="https://cal.com/muhammad-safdar-iqbal-xbsbvn/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer"><span className="contact-direct-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 5h3"/></svg></span><span><small>DISCUSS YOUR WORKFLOW</small><strong>Book a call</strong></span><span className="contact-direct-arrow" aria-hidden="true">↗</span></a></div><div className="contact-context"><span className="contact-context-dot"/><p>We can discuss patient registration, clinical handoffs, bed management, surgery planning, stock and hospital finance.</p></div></div><ContactForm /></div></section>

    <section className="contact-next" aria-labelledby="contact-next-title"><div className="container contact-next-head"><h2 id="contact-next-title">What happens when you contact EHMS?</h2><p>Start with the hospital work you want to improve. We will focus the conversation on that.</p></div><div className="container contact-next-grid">{steps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>

    <SiteFooter />
  </main>;
}
