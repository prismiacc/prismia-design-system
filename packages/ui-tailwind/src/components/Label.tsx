import React from 'react';

/**
 * Label component for form fields
 * @example
 * <Label htmlFor="email">Email Address</Label>
 * <Label required>Username</Label>
 */

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <label
      className={`text-sm font-medium ${className}`}
      style={{
        color: disabled ? 'var(--semantic-text-secondary)' : 'var(--semantic-text-primary)',
        opacity: disabled ? 0.6 : 1,
      }}
      {...props}
    >
      {children}
      {required && (
        <span style={{ color: 'var(--base-semantic-error)' }} aria-label="Required field">
          {' '}*
        </span>
      )}
    </label>
  );
};

export default Label;