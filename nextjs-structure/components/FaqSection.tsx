const faqs = [
  { question: "What does EHMS hospital management software do?", answer: "EHMS brings patient registration, OPD visits, clinical services, ward activity and hospital operations into a connected workspace. Teams can follow a visit and see the next task." },
  { question: "Which hospital modules are available in EHMS?", answer: "EHMS product screens show appointments, OPD queues, laboratory and pharmacy work, billing, beds, surgery, stock planning, finance and administration. Module access depends on the facility setup and user permissions." },
  { question: "Does EHMS support multiple hospital branches?", answer: "The published EHMS case study describes a web platform used across multiple branches. Branch access and reporting can be configured to match the hospital's operating rules." },
  { question: "How does patient journey tracking work in EHMS?", answer: "A hospital can configure stages such as registration, vitals, consultation, lab, pharmacy and checkout. Staff can see the current stage and the next handoff for each visit." },
  { question: "Can EHMS manage hospital beds and surgery schedules?", answer: "EHMS product materials show a ward bed board, admissions, housekeeping status, surgery scheduling and stock forecasts for booked theatre cases." },
  { question: "How does EHMS track hospital charity funds?", answer: "The charity fund view shows separate fund ledgers and available balances. Staff can record contributions and link funded patient discounts to the selected fund." }
];

export default function FaqSection() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  return <section id="faq" className="faq-section" aria-labelledby="faq-heading">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="container faq-intro"><h2 id="faq-heading">Hospital management software FAQs.</h2><p>Answers about EHMS patient flow, OPD, beds, surgery and hospital finance.</p></div>
    <div className="container faq-grid">
      {[faqs.slice(0, 3), faqs.slice(3)].map((group, index) => <div className="faq-column" key={index}>
        {group.map(({ question, answer }) => <details className="faq-item" key={question}><summary>{question}<span className="faq-plus" aria-hidden="true"/></summary><p>{answer}</p></details>)}
      </div>)}
    </div>
  </section>;
}
