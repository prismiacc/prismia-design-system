import React from 'react';
import styles from '../styles/Alert.module.css';

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  onClose,
}) => {
  return (
    <div className={`${styles.alert} ${styles[`alert--${variant}`]}`} role="alert">
      <div className={styles.alert__content}>
        {title && <div className={styles.alert__title}>{title}</div>}
        <div className={styles.alert__message}>{children}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className={styles.alert__close}
          aria-label="Close alert"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </div>
  );
};