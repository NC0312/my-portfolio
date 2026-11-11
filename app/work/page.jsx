import Image from "next/image";
import ProjectLinks from "@/components/ProjectLinks";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Work",
  description: "Projects by Niket Chawla: an internal issue tracker and web apps built with React, Next.js and the MERN stack.",
};

export default function WorkPage() {
  return (
    <div className="wrap section pt-12 md:pt-20">
      <h1 data-intro="title" className="t-h1">Work</h1>
      <p data-intro className="t-lead mt-5 max-w-[52ch] text-muted">
        Two in-house platforms in production, and four side projects built to
        learn and to ship.
      </p>

      <ul className="rows mt-14">
        {projects.map((p) => (
          <li
            key={p.slug}
            data-reveal
            className="grid gap-6 py-10 md:grid-cols-[1fr_2fr] md:gap-10"
          >
            <div className="flex flex-col gap-5">
              <div className="relative size-11 overflow-hidden rounded-md border bg-[#faf9f6]">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`${p.title} logo`}
                    fill
                    sizes="44px"
                    className="object-contain p-1"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex h-full items-center justify-center bg-surface font-mono text-sm text-muted"
                  >
                    {p.mark ?? p.title.slice(0, 2)}
                  </span>
                )}
              </div>
              <div>
                <h2 className="t-h3">{p.title}</h2>
                <p className="t-label mt-2 text-muted">{p.kind}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="t-body measure">{p.description}</p>
              <p className="t-small font-mono text-muted">{p.stack.join(" / ")}</p>
              <ProjectLinks project={p} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
