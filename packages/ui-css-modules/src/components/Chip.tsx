import React from 'react';
import styles from '../styles/Chip.module.css';

export interface ChipProps {
  children: React.ReactNode;
  onClose?: () => void;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium';
}

export const Chip: React.FC<ChipProps> = ({
  children,
  onClose,
  variant = 'default',
  size = 'medium'
}) => {
  return (
    <span className={`${styles.chip} ${styles[`chip--${variant}`]} ${styles[`chip--${size}`]}`}>
      <span className={styles.chip__content}>{children}</span>
      {onClose && (
        <button
          onClick={onClose}
          className={styles.chip__close}
          aria-label="Remove"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M10 4L4 10M4 4l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </span>
  );
};