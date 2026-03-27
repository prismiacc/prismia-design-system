import React, { useState } from 'react';

/**
 * FloatingLabel input with animated label
 * @example
 * <FloatingLabel label="Email" type="email" />
 * <FloatingLabel label="Password" type="password" error="Invalid password" />
 */

export interface FloatingLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FloatingLabel: React.FC<FloatingLabelProps> = ({
  label,
  error,
  id,
  value,
  defaultValue,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(Boolean(value || defaultValue));
  const inputId = id || `floating-${Math.random().toString(36).substr(2, 9)}`;
  
  const isFloating = isFocused || hasValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(Boolean(e.target.value));
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div className="relative">
      <input
        id={inputId}
        value={value}
        defaultValue={defaultValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        className="peer w-full px-4 pt-6 pb-2 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
        style={{
          backgroundColor: 'var(--semantic-background-surface)',
          color: 'var(--semantic-text-primary)',
          border: `1px solid ${error ? 'var(--base-semantic-error)' : 'var(--semantic-border-default)'}`,
          borderRadius: 'var(--radius-s)',
        }}
        placeholder=" "
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      <label
        htmlFor={inputId}
        className={`absolute left-4 transition-all pointer-events-none ${
          isFloating ? 'text-xs top-2' : 'text-base top-4'
        }`}
        style={{
          color: error
            ? 'var(--base-semantic-error)'
            : isFocused
            ? 'var(--semantic-primary)'
            : 'var(--semantic-text-secondary)',
        }}
      >
        {label}
      </label>
      {error && (
        <span
          id={`${inputId}-error`}
          className="text-sm mt-1 block"
          style={{ color: 'var(--base-semantic-error)' }}
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default FloatingLabel;