"use client";

import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={`anchor-offset ${styles.section}`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.leftTitle}>Find us</h2>

          <div className={styles.card}>
            <span className={styles.iconWrap} aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.6 10.8c1.2 2.3 3.3 4.4 5.6 5.6l1.9-1.9a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1v3.16a1 1 0 0 1-1 1A17.6 17.6 0 0 1 3 6a1 1 0 0 1 1-1h3.17a1 1 0 0 1 1 1c0 1.2.2 2.4.58 3.5a1 1 0 0 1-.26 1L6.6 10.8z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <div>
              <div className={styles.cardTitle}>Call Us</div>
              <div className={styles.cardSub}>
                +1 (226) 966-3558 , +1 (226) 260-5635
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <span className={styles.iconWrap} aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16a2 2 0 0 1 2 2v.2l-10 5.8L2 8.2V8a2 2 0 0 1 2-2zm18 4.3V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.7l10 5.8 10-5.8z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <div>
              <div className={styles.cardTitle}>Email Now</div>
              <div className={styles.cardSub}>
                printegratedservices@gmail.com
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <span className={styles.iconWrap} aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <div>
              <div className={styles.cardTitle}>Address</div>
              <div className={styles.cardSub}>Windsor , Canada</div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.kicker}>Contact info</p>
          <h3 className={styles.rightTitle}>Keep In Touch</h3>
          <p className={styles.rightSub}>
            We prioritize responding to your inquiries promptly to ensure you
            receive the assistance you need in a timely manner
          </p>

          <form
            className={styles.form}
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);

              try {
                const response = await fetch("/", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: new URLSearchParams(formData as any).toString(),
                });

                if (response.ok) {
                  alert("Thanks! Your message has been sent.");
                  form.reset();
                } else {
                  throw new Error("Form submission failed");
                }
              } catch (error) {
                alert("Sorry, something went wrong. Please try again later.");
              }
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              name="name"
              placeholder="Name"
              className={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className={styles.textarea}
              rows={4}
              required
            />
            <button className={styles.btn} type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
