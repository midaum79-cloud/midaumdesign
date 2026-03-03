import styles from "./Process.module.css";
import { MessageSquare, Ruler, PenTool, Hammer, HeartHandshake } from "lucide-react";

const steps = [
    { id: 1, title: "상담", icon: MessageSquare, desc: "니즈 파악 및 방향성 논의" },
    { id: 2, title: "실측", icon: Ruler, desc: "현장 방문 및 정밀 측정" },
    { id: 3, title: "설계", icon: PenTool, desc: "도면 설계 및 3D 모델링" },
    { id: 4, title: "시공", icon: Hammer, desc: "엄격한 관리 감독 하 시공" },
    { id: 5, title: "사후관리", icon: HeartHandshake, desc: "완벽한 A/S 및 지속 관리" }
];

export default function Process() {
    return (
        <section id="process" className={`section ${styles.process}`}>
            <div className={`container`}>
                <div className={styles.header}>
                    <h2 className="text-h2">Our Process</h2>
                    <p className="text-body">믿을 수 있는 체계적인 5단계 시스템</p>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, index) => (
                        <div key={step.id} className={styles.step}>
                            <div className={styles.iconWrapper}>
                                <step.icon size={32} strokeWidth={1.5} />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.stepNum}>0{step.id}</div>
                                <h3 className={styles.title}>{step.title}</h3>
                                <p className={styles.desc}>{step.desc}</p>
                            </div>
                            {index < steps.length - 1 && <div className={styles.line}></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
