import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";
import "../styles/hero-gallery.css";
import "../styles/hospitals.css";
import "../styles/doctor-section.css";
import "../styles/features-timeline.css";
import "../styles/solutions-page.css";
import "../styles/about-page.css";
import "../styles/contact-page.css";
import "../styles/flow-tree.css";
import "../styles/care-capabilities.css";
import "../styles/product-showcase.css";
import "../styles/site-chrome.css";
import "../styles/marketing-rhythm.css";
import "../styles/scroll-reveal.css";
import "../styles/whatsapp-button.css";
import "../styles/theme.css";
import ScrollReveal from "../components/ScrollReveal";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "EHMS | Care connected, work simplified",
  description: "Explore EHMS, a connected hospital management experience for patient journeys, clinical teams, pharmacy, finance and operations."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Script id="theme-init" strategy="beforeInteractive">{"try{document.documentElement.dataset.theme=localStorage.getItem('ehms-theme')==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}"}</Script>{children}<ScrollReveal /><WhatsAppButton /></body></html>;
}
