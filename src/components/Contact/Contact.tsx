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
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.4283833446547!2d126.7126!3d37.545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9ca4b901fc87%3A0x6b4fb6c1f3cf98e6!2z7J247LKc6rSR7Jet7IucIOqzhOyWkeq1rCDslYTrgpjsp4Agbm8gMzg0!5e0!3m2!1sko!2skr!4v1709470921098!5m2!1sko!2skr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Midaum Design Location"
                        />
                    </div>

                    <div className={styles.infoCards}>
                        <div className={styles.card}>
                            <MapPin size={24} className={styles.icon} />
                            <h3>Address</h3>
                            <p>인천광역시 계양구 아나지로 384, B101</p>
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
