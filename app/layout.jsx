import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";

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

export const metadata = {
  metadataBase: new URL("https://niketchawla.vercel.app"),
  title: {
    default: "Niket Chawla, software developer",
    template: "%s | Niket Chawla",
  },
  description:
    "Niket Chawla is a full-stack developer building backend services and internal tools in Java, Spring Boot and Next.js.",
  icons: {
    icon: "/assets/logo.png",
  },
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
      </body>
    </html>
  );
}
