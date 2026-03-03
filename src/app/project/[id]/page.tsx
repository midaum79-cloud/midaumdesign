import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import styles from "./ProjectDetail.module.css";
import { notFound } from "next/navigation";

// Generate matching data so we can look up project info
const getProjectData = (id: string) => {
    const images = ["/images/pf_1.png", "/images/pf_2.png", "/images/pf_3.png", "/images/pf_4.png"];
    const names = ["반포 자이 아파트", "한남 더힐", "송파 헬리오시티", "아크로 리버파크", "청담 자이", "마포 래미안 푸르지오"];
    const sizes = ["30평대", "40평대", "50평대", "60평대"];

    const allProjects = Array.from({ length: 24 }, (_, i) => ({
        id: (i + 1).toString(),
        title: names[i % names.length],
        size: sizes[i % sizes.length],
        thumb: images[i % images.length],
        desc: "미다움의 세심한 디테일과 전문적인 시공 능력이 돋보이는 공간입니다. 고객의 라이프스타일을 완벽하게 반영하여 머무는 내내 편안함과 특별함을 느낄 수 있도록 디자인되었습니다.",
        location: "Seoul, Korea",
        year: "2024",
    }));

    return allProjects.find(p => p.id === id);
};

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = getProjectData(id);

    if (!project) {
        notFound();
    }

    // Simulate 15 images by repeating the 4 placeholders
    const simulatedImages = Array.from({ length: 15 }, (_, i) => {
        const pool = ["/images/pf_1.png", "/images/pf_2.png", "/images/pf_3.png", "/images/pf_4.png"];
        return pool[i % pool.length];
    });

    return (
        <main className={`page-wrapper ${styles.main}`}>
            <section className={styles.heroSection}>
                <div className={styles.heroImageWrapper}>
                    <Image
                        src={project.thumb}
                        alt={project.title}
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>

                <div className={`container ${styles.heroContent}`}>
                    <Link href="/project" className={styles.backBtn}>
                        <ChevronLeft size={20} />
                        <span>List</span>
                    </Link>
                    <h1 className={styles.title}>{project.title}</h1>
                    <div className={styles.metaInfo}>
                        <span>{project.size}</span>
                        <span className={styles.dot}>·</span>
                        <span>{project.location}</span>
                        <span className={styles.dot}>·</span>
                        <span>{project.year}</span>
                    </div>
                </div>
            </section>

            <section className={`container ${styles.contentSection}`}>
                <div className={styles.descriptionText}>
                    <p>{project.desc}</p>
                </div>

                <div className={styles.imageGrid}>
                    {simulatedImages.map((src, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <Image
                                src={src}
                                alt={`${project.title} 공간 이미지 ${index + 1}`}
                                fill
                                className={styles.image}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
