import React from 'react';

/**
 * Chip component for tags and filters
 * @example
 * <Chip label="React" />
 * <Chip label="Premium" variant="success" onDelete={() => {}} />
 */

export interface ChipProps {
  label: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium';
  icon?: React.ReactNode;
  onDelete?: () => void;
  onClick?: () => void;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  variant = 'default',
  size = 'medium',
  icon,
  onDelete,
  onClick,
}) => {
  const variantStyles = {
    default: {
      backgroundColor: 'var(--semantic-background-tertiary)',
      color: 'var(--semantic-text-primary)',
    },
    success: {
      backgroundColor: 'rgba(26, 147, 46, 0.1)',
      color: 'var(--base-semantic-success)',
    },
    warning: {
      backgroundColor: 'rgba(255, 193, 7, 0.1)',
      color: 'var(--base-semantic-warning)',
    },
    error: {
      backgroundColor: 'rgba(214, 69, 69, 0.1)',
      color: 'var(--base-semantic-error)',
    },
  };

  const sizeStyles = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1.5 text-sm',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 font-medium rounded-full transition-opacity ${sizeStyles[size]} ${onClick ? 'cursor-pointer hover:opacity-80' : ''}`}
      style={variantStyles[variant]}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{label}</span>
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
          aria-label={`Remove ${label}`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 3.5L3.5 10.5M3.5 3.5l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Chip;