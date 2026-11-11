import { site } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();
  return [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/work", priority: 0.9, changeFrequency: "monthly" },
    { path: "/resume", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.7, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
