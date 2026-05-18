"use client";

import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { Grid, BookOpen, Camera, Youtube } from "lucide-react";

const images = [
    { src: "/images/academy_hero_new.png", type: "bg" },
    { src: "/images/clinic_hero_new.png", type: "bg" },
    { src: "/images/living_room_hero_new.png", type: "bg" },
    { src: "/images/company_office_hero.png", type: "bg-with-logo" }
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>
            {images.map((item, index) => (
                <div
                    key={item.src}
                    className={`${styles.imageWrapper} ${index === currentImage ? styles.active : ''}`}
                >
                    <Image
                        src={item.src}
                        alt="주식회사 미다움"
                        fill
                        priority={index === 0}
                        className={styles.bgImage}
                    />
                    {item.type === "bg-with-logo" && (
                        <div className={styles.logoOverlay}>
                            <Image 
                                src="/images/midaum_logo_transparent.png" 
                                alt="Midaum Design Logo" 
                                width={600} 
                                height={200} 
                                className={styles.centerLogo}
                            />
                        </div>
                    )}
                </div>
            ))}
            <div className={styles.overlay}></div>
            <div className={`${styles.content} ${currentImage === 3 ? styles.hiddenContent : ''}`}>
                <h1 className="sr-only">주식회사 미다움 - 상업공간 및 주거공간 전문 인테리어</h1>
                <p className={`${styles.title} text-h1`}>품격을 높이는 상업 &middot; 주거공간 디자인</p>
                <p className={styles.subtitle}>프리미엄 인테리어 전문, (주)미다움</p>
                <div className={styles.mobileLinks}>
                    <Link href="/project" className={styles.mobileLink}>
                        <Grid size={16} />
                        <span>포트폴리오</span>
                    </Link>
                    <a href="https://blog.naver.com/neuljaem" target="_blank" rel="noopener noreferrer" className={styles.mobileLink}>
                        <BookOpen size={16} />
                        <span>블로그</span>
                    </a>
                    <a href="https://www.instagram.com/midaumdesign" target="_blank" rel="noopener noreferrer" className={styles.mobileLink}>
                        <Camera size={16} />
                        <span>인스타그램</span>
                    </a>
                    <a href="https://www.youtube.com/@CarpenterUncle" target="_blank" rel="noopener noreferrer" className={styles.mobileLink}>
                        <Youtube size={16} />
                        <span>유튜브</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
