import Image from "next/image";

export default function ProductShowcase() {
  return <section id="showcase" className="product-showcase" aria-labelledby="showcase-heading">
    <div className="container showcase-heading">
      <h2 id="showcase-heading">A clearer view of the whole hospital.</h2>
      <p>Patient journeys, ward activity and the day&apos;s priorities come together in one connected workspace.</p>
    </div>
    <div className="container showcase-scene">
      <div className="showcase-laptop">
        <div className="showcase-laptop-screen">
          <div className="showcase-screen-top"><span className="showcase-camera" aria-hidden="true"/><span>EHMS / Facility dashboard</span></div>
          <Image src="/media/dashboard.webp" alt="EHMS facility dashboard screenshot" width={1600} height={1000} sizes="(max-width: 700px) 88vw, 68vw" />
        </div>
        <div className="showcase-laptop-base" aria-hidden="true"/>
      </div>
      <div className="showcase-floating showcase-floating-left">
        <div className="showcase-floating-head"><span>01 / PATIENT FLOW</span><strong>Follow every handoff</strong></div>
        <Image src="/media/journey-stages.webp" alt="EHMS patient journey stage configuration" width={720} height={450} sizes="(max-width: 700px) 55vw, 27vw" />
      </div>
      <div className="showcase-floating showcase-floating-right">
        <div className="showcase-floating-head"><span>02 / WARD OPERATIONS</span><strong>See bed status clearly</strong></div>
        <Image src="/media/bed-board.webp" alt="EHMS ward and bed board" width={720} height={450} sizes="(max-width: 700px) 55vw, 27vw" />
      </div>
      <Image className="showcase-doctor" src="/media/doctor-cutout.webp" alt="Illustrative doctor holding a tablet" width={1024} height={1536} sizes="(max-width: 700px) 36vw, 22vw" />
    </div>
    <p className="showcase-note">Interface captures from EHMS · Doctor image is illustrative</p>
  </section>;
}
