import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Carousel.module.css';

export interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = false,
  interval = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? children.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(handleNext, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, currentIndex]);

  return (
    <div className={styles.carousel}>
      <button
        className={styles.carousel__prev}
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      
      <div className={styles.carousel__viewport}>
        <div
          ref={trackRef}
          className={styles.carousel__track}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className={styles.carousel__slide}>
              {child}
            </div>
          ))}
        </div>
      </div>
      
      <button
        className={styles.carousel__next}
        onClick={handleNext}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      
      <div className={styles.carousel__indicators}>
        {children.map((_, index) => (
          <button
            key={index}
            className={`${styles.carousel__indicator} ${index === currentIndex ? styles['carousel__indicator--active'] : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};