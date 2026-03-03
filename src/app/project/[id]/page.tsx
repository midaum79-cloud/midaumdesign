import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import styles from "./ProjectDetail.module.css";
import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/portfolioLoader";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) {
        notFound();
    }

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
                        <span>목록으로</span>
                    </Link>
                    <h1 className={styles.title}>{project.title}</h1>
                    <div className={styles.metaInfo}>
                        <span>{project.size}</span>
                        <span className={styles.dot}>·</span>
                        <span>Seoul, Korea</span>
                        <span className={styles.dot}>·</span>
                        <span>2024</span>
                    </div>
                </div>
            </section>

            <section className={`container ${styles.contentSection}`}>
                <div className={styles.descriptionText}>
                    <p>{project.description}</p>
                </div>

                <div className={styles.imageGrid}>
                    {project.images.map((src, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <Image
                                src={src}
                                alt={`${project.title} 시공사진 ${index + 1}`}
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
