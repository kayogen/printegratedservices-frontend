"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={`anchor-offset ${styles.wrap}`}>
      <div className={styles.bg}>
        <Image
          src="/about.png"
          alt="Cleaning team"
          fill
          priority
          sizes="(max-width: 720px) 100svw, 100vw"
        />
      </div>

      <div className={styles.scrim} />

      <div className={styles.inner}>
        <p className={styles.kicker}>Quality cleaning at a fair price.</p>

        <h1 className={styles.title}>
          Specialized, efficient, <br />
          and thorough cleaning <br />
          services
        </h1>

        <p className={styles.sub}>
          We provide performing cleaning tasks using the least amount of time,
          energy, and money.
        </p>

        <div className={styles.ctas}>
          <Link href="#contact" className={styles.primaryCta}>
            Get Start Now
          </Link>
          <Link href="#services" className={styles.secondaryCta}>
            View all Services
          </Link>
        </div>
      </div>
    </section>
  );
}
