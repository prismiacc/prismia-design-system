import React, { useState } from 'react';

/**
 * Rate component for star ratings
 * @example
 * <Rate value={4} onChange={(rating) => setRating(rating)} />
 * <Rate value={3.5} max={5} readonly />
 */

export interface RateProps {
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
  readonly?: boolean;
  label?: string;
}

export const Rate: React.FC<RateProps> = ({
  value = 0,
  onChange,
  max = 5,
  readonly = false,
  label,
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleClick = (rating: number) => {
    if (!readonly && onChange) {
      onChange(rating);
    }
  };

  const Star: React.FC<{ filled: boolean; half?: boolean }> = ({ filled, half }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {half ? (
        <>
          <defs>
            <linearGradient id="half-fill">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="url(#half-fill)"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium" style={{ color: 'var(--semantic-text-primary)' }}>
          {label}
        </label>
      )}
      <div
        className="flex items-center gap-1"
        role="slider"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={label || 'Rating'}
        aria-readonly={readonly}
      >
        {Array.from({ length: max }, (_, index) => {
          const starValue = index + 1;
          const displayValue = hoverValue !== null ? hoverValue : value;
          const isFilled = starValue <= displayValue;
          const isHalf = !isFilled && starValue - 0.5 <= displayValue;

          return (
            <button
              key={index}
              type="button"
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => !readonly && setHoverValue(starValue)}
              onMouseLeave={() => !readonly && setHoverValue(null)}
              className={`transition-colors ${readonly ? 'cursor-default' : 'cursor-pointer hover:opacity-80'}`}
              style={{
                color: isFilled || isHalf ? 'var(--base-semantic-warning)' : 'var(--semantic-border-default)',
              }}
              disabled={readonly}
              aria-label={`Rate ${starValue} out of ${max}`}
            >
              <Star filled={isFilled} half={isHalf} />
            </button>
          );
        })}
        {value > 0 && (
          <span className="ml-2 text-sm" style={{ color: 'var(--semantic-text-secondary)' }}>
            {value} / {max}
          </span>
        )}
      </div>
    </div>
  );
};

export default Rate;