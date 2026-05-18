"use client";

import { useState } from "react";
import styles from "./Consultation.module.css";

const commercialSpaceTypes = [
    { value: "store", label: "상가 인테리어" },
    { value: "salon", label: "미용실/뷰티샵" },
    { value: "academy", label: "학원/교육시설" },
    { value: "hospital", label: "병원/의원" },
    { value: "office", label: "사무실/오피스" },
    { value: "cafe", label: "카페/음식점" },
    { value: "other_com", label: "기타 상업공간" },
];

const residentialSpaceTypes = [
    { value: "apartment", label: "아파트 리모델링" },
    { value: "villa", label: "빌라/다세대" },
    { value: "house", label: "주택/단독주택" },
    { value: "other_res", label: "기타 주거공간" },
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
    const [spaceCategory, setSpaceCategory] = useState<"commercial" | "residential">("commercial");

    const handleCategoryChange = (category: "commercial" | "residential") => {
        setSpaceCategory(category);
        setFormData((prev) => ({ 
            ...prev, 
            spaceType: "", 
            constructionScope: "", 
            preferredStyle: "", 
            detailWork: [] 
        }));
    };

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
                body: JSON.stringify({ ...formData, spaceCategory }),
            });

            if (res.ok) {
                setSubmitted(true);
            } else {
                alert("전송에 실패했습니다. 다시 시도해 주세요.");
            }
        } catch {
            alert("네트워크 오류가 발생했습니다.");
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
                        아래 항목을 선택/입력해 주시면, 미다움 전문가가 맞춤 견적을 안내해 드립니다.
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.tabs}>
                            <button
                                type="button"
                                className={`${styles.tab} ${spaceCategory === "commercial" ? styles.active : ""}`}
                                onClick={() => handleCategoryChange("commercial")}
                            >
                                상업공간
                            </button>
                            <button
                                type="button"
                                className={`${styles.tab} ${spaceCategory === "residential" ? styles.active : ""}`}
                                onClick={() => handleCategoryChange("residential")}
                            >
                                주거공간
                            </button>
                        </div>

                        {/* 공간 유형 */}
                        <div className={styles.radioSection}>
                            <label className={styles.sectionLabel}>
                                {spaceCategory === "commercial" ? "상업공간 유형" : "주거공간 유형"}
                            </label>
                            <div className={styles.radioGrid}>
                                {(spaceCategory === "commercial" ? commercialSpaceTypes : residentialSpaceTypes).map((type) => (
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

                        {/* 주거공간 세부 항목 (주거공간 선택 시에만 표시) */}
                        {spaceCategory === "residential" && (
                            <div className={styles.detailedSection}>
                                <div className={styles.detailTitleWrapper}>
                                    <h3 className={styles.detailTitle}>주거공간 세부 옵션</h3>
                                    <span className={styles.detailBadge}>선택사항</span>
                                </div>
                                <p className={styles.detailDesc}>원하시는 시공 방향을 선택해주시면 더 정확한 상담이 가능합니다.</p>
                                
                                <div className={styles.detailGrid}>
                                    {/* 시공 범위 */}
                                    <div className={styles.radioSection}>
                                        <label className={styles.sectionSubLabel}>시공 범위</label>
                                        <div className={styles.radioGrid}>
                                            {constructionScopes.map((scope) => (
                                                <label key={scope.value} className={`${styles.radioLabel} ${formData.constructionScope === scope.value ? styles.radioSelected : ""}`}>
                                                    <input
                                                        type="radio"
                                                        name="constructionScope"
                                                        value={scope.value}
                                                        checked={formData.constructionScope === scope.value}
                                                        onChange={(e) => handleChange("constructionScope", e.target.value)}
                                                        className={styles.radioInput}
                                                    />
                                                    <span>{scope.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 선호 스타일 */}
                                    <div className={styles.radioSection}>
                                        <label className={styles.sectionSubLabel}>선호 스타일</label>
                                        <div className={styles.radioGrid}>
                                            {preferredStyles.map((style) => (
                                                <label key={style.value} className={`${styles.radioLabel} ${formData.preferredStyle === style.value ? styles.radioSelected : ""}`}>
                                                    <input
                                                        type="radio"
                                                        name="preferredStyle"
                                                        value={style.value}
                                                        checked={formData.preferredStyle === style.value}
                                                        onChange={(e) => handleChange("preferredStyle", e.target.value)}
                                                        className={styles.radioInput}
                                                    />
                                                    <span>{style.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 주요 시공 항목 (다중 선택) */}
                                    <div className={styles.radioSection}>
                                        <label className={styles.sectionSubLabel}>주요 시공 항목 (다중 선택 가능)</label>
                                        <div className={styles.checkboxGrid}>
                                            {detailWorkOptions.map((work) => (
                                                <label key={work.value} className={`${styles.checkboxLabel} ${formData.detailWork.includes(work.value) ? styles.checkboxSelected : ""}`}>
                                                    <input
                                                        type="checkbox"
                                                        name="detailWork"
                                                        value={work.value}
                                                        checked={formData.detailWork.includes(work.value)}
                                                        onChange={() => handleDetailToggle(work.value)}
                                                        className={styles.radioInput}
                                                    />
                                                    <span>{work.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

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
