import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import MobileBottomBar from "@/components/MobileBottomBar/MobileBottomBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.midaum.co.kr"),
  title: {
    default: "주식회사 미다움 | 상업 및 주거공간 프리미엄 인테리어",
    template: "%s | 주식회사 미다움",
  },
  description: "아파트, 단독주택 등 프리미엄 주거공간 및 학원, 병원, 상가 등 상업공간 전문 인테리어 디자인 회사 주식회사 미다움입니다. 품격을 높이는 미니멀하고 고급스러운 공간 설계 및 시공. 무료 상담 신청 가능.",
  keywords: [
    "주거인테리어", "상업인테리어", "아파트인테리어", "아파트 리모델링", "단독주택 리모델링", "빌라 인테리어",
    "거실 인테리어", "학원인테리어", "병원인테리어", "의원인테리어", "상가 인테리어", "미용실 인테리어",
    "미다움디자인", "미다움 디자인", "미다움", "주식회사 미다움", 
    "인천 인테리어", "김포 인테리어", "서울 강서구 인테리어", "서울 은평구 인테리어",
    "프리미엄 인테리어", "미니멀 인테리어", "상공간 인테리어", "주거공간 인테리어",
    "인테리어 디자인", "공간 디자인", "Midaum Design"
  ],
  authors: [{ name: "김명준", url: "https://www.midaum.co.kr" }],
  creator: "주식회사 미다움",
  publisher: "주식회사 미다움",
  formatDetection: { telephone: true, email: true, address: true },
  alternates: {
    canonical: "https://www.midaum.co.kr",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.midaum.co.kr",
    siteName: "주식회사 미다움",
    title: "주식회사 미다움 | 상업 및 주거공간 프리미엄 인테리어",
    description: "아파트, 주택 등 주거공간과 상업공간 전문 프리미엄 인테리어 디자인 업체. 품격을 높이는 고급스러운 설계 및 시공.",
    images: [
      {
        url: "/images/clinic_banner.png",
        width: 1200,
        height: 630,
        alt: "주식회사 미다움 - 성공을 짓는 상업공간 디자인",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "주식회사 미다움 | 상업 및 주거공간 프리미엄 인테리어",
    description: "아파트, 주택 등 주거공간과 상업공간 전문 프리미엄 인테리어 디자인 업체. 품격을 높이는 고급스러운 설계 및 시공.",
    images: ["/images/living_room_hero_new.png"],
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
    google: "tpKVaSgTsnloFIugT0m_6Rp-uIyOPoz1DUZrq2kqQ6Q",
    other: {
      "naver-site-verification": "7f42a37b8648793805edc8be4d658c9c5451963e",
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  "name": "미다움디자인",
  "alternateName": ["미다움 디자인", "미다움", "Midaum Design"],
  "url": "https://www.midaum.co.kr",
  "logo": "https://www.midaum.co.kr/images/living_room_hero_new.png",
  "description": "인천·김포·서울 전문 인테리어 디자인 업체. 아파트 리모델링 등 프리미엄 주거 및 상업 공간 미니멀 설계/시공.",
  "telephone": "+82-10-5685-0850",
  "email": "midaum79@naver.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "봉오대로 460 2층 202호 (효성동)",
    "addressLocality": "계양구",
    "addressRegion": "인천시",
    "addressCountry": "KR"
  },
  "areaServed": ["인천광역시", "김포시", "서울 강서구", "서울 은평구"],
  "priceRange": "₩₩₩",
  "openingHours": "Mo-Sa 09:00-18:00",
  "hasMap": "https://www.google.com/maps/search/인천시+계양구+봉오대로+460",
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
      <body>
        <Header />
        {children}
        <ScrollToTop />
        <MobileBottomBar />
        <Footer />
      </body>
    </html>
  );
}
