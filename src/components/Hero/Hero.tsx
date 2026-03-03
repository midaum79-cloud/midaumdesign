"use client";

import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

const images = [
    "/images/hero_new_1.jpg",
    "/images/hero_new_2.jpg",
    "/images/hero_new_3.jpg",
    "/images/hero_new_4.jpg"
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // 5 seconds per slide
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
                <p className={styles.subtitle}>Midaum Design</p>
            </div>
        </section>
    );
}
