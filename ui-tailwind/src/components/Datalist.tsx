import React from 'react';

/**
 * Datalist component for input with suggestions
 * @example
 * <Datalist
 *   label="Browser"
 *   options={['Chrome', 'Firefox', 'Safari', 'Edge']}
 * />
 */

export interface DatalistProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'list'> {
  label?: string;
  options: string[];
  error?: string;
  helperText?: string;
}

export const Datalist: React.FC<DatalistProps> = ({
  label,
  options,
  error,
  helperText,
  id,
  className = '',
  ...props
}) => {
  const inputId = id || `datalist-${Math.random().toString(36).substr(2, 9)}`;
  const listId = `${inputId}-list`;

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
      <input
        id={inputId}
        list={listId}
        className={`px-3 py-2 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${className}`}
        style={{
          backgroundColor: 'var(--semantic-background-surface)',
          color: 'var(--semantic-text-primary)',
          border: `1px solid ${error ? 'var(--base-semantic-error)' : 'var(--semantic-border-default)'}`,
          borderRadius: 'var(--radius-s)',
        }}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      <datalist id={listId}>
        {options.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
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

export default Datalist;