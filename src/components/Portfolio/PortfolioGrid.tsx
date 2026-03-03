"use client";

import { useState } from "react";
import styles from "./Portfolio.module.css";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectInfo {
    id: string;
    title: string;
    size: string;
    description: string;
    thumb: string;
    imageCount: number;
}

const ITEMS_PER_PAGE = 12;

export default function PortfolioGrid({ projects }: { projects: ProjectInfo[] }) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section id="portfolio" className={`section ${styles.portfolio}`}>
            <div className={`container ${styles.header}`}>
                <h2 className="text-h2">Selected Works</h2>
                <p className={`text-body ${styles.desc}`}>
                    단순함 속에 깃든 깊이, 미다움의 시공사례를 확인하세요.
                </p>
            </div>

            <div className={styles.grid}>
                {currentProjects.map((project) => (
                    <Link href={`/project/${project.id}`} key={project.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={project.thumb}
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

            {totalPages > 1 && (
                <div className={styles.pagination}>
                    <button
                        className={styles.pageBtn}
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            className={`${styles.pageNumber} ${currentPage === page ? styles.activePage : ""}`}
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
