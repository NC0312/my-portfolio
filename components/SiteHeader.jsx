import Link from "next/link";
import SiteNav from "./SiteNav";
import { profile } from "@/lib/data";

export default function SiteHeader() {
  return (
    <header className="wrap flex flex-wrap items-center justify-between gap-x-6 py-4">
      <Link
        href="/"
        className="inline-flex min-h-11 items-center font-medium tracking-tight"
      >
        {profile.name}
      </Link>
      <SiteNav />
    </header>
  );
}
