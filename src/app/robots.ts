import { MetadataRoute } from "next";
import { portfolioConfig } from "@/config/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/og"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: `${portfolioConfig.seo.url}/sitemap.xml`,
    host: portfolioConfig.seo.url,
  };
}
