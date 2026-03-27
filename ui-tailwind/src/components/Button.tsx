import React from 'react';

/**
 * Button component with variants and states
 * @example
 * <Button variant="primary" size="medium">Click me</Button>
 * <Button variant="secondary" disabled>Disabled</Button>
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm rounded-s',
    medium: 'px-5 py-2.5 text-base rounded-s',
    large: 'px-6 py-3 text-base rounded-m',
  };

  const getVariantStyles = () => {
    if (variant === 'primary') {
      return {
        backgroundColor: 'var(--component-button-primary-bg)',
        color: 'var(--component-button-primary-text)',
      };
    }
    if (variant === 'secondary') {
      return {
        backgroundColor: 'transparent',
        color: 'var(--component-button-secondary-text)',
        border: '1px solid var(--component-button-secondary-border)',
      };
    }
    return {
      backgroundColor: 'transparent',
      color: 'var(--component-button-ghost-text)',
    };
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${className}`}
      style={getVariantStyles()}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;