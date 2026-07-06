"use client";

import { useState } from "react";
import styles from "./Notice.module.css";

const noticeData = [
    { id: 1, title: "[공지] 하반기 인테리어 시공 일정 마감 안내", date: "2026. 03. 02", isNew: true },
    { id: 2, title: "[안내] 방문 상담 예약 관련 안내 (100% 예약제)", date: "2026. 02. 15", isNew: false },
    { id: 3, title: "[안내] 목수삼촌 실내건축 시공 가능 지역 변경 안내", date: "2026. 01. 10", isNew: false },
    { id: 4, title: "[공지] 기본 견적 및 유상 A/S 관련 규정 안내", date: "2025. 11. 22", isNew: false },
];

export default function Notice() {
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
                        {noticeData.map((item, index) => (
                            <li key={item.id} className={styles.boardItem}>
                                <div className={styles.colNumber}>{noticeData.length - index}</div>
                                <div className={styles.colTitleContent}>
                                    <span className={styles.itemTitle}>{item.title}</span>
                                    {item.isNew && <span className={styles.newBadge}>N</span>}
                                </div>
                                <div className={styles.colDate}>{item.date}</div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.pagination}>
                    <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
                </div>
            </div>
        </section>
    );
}
