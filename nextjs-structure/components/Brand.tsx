export default function Brand({ footer = false, href = "#top" }: { footer?: boolean; href?: string }) {
  return <a className={`brand original-brand${footer ? " footer-brand" : ""}`} href={href} aria-label="HMS Hospital Management home">
    <span className="original-brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 26.5 5.7 16.8a6.3 6.3 0 0 1 8.8-9l1.5 1.4 1.5-1.4a6.3 6.3 0 0 1 8.8 9L16 26.5Z"/></svg></span>
    <span className="original-brand-type"><strong>HMS</strong><small>Hospital Management</small></span>
  </a>;
}
