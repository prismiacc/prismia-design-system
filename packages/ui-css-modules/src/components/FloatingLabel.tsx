import React, { useState } from 'react';
import styles from '../styles/FloatingLabel.module.css';

export interface FloatingLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FloatingLabel: React.FC<FloatingLabelProps> = ({
  label,
  id,
  value,
  onChange,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);
  const inputId = id || `floating-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
    onChange?.(e);
  };

  return (
    <div className={`${styles.floatingLabel} ${(isFocused || hasValue) ? styles['floatingLabel--active'] : ''}`}>
      <input
        id={inputId}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={styles.floatingLabel__input}
        placeholder=" "
        {...props}
      />
      <label htmlFor={inputId} className={styles.floatingLabel__label}>
        {label}
      </label>
    </div>
  );
};