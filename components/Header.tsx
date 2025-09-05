"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("/"); 
  const triggerRef = useRef<HTMLButtonElement>(null);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNavClick = (href: string) => () => {
    setActive(href);  
    setOpen(false);   
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About us" },
    { href: "#services", label: "Service" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <div className={styles.spacer} aria-hidden="true" />

      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <Link
            href="/"
            className={styles.brand}
            aria-label="PR Integrated Home"
            onClick={handleNavClick("/")}
          >
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <div className={styles.brandText}>
              <div className={styles.brandRow}>
                <span className={styles.brandPro}>PR</span>
                <span className={styles.brandClean}>Integrated</span>
              </div>
              <span className={styles.brandSub}>Cleaning Services company</span>
            </div>
          </Link>

          
          <nav className={styles.menu} aria-label="Main">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`${styles.link} ${active === l.href ? styles.active : ""}`}
                onClick={handleNavClick(l.href)}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className={styles.rightSide}>
            <Link
              href="#contact"
              className={`${styles.cta} ${active === "#contact" ? styles.active : ""}`}
              onClick={handleNavClick("#contact")}
            >
              Get a quote
            </Link>

            <button
              ref={triggerRef}
              className={styles.burger}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>


      <button
        className={`${styles.overlay} ${open ? styles.overlayShow : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />


      <aside
        id="mobile-drawer"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.drawerHeader}>
          <div className={styles.drawerBrand}>
            <span className={styles.brandPro}>PR</span>
            <span className={styles.brandClean}>Integrated</span>
          </div>
          <button className={styles.close} aria-label="Close menu" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        <nav className={styles.drawerNav}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.drawerLink} ${active === l.href ? styles.active : ""}`}
              onClick={handleNavClick(l.href)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className={`${styles.drawerCta} ${active === "#contact" ? styles.active : ""}`}
          onClick={handleNavClick("#contact")}
        >
          Get a quote
        </Link>
      </aside>
    </>
  );
}
