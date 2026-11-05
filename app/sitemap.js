import { SITE_URL } from "@/lib/seo";
import { SPECIALTIES } from "@/lib/specialties";

export default function sitemap() {
  const buildDate = "2026-11-05T00:00:00.000Z";

  // Priority map: home 1.0, clinical/high-value 0.9, support pages 0.7
  const routeConfig = [
    { route: "",                  priority: 1.0, changeFrequency: "weekly" },
    { route: "/about",            priority: 0.9, changeFrequency: "monthly" },
    { route: "/specialities",     priority: 0.9, changeFrequency: "monthly" },
    { route: "/awards",           priority: 0.9, changeFrequency: "monthly" },
    { route: "/research",         priority: 0.8, changeFrequency: "monthly" },
    { route: "/patient-resources",priority: 0.8, changeFrequency: "monthly" },
    { route: "/contact",          priority: 0.8, changeFrequency: "monthly" },
    { route: "/brochure",         priority: 0.7, changeFrequency: "monthly" },
    { route: "/privacy-policy",   priority: 0.4, changeFrequency: "yearly" },
    { route: "/disclaimer",       priority: 0.4, changeFrequency: "yearly" },
    // /rewards is a 301 redirect to /awards — excluded from sitemap
  ];

  const staticRoutes = routeConfig.map(({ route, priority, changeFrequency }) => ({
    url: `${SITE_URL}${route}`,
    lastModified: buildDate,
    changeFrequency,
    priority,
  }));

  const specialtyRoutes = SPECIALTIES.map((spec) => ({
    url: `${SITE_URL}/specialities/${spec.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...specialtyRoutes];
}
