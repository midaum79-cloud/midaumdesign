import Contact from "@/components/Contact/Contact";

export const metadata = {
    title: "Contact | 미다움 디자인",
    description: "미다움 디자인 찾아오시는 길 및 연락처 안내",
};

export default function ContactPage() {
    return (
        <main className="page-wrapper">
            <Contact />
        </main>
    );
}
