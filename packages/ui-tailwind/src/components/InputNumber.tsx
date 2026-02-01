import React from 'react';

/**
 * InputNumber component with increment/decrement buttons
 * @example
 * <InputNumber label="Quantity" min={1} max={10} />
 * <InputNumber value={5} step={0.5} />
 */

export interface InputNumberProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const InputNumber: React.FC<InputNumberProps> = ({
  label,
  error,
  helperText,
  id,
  min,
  max,
  step = 1,
  value,
  onChange,
  className = '',
  ...props
}) => {
  const inputId = id || `number-${Math.random().toString(36).substr(2, 9)}`;

  const handleIncrement = () => {
    const currentValue = Number(value) || 0;
    const newValue = currentValue + Number(step);
    if (max === undefined || newValue <= Number(max)) {
      const event = {
        target: { value: String(newValue) },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange?.(event);
    }
  };

  const handleDecrement = () => {
    const currentValue = Number(value) || 0;
    const newValue = currentValue - Number(step);
    if (min === undefined || newValue >= Number(min)) {
      const event = {
        target: { value: String(newValue) },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange?.(event);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium"
          style={{ color: 'var(--semantic-text-primary)' }}
        >
          {label}
        </label>
      )}
      <div className="flex items-center">
        <button
          type="button"
          onClick={handleDecrement}
          className="px-3 py-2 transition-colors hover:opacity-80"
          style={{
            backgroundColor: 'var(--semantic-background-tertiary)',
            color: 'var(--semantic-text-primary)',
            border: '1px solid var(--semantic-border-default)',
            borderTopLeftRadius: 'var(--radius-s)',
            borderBottomLeftRadius: 'var(--radius-s)',
          }}
          aria-label="Decrease value"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
          className={`px-3 py-2 text-base text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${className}`}
          style={{
            backgroundColor: 'var(--semantic-background-surface)',
            color: 'var(--semantic-text-primary)',
            borderTop: `1px solid ${error ? 'var(--base-semantic-error)' : 'var(--semantic-border-default)'}`,
            borderBottom: `1px solid ${error ? 'var(--base-semantic-error)' : 'var(--semantic-border-default)'}`,
            borderLeft: 'none',
            borderRight: 'none',
            width: '80px',
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        <button
          type="button"
          onClick={handleIncrement}
          className="px-3 py-2 transition-colors hover:opacity-80"
          style={{
            backgroundColor: 'var(--semantic-background-tertiary)',
            color: 'var(--semantic-text-primary)',
            border: '1px solid var(--semantic-border-default)',
            borderTopRightRadius: 'var(--radius-s)',
            borderBottomRightRadius: 'var(--radius-s)',
          }}
          aria-label="Increase value"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      {error && (
        <span
          id={`${inputId}-error`}
          className="text-sm"
          style={{ color: 'var(--base-semantic-error)' }}
          role="alert"
        >
          {error}
        </span>
      )}
      {!error && helperText && (
        <span
          id={`${inputId}-helper`}
          className="text-sm"
          style={{ color: 'var(--semantic-text-secondary)' }}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default InputNumber;