import React, { useState } from 'react';
import styles from '../styles/Collapse.module.css';

export interface CollapseProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const Collapse: React.FC<CollapseProps> = ({
  title,
  children,
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.collapse}>
      <button
        className={styles.collapse__trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.collapse__title}>{title}</span>
        <svg
          className={`${styles.collapse__icon} ${isOpen ? styles['collapse__icon--open'] : ''}`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      {isOpen && (
        <div className={styles.collapse__content}>
          {children}
        </div>
      )}
    </div>
  );
};