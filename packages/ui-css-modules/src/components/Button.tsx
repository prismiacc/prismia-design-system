import React from 'react';
import styles from '../styles/Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'medium' | 'large';
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  children,
  disabled,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]} ${styles[`button--${size}`]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className={styles.button__spinner}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="10 20" opacity="0.3"/>
          </svg>
        </span>
      )}
      <span className={styles.button__content}>{children}</span>
    </button>
  );
};