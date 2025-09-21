"use client";

import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Brendan Pfahler",
    rating: 5,
    review:
      "The crew showed up on time and got straight to work. They were friendly, easy to talk to, and left the place looking far better than I expected. Would gladly hire them again.",
    initials: "BP",
  },
  {
    id: 2,
    name: "Katie Peterson",
    rating: 5,
    review:
      "Really happy with the service. The team was careful with my furniture and didn’t rush anything. It’s rare to see that kind of care these days. Thanks for the great job!",
    initials: "KP",
  },
  {
    id: 3,
    name: "Aditya Kakkar",
    rating: 5,
    review:
      "I booked them last minute after a party and they still managed to fit me in. Price was fair and they cleaned spots I didn’t even know were dirty. Totally worth it.",
    initials: "AK",
  },
  {
    id: 4,
    name: "Kevin Liu",
    rating: 5,
    review:
      "These folks know what they’re doing. Quick, professional, and the apartment smells fresh again. It’s the small touches—like wiping down the baseboards—that impressed me most.",
    initials: "KL",
  },
  {
    id: 5,
    name: "Sarah Mitchell",
    rating: 5,
    review:
      "Outstanding service from start to finish. Communication was clear, they arrived right on schedule, and the house looked spotless when they left. I’ve already recommended them to a neighbor.",
    initials: "SM",
  },
];

export default function TestimonialsSection() {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={styles.star}>
        {i < rating ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.kicker}>Customer Reviews</p>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our professional cleaning services.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonial}>
              <div className={styles.stars}>
                {renderStars(testimonial.rating)}
              </div>

              <p className={styles.review}>{testimonial.review}</p>

              <div className={styles.author}>
                <div className={styles.avatar}>{testimonial.initials}</div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                </div>
              </div>
            </div>
          ))}

          <div
            className={styles.stats}
            onClick={() => {
              window.open("https://share.google/7Apck8bhygYtbx6o4", "_blank");
            }}
          >
            <div className={styles.rating}>
              <span className={styles.ratingNumber}>5.0</span>
              <div className={styles.ratingStars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={styles.ratingStar}>
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className={styles.reviewCount}>Based on 15+ Google Reviews</p>

            <div className={styles.googleBadge}>
              <svg className={styles.googleIcon} viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Powered by Google Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
