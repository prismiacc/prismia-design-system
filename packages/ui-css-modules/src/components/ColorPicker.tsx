import React, { useState } from 'react';
import styles from '../styles/ColorPicker.module.css';

export interface ColorPickerProps {
  value?: string;
  onChange?: (color: string) => void;
  label?: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value = '#7C66A5',
  onChange,
  label
}) => {
  const [color, setColor] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    onChange?.(newColor);
  };

  return (
    <div className={styles.colorPicker}>
      {label && <label className={styles.colorPicker__label}>{label}</label>}
      <div className={styles.colorPicker__wrapper}>
        <input
          type="color"
          value={color}
          onChange={handleChange}
          className={styles.colorPicker__input}
        />
        <div
          className={styles.colorPicker__preview}
          style={{ backgroundColor: color }}
        />
        <input
          type="text"
          value={color}
          onChange={handleChange}
          className={styles.colorPicker__text}
        />
      </div>
    </div>
  );
};