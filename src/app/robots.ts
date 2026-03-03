import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
            {
                // Naver Bot 명시적 허용
                userAgent: "Yeti",
                allow: "/",
            },
        ],
        sitemap: "https://www.midaum.co.kr/sitemap.xml",
        host: "https://www.midaum.co.kr",
    };
}
