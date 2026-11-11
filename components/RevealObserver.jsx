"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fades in elements marked [data-reveal] as they scroll into view.
// Elements already on screen are left alone, so nothing waits on this script.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const viewportHeight = window.innerHeight;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("is-hidden");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top > viewportHeight) {
        el.classList.add("is-hidden");
        io.observe(el);
      }
    });

    return () => {
      io.disconnect();
      document
        .querySelectorAll("[data-reveal].is-hidden")
        .forEach((el) => el.classList.remove("is-hidden"));
    };
  }, [pathname]);

  return null;
}
