import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import JsonLd from "@/components/JsonLd";
import { site, siteGraph } from "@/lib/site";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// Pages build their own title, description, canonical and share cards with
// pageMetadata() in lib/site.js. These are the fallbacks (for example the 404).
export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Niket Chawla, Full-Stack Developer | Java and Next.js",
    template: "%s | Niket Chawla",
  },
  description:
    "Full-stack developer building backend services and internal tools in Java, Spring Boot and Next.js.",
  authors: [{ name: site.name, url: site.url }],
  openGraph: { type: "website", siteName: site.name, locale: site.locale },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0d" },
  ],
};

// Runs before first paint:
// 1. applies a saved theme so the page never flashes the wrong colours;
// 2. when motion is allowed, hides animated elements until GSAP takes over,
//    with a timeout so content still appears if scripts fail to load.
const headScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){d.dataset.theme=t}}catch(e){}if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("motion-pending");setTimeout(function(){d.classList.remove("motion-pending")},2500)}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: headScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <SmoothScroll />
        <JsonLd data={siteGraph} />
      </body>
    </html>
  );
}
