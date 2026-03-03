import { getAllNotices } from "@/lib/noticeLoader";
import NoticeBoard from "@/components/Notice/NoticeBoard";

export const metadata = {
    title: "Notice | 미다움 디자인",
    description: "미다움 디자인 공지사항 및 새로운 소식",
};

export default function NoticePage() {
    const notices = getAllNotices();

    return (
        <main className="page-wrapper">
            <NoticeBoard notices={notices} />
        </main>
    );
}
