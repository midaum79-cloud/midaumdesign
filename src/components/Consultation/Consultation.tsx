"use client";

import { useState } from "react";
import styles from "./Consultation.module.css";

const commercialSpaceTypes = [
    { value: "academy", label: "학원/교육시설" },
    { value: "office", label: "사무실/오피스" },
    { value: "other_com", label: "기타 상업공간" },
];

const sizeOptions = [
    { value: "under-20", label: "20평 미만" },
    { value: "20-30", label: "20~30평" },
    { value: "30-40", label: "30~40평" },
    { value: "40-50", label: "40~50평" },
    { value: "over-50", label: "50평 이상" },
];

const budgetOptions = [
    { value: "under-3000", label: "3천만원 이하" },
    { value: "3000-5000", label: "3천~5천만원" },
    { value: "5000-1억", label: "5천만원~1억원" },
    { value: "1억-2억", label: "1억~2억원" },
    { value: "over-2억", label: "2억원 이상" },
];

const constructionScopes = [
    { value: "all", label: "전체 시공 (올수리)" },
    { value: "partial", label: "부분 시공" },
];

const preferredStyles = [
    { value: "modern", label: "모던 / 심플" },
    { value: "white_minimal", label: "화이트 미니멀" },
    { value: "white_wood", label: "화이트 / 우드" },
    { value: "natural", label: "내추럴 / 북유럽" },
    { value: "classic", label: "클래식 / 프렌치" },
    { value: "undecided", label: "아직 정하지 않음" },
];

const detailWorkOptions = [
    { value: "sash", label: "샷시(창호)" },
    { value: "kitchen", label: "주방(싱크대)" },
    { value: "bathroom", label: "욕실" },
    { value: "floor", label: "바닥재" },
    { value: "wallpaper", label: "도배" },
    { value: "furniture", label: "맞춤가구" },
    { value: "lighting", label: "조명/전기" },
    { value: "veranda", label: "베란다(타일/도장)" },
];

export default function Consultation() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        spaceType: "",
        size: "",
        budget: "",
        moveDate: "",
        message: "",
        constructionScope: "",
        preferredStyle: "",
        detailWork: [] as string[],
    });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);


    const handleChange = (field: string, value: string | string[]) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleDetailToggle = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            detailWork: prev.detailWork.includes(value)
                ? prev.detailWork.filter((item) => item !== value)
                : [...prev.detailWork, value],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);

        try {
            const res = await fetch("/api/estimate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, spaceCategory: "commercial" }),
            });

            if (res.ok) {
                setSubmitted(true);
            } else {
                const errorData = await res.json().catch(() => ({}));
                alert(`전송에 실패했습니다. 다시 시도해 주세요.\n(에러 상세: ${errorData.details || errorData.error || res.statusText})`);
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            alert(`네트워크 오류가 발생했습니다.\n(에러 상세: ${errorMessage})`);
        } finally {
            setSending(false);
        }
    };

    if (submitted) {
        return (
            <section className={`section ${styles.consultation}`}>
                <div className={`container ${styles.wrapper}`}>
                    <div className={styles.successMessage}>
                        <h2 className={styles.title}>✅ 견적 문의가 접수되었습니다</h2>
                        <p className={styles.desc}>
                            빠른 시일 내에 담당자가 연락드리겠습니다.<br />
                            감사합니다.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="estimate" className={`section ${styles.consultation}`}>
            <div className={`container ${styles.wrapper}`}>
                <div className={styles.formSection}>
                    <h2 className={`text-h2 ${styles.title}`}>견적 문의</h2>
                    <p className={`text-body ${styles.desc}`}>
                        아래 항목을 선택/입력해 주시면, 목수삼촌 전문가가 맞춤 견적을 안내해 드립니다.
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        {/* 공간 유형 */}
                        <div className={styles.radioSection}>
                            <label className={styles.sectionLabel}>
                                공간 유형
                            </label>
                            <div className={styles.radioGrid}>
                                {commercialSpaceTypes.map((type) => (
                                    <label key={type.value} className={`${styles.radioLabel} ${formData.spaceType === type.value ? styles.radioSelected : ""}`}>
                                        <input
                                            type="radio"
                                            name="spaceType"
                                            value={type.value}
                                            checked={formData.spaceType === type.value}
                                            onChange={(e) => handleChange("spaceType", e.target.value)}
                                            className={styles.radioInput}
                                        />
                                        <span>{type.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* 평수 */}
                        <div className={styles.radioSection}>
                            <label className={styles.sectionLabel}>평수</label>
                            <div className={styles.radioGrid}>
                                {sizeOptions.map((size) => (
                                    <label key={size.value} className={`${styles.radioLabel} ${formData.size === size.value ? styles.radioSelected : ""}`}>
                                        <input
                                            type="radio"
                                            name="size"
                                            value={size.value}
                                            checked={formData.size === size.value}
                                            onChange={(e) => handleChange("size", e.target.value)}
                                            className={styles.radioInput}
                                        />
                                        <span>{size.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* 예산 */}
                        <div className={styles.radioSection}>
                            <label className={styles.sectionLabel}>예산</label>
                            <div className={styles.radioGrid}>
                                {budgetOptions.map((b) => (
                                    <label key={b.value} className={`${styles.radioLabel} ${formData.budget === b.value ? styles.radioSelected : ""}`}>
                                        <input
                                            type="radio"
                                            name="budget"
                                            value={b.value}
                                            checked={formData.budget === b.value}
                                            onChange={(e) => handleChange("budget", e.target.value)}
                                            className={styles.radioInput}
                                        />
                                        <span>{b.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>



                        {/* 텍스트 입력 필드 */}
                        <div className={styles.customerInfoSection}>
                            <h3 className={styles.detailTitle}>고객 정보</h3>
                            <div className={styles.formGroup}>
                                <input type="text" className={styles.input} placeholder="이름" required value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
                            </div>
                            <div className={styles.formGroup}>
                                <input type="tel" className={styles.input} placeholder="연락처" required value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} />
                            </div>
                            <div className={styles.formGroup}>
                                <input type="text" className={styles.input} placeholder="주소 (시공 예정 장소)" required value={formData.address} onChange={(e) => handleChange("address", e.target.value)} />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.inputLabel}>입주/시공 희망일</label>
                                <input type="date" className={styles.input} value={formData.moveDate} onChange={(e) => handleChange("moveDate", e.target.value)} />
                            </div>
                            <div className={styles.formGroup}>
                                <textarea className={styles.textarea} placeholder="추가 요청사항 (선택)" rows={4} value={formData.message} onChange={(e) => handleChange("message", e.target.value)} />
                            </div>
                        </div>

                        <button type="submit" className={styles.submitBtn} disabled={sending}>
                            {sending ? "전송 중..." : "견적 문의하기"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
