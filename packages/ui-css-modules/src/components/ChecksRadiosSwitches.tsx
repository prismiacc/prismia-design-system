import React from 'react';
import styles from '../styles/ChecksRadiosSwitches.module.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, className = '', ...props }) => {
  const inputId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`${styles.checkbox} ${className}`}>
      <input
        type="checkbox"
        id={inputId}
        className={styles.checkbox__input}
        {...props}
      />
      {label && (
        <label htmlFor={inputId} className={styles.checkbox__label}>
          {label}
        </label>
      )}
    </div>
  );
};

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Radio: React.FC<RadioProps> = ({ label, id, className = '', ...props }) => {
  const inputId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`${styles.radio} ${className}`}>
      <input
        type="radio"
        id={inputId}
        className={styles.radio__input}
        {...props}
      />
      {label && (
        <label htmlFor={inputId} className={styles.radio__label}>
          {label}
        </label>
      )}
    </div>
  );
};

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Switch: React.FC<SwitchProps> = ({ label, id, className = '', ...props }) => {
  const inputId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`${styles.switch} ${className}`}>
      <input
        type="checkbox"
        id={inputId}
        className={styles.switch__input}
        role="switch"
        {...props}
      />
      <label htmlFor={inputId} className={styles.switch__label}>
        <span className={styles.switch__slider} />
        {label && <span className={styles.switch__text}>{label}</span>}
      </label>
    </div>
  );
};