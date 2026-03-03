import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "미다움: 공간에 머무는 아름다움 | 미다움 디자인",
  description: "미다움 디자인은 공간에 머무는 아름다움을 추구합니다. 프리미엄 인테리어 디자인 포트폴리오를 확인해보세요.",
  keywords: ["인테리어", "디자인", "미다움", "프리미엄 인테리어", "미니멀 인테리어", "Midaum Design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
