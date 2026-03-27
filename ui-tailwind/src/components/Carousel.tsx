import React, { useState } from 'react';

/**
 * Carousel component for sliding through content
 * @example
 * <Carousel items={[
 *   <img src="/slide1.jpg" />,
 *   <img src="/slide2.jpg" />
 * ]} />
 */

export interface CarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  interval = 3000,
  showIndicators = true,
  showArrows = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        borderRadius: 'var(--radius-m)',
      }}
      role="region"
      aria-label="Carousel"
      aria-live="polite"
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-full"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${items.length}`}
          >
            {item}
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 transition-opacity hover:opacity-80"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 'var(--radius-s)',
              color: 'var(--semantic-text-primary)',
            }}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 transition-opacity hover:opacity-80"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 'var(--radius-s)',
              color: 'var(--semantic-text-primary)',
            }}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
      )}

      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                backgroundColor: index === currentIndex ? 'var(--semantic-primary)' : 'rgba(255, 255, 255, 0.5)',
                width: index === currentIndex ? '24px' : '8px',
              }}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;