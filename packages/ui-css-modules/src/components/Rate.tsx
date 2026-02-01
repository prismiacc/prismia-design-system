import React, { useState } from 'react';
import styles from '../styles/Rate.module.css';

export interface RateProps {
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
  disabled?: boolean;
}

export const Rate: React.FC<RateProps> = ({
  value = 0,
  onChange,
  max = 5,
  disabled = false
}) => {
  const [hoverValue, setHoverValue] = useState(0);

  const handleClick = (rating: number) => {
    if (!disabled) {
      onChange?.(rating);
    }
  };

  return (
    <div className={`${styles.rate} ${disabled ? styles['rate--disabled'] : ''}`}>
      {Array.from({ length: max }, (_, index) => {
        const rating = index + 1;
        const isFilled = rating <= (hoverValue || value);
        
        return (
          <button
            key={index}
            type="button"
            className={`${styles.rate__star} ${isFilled ? styles['rate__star--filled'] : ''}`}
            onClick={() => handleClick(rating)}
            onMouseEnter={() => !disabled && setHoverValue(rating)}
            onMouseLeave={() => setHoverValue(0)}
            disabled={disabled}
            aria-label={`Rate ${rating} out of ${max}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill={isFilled ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        );
      })}
    </div>
  );
};