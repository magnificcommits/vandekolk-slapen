import type { MetadataRoute } from "next";
import { brands, concerns } from "@/lib/site";
import { categories, comparisons, regions } from "@/lib/assortiment";
import { articles } from "@/lib/kennis";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.vandekolkslapen.nl";
  const now = new Date();
  const fixed = ["", "/collectie", "/assortiment", "/configurator", "/slaapadvies", "/afspraak", "/waar-zoekt-u-naar", "/showroomcollectie", "/over-ons", "/contact", "/kennis"];
  return [
    ...fixed.map((p) => ({ url: base + p, lastModified: now, priority: p === "" ? 1 : p === "/afspraak" ? 0.9 : 0.7 })),
    ...brands.map((b) => ({ url: `${base}/collectie/${b.slug}`, lastModified: now, priority: 0.8 })),
    ...categories.map((c) => ({ url: `${base}/assortiment/${c.slug}`, lastModified: now, priority: 0.7 })),
    ...concerns.map((c) => ({ url: `${base}/waar-zoekt-u-naar/${c.slug}`, lastModified: now, priority: 0.7 })),
    ...comparisons.map((c) => ({ url: `${base}/vergelijk/${c.slug}`, lastModified: now, priority: 0.8 })),
    ...regions.map((r) => ({ url: `${base}/regio/${r.slug}`, lastModified: now, priority: 0.7 })),
    ...articles.map((a) => ({ url: `${base}/kennis/${a.slug}`, lastModified: new Date(a.date), priority: 0.6 })),
  ];
}
