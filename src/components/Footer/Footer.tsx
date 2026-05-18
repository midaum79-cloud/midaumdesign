import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span>주식회사 미다움</span>
            <span className={styles.divider}>|</span>
            <span>대표 김명준</span>
            <span className={styles.divider}>|</span>
            <span>사업자등록번호: 490-59-00875</span>
            <span className={styles.divider}>|</span>
            <span>010-5685-0850</span>
            <span className={styles.divider}>|</span>
            <span>midaum79@naver.com</span>
            <span className={styles.divider}>|</span>
            <span>인천광역시 계양구 봉오대로 460, 2층 202호(효성동)</span>
            <span className={styles.divider}>|</span>
            <span>&copy; {new Date().getFullYear()} Midaum Design</span>
        </footer>
    );
}
