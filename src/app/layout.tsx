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
    default: "목수삼촌 실내건축 | 학원 및 사무실 프리미엄 인테리어",
    template: "%s | 목수삼촌 실내건축",
  },
  description: "학원, 사무실 등 오피스 및 교육공간 전문 인테리어 디자인 회사 목수삼촌 실내건축입니다. 품격을 높이는 미니멀하고 고급스러운 공간 설계 및 시공. 무료 상담 신청 가능.",
  keywords: [
    "목수삼촌", "목수삼촌 실내건축", "Carpenter Uncle",
    "학원인테리어", "사무실인테리어", "오피스인테리어", "상업인테리어", "상가인테리어", 
    "인천 인테리어", "김포 인테리어", "서울 강서구 인테리어", "서울 은평구 인테리어",
    "프리미엄 인테리어", "미니멀 인테리어", "상공간 인테리어", "교육공간 인테리어",
    "인테리어 디자인", "공간 디자인"
  ],
  authors: [{ name: "김명준", url: "https://www.midaum.co.kr" }],
  creator: "목수삼촌 실내건축",
  publisher: "목수삼촌 실내건축",
  formatDetection: { telephone: true, email: true, address: true },
  alternates: {
    canonical: "https://www.midaum.co.kr",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.midaum.co.kr",
    siteName: "목수삼촌 실내건축",
    title: "목수삼촌 실내건축 | 학원 및 사무실 프리미엄 인테리어",
    description: "학원, 사무실 등 오피스 및 교육공간 전문 프리미엄 인테리어 디자인 업체. 품격을 높이는 고급스러운 설계 및 시공.",
    images: [
      {
        url: "/images/company_office_hero.png",
        width: 1200,
        height: 630,
        alt: "목수삼촌 실내건축 - 성공을 짓는 학원 및 사무실 전문 상업공간 디자인",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "목수삼촌 실내건축 | 학원 및 사무실 프리미엄 인테리어",
    description: "학원, 사무실 등 오피스 및 교육공간 전문 프리미엄 인테리어 디자인 업체. 품격을 높이는 고급스러운 설계 및 시공.",
    images: ["/images/company_office_hero.png"],
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
  "name": "목수삼촌 실내건축",
  "alternateName": ["목수삼촌", "Carpenter Uncle", "Carpenter Uncle Interior"],
  "url": "https://www.midaum.co.kr",
  "logo": "https://www.midaum.co.kr/images/midaum_logo_transparent.png",
  "description": "인천·김포·서울 전문 인테리어 디자인 업체. 학원 및 사무실 등 프리미엄 상업 공간 미니멀 설계/시공.",
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
