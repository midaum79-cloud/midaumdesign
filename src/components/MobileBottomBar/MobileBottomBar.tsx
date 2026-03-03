"use client";

import Link from "next/link";
import styles from "./MobileBottomBar.module.css";
import { FileText, Phone } from "lucide-react";

export default function MobileBottomBar() {
    return (
        <div className={styles.bar}>
            <Link href="/estimate" className={styles.btn}>
                <FileText size={20} />
                <span>견적문의</span>
            </Link>
            <a href="tel:01056850850" className={`${styles.btn} ${styles.call}`}>
                <Phone size={20} />
                <span>전화문의</span>
            </a>
        </div>
    );
}
