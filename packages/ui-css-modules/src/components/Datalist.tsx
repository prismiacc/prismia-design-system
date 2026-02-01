import React from 'react';
import styles from '../styles/Datalist.module.css';

export interface DatalistProps extends React.InputHTMLAttributes<HTMLInputElement> {
  options: string[];
  label?: string;
}

export const Datalist: React.FC<DatalistProps> = ({
  options,
  label,
  id,
  ...props
}) => {
  const inputId = id || `datalist-${Math.random().toString(36).substr(2, 9)}`;
  const listId = `${inputId}-list`;

  return (
    <div className={styles.datalist}>
      {label && (
        <label htmlFor={inputId} className={styles.datalist__label}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        list={listId}
        className={styles.datalist__input}
        {...props}
      />
      <datalist id={listId}>
        {options.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
    </div>
  );
};