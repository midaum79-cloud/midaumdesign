import Portfolio from "@/components/Portfolio/Portfolio";

export const metadata = {
    title: "Project | 미다움 디자인",
    description: "미다움 디자인의 주거/상업 공간 인테리어 포트폴리오",
};

export default function ProjectPage() {
    return (
        <main className="page-wrapper">
            <Portfolio />
        </main>
    );
}
