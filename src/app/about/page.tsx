import About from "@/components/About/About";
import Process from "@/components/Process/Process";
import ScrollIndicator from "@/components/ScrollIndicator/ScrollIndicator";

export const metadata = {
    title: "About | 미다움 디자인",
    description: "미다움 디자인의 브랜드 철학과 작업 프로세스 안내",
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
