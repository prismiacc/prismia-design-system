import React from 'react';
import styles from '../styles/Spinner.module.css';

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'medium' }) => {
  return (
    <div className={`${styles.spinner} ${styles[`spinner--${size}`]}`} role="status" aria-label="Loading">
      <svg viewBox="0 0 50 50" className={styles.spinner__svg}>
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          className={styles.spinner__circle}
        />
      </svg>
    </div>
  );
};