import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "./blog/data";

const BASE_URL = "https://www.zacleaningteam.com";
const LAST_UPDATED = new Date("2026-05-09");

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/terms-and-condition`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...blogRoutes,
  ];
}
