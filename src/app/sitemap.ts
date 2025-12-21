import { MetadataRoute } from "next";
import { getAllUsernames } from "@/data/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ossph.org";

  // Generate member profile URLs
  const memberUrls = getAllUsernames().map((username) => ({
    url: `${baseUrl}/member/${username}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/awesome`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...memberUrls,
  ];
}
