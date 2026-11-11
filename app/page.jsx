import Link from "next/link";
import { ArrowRight, Download } from "@/components/Icon";
import ProjectLinks from "@/components/ProjectLinks";
import { profile, projects, experience } from "@/lib/data";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="wrap pt-14 pb-20 md:pt-24 md:pb-28">
        <p className="t-label text-muted">
          {profile.role} at {profile.employer}
        </p>
        <h1 className="t-display mt-6 max-w-[18ch]">
          I build backend services and internal tools teams rely on.
        </h1>
        <p className="t-lead mt-8 max-w-[52ch] text-muted">
          I'm {profile.name}, a full-stack developer working in Java, Spring Boot
          and Next.js. At Twinline I built an issue tracker that replaced a
          licensed tool and is now used by 500+ people across 30+ clients.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href={profile.resume} download className="btn btn-primary">
            <Download /> Download resume
          </a>
          <Link href="/contact" className="btn btn-ghost">
            Get in touch
          </Link>
          <ul className="flex gap-5 t-small">
            {profile.socials.slice(0, 2).map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet inline-flex min-h-11 items-center"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap section border-t" aria-labelledby="work-heading">
        <div className="flex items-end justify-between gap-6" data-reveal>
          <h2 id="work-heading" className="t-h2">
            Selected work
          </h2>
          <Link href="/work" className="link inline-flex min-h-11 items-center gap-1 t-small">
            All projects <ArrowRight width={14} height={14} />
          </Link>
        </div>
        <ul className="rows mt-10">
          {featured.map((p, i) => (
            <li
              key={p.slug}
              data-reveal
              style={{ "--i": i }}
              className="grid gap-4 py-8 md:grid-cols-[1fr_2fr] md:gap-10"
            >
              <div>
                <h3 className="t-h3">{p.title}</h3>
                <p className="t-label mt-2 text-muted">{p.kind}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="t-body measure">{p.description}</p>
                <p className="t-small font-mono text-muted">{p.stack.join(" / ")}</p>
                <ProjectLinks project={p} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap section border-t" aria-labelledby="exp-heading">
        <div className="flex items-end justify-between gap-6" data-reveal>
          <h2 id="exp-heading" className="t-h2">
            Experience
          </h2>
          <Link href="/resume" className="link inline-flex min-h-11 items-center gap-1 t-small">
            Full resume <ArrowRight width={14} height={14} />
          </Link>
        </div>
        <p className="t-body mt-4 text-muted" data-reveal>
          {experience.company}
        </p>
        <ul className="rows mt-8">
          {experience.roles.map((r, i) => (
            <li
              key={r.title}
              data-reveal
              style={{ "--i": i }}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="t-h3">{r.title}</span>
              <span className="t-small font-mono text-muted tabular-nums">{r.dates}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap section border-t" aria-labelledby="cta-heading">
        <div data-reveal>
          <h2 id="cta-heading" className="t-h1 max-w-[20ch]">
            Have a project in mind?
          </h2>
          <p className="t-lead mt-6 max-w-[48ch] text-muted">
            Send a short description and I'll reply by email.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/contact" className="btn btn-primary">
              Contact me
            </Link>
            <a href={`mailto:${profile.email}`} className="link inline-flex min-h-11 items-center">
              {profile.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
