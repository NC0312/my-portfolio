"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { nav } from "@/lib/data";

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <div className="flex items-center gap-2">
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`inline-flex min-h-11 items-center px-3 t-small underline-offset-[10px] transition-colors hover:text-fg ${
                isActive(item.href)
                  ? "text-fg underline decoration-accent decoration-2"
                  : "text-muted"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
        <button
          type="button"
          className="inline-flex min-h-11 items-center px-3 t-small md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="basis-full border-t pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex min-h-12 items-center t-body ${
                    isActive(item.href) ? "text-accent" : "text-fg"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
