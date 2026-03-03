import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.midaum.co.kr"),
  title: {
    default: "미다움 디자인 | 인천·김포·강서구 프리미엄 인테리어",
    template: "%s | 미다움 디자인",
  },
  description: "인천·김포·서울 강서구 전문 인테리어 디자인 회사 미다움 디자인입니다. 고급스러운 미니멀리즘 철학에 기반한 주거·상업공간 설계 및 시공. 대표 김명준. 무료 상담 신청 가능.",
  keywords: [
    "미다움 디자인", "미다움", "인천 인테리어", "인천 인테리어 업체", "계양구 인테리어",
    "김포 인테리어", "강서구 인테리어", "은평구 인테리어", "서울 인테리어",
    "프리미엄 인테리어", "미니멀 인테리어", "주거 인테리어", "아파트 인테리어",
    "인테리어 디자인", "공간 디자인", "Midaum Design"
  ],
  authors: [{ name: "김명준", url: "https://www.midaum.co.kr" }],
  creator: "미다움 디자인",
  publisher: "미다움 디자인",
  formatDetection: { telephone: true, email: true, address: true },
  alternates: {
    canonical: "https://www.midaum.co.kr",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.midaum.co.kr",
    siteName: "미다움 디자인",
    title: "미다움 디자인 | 인천·김포·강서구 프리미엄 인테리어",
    description: "인천·김포·서울 강서구 전문 인테리어 디자인 업체. 고급스러운 미니멀 공간 설계 및 시공.",
    images: [
      {
        url: "/images/living_room_hero.png",
        width: 1200,
        height: 630,
        alt: "미다움 디자인 - 아름다움, 공간에 담다",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "미다움 디자인 | 인천·김포·강서구 프리미엄 인테리어",
    description: "인천·김포·서울 강서구 전문 인테리어 디자인 업체. 고급스러운 미니멀 공간 설계 및 시공.",
    images: ["/images/living_room_hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console & Naver Search Advisor 인증 코드 - 추후 등록 후 여기에 추가
    // google: "xxxxxx",
    // other: { "naver-site-verification": "xxxxxx" },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  "name": "미다움 디자인",
  "alternateName": "Midaum Design",
  "url": "https://www.midaum.co.kr",
  "logo": "https://www.midaum.co.kr/images/living_room_hero.png",
  "description": "인천·김포·서울 강서구 전문 인테리어 디자인 업체. 고급스러운 미니멀 공간 설계 및 시공.",
  "telephone": "+82-10-5685-0850",
  "email": "midaum79@naver.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "아나지로 384, B101",
    "addressLocality": "계양구",
    "addressRegion": "인천광역시",
    "addressCountry": "KR"
  },
  "areaServed": ["인천광역시", "김포시", "서울 강서구", "서울 은평구"],
  "priceRange": "₩₩₩",
  "openingHours": "Mo-Sa 09:00-18:00",
  "hasMap": "https://www.google.com/maps/search/인천+계양구+아나지로+384",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
