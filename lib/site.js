import { profile, experience } from "./data";

// One place for everything search engines and share cards read. If the site
// moves to a custom domain, change `url` here and nowhere else.
export const site = {
  url: "https://niketchawla.vercel.app",
  name: profile.name,
  locale: "en_IN",
};

// Metadata for a page: title, description, canonical URL, Open Graph and
// Twitter card. Next replaces (not merges) openGraph when a page sets its
// own, so every page goes through this helper to stay complete.
const imageAlt = `${site.name}, software developer`;

export function pageMetadata({ title, description, path = "/", absolute = false }) {
  const fullTitle = absolute ? title : `${title} | ${site.name}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      locale: site.locale,
      title: fullTitle,
      description,
      // Set explicitly: a page-level openGraph replaces the inherited
      // opengraph-image, so without this only the home page had a share image.
      images: [
        { url: "/opengraph-image", width: 1200, height: 630, alt: imageAlt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: "/twitter-image", width: 1200, height: 630, alt: imageAlt }],
    },
  };
}

const personId = `${site.url}/#person`;

export const personSchema = {
  "@type": "Person",
  "@id": personId,
  name: profile.name,
  url: site.url,
  jobTitle: "Software Developer",
  description: profile.summary,
  worksFor: {
    "@type": "Organization",
    name: profile.employer,
    sameAs: experience.href,
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Chitkara University" },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Hibernate",
    "React",
    "Next.js",
    "PostgreSQL",
    "REST API design",
    "System design",
  ],
  // Profile URLs without tracking parameters
  sameAs: profile.socials.map((s) => s.href.split("?")[0]),
};

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
  ],
};

export const resumeSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${site.url}/resume`,
  name: `Resume of ${profile.name}`,
  inLanguage: "en",
  mainEntity: personSchema,
};
