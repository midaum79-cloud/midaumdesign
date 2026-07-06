"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className={`${styles.header} ${styles.solid}`}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>
                    <Logo variant="horizontal" width={240} height={62} className={styles.logoImg} />
                </Link>
                <ul className={styles.menuList}>
                    <li><Link href="/about" className={`${styles.menuItem} ${pathname === '/about' ? styles.active : ''}`}>About</Link></li>
                    <li><Link href="/project" className={`${styles.menuItem} ${pathname === '/project' ? styles.active : ''}`}>Project</Link></li>
                    <li><Link href="/contact" className={`${styles.menuItem} ${pathname === '/contact' ? styles.active : ''}`}>Contact</Link></li>
                    <li><Link href="/estimate" className={`${styles.menuItem} ${pathname === '/estimate' ? styles.active : ''}`}>견적문의</Link></li>
                    <li><Link href="/notice" className={`${styles.menuItem} ${pathname === '/notice' ? styles.active : ''}`}>Notice</Link></li>
                </ul>
                <button className={styles.mobileMenuBtn} aria-label="Menu" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile slide-out menu */}
            <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
                <ul className={styles.mobileMenuList}>
                    <li><Link href="/about" className={`${styles.mobileMenuItem} ${pathname === '/about' ? styles.active : ''}`}>About</Link></li>
                    <li><Link href="/project" className={`${styles.mobileMenuItem} ${pathname === '/project' ? styles.active : ''}`}>Project</Link></li>
                    <li><Link href="/contact" className={`${styles.mobileMenuItem} ${pathname === '/contact' ? styles.active : ''}`}>Contact</Link></li>
                    <li><Link href="/estimate" className={`${styles.mobileMenuItem} ${pathname === '/estimate' ? styles.active : ''}`}>견적문의</Link></li>
                    <li><Link href="/notice" className={`${styles.mobileMenuItem} ${pathname === '/notice' ? styles.active : ''}`}>Notice</Link></li>
                </ul>
            </div>
        </header>
    );
}
