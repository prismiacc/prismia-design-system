import React, { useRef } from 'react';
import styles from '../styles/ScrollArea.module.css';

export interface ScrollAreaProps {
  children: React.ReactNode;
  maxHeight?: string | number;
  orientation?: 'vertical' | 'horizontal' | 'both';
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  maxHeight = '300px',
  orientation = 'vertical'
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className={`${styles.scrollArea} ${styles[`scrollArea--${orientation}`]}`}
      style={{ maxHeight }}
    >
      {children}
    </div>
  );
};