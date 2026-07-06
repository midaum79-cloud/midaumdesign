import About from "@/components/About/About";
import Process from "@/components/Process/Process";
import ScrollIndicator from "@/components/ScrollIndicator/ScrollIndicator";

export const metadata = {
    title: "About | 목수삼촌 실내건축",
    description: "목수삼촌 실내건축의 브랜드 철학과 작업 프로세스 안내. 공간에 아름다움을 담는 인천/김포 인테리어 전문 디자인 스튜디오.",
    openGraph: {
        title: "About | 목수삼촌 실내건축",
        description: "목수삼촌 실내건축의 브랜드 철학과 작업 프로세스 안내",
        url: "https://www.midaum.co.kr/about",
    },
    alternates: {
        canonical: "https://www.midaum.co.kr/about",
    },
};

export default function AboutPage() {
    return (
        <main className="page-wrapper">
            <About />
            <ScrollIndicator />
            <Process />
        </main>
    );
}
