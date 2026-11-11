"use client";

import { Contrast } from "./Icon";

// The new theme grows out of the toggle as a circle, the same dot that opens
// the hero, expanding until it covers the screen (650ms). Uses the View
// Transitions API; browsers without it, and visitors who prefer reduced
// motion, get an instant switch.
const DURATION = 650;

function resolvedTheme(root) {
  return (
    root.dataset.theme ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
}

export default function ThemeToggle() {
  const toggle = (event) => {
    const root = document.documentElement;
    const next = resolvedTheme(root) === "dark" ? "light" : "dark";

    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {
        // Storage can be blocked; the choice then lasts for this visit only.
      }
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof document.startViewTransition !== "function") {
      apply();
      return;
    }

    // Start the circle at the icon, which sits at the button's left edge.
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + 16;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(apply);
    transition.ready
      .then(() => {
        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: DURATION,
            easing: "cubic-bezier(0.65, 0, 0.35, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {
        // The transition was skipped; the theme is already applied.
      });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex min-h-11 items-center gap-2 px-2 t-small text-muted transition-colors hover:text-fg"
    >
      <Contrast />
      {/* Names the theme you switch to. CSS shows the right word for the
          current theme, so the label is correct before any script runs. */}
      <span>
        <span className="sr-only">Switch to </span>
        <span className="theme-next-dark">Dark</span>
        <span className="theme-next-light">Light</span>
        <span className="sr-only"> theme</span>
      </span>
    </button>
  );
}
