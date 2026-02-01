import React from 'react';
import styles from '../styles/RadioGroup.module.css';

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  orientation = 'vertical'
}) => {
  return (
    <div
      className={`${styles.radioGroup} ${styles[`radioGroup--${orientation}`]}`}
      role="radiogroup"
    >
      {options.map((option, index) => (
        <label
          key={index}
          className={`${styles.radioGroup__item} ${option.disabled ? styles['radioGroup__item--disabled'] : ''}`}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange?.(option.value)}
            disabled={option.disabled}
            className={styles.radioGroup__input}
          />
          <span className={styles.radioGroup__label}>{option.label}</span>
        </label>
      ))}
    </div>
  );
};