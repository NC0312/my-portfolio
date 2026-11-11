import { ArrowUpRight, Download } from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import { profile, experience, education, skills } from "@/lib/data";
import { pageMetadata, resumeSchema } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Resume: full-stack developer, 2 years",
  description:
    "Resume of Niket Chawla, a full-stack developer at Twinline Business Solutions with 2 years of Java, Spring Boot, React and Next.js experience.",
  path: "/resume",
});

function Block({ id, title, children }) {
  return (
    <section
      aria-labelledby={id}
      data-rule
      className="section-rule grid gap-6 py-12 md:grid-cols-[240px_1fr] md:gap-10"
    >
      <h2 id={id} data-reveal className="t-h2">
        {title}
      </h2>
      <div data-reveal>{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="wrap section pt-12 md:pt-20">
      <JsonLd data={resumeSchema} />
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 data-intro="title" className="t-h1">Resume</h1>
          <p data-intro className="t-lead mt-5 max-w-[52ch] text-muted">
            {profile.role}, two years in.
          </p>
        </div>
      </div>

      <div className="mt-14">
        <Block id="preview" title="Preview">
          <div className="flex flex-col gap-6">
            <figure className="overflow-hidden rounded-lg border border-line bg-surface">
              <figcaption className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
                <span className="t-label text-muted">resume.pdf</span>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet t-small inline-flex min-h-11 items-center gap-1"
                >
                  Open in new tab <ArrowUpRight width={14} height={14} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </figcaption>
              <iframe
                src={`${profile.resume}#view=FitH`}
                title="Resume PDF preview"
                loading="lazy"
                className="hidden h-[80vh] min-h-[520px] w-full bg-bg md:block"
              >
                <p className="t-body p-6">
                  Your browser can't display the PDF.{" "}
                  <a href={profile.resume} className="link">Open the resume</a>.
                </p>
              </iframe>
              {/* Phones (notably iOS Safari) don't render inline PDFs, so show a clear way in instead of a blank frame. */}
              <div className="flex flex-col items-start gap-4 p-6 md:hidden">
                <p className="t-body text-muted">
                  Inline preview isn't available on this device.
                </p>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Open the PDF <ArrowUpRight width={14} height={14} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </figure>

            <div className="flex flex-wrap items-center gap-4">
              <a href={profile.resume} download className="btn btn-primary">
                <Download /> Download PDF
              </a>
            </div>
          </div>
        </Block>

        <Block id="about" title="About">
          <p className="t-body measure">{profile.summary}</p>
        </Block>

        <Block id="experience" title="Experience">
          <a
            href={experience.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link t-small inline-flex min-h-11 items-center gap-1"
          >
            {experience.company} <ArrowUpRight width={14} height={14} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <ul className="divide-y">
            {experience.roles.map((r) => (
              <li key={r.title} className="py-7 first:pt-3">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="t-h3">{r.title}</h3>
                    <p className="t-small mt-1 text-muted">{r.location}</p>
                  </div>
                  <p className="t-small font-mono text-muted tabular-nums">{r.dates}</p>
                </div>
                <ul className="t-body measure mt-5 flex list-disc flex-col gap-3 pl-5 marker:text-muted">
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
                  <h3 className="t-h3">{e.school}</h3>
                  <p className="t-body mt-1">{e.detail}</p>
                  <p className="t-small mt-1 text-muted">{e.location}</p>
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

        <div className="border-t border-line-strong" />
      </div>
    </div>
  );
}
