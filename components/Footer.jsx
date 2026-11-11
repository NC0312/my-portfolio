import { ArrowUpRight } from "./Icon";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t">
      <div className="wrap flex flex-col gap-4 py-8 t-small text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {year} {profile.name}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          <li>
            <a
              className="link-quiet inline-flex min-h-11 items-center text-muted hover:text-fg"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </li>
          {profile.socials.slice(0, 2).map((s) => (
            <li key={s.name}>
              <a
                className="link-quiet inline-flex min-h-11 items-center gap-1 text-muted hover:text-fg"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.name} <ArrowUpRight width={12} height={12} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
