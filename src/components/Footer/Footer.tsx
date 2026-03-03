import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Image
                    src="/images/midaum_logo_transparent.png"
                    alt="미다움 디자인 로고"
                    width={160}
                    height={42}
                    className={styles.logoImg}
                />
            </div>

            <div className={styles.infoWrapper}>
                <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>상호명</span>
                    <span className={styles.infoValue}>미다움 디자인</span>

                    <span className={styles.divider}>|</span>

                    <span className={styles.infoLabel}>대표자</span>
                    <span className={styles.infoValue}>김명준</span>
                </div>

                <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>사업자 등록번호</span>
                    <span className={styles.infoValue}>490-59-00875</span>
                </div>

                <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>연락처</span>
                    <span className={styles.infoValue}>010-5685-0850</span>

                    <span className={styles.divider}>|</span>

                    <span className={styles.infoLabel}>이메일</span>
                    <span className={styles.infoValue}>midaum79@naver.com</span>
                </div>

                <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>주소</span>
                    <span className={styles.infoValue}>인천광역시 계양구 아나지로 384, B101</span>
                </div>

                <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>공식 웹사이트</span>
                    <a href="http://www.midaum.co.kr" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        www.midaum.co.kr
                    </a>
                </div>
            </div>

            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Midaum Design. All rights reserved.
            </div>
        </footer>
    );
}
