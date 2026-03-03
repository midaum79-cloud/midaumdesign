"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
                    <svg viewBox="0 0 115 60" height="28" className={styles.logoSvg} xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="logo-clip">
                                <rect x="0" y="0" width="115" height="60" />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#logo-clip)" fill="none" strokeWidth="15" strokeLinejoin="miter" strokeMiterlimit="5">
                            <path d="M 52.5,29.8 L 52.5,52.5 L 75,52.5 A 22.5 22.5 0 0 0 75,7.5 L 52.5,7.5" stroke="currentColor" />
                            <path d="M 7.5,-5 L 7.5,65" stroke="#C8A153" />
                            <path d="M 7.5,-5 L 30,50 L 52.5,-5" stroke="#C8A153" />
                            <path d="M 52.5,-5 L 52.5,30.5" stroke="#C8A153" />
                        </g>
                    </svg>
                    <div className={styles.logoText}>
                        <span style={{ color: '#C8A153' }}>MIDAUM</span>
                        <span style={{ color: 'currentColor' }}>DESIGN</span>
                    </div>
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
