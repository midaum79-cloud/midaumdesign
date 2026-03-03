"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./ScrollIndicator.module.css";

export default function ScrollIndicator() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY < 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollDown = () => {
        window.scrollBy({ top: window.innerHeight * 0.6, behavior: "smooth" });
    };

    return (
        <div className={`${styles.indicator} ${visible ? styles.visible : ""}`} onClick={scrollDown}>
            <span className={styles.text}>더 알아보기</span>
            <ChevronDown size={24} className={styles.arrow} />
        </div>
    );
}
