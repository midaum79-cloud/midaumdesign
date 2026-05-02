import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span>주식회사 미다움</span>
            <span className={styles.divider}>|</span>
            <span>대표 김명준</span>
            <span className={styles.divider}>|</span>
            <span>사업자등록번호: 361-88-03797</span>
            <span className={styles.divider}>|</span>
            <span>010-5685-0850</span>
            <span className={styles.divider}>|</span>
            <span>midaum79@naver.com</span>
            <span className={styles.divider}>|</span>
            <span>경기도 김포시 김포한강9로75번길 66, 5층 505-유93호(구래동)</span>
            <span className={styles.divider}>|</span>
            <span>&copy; {new Date().getFullYear()} Midaum Design</span>
        </footer>
    );
}
