import Consultation from "@/components/Consultation/Consultation";

export const metadata = {
    title: "견적문의 | 미다움 디자인",
    description: "미다움 디자인 1:1 견적 상담 문의",
};

export default function EstimatePage() {
    return (
        <main className="page-wrapper">
            <Consultation />
        </main>
    );
}
