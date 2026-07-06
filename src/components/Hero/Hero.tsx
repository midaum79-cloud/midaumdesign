"use client";

import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { Grid, BookOpen, Camera, Youtube } from "lucide-react";

const images = [
    { src: "/images/company_office_hero.png", type: "bg-with-logo" },
    { src: "/images/academy_hero_new.png", type: "bg" }
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
                        alt="목수삼촌 실내건축"
                        fill
                        priority={index === 0}
                        className={styles.bgImage}
                    />
                    {item.type === "bg-with-logo" && (
                        <div className={styles.logoOverlay}>
                            <Image 
                                src="/images/logo.png" 
                                alt="목수삼촌 실내건축 Logo" 
                                width={600} 
                                height={600} 
                                className={styles.centerLogo}
                            />
                        </div>
                    )}
                </div>
            ))}
            <div className={styles.overlay}></div>
            <div className={`${styles.content} ${currentImage === 0 ? styles.hiddenContent : ''}`}>
                <h1 className="sr-only">목수삼촌 실내건축 - 학원 및 사무실 전문 인테리어</h1>
                <p className={`${styles.title} text-h1`}>성공적인 비즈니스를 위한 학원 &middot; 사무실 디자인</p>
                <p className={styles.subtitle}>프리미엄 오피스 & 교육공간 인테리어 전문, (주)목수삼촌</p>
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
                    <a href="https://www.youtube.com/@목수삼촌 실내건축" target="_blank" rel="noopener noreferrer" className={styles.mobileLink}>
                        <Youtube size={16} />
                        <span>유튜브</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
