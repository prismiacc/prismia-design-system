import React from 'react';

/**
 * Badge component for labels and status indicators
 * @example
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning">Pending</Badge>
 */

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  className = '',
  ...props
}) => {
  const getVariantStyles = () => {
    const variants = {
      default: {
        backgroundColor: 'var(--semantic-background-primary)',
        color: 'var(--semantic-text-primary)',
        border: '1px solid var(--semantic-border-default)',
      },
      success: {
        backgroundColor: 'rgba(26, 147, 46, 0.1)',
        color: 'var(--base-semantic-success)',
        border: '1px solid var(--base-semantic-success)',
      },
      warning: {
        backgroundColor: 'rgba(251, 176, 59, 0.1)',
        color: 'var(--base-semantic-warning)',
        border: '1px solid var(--base-semantic-warning)',
      },
      error: {
        backgroundColor: 'rgba(214, 69, 69, 0.1)',
        color: 'var(--base-semantic-error)',
        border: '1px solid var(--base-semantic-error)',
      },
      info: {
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        color: 'var(--base-semantic-info)',
        border: '1px solid var(--base-semantic-info)',
      },
    };
    return variants[variant];
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-medium ${className}`}
      style={{
        ...getVariantStyles(),
        borderRadius: 'var(--radius-s)',
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;