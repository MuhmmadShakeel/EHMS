const faqs = [
  { question: "What is EHMS hospital management software?", answer: "EHMS is a connected hospital management platform for patient journeys, clinical services, operations and finance. The goal is to make the next action visible to the team responsible for it." },
  { question: "Which hospital workflows does EHMS cover?", answer: "The observed product includes patient registration, appointments, OPD queues, laboratory work, pharmacy, billing, surgery, beds, procurement, claims, finance and administration. Available features can depend on the facility's setup and permissions." },
  { question: "Can EHMS support more than one hospital branch?", answer: "The published EHMS case study describes a multi-branch web ERP. Branch access and reporting should be configured around each organization's operating rules." },
  { question: "How does EHMS help with the patient journey?", answer: "Journey stages can connect registration, vitals, consultation, optional lab and pharmacy work, and checkout. Teams can see the current stage and the next handoff in the workflow." },
  { question: "Does EHMS include bed and surgery management?", answer: "The product materials show a ward and bed board, admissions, housekeeping, a surgery schedule, a surgery-day board and stock forecasting for booked theatre cases." },
  { question: "How are charity funds represented in EHMS?", answer: "The observed fund screen shows separate fund identities, ledgers and available balances. Contributions and funded patient discounts are tracked against the selected fund." }
];

export default function FaqSection() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  return <section id="faq" className="faq-section" aria-labelledby="faq-heading">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="container faq-intro"><h2 id="faq-heading">Answers for the teams behind care.</h2><p>Explore how EHMS brings patient care and hospital operations into one clearer workflow.</p></div>
    <div className="container faq-grid">
      {[faqs.slice(0, 3), faqs.slice(3)].map((group, index) => <div className="faq-column" key={index}>
        {group.map(({ question, answer }) => <details className="faq-item" key={question}><summary>{question}<span className="faq-plus" aria-hidden="true"/></summary><p>{answer}</p></details>)}
      </div>)}
    </div>
  </section>;
}
