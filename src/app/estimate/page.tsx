import Consultation from "@/components/Consultation/Consultation";

export const metadata = {
    title: "견적문의 | 미다움 디자인",
    description: "미다움 디자인 1:1 맞춤 프리미엄 인테리어 견적 상담 및 문의. 주거공간, 상업공간 인테리어 비용 상담.",
    openGraph: {
        title: "견적문의 | 미다움 디자인",
        description: "미다움 디자인 1:1 맞춤 프리미엄 인테리어 견적 상담 및 문의",
        url: "https://www.midaum.co.kr/estimate",
    },
    alternates: {
        canonical: "https://www.midaum.co.kr/estimate",
    },
};

export default function EstimatePage() {
    return (
        <main className="page-wrapper">
            <Consultation />
        </main>
    );
}
