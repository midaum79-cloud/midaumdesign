import styles from "./Philosophy.module.css";

export default function Philosophy() {
    return (
        <section id="philosophy" className={`section ${styles.philosophy}`}>
            <div className={`container ${styles.content}`}>
                <h2 className={styles.title}>Our Philosophy</h2>
                <h3 className={`text-h2 ${styles.heading}`}>
                    "공간이 비즈니스의 성공을 만듭니다."
                </h3>
                <p className={styles.text}>
                    목수삼촌 실내건축은 원장님들과 대표님들의 성공적인 비즈니스를 위한 최적의 상업공간을 디자인합니다.
                    학원, 사무실 등 각 공간의 특성과 방문객 및 직원의 동선을 깊이 연구하며, 
                    화려한 장식보다는 브랜드의 신뢰도를 높이는 전문적이고 고급스러운 공간 가치에 집중합니다. 
                    가장 본질적인 디자인으로 시간이 지나도 변하지 않는 성공적인 공간을 완성합니다.
                </p>
            </div>
        </section>
    );
}
