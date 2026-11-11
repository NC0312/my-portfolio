import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download } from "@/components/Icon";
import CopyEmail from "@/components/CopyEmail";
import ProjectLinks from "@/components/ProjectLinks";
import { profile, projects, experience } from "@/lib/data";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Niket Chawla, Full-Stack Developer | Java and Next.js",
  description:
    "Full-stack developer building backend services and internal tools in Java, Spring Boot and Next.js. Built an in-house Jira replacement used by 500+ people.",
  path: "/",
  absolute: true,
});

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <section data-hero className="wrap pt-14 md:pt-24">
        <p className="t-label flex items-center gap-3 text-muted">
          <span
            data-hero-dot
            aria-hidden="true"
            className="block size-2 shrink-0 rounded-full bg-accent"
          />
          <span data-hero-label>
            {profile.role} at {profile.employer}
          </span>
        </p>
        <h1 data-hero-title className="t-display mt-6 max-w-[18ch]">
          I build backend services and internal tools teams rely on.
        </h1>
        <p data-hero-fade className="t-lead mt-8 max-w-[52ch] text-muted">
          I'm {profile.name}, a full-stack developer working in Java, Spring Boot
          and Next.js. At Twinline I built an issue tracker that replaced a
          licensed tool and is now used by 500+ people across 30+ clients.
        </p>
        <div
          data-hero-fade
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          <a href={profile.resume} download className="btn btn-primary">
            <Download /> Download resume (PDF)
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
                  className="link-quiet inline-flex min-h-11 items-center gap-1"
                >
                  {s.name} <ArrowUpRight width={12} height={12} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          data-hero-rule
          aria-hidden="true"
          className="mt-16 h-px bg-line-strong md:mt-20"
        />
      </section>

      <section className="wrap section" aria-labelledby="work-heading">
        <div className="flex items-end justify-between gap-6">
          <h2 id="work-heading" data-split className="t-h2">
            Selected work
          </h2>
          <Link
            href="/work"
            data-reveal
            className="link inline-flex min-h-11 items-center gap-1 t-small"
          >
            All projects <ArrowRight width={14} height={14} />
          </Link>
        </div>
        <ul className="rows mt-10">
          {featured.map((p) => (
            <li
              key={p.slug}
              data-reveal
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

      <section
        data-rule
        className="wrap section section-rule"
        aria-labelledby="exp-heading"
      >
        <div className="flex items-end justify-between gap-6">
          <h2 id="exp-heading" data-split className="t-h2">
            Experience
          </h2>
          <Link
            href="/resume"
            data-reveal
            className="link inline-flex min-h-11 items-center gap-1 t-small"
          >
            Full resume <ArrowRight width={14} height={14} />
          </Link>
        </div>
        <p className="t-body mt-4 text-muted" data-reveal>
          {experience.company}
        </p>
        <ul className="rows mt-8">
          {experience.roles.map((r) => (
            <li
              key={r.title}
              data-reveal
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="t-h3">{r.title}</span>
              <span className="t-small font-mono text-muted tabular-nums">{r.dates}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        data-rule
        className="wrap section section-rule"
        aria-labelledby="cta-heading"
      >
        <span
          data-dot
          aria-hidden="true"
          className="mb-8 block size-2 rounded-full bg-accent"
        />
        <h2 id="cta-heading" data-split className="t-h1 max-w-[20ch]">
          Have a project in mind?
        </h2>
        <p className="t-lead mt-6 max-w-[48ch] text-muted" data-reveal>
          Send a short description and I'll reply by email.
        </p>
        <div
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
          data-reveal
        >
          <Link href="/contact" className="btn btn-primary">
            Get in touch
          </Link>
          <span className="inline-flex flex-wrap items-center gap-x-1">
            <a
              href={`mailto:${profile.email}`}
              className="link inline-flex min-h-11 items-center break-all"
            >
              {profile.email}
            </a>
            <CopyEmail email={profile.email} />
          </span>
        </div>
      </section>
    </>
  );
}
