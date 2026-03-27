import React from 'react';

/**
 * Alert component for displaying important messages
 * @example
 * <Alert variant="success" title="Success">Operation completed successfully</Alert>
 * <Alert variant="error" title="Error">Something went wrong</Alert>
 */

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'warning' | 'error' | 'info';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  onClose,
  className = '',
  ...props
}) => {
  const getVariantStyles = () => {
    const variants = {
      success: {
        backgroundColor: 'rgba(26, 147, 46, 0.1)',
        color: 'var(--base-semantic-success)',
        borderColor: 'var(--base-semantic-success)',
      },
      warning: {
        backgroundColor: 'rgba(251, 176, 59, 0.1)',
        color: 'var(--base-semantic-warning)',
        borderColor: 'var(--base-semantic-warning)',
      },
      error: {
        backgroundColor: 'rgba(214, 69, 69, 0.1)',
        color: 'var(--base-semantic-error)',
        borderColor: 'var(--base-semantic-error)',
      },
      info: {
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        color: 'var(--base-semantic-info)',
        borderColor: 'var(--base-semantic-info)',
      },
    };
    return variants[variant];
  };

  const variantStyles = getVariantStyles();

  return (
    <div
      className={`p-4 flex items-start gap-3 ${className}`}
      style={{
        ...variantStyles,
        borderLeft: `4px solid ${variantStyles.borderColor}`,
        borderRadius: 'var(--radius-s)',
      }}
      role="alert"
      aria-live="polite"
      {...props}
    >
      <div className="flex-1">
        {title && (
          <h4 className="font-semibold mb-1" style={{ color: variantStyles.color }}>
            {title}
          </h4>
        )}
        <div className="text-sm" style={{ color: 'var(--semantic-text-primary)' }}>
          {children}
        </div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 hover:opacity-70 transition-opacity"
          aria-label="Close alert"
          style={{ color: variantStyles.color }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;