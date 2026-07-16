import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";
import { getAllSlugs } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const productPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${siteConfig.url}/produto/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...productPages,
  ];
}
