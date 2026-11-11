import ContactForm from "@/components/ContactForm";
import CopyEmail from "@/components/CopyEmail";
import { ArrowUpRight } from "@/components/Icon";
import { profile } from "@/lib/data";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Niket Chawla about a project, a role, or a question.",
};

export default function ContactPage() {
  return (
    <div className="wrap section pt-12 md:pt-20">
      <h1 data-intro="title" className="t-h1">Contact</h1>
      <p data-intro className="t-lead mt-5 max-w-[52ch] text-muted">
        Tell me about your project. I'll reply by email.
      </p>

      <div className="mt-14 grid gap-14 md:grid-cols-[1fr_1.5fr] md:gap-16">
        <dl className="flex flex-col gap-8 self-start" data-reveal>
          <div>
            <dt className="t-label text-muted">Email</dt>
            <dd className="mt-1 flex flex-wrap items-center gap-x-2">
              <a
                className="link inline-flex min-h-11 items-center break-all"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
              <CopyEmail email={profile.email} className="-ml-2" />
            </dd>
          </div>
          <div>
            <dt className="t-label text-muted">Phone</dt>
            <dd className="mt-2">
              <a className="link-quiet" href={`tel:${profile.phoneHref}`}>
                {profile.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="t-label text-muted">Location</dt>
            <dd className="mt-2">{profile.location}</dd>
          </div>
          <div>
            <dt className="t-label text-muted">Elsewhere</dt>
            <dd className="mt-2">
              <ul className="flex flex-col">
                {profile.socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-quiet inline-flex min-h-9 items-center gap-1"
                    >
                      {s.name} <ArrowUpRight width={14} height={14} />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div data-reveal>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
