import React from 'react';
import styles from '../styles/InputNumber.module.css';

export interface InputNumberProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export const InputNumber: React.FC<InputNumberProps> = ({
  label,
  id,
  value,
  onChange,
  onIncrement,
  onDecrement,
  min,
  max,
  step = 1,
  ...props
}) => {
  const inputId = id || `input-number-${Math.random().toString(36).substr(2, 9)}`;

  const handleIncrement = () => {
    if (onIncrement) {
      onIncrement();
    } else if (onChange) {
      const currentValue = Number(value) || 0;
      const newValue = currentValue + Number(step);
      if (max === undefined || newValue <= Number(max)) {
        onChange({ target: { value: String(newValue) } } as any);
      }
    }
  };

  const handleDecrement = () => {
    if (onDecrement) {
      onDecrement();
    } else if (onChange) {
      const currentValue = Number(value) || 0;
      const newValue = currentValue - Number(step);
      if (min === undefined || newValue >= Number(min)) {
        onChange({ target: { value: String(newValue) } } as any);
      }
    }
  };

  return (
    <div className={styles.inputNumber}>
      {label && (
        <label htmlFor={inputId} className={styles.inputNumber__label}>
          {label}
        </label>
      )}
      <div className={styles.inputNumber__wrapper}>
        <button
          type="button"
          onClick={handleDecrement}
          className={styles.inputNumber__button}
          aria-label="Decrease value"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <input
          type="number"
          id={inputId}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          className={styles.inputNumber__input}
          {...props}
        />
        <button
          type="button"
          onClick={handleIncrement}
          className={styles.inputNumber__button}
          aria-label="Increase value"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};