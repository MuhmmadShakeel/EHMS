"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(
      "main section h1, main section h2, main section h3, main section p, main section article, main section form, main section img, main section details, main section li, main section .section-kicker, main section .hero-actions, main section .hero-caption, main section .hero-screen, main section .features-hero-image, main section .hospitals-motion, main section .doctor-visual, main section .doctor-feature, main section .doctor-link, main section .flow-root, main section .flow-hub, main section .flow-leaf, main section .product-composition, main section .showcase-laptop, main section .showcase-floating, main section .showcase-doctor, main section .features-hero-actions, main section .feature-timeline-media, main section .feature-timeline-copy, main section .features-close-copy .button, main section .features-close-screen, main section .features-close-small, main section .solutions-hero-actions, main section .about-hero-actions, main section .contact-direct, main footer .footer-about, main footer .footer-links, main footer .footer-cta, main footer .footer-bottom"
    )).filter((target) => {
      if (target.closest(".hero, .features-hero, .solutions-hero, .about-hero")) return false;
      if (target.matches("article") && target.closest(".features-timeline")) return false;
      if (target.matches("h1, h2, h3, p, li") && target.closest("article, form, details, .flow-root, .flow-hub, .flow-leaf, .hero-gallery, .hospitals-motion, .doctor-visual, .doctor-feature, .product-composition, .features-close-visual, .feature-timeline-copy")) return false;
      if (target.matches("img") && target.closest(".hero-screen, .hospitals-motion, .doctor-visual, .product-composition, .features-close-screen, .features-close-small, .feature-timeline-media, .showcase-laptop, .showcase-floating")) return false;
      return true;
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -7% 0px" });

    for (const target of targets) {
      const siblings = Array.from(target.parentElement?.children ?? []);
      const position = siblings.indexOf(target);
      let delay = Math.min(Math.max(position, 0), 4) * 65;
      if (target.matches(".solutions-journey-step")) {
        delay = position * 90;
      }
      target.style.setProperty("--reveal-delay", `${delay}ms`);
      const timelineRow = target.closest(".feature-timeline-item");
      if (timelineRow) {
        const rowIndex = Array.from(timelineRow.parentElement?.children ?? []).indexOf(timelineRow);
        const media = target.matches(".feature-timeline-media");
        target.classList.add((rowIndex % 2 === 0) === media ? "reveal-from-left" : "reveal-from-right");
      } else if (target.matches(".solutions-journey-step")) {
        // These steps follow the vertical path, from top to bottom.
      } else if (target.matches(".hero-screen-right, .features-hero-image, .features-close-small, .showcase-floating-right")) {
        target.classList.add("reveal-from-right");
      } else if (target.matches(".hero-screen-left, .features-close-screen, .showcase-floating-left, .showcase-laptop, .showcase-doctor, img, .doctor-visual, .product-composition")) {
        target.classList.add("reveal-from-left");
      } else if (target.matches("article, .doctor-feature, .flow-leaf, .flow-hub")) {
        target.classList.add(position % 2 === 0 ? "reveal-from-left" : "reveal-from-right");
      } else if (target.matches(".hero-actions, .features-hero-actions, .solutions-hero-actions, .about-hero-actions, .features-close-copy .button")) {
        target.classList.add("reveal-from-right");
      }
      target.classList.add("reveal-pending");
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
      for (const target of targets) {
        target.classList.remove("reveal-pending", "reveal-visible", "reveal-from-left", "reveal-from-right");
        target.style.removeProperty("--reveal-delay");
      }
    };
  }, []);

  return null;
}
