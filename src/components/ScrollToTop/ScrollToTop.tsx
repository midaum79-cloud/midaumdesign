"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={`${styles.btn} ${visible ? styles.visible : ""}`}
            onClick={scrollToTop}
            aria-label="상단으로 이동"
        >
            <ChevronUp size={22} />
        </button>
    );
}
