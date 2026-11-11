import { ArrowUpRight, Download } from "@/components/Icon";
import { profile, experience, education, skills } from "@/lib/data";

export const metadata = {
  title: "Resume",
  description: "Experience, education and skills of Niket Chawla, a full-stack developer working in Java, Spring Boot and Next.js.",
};

function Block({ id, title, children }) {
  return (
    <section
      aria-labelledby={id}
      data-rule
      className="section-rule grid gap-6 py-12 md:grid-cols-[200px_1fr] md:gap-10"
    >
      <h2 id={id} data-reveal className="t-label text-muted md:pt-2">
        {title}
      </h2>
      <div data-reveal>{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="wrap section pt-12 md:pt-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 data-intro="title" className="t-h1">Resume</h1>
          <p data-intro className="t-lead mt-5 max-w-[52ch] text-muted">
            {profile.role}, two years in.
          </p>
        </div>
        <a data-intro href={profile.resume} download className="btn btn-primary">
          <Download /> Download PDF
        </a>
      </div>

      <div className="mt-14">
        <Block id="about" title="About">
          <p className="t-body measure">{profile.summary}</p>
        </Block>

        <Block id="experience" title="Experience">
          <a
            href={experience.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex min-h-8 items-center gap-1 t-h3"
          >
            {experience.company} <ArrowUpRight />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <ul className="divide-y mt-6">
            {experience.roles.map((r) => (
              <li key={r.title} className="py-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div>
                    <p className="t-body font-medium">{r.title}</p>
                    <p className="t-small text-muted">{r.location}</p>
                  </div>
                  <p className="t-small font-mono text-muted tabular-nums">{r.dates}</p>
                </div>
                <ul className="t-body measure mt-4 flex list-disc flex-col gap-3 pl-5 text-muted marker:text-muted">
                  {r.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Block>

        <Block id="education" title="Education">
          <ul className="divide-y">
            {education.map((e) => (
              <li
                key={e.school}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div>
                  <p className="t-body font-medium">{e.school}</p>
                  <p className="t-small text-muted">{e.detail}</p>
                  <p className="t-small text-muted">{e.location}</p>
                </div>
                <p className="t-small font-mono text-muted tabular-nums">{e.dates}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block id="skills" title="Skills">
          <dl className="divide-y">
            {skills.map((s) => (
              <div
                key={s.group}
                className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6"
              >
                <dt className="t-small text-muted">{s.group}</dt>
                <dd className="t-body">{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <div className="border-t" />
      </div>
    </div>
  );
}
