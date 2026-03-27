import React from 'react';

/**
 * IconButton component for icon-only buttons
 * @example
 * <IconButton><TrashIcon /></IconButton>
 * <IconButton variant="danger" size="small"><DeleteIcon /></IconButton>
 */

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  className = '',
  ...props
}) => {
  const sizeMap = {
    small: { width: '32px', height: '32px' },
    medium: { width: '40px', height: '40px' },
    large: { width: '48px', height: '48px' },
  };

  const variantStyles = {
    default: {
      backgroundColor: 'transparent',
      color: 'var(--semantic-text-primary)',
      border: '1px solid var(--semantic-border-default)',
    },
    primary: {
      backgroundColor: 'var(--semantic-primary)',
      color: 'white',
      border: 'none',
    },
    danger: {
      backgroundColor: 'transparent',
      color: 'var(--base-semantic-error)',
      border: '1px solid var(--base-semantic-error)',
    },
  };

  return (
    <button
      className={`inline-flex items-center justify-center transition-all hover:opacity-80 ${className}`}
      style={{
        ...sizeMap[size],
        ...variantStyles[variant],
        borderRadius: 'var(--radius-s)',
        cursor: 'pointer',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;