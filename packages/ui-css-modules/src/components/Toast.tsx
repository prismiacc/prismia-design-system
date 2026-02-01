import React, { useEffect } from 'react';
import styles from '../styles/Toast.module.css';

export interface ToastProps {
  message: string;
  variant?: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  variant = 'info',
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[`toast--${variant}`]}`} role="status" aria-live="polite">
      <span className={styles.toast__message}>{message}</span>
      <button onClick={onClose} className={styles.toast__close} aria-label="Close toast">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>
    </div>
  );
};