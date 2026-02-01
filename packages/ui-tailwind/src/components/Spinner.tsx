import React from 'react';

/**
 * Spinner component for loading states
 * @example
 * <Spinner size="medium" />
 * <Spinner size="large" label="Loading..." />
 */

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  label?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  label,
}) => {
  const sizeStyles = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2" role="status" aria-live="polite">
      <svg
        className={`animate-spin ${sizeStyles[size]}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
        style={{ color: 'var(--semantic-primary)' }}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {label && (
        <span className="text-sm" style={{ color: 'var(--semantic-text-secondary)' }}>
          {label}
        </span>
      )}
      <span className="sr-only">{label || 'Loading'}</span>
    </div>
  );
};

export default Spinner;