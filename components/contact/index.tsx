import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
      
        <div className={styles.brandCol}>
          <div className={styles.brandRow}>
            <span className={styles.logoIcon} aria-hidden>🧹</span>
            <div>
              <div className={styles.brandLine}>
                <span className={styles.pro}>PR</span>
                <span className={styles.clean}>Integrated</span>
              </div>
              <div className={styles.sub}>Cleaning Services company</div>
            </div>
          </div>
          <p className={styles.copyText}>
            Stay updated with our latest cleaning tips, service updates, and helpful articles on
            maintaining a spotless home.
          </p>
        </div>

   
        <div className={styles.cols}>
          <div>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.links}>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
            
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Know More</h4>
            <ul className={styles.links}>
              <li><Link href="#contact">Support</Link></li>
              <li><Link href="#services">Privacy Policy</Link></li>
              <li><Link href="">Terms & conditions</Link></li>
            </ul>
          </div>

          <div>
           
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        2025 “P&R integrated cleaning services” All Rights Received
      </div>
    </footer>
  );
}
