import React from 'react';
import styles from '../styles/FormLayout.module.css';

export interface FormFieldProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({ children, fullWidth = false }) => {
  return (
    <div className={`${styles.formField} ${fullWidth ? styles['formField--fullWidth'] : ''}`}>
      {children}
    </div>
  );
};

export interface FormLayoutProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
  gap?: 'small' | 'medium' | 'large';
}

export const FormLayout: React.FC<FormLayoutProps> = ({
  children,
  columns = 1,
  gap = 'medium'
}) => {
  return (
    <div
      className={`${styles.formLayout} ${styles[`formLayout--columns-${columns}`]} ${styles[`formLayout--gap-${gap}`]}`}
    >
      {children}
    </div>
  );
};