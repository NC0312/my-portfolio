"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Close, Download, Info } from "./Icon";

// An "i" button that opens the resume PDF in a modal. It uses the native
// <dialog>, which traps focus, closes on Esc and hands focus back to the
// button. The PDF is only mounted while the dialog is open, so nothing
// downloads until someone asks for it.
export default function ResumePreview({ href }) {
  const dialogRef = useRef(null);
  const [open, setOpen] = useState(false);

  // Never leave the page locked if this unmounts while the dialog is open.
  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);

  const show = () => {
    dialogRef.current?.showModal();
    setOpen(true);
    document.documentElement.style.overflow = "hidden";
  };

  const close = () => dialogRef.current?.close();

  const handleClose = () => {
    setOpen(false);
    document.documentElement.style.overflow = "";
  };

  return (
    <>
      <button
        type="button"
        onClick={show}
        aria-haspopup="dialog"
        aria-label="Preview resume"
        title="Preview resume"
        className="btn btn-ghost w-11 rounded-full px-0"
      >
        <Info />
      </button>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        // Clicks on the dimmed backdrop land on the dialog itself.
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        aria-labelledby="resume-preview-title"
        data-lenis-prevent
        className="m-auto w-[min(960px,calc(100%-32px))] overflow-hidden rounded-lg border border-line bg-bg p-0 text-fg backdrop:bg-[#0e0e0d]/60"
      >
        <div className="flex max-h-[calc(100dvh-32px)] flex-col">
          <div className="flex items-center justify-between gap-4 border-b border-line py-1 pl-5 pr-2">
            <h2 id="resume-preview-title" className="t-label text-muted">
              resume.pdf
            </h2>
            <button
              type="button"
              onClick={close}
              aria-label="Close preview"
              className="btn w-11 rounded-full px-0 hover:bg-surface"
            >
              <Close />
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-auto">
            {open && (
              <iframe
                src={`${href}#view=FitH`}
                title="Resume PDF preview"
                className="hidden h-[70dvh] w-full bg-bg md:block"
              >
                <p className="t-body p-6">
                  Your browser can't display the PDF. Use the buttons below.
                </p>
              </iframe>
            )}
            {/* Phones (notably iOS Safari) don't render inline PDFs. */}
            <p className="t-body p-6 text-muted md:hidden">
              Inline preview isn't available on this device. Download the PDF
              or open it in a new tab.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-5 py-4">
            <a href={href} download className="btn btn-primary">
              <Download /> Download PDF
            </a>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet t-small inline-flex min-h-11 items-center gap-1"
            >
              Open in new tab <ArrowUpRight width={14} height={14} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
