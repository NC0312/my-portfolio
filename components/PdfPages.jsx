"use client";

import { useEffect, useRef, useState } from "react";

// Draws a PDF onto canvases. Phones can't show a PDF inside an iframe, so this
// gives them a real preview instead. pdf.js is imported on demand, so it only
// loads when someone opens the preview on a small screen.
export default function PdfPages({ href }) {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const container = containerRef.current;
    let cancelled = false;
    let doc = null;

    (async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          "pdfjs-dist/build/pdf.worker.min.mjs",
          import.meta.url,
        ).toString();

        doc = await pdfjs.getDocument({ url: href }).promise;
        const cssWidth = container.clientWidth;
        const ratio = window.devicePixelRatio || 1;

        for (let n = 1; n <= doc.numPages; n += 1) {
          const page = await doc.getPage(n);
          if (cancelled) return;

          const base = page.getViewport({ scale: 1 });
          const viewport = page.getViewport({
            scale: (cssWidth / base.width) * ratio,
          });

          const canvas = document.createElement("canvas");
          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          canvas.style.display = "block";
          canvas.style.width = "100%";
          canvas.style.height = "auto";
          container.appendChild(canvas);

          await page.render({ canvas, viewport }).promise;
        }
        if (!cancelled) setStatus("ready");
      } catch (error) {
        console.error("Resume preview failed to render", error);
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
      container.replaceChildren();
      doc?.destroy();
    };
  }, [href]);

  return (
    <div className="p-4">
      <div
        ref={containerRef}
        role="img"
        aria-label="Preview of the resume PDF"
        className="overflow-hidden rounded-md border border-line bg-white"
      />
      {status === "loading" && (
        <p role="status" className="t-small mt-3 text-muted">
          Loading preview
        </p>
      )}
      {status === "error" && (
        <p className="t-body mt-3 text-muted">
          The preview couldn't load. Use the buttons below to download the PDF
          or open it in a new tab.
        </p>
      )}
    </div>
  );
}
