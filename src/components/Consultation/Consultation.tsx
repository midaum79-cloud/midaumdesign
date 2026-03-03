"use client";

import styles from "./Consultation.module.css";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Consultation() {
    return (
        <section id="estimate" className={`section ${styles.consultation}`}>
            <div className={`container ${styles.wrapper}`}>
                <div className={styles.formSection}>
                    <h2 className={`text-h2 ${styles.title}`}>Online Estimate</h2>
                    <p className={`text-body ${styles.desc}`}>
                        텍스트 입력 한 번으로, 미다움 전문가와의 1:1 맞춤 견적 상담이 시작됩니다.
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
            </div>
        </section>
    );
}
