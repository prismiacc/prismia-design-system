import React from 'react';
import styles from '../styles/Label.module.css';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({
  required = false,
  children,
  className = '',
  ...props
}) => {
  return (
    <label className={`${styles.label} ${className}`} {...props}>
      {children}
      {required && <span className={styles.label__required}>*</span>}
    </label>
  );
};