import Link from "next/link";
import { ArrowUpRight } from "@/components/Icon";
import { profile, services } from "@/lib/data";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Java and Next.js development services",
  description:
    "Hire Niket Chawla for full-stack Java development, Next.js sites, MERN stack apps and UI development. Send a short brief and get a reply by email.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="wrap section pt-12 md:pt-20">
      <h1 data-intro="title" className="t-h1">Services</h1>
      <p data-intro className="t-lead mt-5 max-w-[52ch] text-muted">
        What I can build for you.
      </p>

      <ul className="rows mt-14">
        {services.map((s) => (
          <li
            key={s.title}
            data-reveal
            className="grid gap-3 py-8 md:grid-cols-[1fr_2fr] md:gap-10"
          >
            <h2 className="t-h3">{s.title}</h2>
            <p className="t-body measure">{s.description}</p>
          </li>
        ))}
      </ul>

      <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3" data-reveal>
        <Link href="/contact" className="btn btn-primary">
          Start a project
        </Link>
        <a
          href={profile.fiverr}
          target="_blank"
          rel="noopener noreferrer"
          className="link inline-flex min-h-11 items-center gap-1"
        >
          Or hire me on Fiverr <ArrowUpRight width={14} height={14} />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
