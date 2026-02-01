import React from 'react';
import styles from '../styles/Range.module.css';

export interface RangeProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  showValue?: boolean;
}

export const Range: React.FC<RangeProps> = ({
  label,
  showValue = false,
  value,
  min = 0,
  max = 100,
  id,
  ...props
}) => {
  const inputId = id || `range-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={styles.range}>
      {label && (
        <div className={styles.range__header}>
          <label htmlFor={inputId} className={styles.range__label}>
            {label}
          </label>
          {showValue && (
            <span className={styles.range__value}>{value}</span>
          )}
        </div>
      )}
      <input
        type="range"
        id={inputId}
        value={value}
        min={min}
        max={max}
        className={styles.range__input}
        {...props}
      />
    </div>
  );
};