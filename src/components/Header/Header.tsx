"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.solid : styles.transparent}`}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/midaum_logo_transparent.png"
                        alt="미다움 디자인 로고"
                        width={200}
                        height={52}
                        priority
                        className={styles.logoImg}
                    />
                </Link>
                <ul className={styles.menuList}>
                    <li><Link href="/" className={styles.menuItem}>Home</Link></li>
                    <li><Link href="#portfolio" className={styles.menuItem}>Portfolio</Link></li>
                    <li><Link href="#about" className={styles.menuItem}>About</Link></li>
                    <li><Link href="#process" className={styles.menuItem}>Process</Link></li>
                    <li><Link href="#contact" className={styles.menuItem}>Contact</Link></li>
                </ul>
                <button className={styles.mobileMenuBtn} aria-label="Menu">
                    <Menu size={24} />
                </button>
            </nav>
        </header>
    );
}
