"use client";

import styles from "./Consultation.module.css";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Consultation() {
    return (
        <section id="contact" className={`section ${styles.consultation}`}>
            <div className={`container ${styles.wrapper}`}>
                <div className={styles.formSection}>
                    <h2 className={`text-h2 ${styles.title}`}>Get In Touch</h2>
                    <p className={`text-body ${styles.desc}`}>
                        단순한 정보 입력만으로, 미다움의 디자인 여정이 시작됩니다.
                    </p>
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.formGroup}>
                            <input type="text" id="name" className={styles.input} placeholder="이름 (Name)" required />
                        </div>
                        <div className={styles.formGroup}>
                            <input type="tel" id="contact" className={styles.input} placeholder="연락처 (Contact)" required />
                        </div>
                        <div className={styles.formGroup}>
                            <input type="text" id="address" className={styles.input} placeholder="주소 (Address)" required />
                        </div>
                        <div className={styles.formGroup}>
                            <select id="budget" className={styles.select} required defaultValue="">
                                <option value="" disabled>예산 (Budget)</option>
                                <option value="under-50">5천만원 이하</option>
                                <option value="50-100">5천만원 - 1억원</option>
                                <option value="100-200">1억원 - 2억원</option>
                                <option value="over-200">2억원 이상</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <input type="date" id="date" className={styles.input} placeholder="입주 예정일" required />
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            상담 신청하기
                        </button>
                    </form>
                </div>

                <div className={styles.infoSection}>
                    <div className={styles.mapContainer}>
                        {/* Placeholder for iframe Google Map */}
                        <div className={styles.mapPlaceholder}>
                            Google Map Embed
                        </div>
                    </div>
                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <MapPin size={20} />
                            <span>인천광역시 계양구 아나지로 384, B101</span>
                        </div>
                        <div className={styles.detailItem}>
                            <Phone size={20} />
                            <span>010-5685-0850</span>
                        </div>
                        <div className={styles.detailItem}>
                            <Mail size={20} />
                            <span>midaum79@naver.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
