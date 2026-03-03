import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className={`container ${styles.content}`}>
                <h2 className={`text-h2 ${styles.title}`}>아름다움, 공간에 담다</h2>
                <p className={`text-body ${styles.desc}`}>
                    '미다움'은 단순한 장식이 아닌, 공간이 가진 본질적인 가치와 <br />
                    머무는 사람의 삶이 조화롭게 어우러지는 진짜 아름다움을 의미합니다.<br /><br />
                    우리는 비움을 통해 채움을 완성하는 미니멀리즘과<br />
                    변하지 않는 감동을 주는 질감의 미학을 추구합니다.
                </p>
            </div>
        </section>
    );
}
