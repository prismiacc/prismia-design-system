import React from 'react';
import styles from '../styles/DatePicker.module.css';

export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  id,
  className = '',
  ...props
}) => {
  const inputId = id || `datepicker-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`${styles.datePicker} ${className}`}>
      {label && (
        <label htmlFor={inputId} className={styles.datePicker__label}>
          {label}
        </label>
      )}
      <input
        type="date"
        id={inputId}
        className={styles.datePicker__input}
        {...props}
      />
    </div>
  );
};