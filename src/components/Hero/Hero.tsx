"use client";

import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { Grid, BookOpen, Camera } from "lucide-react";

const images = [
    "/images/hero_new_1.jpg",
    "/images/hero_new_2.jpg",
    "/images/hero_new_3.jpg",
    "/images/hero_new_4.jpg",
    "/images/hero_new_5.jpg"
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
                        alt="미다움: 공간에 머무는 아름다움"
                        fill
                        priority={index === 0}
                        className={styles.bgImage}
                    />
                </div>
            ))}
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={`${styles.title} text-h1`}>아름다움, 공간에 담다</h1>
                <p className={styles.subtitle}>미다움 디자인</p>
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
                </div>
            </div>
        </section>
    );
}
