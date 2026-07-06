"use client";

import { useState } from "react";
import styles from "./Notice.module.css";

interface NoticeInfo {
    id: string;
    title: string;
    date: string;
    content: string;
}

export default function NoticeBoard({ notices }: { notices: NoticeInfo[] }) {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    // Check if a notice is "new" (within 14 days)
    const isNew = (dateStr: string) => {
        const diff = Date.now() - new Date(dateStr).getTime();
        return diff < 14 * 24 * 60 * 60 * 1000;
    };

    return (
        <section className={styles.noticeSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Notice</h2>
                    <p className={styles.subtitle}>목수삼촌 실내건축의 새로운 소식과 공지사항을 알려드립니다.</p>
                </div>

                <div className={styles.board}>
                    <div className={styles.boardHeader}>
                        <div className={styles.colNumber}>No.</div>
                        <div className={styles.colTitle}>제목</div>
                        <div className={styles.colDate}>등록일</div>
                    </div>

                    <ul className={styles.boardList}>
                        {notices.length === 0 && (
                            <li className={styles.emptyItem}>등록된 공지사항이 없습니다.</li>
                        )}
                        {notices.map((item, index) => (
                            <li key={item.id} className={styles.boardItem}>
                                <div className={styles.boardRow} onClick={() => toggleExpand(item.id)}>
                                    <div className={styles.colNumber}>{notices.length - index}</div>
                                    <div className={styles.colTitleContent}>
                                        <span className={styles.itemTitle}>{item.title}</span>
                                        {isNew(item.date) && <span className={styles.newBadge}>N</span>}
                                    </div>
                                    <div className={styles.colDate}>{item.date}</div>
                                </div>
                                {expandedId === item.id && (
                                    <div className={styles.contentPanel}>
                                        <p>{item.content}</p>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
