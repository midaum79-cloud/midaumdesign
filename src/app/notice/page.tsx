import { getAllNotices } from "@/lib/noticeLoader";
import NoticeBoard from "@/components/Notice/NoticeBoard";

export const metadata = {
    title: "Notice | 미다움 디자인",
    description: "미다움 디자인 공지사항 및 새로운 소식. 인테리어 이벤트 및 안내사항을 확인하세요.",
    openGraph: {
        title: "Notice | 미다움 디자인",
        description: "미다움 디자인 공지사항 및 새로운 소식",
        url: "https://www.midaum.co.kr/notice",
    },
    alternates: {
        canonical: "https://www.midaum.co.kr/notice",
    },
};

export default function NoticePage() {
    const notices = getAllNotices();

    return (
        <main className="page-wrapper">
            <NoticeBoard notices={notices} />
        </main>
    );
}
