"use client";

import { useRef, useState } from "react";

// mailto links do nothing for visitors without a mail app, so every place
// that shows the address also offers a one-click copy with visible feedback.
export default function CopyEmail({ email, className = "" }) {
  const [state, setState] = useState("idle"); // idle | copied | failed
  const timer = useRef(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2500);
  };

  const label =
    state === "copied"
      ? "Copied"
      : state === "failed"
        ? "Copy failed, select the address"
        : "Copy";

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex min-h-11 items-center px-2 t-small text-muted transition-colors hover:text-fg ${className}`}
    >
      <span aria-live="polite">{label}</span>
      {state === "idle" && <span className="sr-only"> email address</span>}
    </button>
  );
}
