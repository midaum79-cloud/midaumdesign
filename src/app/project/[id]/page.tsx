import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import styles from "./ProjectDetail.module.css";
import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/portfolioLoader";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const decodedId = decodeURIComponent(id);
    const project = getProjectById(decodedId);

    if (!project) {
        return {
            title: "Project Not Found | 목수삼촌 실내건축",
        };
    }

    const title = `${project.title} | 목수삼촌 실내건축 포트폴리오`;
    const description = project.description || `목수삼촌 실내건축의 ${project.title} 인테리어 시공 사례입니다.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: project.thumb,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
            type: "article",
            url: `https://www.midaum.co.kr/project/${id}`,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [project.thumb],
        },
    };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const decodedId = decodeURIComponent(id);
    const project = getProjectById(decodedId);

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
                    {project.images.map((image, index) => (
                        <div key={index} className={`${styles.imageWrapper} ${image.orientation === 'portrait' ? styles.portrait : styles.landscape}`}>
                            <Image
                                src={image.src}
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
