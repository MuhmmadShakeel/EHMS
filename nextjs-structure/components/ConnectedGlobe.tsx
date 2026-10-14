const connections = [
  { title: "Front desk", detail: "Registration and bookings", position: "one" },
  { title: "Clinical teams", detail: "OPD, lab and pharmacy", position: "two" },
  { title: "Wards and surgery", detail: "Beds and theatre plans", position: "three" },
  { title: "Operations", detail: "Stock, billing and funds", position: "four" }
];

export default function ConnectedGlobe() {
  return <div className="about-globe" role="img" aria-label="Animated globe connecting front desk, clinical teams, wards and surgery, and hospital operations">
    <div className="about-globe-halo" aria-hidden="true" />
    <svg className="about-globe-sphere" viewBox="0 0 500 500" aria-hidden="true">
      <defs><radialGradient id="about-globe-fill" cx="34%" cy="28%"><stop offset="0" stopColor="#42c8aa"/><stop offset=".5" stopColor="#10867c"/><stop offset="1" stopColor="#075249"/></radialGradient></defs>
      <circle cx="250" cy="250" r="178" fill="url(#about-globe-fill)" stroke="#b8f4df" strokeWidth="2" />
      <circle cx="250" cy="250" r="166" fill="none" stroke="#d5fff0" strokeOpacity=".28" />
      <ellipse cx="250" cy="250" rx="74" ry="178" fill="none" stroke="#d5fff0" strokeOpacity=".55" strokeWidth="2" />
      <ellipse cx="250" cy="250" rx="133" ry="178" fill="none" stroke="#d5fff0" strokeOpacity=".3" strokeWidth="2" />
      <ellipse cx="250" cy="250" rx="178" ry="57" fill="none" stroke="#d5fff0" strokeOpacity=".48" strokeWidth="2" />
      <ellipse cx="250" cy="250" rx="178" ry="124" fill="none" stroke="#d5fff0" strokeOpacity=".25" strokeWidth="2" />
      <path d="M72 250h356" fill="none" stroke="#d5fff0" strokeOpacity=".52" strokeWidth="2" />
      <circle cx="186" cy="198" r="7" fill="#fff"/><circle cx="333" cy="220" r="6" fill="#fff"/><circle cx="223" cy="337" r="6" fill="#fff"/><circle cx="318" cy="333" r="5" fill="#fff"/>
    </svg>
    <div className="about-globe-orbit" aria-hidden="true"><span/><span/><span/></div>
    <div className="about-globe-center"><span>EHMS</span><small>Hospital teams</small></div>
    {connections.map((connection) => <div className={`about-globe-label about-globe-label-${connection.position}`} key={connection.title}><span className="about-globe-label-dot"/><div><strong>{connection.title}</strong><small>{connection.detail}</small></div></div>)}
  </div>;
}
