import React from 'react';

/**
 * Range slider component
 * @example
 * <Range label="Volume" min={0} max={100} value={50} />
 * <Range label="Price" min={0} max={1000} step={50} showValue />
 */

export interface RangeProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  showValue?: boolean;
}

export const Range: React.FC<RangeProps> = ({
  label,
  showValue = false,
  id,
  min = 0,
  max = 100,
  value,
  className = '',
  ...props
}) => {
  const rangeId = id || `range-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex flex-col gap-2">
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <label
              htmlFor={rangeId}
              className="text-sm font-medium"
              style={{ color: 'var(--semantic-text-primary)' }}
            >
              {label}
            </label>
          )}
          {showValue && (
            <span className="text-sm font-medium" style={{ color: 'var(--semantic-text-secondary)' }}>
              {value}
            </span>
          )}
        </div>
      )}
      <input
        type="range"
        id={rangeId}
        min={min}
        max={max}
        value={value}
        className={`w-full h-2 cursor-pointer ${className}`}
        style={{
          accentColor: 'var(--semantic-primary)',
          borderRadius: 'var(--radius-s)',
        }}
        aria-valuemin={Number(min)}
        aria-valuemax={Number(max)}
        aria-valuenow={Number(value)}
        aria-label={label || 'Range slider'}
        {...props}
      />
      <div className="flex justify-between text-xs" style={{ color: 'var(--semantic-text-secondary)' }}>
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default Range;