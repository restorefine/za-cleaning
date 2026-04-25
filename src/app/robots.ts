import type { MetadataRoute } from "next";

const BASE_URL = "https://zacleaningteam.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/_next/static/",
          "/_next/image/",
          "/_next/data/",
          "/static/",
          "/*.json$",
          "/*?*",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
