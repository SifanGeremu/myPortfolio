import type { MetadataRoute } from "next";
import { allowIndexing, siteOrigin } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: allowIndexing() ? "/" : undefined,
      disallow: allowIndexing() ? undefined : "/",
    },
    sitemap: `${siteOrigin()}/sitemap.xml`,
  };
}
