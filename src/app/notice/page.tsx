import Notice from "@/components/Notice/Notice";

export const metadata = {
    title: "Notice | 미다움 디자인",
    description: "미다움 디자인 공지사항 및 새로운 소식",
};

export default function NoticePage() {
    return (
        <main className="page-wrapper">
            <Notice />
        </main>
    );
}
