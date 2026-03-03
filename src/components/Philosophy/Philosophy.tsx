import styles from "./Philosophy.module.css";

export default function Philosophy() {
    return (
        <section id="philosophy" className={`section ${styles.philosophy}`}>
            <div className={`container ${styles.content}`}>
                <h2 className={styles.title}>Our Philosophy</h2>
                <h3 className={`text-h2 ${styles.heading}`}>
                    "공간은 사람을 닮고, 사람은 공간에 머뭅니다."
                </h3>
                <p className={styles.text}>
                    '미다움'은 아름다움을 의미하는 순우리말에서 영감을 받았습니다.
                    우리는 화려한 장식보다는 공간의 고유한 가치와 그곳에 머무는 사람의 삶에 집중합니다.
                    여백이 주는 평온함, 빛이 그리는 자연스러운 음영, 그리고 질감의 깊이.
                    가장 본질적인 요소들로 변하지 않는 가치를 지닌 공간을 완성합니다.
                </p>
            </div>
        </section>
    );
}
