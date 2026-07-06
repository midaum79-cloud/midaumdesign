"use client";

import { useState } from "react";
import styles from "./Portfolio.module.css";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Generate 12 sample projects using the 4 placeholder images
const generateProjects = () => {
    const images = ["/images/pf_1.png", "/images/pf_2.png", "/images/pf_3.png", "/images/pf_4.png"];
    const names = ["반포 자이 아파트", "한남 더힐", "송파 헬리오시티", "아크로 리버파크", "청담 자이", "마포 래미안 푸르지오"];
    const sizes = ["30평대", "40평대", "50평대", "60평대"];

    return Array.from({ length: 24 }, (_, i) => ({
        id: i + 1,
        title: names[i % names.length],
        size: sizes[i % sizes.length],
        img: images[i % images.length],
    }));
};

const allProjects = generateProjects();
const ITEMS_PER_PAGE = 12;

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProjects = allProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section id="portfolio" className={`section ${styles.portfolio}`}>
            <div className={`container ${styles.header}`}>
                <h2 className="text-h2">Selected Works</h2>
                <p className={`text-body ${styles.desc}`}>
                    단순함 속에 깃든 깊이, 목수삼촌의 시공사례를 확인하세요.
                </p>
            </div>

            <div className={styles.grid}>
                {currentProjects.map((project) => (
                    <Link href={`/project/${project.id}`} key={project.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.overlay}>
                            <div className={styles.projectInfo}>
                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.tags}>{project.size}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className={styles.pagination}>
                    <button
                        className={styles.pageBtn}
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            className={`${styles.pageNumber} ${currentPage === page ? styles.activePage : ''}`}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        className={styles.pageBtn}
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </section>
    );
}
