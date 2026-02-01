import React, { useState, useEffect } from 'react';
import styles from '../styles/ScrollSpy.module.css';

export interface ScrollSpyItem {
  id: string;
  label: string;
}

export interface ScrollSpyProps {
  items: ScrollSpyItem[];
}

export const ScrollSpy: React.FC<ScrollSpyProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={styles.scrollSpy}>
      {items.map((item) => (
        <button
          key={item.id}
          className={`${styles.scrollSpy__item} ${activeId === item.id ? styles['scrollSpy__item--active'] : ''}`}
          onClick={() => scrollToSection(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};