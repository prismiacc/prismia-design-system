import React from 'react';

/**
 * Stepper component for numeric input with increment/decrement
 * @example
 * <Stepper value={5} onChange={(val) => setValue(val)} min={0} max={10} />
 */

export interface StepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

export const Stepper: React.FC<StepperProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
}) => {
  const handleDecrement = () => {
    const newValue = Math.max(min, value - step);
    onChange(newValue);
  };

  const handleIncrement = () => {
    const newValue = Math.min(max, value + step);
    onChange(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || min;
    onChange(Math.max(min, Math.min(max, newValue)));
  };

  return (
    <div
      className="inline-flex items-center"
      style={{
        border: '1px solid var(--semantic-border-default)',
        borderRadius: 'var(--radius-s)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={handleDecrement}
        disabled={disabled || value <= min}
        className="px-3 py-2 hover:bg-opacity-80 transition-all"
        style={{
          backgroundColor: 'var(--semantic-background-tertiary)',
          color: 'var(--semantic-text-primary)',
          border: 'none',
          cursor: disabled || value <= min ? 'not-allowed' : 'pointer',
          opacity: disabled || value <= min ? 0.5 : 1,
        }}
        aria-label="Decrement"
      >
        −
      </button>
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        disabled={disabled}
        className="text-center"
        style={{
          width: '60px',
          border: 'none',
          backgroundColor: 'var(--semantic-background-surface)',
          color: 'var(--semantic-text-primary)',
          fontSize: '14px',
          fontWeight: '600',
          outline: 'none',
        }}
        aria-label="Stepper value"
      />
      <button
        onClick={handleIncrement}
        disabled={disabled || value >= max}
        className="px-3 py-2 hover:bg-opacity-80 transition-all"
        style={{
          backgroundColor: 'var(--semantic-background-tertiary)',
          color: 'var(--semantic-text-primary)',
          border: 'none',
          cursor: disabled || value >= max ? 'not-allowed' : 'pointer',
          opacity: disabled || value >= max ? 0.5 : 1,
        }}
        aria-label="Increment"
      >
        +
      </button>
    </div>
  );
};

export default Stepper;