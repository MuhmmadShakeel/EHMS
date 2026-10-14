"use client";

import { useState } from "react";

const steps = [
  { number: "01", title: "Guide the patient journey", text: "Configure stages from registration and vitals through consultation, lab, pharmacy and check-out." },
  { number: "02", title: "See the queue clearly", text: "Keep live waits, stuck visits and the next handoff visible to the teams managing the day." },
  { number: "03", title: "Keep work connected", text: "Bring clinical services, billing and hospital operations into a more consistent workspace." }
];

export default function DoctorSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return <div className="doctor-features" aria-label="Ways EHMS helps hospital teams">
    {steps.map((step, index) => <button
      className={`doctor-feature${activeStep === index ? " is-active" : ""}`}
      type="button"
      aria-pressed={activeStep === index}
      onClick={() => setActiveStep(index)}
      key={step.number}
    ><span className="feature-number">{step.number}</span><span className="doctor-feature-copy"><strong>{step.title}</strong><span>{step.text}</span></span></button>)}
  </div>;
}
