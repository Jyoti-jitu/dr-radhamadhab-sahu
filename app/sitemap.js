import { SITE_URL } from "@/lib/seo";
import { SPECIALTIES } from "@/lib/specialties";

export default function sitemap() {
  const buildDate = "2026-10-23T00:00:00.000Z";
  const routes = [
    "",
    "/about",
    "/specialities",
    "/research",
    "/patient-resources",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: buildDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/specialities") ? 0.9 : 0.8,
  }));

  const specialtyRoutes = SPECIALTIES.map((spec) => ({
    url: `${SITE_URL}/specialities/${spec.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...routes, ...specialtyRoutes];
}
