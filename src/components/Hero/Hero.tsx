"use client";

import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { Grid, BookOpen, Camera, Youtube } from "lucide-react";

const images = [
    "/images/clinic_banner.png",
    "/images/academy_banner.png"
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
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`${styles.imageWrapper} ${index === currentImage ? styles.active : ''}`}
                >
                    <Image
                        src={src}
                        alt="주식회사 미다움: 학원·병원 상업인테리어 전문"
                        fill
                        priority={index === 0}
                        className={styles.bgImage}
                    />
                </div>
            ))}
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className="sr-only">주식회사 미다움 - 학원·병원 등 상업공간 전문 인테리어</h1>
                <p className={`${styles.title} text-h1`}>성공을 짓는 상업공간 디자인</p>
                <p className={styles.subtitle}>학원·병원 인테리어 전문, (주)미다움</p>
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
