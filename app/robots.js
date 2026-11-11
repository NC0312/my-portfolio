import { site } from "@/lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The two form endpoints only accept POST, so there is nothing to index.
      disallow: "/api/",
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
