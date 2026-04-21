import type { MetadataRoute } from "next";
import { PLATFORM_BENEFITS } from "@/data/platform-benefits";

const SITE_URL = "https://dichvu-tanluc.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const platformPages: MetadataRoute.Sitemap = PLATFORM_BENEFITS.map((p) => ({
    url: `${SITE_URL}/loi-ich/${p.platform}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/bang-gia`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/chay-quang-cao`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/loi-ich`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...platformPages,
  ];
}
