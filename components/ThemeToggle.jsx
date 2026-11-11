"use client";

import { Contrast } from "./Icon";

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const current =
      root.dataset.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked; the choice then lasts for this visit only.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex min-h-11 items-center gap-2 px-2 t-small text-muted transition-colors hover:text-fg"
      aria-label="Switch between light and dark theme"
    >
      <Contrast />
      <span>Theme</span>
    </button>
  );
}
