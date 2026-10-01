import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";
import { getAllSlugs } from "@/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const slugs = await getAllSlugs();

  const productPages: MetadataRoute.Sitemap = slugs.map((slug) => ({
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
