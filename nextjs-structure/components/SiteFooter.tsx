import Brand from "./Brand";

export default function SiteFooter({ home = false }: { home?: boolean }) {
  return <footer id={home ? "contact" : undefined} className="footer">
    <div className="container footer-main">
      <div className="footer-about">
        <Brand footer href="/" />
        <p>Hospital management software for patient care, clinical teams and daily operations.</p>
        <p>EHMS is a project by <a href="https://eaquirstech.com" target="_blank" rel="noopener noreferrer">Eaquirstech</a>. Explore patient flow, OPD, wards, surgery and hospital finance.</p>
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        <h2>Explore</h2>
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/solutions">Solutions</a>
        <a href="/about">About EHMS</a>
        <a href="/contact">Contact</a>
        <a href="/#faq">Questions &amp; answers</a>
      </nav>
      <div className="footer-cta">
        <h2>Let&apos;s improve your<br />hospital workflow.</h2>
        <p>Tell us how your hospital manages patient visits, clinical work and operations today.</p>
        <a className="button button-light" href="https://cal.com/muhammad-safdar-iqbal-xbsbvn/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a call <span aria-hidden="true">↗</span></a>
        <a className="footer-email" href="mailto:teams@eaquirstech.com">teams@eaquirstech.com</a>
      </div>
    </div>
    <div className="container footer-bottom">
      <span>© {new Date().getFullYear()} EHMS frontend concept</span>
      <span>An Eaquirstech project · teams@eaquirstech.com</span>
    </div>
  </footer>;
}
