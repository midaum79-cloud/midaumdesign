import { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/portfolioLoader";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.midaum.co.kr";
    const now = new Date();
    const projects = getAllProjects();

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/#portfolio`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#about`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/#process`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/#contact`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/project`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/estimate`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.8,
        },
    ];

    const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/project/${encodeURIComponent(project.id)}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [...staticPages, ...projectPages];
}
