"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";

// Motion language, adapted from the Opus 5.5 motion prompts:
// - Hero: a single dot appears first, the label types out, the headline
//   rises line by line and a hairline draws across ("start from a dot",
//   "draw the wireframe first, then assemble").
// - Sections: the hairline draws before the content lands, so every block
//   is drawn, then filled. One easing family, no bounce, no blur on text.
// - Every scroll animation finishes in under a second.
const EASE = "expo.out";
const LINE_EASE = "power3.out";

function heroTimeline(hero) {
  const dot = hero.querySelector("[data-hero-dot]");
  const label = hero.querySelector("[data-hero-label]");
  const title = hero.querySelector("[data-hero-title]");
  const fades = hero.querySelectorAll("[data-hero-fade]");
  const rule = hero.querySelector("[data-hero-rule]");

  const tl = gsap.timeline({ defaults: { ease: EASE } });

  if (dot) {
    tl.from(dot, { scale: 0, duration: 0.4, ease: "back.out(1.6)" }, 0);
  }

  if (label) {
    const typed = SplitText.create(label, { type: "words,chars" });
    tl.from(
      typed.chars,
      { autoAlpha: 0, duration: 0.01, stagger: 0.014, ease: "none" },
      0.2,
    );
  }

  if (title) {
    SplitText.create(title, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 110,
          duration: 0.9,
          stagger: 0.08,
          ease: EASE,
          delay: 0.3,
        }),
    });
  }

  if (rule) {
    tl.from(
      rule,
      { scaleX: 0, transformOrigin: "left center", duration: 1.1, ease: "power3.inOut" },
      0.35,
    );
  }

  if (fades.length) {
    tl.from(fades, { y: 16, autoAlpha: 0, duration: 0.7, stagger: 0.08 }, 0.75);
  }
}

function introTimeline(root) {
  const title = root.querySelector('[data-intro="title"]');
  const rest = root.querySelectorAll('[data-intro]:not([data-intro="title"])');

  if (title) {
    SplitText.create(title, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, { yPercent: 110, duration: 0.8, stagger: 0.06, ease: EASE }),
    });
  }
  if (rest.length) {
    gsap.from(rest, { y: 12, autoAlpha: 0, duration: 0.6, stagger: 0.06, delay: 0.15, ease: EASE });
  }
}

function scrollReveals(root) {
  // Section hairlines draw from the left as the section arrives.
  root.querySelectorAll("[data-rule]").forEach((section) => {
    gsap.fromTo(
      section,
      { "--rule": 0 },
      {
        "--rule": 1,
        duration: 0.8,
        ease: LINE_EASE,
        scrollTrigger: { trigger: section, start: "top 88%", once: true },
      },
    );
  });

  // Section headings rise out of a mask, line by line.
  root.querySelectorAll("[data-split]").forEach((heading) => {
    SplitText.create(heading, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 110,
          duration: 0.7,
          stagger: 0.06,
          ease: EASE,
          scrollTrigger: { trigger: heading, start: "top 88%", once: true },
        }),
    });
  });

  // The closing dot echoes the hero's first frame.
  root.querySelectorAll("[data-dot]").forEach((dot) => {
    gsap.from(dot, {
      scale: 0,
      duration: 0.4,
      ease: "back.out(1.6)",
      scrollTrigger: { trigger: dot, start: "top 90%", once: true },
    });
  });

  // Content blocks: list rows draw their hairline first, then the content
  // lands 12px up. Items entering together are staggered.
  const items = gsap.utils.toArray(root.querySelectorAll("[data-reveal]"));
  if (!items.length) return;
  const isRow = (el) => el.parentElement?.classList.contains("rows");

  gsap.set(items, { autoAlpha: 0, y: 14 });
  gsap.set(items.filter(isRow), { "--rule": 0 });

  ScrollTrigger.batch(items, {
    start: "top 90%",
    once: true,
    onEnter: (batch) =>
      batch.forEach((item, i) => {
        const delay = i * 0.08;
        const row = isRow(item);
        if (row) {
          gsap.to(item, { "--rule": 1, duration: 0.7, ease: LINE_EASE, delay });
        }
        gsap.to(item, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: EASE,
          delay: delay + (row ? 0.12 : 0),
        });
      }),
  });
}

export default function PageMotion({ children }) {
  const root = useRef(null);

  useLayoutEffect(() => {
    const html = document.documentElement;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const el = root.current;
      const hero = el.querySelector("[data-hero]");
      if (hero) heroTimeline(hero);
      else introTimeline(el);
      scrollReveals(el);
      html.classList.remove("motion-pending");

      // Fonts and images can shift positions after first layout.
      const refresh = () => ScrollTrigger.refresh();
      document.fonts?.ready.then(refresh);
      window.addEventListener("load", refresh);
      return () => window.removeEventListener("load", refresh);
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      html.classList.remove("motion-pending");
    });

    return () => mm.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}
