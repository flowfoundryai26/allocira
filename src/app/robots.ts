import { siteOrigin } from "@/lib/site-origin";
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const base = siteOrigin();
  return {
    rules: [
      { userAgent: "*", allow: ["/", "/privacy", "/terms"], disallow: "/api/" },
    ],
    sitemap: new URL("/sitemap.xml", base).toString(),
  };
}
