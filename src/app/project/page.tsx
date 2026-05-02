import { getAllProjects } from "@/lib/portfolioLoader";
import PortfolioGrid from "@/components/Portfolio/PortfolioGrid";

export const metadata = {
    title: "Portfolio | 미다움 디자인",
    description: "인천, 김포, 강서구 인테리어 전문 미다움 디자인의 프리미엄 주거/상업 공간 인테리어 포트폴리오를 확인해보세요.",
    openGraph: {
        title: "Portfolio | 미다움 디자인",
        description: "인천, 김포, 강서구 인테리어 전문 미다움 디자인의 프리미엄 주거/상업 공간 인테리어 포트폴리오",
        url: "https://www.midaum.co.kr/project",
    },
    alternates: {
        canonical: "https://www.midaum.co.kr/project",
    },
};

export default function ProjectPage() {
    const projects = getAllProjects();

    return (
        <main className="page-wrapper">
            <PortfolioGrid projects={projects} />
        </main>
    );
}
