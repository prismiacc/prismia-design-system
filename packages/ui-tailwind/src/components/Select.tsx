import React from 'react';

/**
 * Select dropdown component
 * @example
 * <Select label="Country" options={[
 *   { value: 'us', label: 'United States' },
 *   { value: 'br', label: 'Brazil' }
 * ]} />
 */

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'options'> {
  label?: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  helperText,
  placeholder,
  id,
  className = '',
  ...props
}) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={selectId}
          className="text-sm font-medium"
          style={{ color: 'var(--semantic-text-primary)' }}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={`w-full px-3 py-2 pr-10 text-base appearance-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${className}`}
          style={{
            backgroundColor: 'var(--semantic-background-surface)',
            color: 'var(--semantic-text-primary)',
            border: `1px solid ${error ? 'var(--base-semantic-error)' : 'var(--semantic-border-default)'}`,
            borderRadius: 'var(--radius-s)',
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        <div
          className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: 'var(--semantic-text-secondary)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      {error && (
        <span
          id={`${selectId}-error`}
          className="text-sm"
          style={{ color: 'var(--base-semantic-error)' }}
          role="alert"
        >
          {error}
        </span>
      )}
      {!error && helperText && (
        <span
          id={`${selectId}-helper`}
          className="text-sm"
          style={{ color: 'var(--semantic-text-secondary)' }}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Select;