"use client";

import Image from "next/image";
import { createElement, useEffect, useRef, type ReactNode } from "react";

export type Hospital = {
  name: string;
  logo: string;
};

type HospitalMarqueeProps = {
  hospitals: Hospital[];
};

function Marquee({ children }: { children: ReactNode }) {
  const marqueeRef = useRef<HTMLMarqueeElement>(null);

  useEffect(() => {
    marqueeRef.current?.stop();
  }, []);

  return createElement("marquee", { ref: marqueeRef, direction: "right", behavior: "scroll", scrollamount: "0" }, children);
}

function HospitalLogo({ hospital }: { hospital: Hospital }) {
  return <div className="hospital-logo">
    <Image src={hospital.logo} alt={`${hospital.name} logo`} width={170} height={70} sizes="(max-width: 600px) 120px, 170px" />
    <span>{hospital.name}</span>
  </div>;
}

export default function HospitalMarquee({ hospitals }: HospitalMarqueeProps) {
  if (hospitals.length === 0) return null;

  return <section className="hospitals-section" aria-labelledby="hospitals-heading">
    <div className="container hospitals-heading">
      <h2 id="hospitals-heading">Hospital software for every care team.</h2>
      <p>Example hospital identities shown for illustration.</p>
    </div>
    <div className="hospitals-motion" aria-hidden="true">
      <Marquee>
        <div className="hospital-track">
          {[0, 1].map((copy) => <div className="hospital-set" key={copy}>
            {[...hospitals, ...hospitals].map((hospital, index) =>
              <HospitalLogo hospital={hospital} key={`${copy}-${hospital.name}-${index}`} />
            )}
          </div>)}
        </div>
      </Marquee>
    </div>
    <div className="container hospitals-static">
      {hospitals.map((hospital) => <HospitalLogo hospital={hospital} key={hospital.name} />)}
    </div>
    <ul className="sr-only">{hospitals.map((hospital) => <li key={hospital.name}>{hospital.name} (illustrative)</li>)}</ul>
  </section>;
}
