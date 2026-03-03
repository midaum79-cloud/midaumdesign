"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

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
                        width={400}
                        height={104}
                        priority
                        className={styles.logoImg}
                    />
                </Link>
                <ul className={styles.menuList}>
                    <li><Link href="/about" className={`${styles.menuItem} ${pathname === '/about' ? styles.active : ''}`}>About</Link></li>
                    <li><Link href="/project" className={`${styles.menuItem} ${pathname === '/project' ? styles.active : ''}`}>Project</Link></li>
                    <li><Link href="/contact" className={`${styles.menuItem} ${pathname === '/contact' ? styles.active : ''}`}>Contact</Link></li>
                    <li><Link href="/estimate" className={`${styles.menuItem} ${pathname === '/estimate' ? styles.active : ''}`}>견적문의</Link></li>
                    <li><Link href="/notice" className={`${styles.menuItem} ${pathname === '/notice' ? styles.active : ''}`}>Notice</Link></li>
                </ul>
                <button className={styles.mobileMenuBtn} aria-label="Menu">
                    <Menu size={24} />
                </button>
            </nav>
        </header>
    );
}
