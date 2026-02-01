import React from 'react';
import styles from '../styles/Progress.module.css';

export interface ProgressProps {
  value: number;
  max?: number;
  variant?: 'default' | 'success' | 'warning' | 'error';
  showLabel?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  variant = 'default',
  showLabel = false,
  size = 'medium'
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`${styles.progress} ${styles[`progress--${size}`]}`}>
      <div
        className={`${styles.progress__bar} ${styles[`progress__bar--${variant}`]}`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        style={{ width: `${percentage}%` }}
      >
        {showLabel && (
          <span className={styles.progress__label}>
            {`${Math.round(percentage)}%`}
          </span>
        )}
      </div>
    </div>
  );
};