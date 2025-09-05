"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";

const slides = [
  { id: 1, image: "/jan.jpg", alt: "Slide 1" },
  { id: 2, image: "/jan.jpg", alt: "Slide 2" },
  { id: 3, image: "/jan.jpg", alt: "Slide 3" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prevButton} onClick={prevSlide}>‹</button>
      
      <div className={styles.slide}>
        <Image
          src={slides[currentIndex].image}
          alt={slides[currentIndex].alt}
          width={1200}   
          height={500}  
          className={styles.slideImage}
          priority={true} 
        />
      </div>

      <button className={styles.nextButton} onClick={nextSlide}>›</button>
    </div>
  );
}
