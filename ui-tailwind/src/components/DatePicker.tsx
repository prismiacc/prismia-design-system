import React from 'react';

/**
 * DatePicker component for selecting dates
 * @example
 * <DatePicker label="Birth Date" />
 * <DatePicker value="2024-01-15" min="2024-01-01" />
 */

export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}) => {
  const dateId = id || `date-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={dateId}
          className="text-sm font-medium"
          style={{ color: 'var(--semantic-text-primary)' }}
        >
          {label}
        </label>
      )}
      <input
        type="date"
        id={dateId}
        className={`px-3 py-2 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${className}`}
        style={{
          backgroundColor: 'var(--semantic-background-surface)',
          color: 'var(--semantic-text-primary)',
          border: `1px solid ${error ? 'var(--base-semantic-error)' : 'var(--semantic-border-default)'}`,
          borderRadius: 'var(--radius-s)',
          colorScheme: 'light',
        }}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${dateId}-error` : helperText ? `${dateId}-helper` : undefined}
        {...props}
      />
      {error && (
        <span
          id={`${dateId}-error`}
          className="text-sm"
          style={{ color: 'var(--base-semantic-error)' }}
          role="alert"
        >
          {error}
        </span>
      )}
      {!error && helperText && (
        <span
          id={`${dateId}-helper`}
          className="text-sm"
          style={{ color: 'var(--semantic-text-secondary)' }}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default DatePicker;