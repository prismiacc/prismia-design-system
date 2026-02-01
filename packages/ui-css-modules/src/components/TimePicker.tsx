import React from 'react';
import styles from '../styles/TimePicker.module.css';

export interface TimePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const TimePicker: React.FC<TimePickerProps> = ({
  label,
  id,
  className = '',
  ...props
}) => {
  const inputId = id || `timepicker-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`${styles.timePicker} ${className}`}>
      {label && (
        <label htmlFor={inputId} className={styles.timePicker__label}>
          {label}
        </label>
      )}
      <input
        type="time"
        id={inputId}
        className={styles.timePicker__input}
        {...props}
      />
    </div>
  );
};