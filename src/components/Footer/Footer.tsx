import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span>미다움 디자인</span>
            <span className={styles.divider}>|</span>
            <span>대표 김명준</span>
            <span className={styles.divider}>|</span>
            <span>490-59-00875</span>
            <span className={styles.divider}>|</span>
            <span>010-5685-0850</span>
            <span className={styles.divider}>|</span>
            <span>midaum79@naver.com</span>
            <span className={styles.divider}>|</span>
            <span>인천광역시 계양구 아나지로 384, B101</span>
            <span className={styles.divider}>|</span>
            <span>&copy; {new Date().getFullYear()} Midaum Design</span>
        </footer>
    );
}
