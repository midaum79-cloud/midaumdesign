"use client";

import { useState } from "react";
import styles from "./Portfolio.module.css";
import Image from "next/image";

const projects = [
    { id: 1, title: "Modern Minimalist Living", size: "50평대", style: "미니멀", category: "거실", img: "/images/living_room_hero.png" },
    { id: 2, title: "Warm Wood Kitchen", size: "30평대", style: "내추럴", category: "주방", img: "/images/kitchen_warm_wood.png" },
    { id: 3, title: "Restful Grey Bedroom", size: "40평대", style: "모던", category: "침실", img: "/images/bedroom_restful_grey.png" },
    { id: 4, title: "Luxury Spa Bath", size: "50평대", style: "럭셔리", category: "욕실", img: "/images/bathroom_luxury_spa.png" },
    { id: 5, title: "Sleek White Kitchen", size: "40평대", style: "미니멀", category: "주방", img: "/images/kitchen_sleek_white.png" },
    { id: 6, title: "Tactile Living Room", size: "30평대", style: "내추럴", category: "거실", img: "/images/living_room_texture.png" },
    { id: 7, title: "View & Linen Bedroom", size: "50평대", style: "럭셔리", category: "침실", img: "/images/bedroom_view_linen.png" },
    { id: 8, title: "Modern Compact Bath", size: "20평대", style: "모던", category: "욕실", img: "/images/bathroom_modern_compact.png" },
];

const filters = [
    { type: "all", label: "전체" },
    { type: "size", label: "평수" },
    { type: "style", label: "스타일" },
    { type: "category", label: "공간" }
];

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("all");

    // In a real scenario, clicking '평수' might show a dropdown of sizes.
    // For this minimalist UI, we'll just sort or filter by having sub-filters.
    // Let's implement a simple categorisation for the demo:
    const displayedProjects = activeFilter === "all"
        ? projects
        : projects.filter(p => p.size === activeFilter || p.style === activeFilter || p.category === activeFilter);

    return (
        <section id="portfolio" className={`section ${styles.portfolio}`}>
            <div className={`container ${styles.header}`}>
                <h2 className="text-h2">Selected Works</h2>
                <p className={`text-body ${styles.desc}`}>
                    단순함 속에 깃든 깊이, 미다움의 포트폴리오를 경험하세요.
                </p>

                <div className={styles.filterBar}>
                    {filters.map(f => (
                        <button
                            key={f.type}
                            className={`${styles.filterBtn} ${activeFilter === f.type ? styles.active : ''}`}
                            onClick={() => setActiveFilter(f.type === "all" ? "all" : f.label)}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.grid}>
                {displayedProjects.map((project) => (
                    <div key={project.id} className={styles.card}>
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
                                <p className={styles.tags}>{project.size} · {project.style} · {project.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
