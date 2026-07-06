import Consultation from "@/components/Consultation/Consultation";

export const metadata = {
    title: "견적문의 | 아파트 및 상공간 프리미엄 인테리어 | 목수삼촌 실내건축",
    description: "목수삼촌 실내건축 1:1 맞춤 프리미엄 인테리어 견적 상담. 아파트 리모델링, 단독주택, 학원, 병원 등 주거공간 및 상업공간 인테리어 비용 상세 상담.",
    openGraph: {
        title: "견적문의 | 아파트 및 상공간 프리미엄 인테리어 | 목수삼촌 실내건축",
        description: "목수삼촌 실내건축 1:1 맞춤 프리미엄 인테리어 견적 상담. 아파트, 주택, 상업공간 맞춤 시공.",
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
