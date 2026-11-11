import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="wrap section pt-20 md:pt-32">
      <p className="t-label text-muted">404</p>
      <h1 className="t-h1 mt-4">This page doesn't exist.</h1>
      <p className="t-lead mt-5 max-w-[48ch] text-muted">
        The link may be old or mistyped. These pages are here:
      </p>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        {[
          ["Home", "/"],
          ["Work", "/work"],
          ["Services", "/services"],
          ["Resume", "/resume"],
          ["Contact", "/contact"],
        ].map(([name, href]) => (
          <li key={href}>
            <Link href={href} className="link inline-flex min-h-11 items-center">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
