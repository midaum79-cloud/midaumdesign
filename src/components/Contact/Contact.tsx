"use client";

import styles from "./Contact.module.css";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Location</h2>
                    <p className={styles.subtitle}>미다움 디자인 오시는 길 안내입니다.</p>
                </div>

                <div className={styles.content}>



                    <div className={styles.infoCards}>
                        <div className={styles.card}>
                            <MapPin size={24} className={styles.icon} />
                            <h3>Address</h3>
                            <p>경기도 김포시 김포한강9로75번길 66, 5층 505-유93호(구래동)</p>
                        </div>
                        <div className={styles.card}>
                            <Phone size={24} className={styles.icon} />
                            <h3>Phone</h3>
                            <p>010-5685-0850</p>
                        </div>
                        <div className={styles.card}>
                            <Mail size={24} className={styles.icon} />
                            <h3>Email</h3>
                            <p>midaum79@naver.com</p>
                        </div>
                        <div className={styles.card}>
                            <Clock size={24} className={styles.icon} />
                            <h3>Business Hours</h3>
                            <p>평일 09:00 - 18:00 (100% 예약제)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
