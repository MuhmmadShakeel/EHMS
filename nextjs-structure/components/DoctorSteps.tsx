"use client";

import { useState } from "react";

const steps = [
  { number: "01", title: "Track each patient visit", text: "Set stages for registration, vitals, consultation, lab, pharmacy and checkout." },
  { number: "02", title: "Manage the OPD queue", text: "See waiting patients, active consultations and visits that need attention." },
  { number: "03", title: "Connect hospital teams", text: "Keep clinical services, billing and daily operations in the same workflow." }
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
