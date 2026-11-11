import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

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

// Applies a saved theme before first paint so the page never flashes.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
