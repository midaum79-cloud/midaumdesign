import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <svg viewBox="0 0 115 60" height="24" className={styles.logoSvg} xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" strokeWidth="15" strokeLinejoin="miter" strokeMiterlimit="5">
                        <path d="M 52.5,29.8 L 52.5,52.5 L 75,52.5 A 22.5 22.5 0 0 0 75,7.5 L 52.5,7.5" stroke="var(--color-dark-gray)" />
                        <path d="M 7.5,-5 L 7.5,65" stroke="#C8A153" />
                        <path d="M 7.5,-5 L 30,50 L 52.5,-5" stroke="#C8A153" />
                        <path d="M 52.5,-5 L 52.5,30.5" stroke="#C8A153" />
                    </g>
                </svg>
                <div className={styles.logoText}>
                    <span style={{ color: '#C8A153' }}>MIDAUM</span>
                    <span>DESIGN</span>
                </div>
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
