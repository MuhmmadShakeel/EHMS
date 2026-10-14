import Brand from "./Brand";
import ThemeToggle from "./ThemeToggle";

type Page = "home" | "features" | "solutions" | "about" | "contact";

const links = [
  { label: "Home", href: "/", page: "home" },
  { label: "Features", href: "/features", page: "features" },
  { label: "Solutions", href: "/solutions", page: "solutions" },
  { label: "About", href: "/about", page: "about" },
  { label: "Contact", href: "/contact", page: "contact" }
] as const;

export default function SiteHeader({ active }: { active: Page }) {
  const navigation = (mobile: boolean) => <nav className={mobile ? undefined : "desktop-nav"} aria-label={mobile ? "Mobile navigation" : "Main navigation"}>
    {links.map((link) => <a href={link.href} key={link.label} aria-current={"page" in link && link.page === active ? "page" : undefined}>{link.label}</a>)}
  </nav>;

  return <header className="site-header"><div className="container nav-wrap"><Brand href="/" />{navigation(false)}<details className="mobile-nav"><summary aria-label="Open navigation menu"><span/><span/><span/></summary>{navigation(true)}</details><ThemeToggle /><a className="nav-cta" href="https://cal.com/muhammad-safdar-iqbal-xbsbvn/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a call <span aria-hidden="true">↗</span></a></div></header>;
}
