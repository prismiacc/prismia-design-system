import React from 'react';

/**
 * TimePicker component for selecting time
 * @example
 * <TimePicker label="Meeting Time" />
 * <TimePicker value="14:30" step={900} />
 */

export interface TimePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const TimePicker: React.FC<TimePickerProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}) => {
  const timeId = id || `time-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={timeId}
          className="text-sm font-medium"
          style={{ color: 'var(--semantic-text-primary)' }}
        >
          {label}
        </label>
      )}
      <input
        type="time"
        id={timeId}
        className={`px-3 py-2 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${className}`}
        style={{
          backgroundColor: 'var(--semantic-background-surface)',
          color: 'var(--semantic-text-primary)',
          border: `1px solid ${error ? 'var(--base-semantic-error)' : 'var(--semantic-border-default)'}`,
          borderRadius: 'var(--radius-s)',
          colorScheme: 'light',
        }}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${timeId}-error` : helperText ? `${timeId}-helper` : undefined}
        {...props}
      />
      {error && (
        <span
          id={`${timeId}-error`}
          className="text-sm"
          style={{ color: 'var(--base-semantic-error)' }}
          role="alert"
        >
          {error}
        </span>
      )}
      {!error && helperText && (
        <span
          id={`${timeId}-helper`}
          className="text-sm"
          style={{ color: 'var(--semantic-text-secondary)' }}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default TimePicker;