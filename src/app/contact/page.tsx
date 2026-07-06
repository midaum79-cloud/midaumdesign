import Contact from "@/components/Contact/Contact";

export const metadata = {
    title: "Contact | 목수삼촌 실내건축",
    description: "목수삼촌 실내건축 찾아오시는 길 및 연락처 안내. 인천 계양구 봉오대로 위치.",
    openGraph: {
        title: "Contact | 목수삼촌 실내건축",
        description: "목수삼촌 실내건축 찾아오시는 길 및 연락처 안내",
        url: "https://www.midaum.co.kr/contact",
    },
    alternates: {
        canonical: "https://www.midaum.co.kr/contact",
    },
};

export default function ContactPage() {
    return (
        <main className="page-wrapper">
            <Contact />
        </main>
    );
}
