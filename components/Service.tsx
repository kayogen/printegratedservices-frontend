"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "./Service.module.css";

type ServiceCard = {
  title: string;
  desc: string;
  img: string;        
  alt?: string;
  href?: string;      
};

const SERVICES: ServiceCard[] = [
  {
    title: "Commercial Cleaning",
    desc: "Scheduled cleaning tailored for offices, showrooms, and commercial spaces with quality checks.",
    img: "/com.jpg",
    alt: "Commercial cleaning team in office",
    href: "#contact",
  },
  {
    title: "Garage Maintainance",
    desc: "Heavy-duty maintainance of garage with safety-first procedures.",
    img: "/ind.jpg",
    href: "#contact",
  },
  // {
  //   title: "Spring Cleaning",
  //   desc: "Deep seasonal refresh focusing on hard-to-reach areas, fixtures, and appliances.",
  //   img: "/kit.jpg",
  //   href: "#contact",
  // },
 
  // {
  //   title: "Janitorial Services",
  //   desc: "Daily/weekly/monthly janitorial routines: trash, restrooms, floors, and common areas.",
  //   img: "/about.png",
  //   href: "#contact",
  // },
  {
    title: "Window & Glass Cleaning",
    desc: "Streak-free interior/exterior glass cleaning for homes and commercial buildings.",
    img: "/win.webp",
    href: "#contact",
  },
  // {
  //   title: "Deep Cleaning / Periodic",
  //   desc: "Intensive top-to-bottom clean: degreasing, scaling removal, and sanitization.",
  //   img: "/dus.avif",
  //   href: "#contact",
  // },
  // {
  //   title: "Carpet Cleaning",
  //   desc: "Steam or shampoo treatments that lift stains and refresh fibers.",
  //   img: "/crpt.jpg",
  //   href: "#contact",
  // },
  // {
  //   title: "Floor Care",
  //   desc: "Strip, wax, buff, and seal for vinyl, tile, and stone floors.",
  //   img: "/car.jpg",
  //   href: "#contact",
  // },
  // {
  //   title: "Upholstery Cleaning",
  //   desc: "Fabric-safe cleaning for sofas, chairs, and office furnishings.",
  //   img: "/uph.webp",
  //   href: "#contact",
  // },
  // {
  //   title: "Tile & Grout Cleaning",
  //   desc: "Restore grout lines and tile surfaces in kitchens, bathrooms, and lobbies.",
  //   img: "/tile.jpg",
  //   href: "#contact",
  // },
  {
    title: "Construction Cleanup",
    desc: "Dust removal, debris haul, and shine-up after renovations or builds.",
    img: "/cons.webp",
    href: "#contact",
  },
  // {
  //   title: "Power Washing",
  //   desc: "Exterior pressure washing for sidewalks, facades, and parking lots.",
  //   img: "/wash.jpeg",
  //   href: "#contact",
  // },
  // {
  //   title: "Medical Facility Cleaning",
  //   desc: "Clinic-grade protocols for hygienic, compliant healthcare environments.",
  //   img: "/med.jpg",
  //   href: "#contact",
  // },
   {
    title: "Yard Cleaning & Junk Removal",
    desc: "Clear-outs for yards, garages, and storage with responsible disposal.",
    img: "/eco.jpg",
    href: "#contact",
  },
  // {
  //   title: "Dusting, Vacuuming & Mopping",
  //   desc: "Routine surface care for homes and offices that keeps spaces fresh.",
  //   img: "/dus.avif",
  //   href: "#contact",
  // },
  {
    title: "Full Property Cleaning",
    desc: "Whole-property cleans for handovers, staging, or periodic resets.",
    img: "/about.png",
    href: "#contact",
  },
  {
    title: "Residential Cleaning",
    desc: "Apartments, condos, and villas — flexible plans to fit your lifestyle.",
    img: "/house.webp",
    href: "#contact",
  },
  // {
  //   title: "Air Duct & Vent Cleaning",
  //   desc: "Improve airflow and indoor air quality with duct and vent service.",
  //   img: "/duct.jpg",
  //   href: "#contact",
  // },
  // {
  //   title: "Disinfection Services",
  //   desc: "Targeted sanitization for high-touch surfaces using approved agents.",
  //   img: "/dis.webp",
  //   href: "#contact",
  // },
  {
    title: "Move-In / Move-Out",
    desc: "Detailed cleaning for seamless handover during shifting.",
    img: "/mov.jpg",
    href: "#contact",
  },
  {
  title: "Paint Services",
  desc: "Detailed painting for home/office.",
  img: "/paint.webp",
  href: "#contact",
},
{
  title: "Snow Removal",
  desc: "Snow removing.",
  img: "/snow.jpeg",
  href: "#contact",
},
{
  title: "Demolition Services",
  desc: "Demolition services for home/office.",
  img: "/dem.avif",
  href: "#contact",
},
  // {
  //   title: "Seasonal / One-Time",
  //   desc: "Spring, festival, or pre-event deep cleans on demand.",
  //   img: "/kit.jpg",
  //   href: "#contact",
  // },
  // {
  //   title: "Eco-Friendly / Green Cleaning",
  //   desc: "Low-VOC, non-toxic supplies for safer homes and workplaces.",
  //   img: "/eco.jpg",
  //   href: "#contact",
  // },
];

export default function ServicesPage() {
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    const el = rowRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
  };

  return (
    <main id="services" className={styles.page}>
      <div className={styles.container}>
        {/* Header split */}
        <div className={styles.headerSplit}>
          <h1 className={styles.h1}>
            We Always Provide The <br /> Best Service
          </h1>
          <div className={styles.headerAside}>
            <h4 className={styles.asideTitle}>Services</h4>
            <p className={styles.asideText}>
              While we can customize your cleaning plan to suit your needs, most
              clients schedule regular cleaning services:
            </p>
          </div>
        </div>

        <hr className={styles.hr} />

  
        <div className={styles.rowWrap}>
          <div className={styles.cardsRow} ref={rowRef}>
            {SERVICES.map((s) => (
              <div key={s.title} className={styles.card}>
                <Image
                  src={s.img}
                  alt={s.alt || s.title}
                  width={420}
                  height={260}
                  className={styles.cardImg}
                />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardText}>{s.desc}</p>
                  <Link href={s.href || "#contact"} className={styles.cardBtn}>
                    Book Now ↗
                  </Link>
                </div>
              </div>
            ))}
          </div>

      
          <button
            aria-label="Next services"
            className={styles.sideArrow}
            onClick={scrollNext}
          >
            →
          </button>
        </div>

  
        <section className={styles.promo}>
          <div className={styles.promoText}>
            <p className={styles.kicker}>Affordable cleaning solutions</p>
            <h2 className={styles.promoTitle}>
              High-Quality and Friendly Services at Fair Prices
            </h2>
            <p className={styles.promoSub}>
              We provide comprehensive cleaning services tailored to your needs.
              From residential cleaning services
            </p>
            <Link href="#contact" className={styles.promoBtn}>
              Get a quote
            </Link>
          </div>

          <div className={styles.promoImgStack}>
            <Image
              src="/ser.png"
              alt="Cleaner at work"
              width={520}
              height={420}
              className={styles.promoMain}
              priority
            />
          </div>
        </section>
      </div>
    </main>
  );
}
