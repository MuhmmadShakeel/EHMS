"use client";

import { type FormEvent } from "react";

const whatsappNumber = "923322060667";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const organization = String(data.get("organization") || "").trim();
    const interest = String(data.get("interest") || "").trim();
    const message = String(data.get("message") || "").trim();
    const body = [
      "Hello Eaquirstech, I would like to talk about EHMS for our hospital.",
      "",
      `Name: ${name}`,
      `Work email: ${email}`,
      `Organization: ${organization || "Not provided"}`,
      `Area of interest: ${interest}`,
      "",
      "Message:",
      message
    ].join("\n");

    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(body)}`;
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="contact-form-head"><h2>Tell us about your hospital.</h2><p>A few details will help us discuss the work that matters to your team.</p></div>
    <div className="contact-form-fields">
      <div className="contact-field"><label htmlFor="contact-name">Your name <span>*</span></label><input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your full name" maxLength={90} required /></div>
      <div className="contact-field"><label htmlFor="contact-email">Work email <span>*</span></label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@hospital.org" maxLength={150} required /></div>
      <div className="contact-field"><label htmlFor="contact-organization">Organization</label><input id="contact-organization" name="organization" type="text" autoComplete="organization" placeholder="Hospital or care group" maxLength={120} /></div>
      <div className="contact-field"><label htmlFor="contact-interest">What would you like to discuss? <span>*</span></label><select id="contact-interest" name="interest" defaultValue="" required><option value="" disabled>Select an area</option><option>Hospital management software</option><option>Patient registration and OPD</option><option>Beds, surgery and clinical work</option><option>Stock, billing and charity funds</option><option>EHMS demo or product questions</option><option>Something else</option></select></div>
      <div className="contact-field contact-field-full"><label htmlFor="contact-message">What is happening at your hospital? <span>*</span></label><textarea id="contact-message" name="message" rows={6} placeholder="Tell us about the workflow or problem your team wants to address." minLength={12} maxLength={2000} required /></div>
    </div>
    <p className="contact-form-privacy">Please avoid including patient names or medical records. Continuing opens WhatsApp with your details ready; you choose when to send the message.</p>
    <button className="button button-dark contact-submit" type="submit">Continue to WhatsApp <span aria-hidden="true">↗</span></button>
  </form>;
}
