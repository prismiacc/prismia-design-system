import React from 'react';

/**
 * Progress component for displaying task completion
 * @example
 * <Progress value={75} max={100} />
 * <Progress value={50} variant="success" showLabel />
 */

export interface ProgressProps {
  value: number;
  max?: number;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
  label?: string;
  striped?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  variant = 'default',
  size = 'medium',
  showLabel = false,
  label,
  striped = false,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizeStyles = {
    small: 'h-2',
    medium: 'h-3',
    large: 'h-4',
  };

  const getVariantColor = () => {
    const variants = {
      default: 'var(--semantic-primary)',
      success: 'var(--base-semantic-success)',
      warning: 'var(--base-semantic-warning)',
      error: 'var(--base-semantic-error)',
    };
    return variants[variant];
  };

  return (
    <div>
      {(showLabel || label) && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium" style={{ color: 'var(--semantic-text-primary)' }}>
            {label || 'Progress'}
          </span>
          <span className="text-sm" style={{ color: 'var(--semantic-text-secondary)' }}>
            {Math.round(percentage)}%
          </span>
        </div>
      )}
      <div
        className={`w-full ${sizeStyles[size]} overflow-hidden`}
        style={{
          backgroundColor: 'var(--semantic-background-tertiary)',
          borderRadius: 'var(--radius-s)',
        }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label || 'Progress indicator'}
      >
        <div
          className={`h-full transition-all duration-300 ${striped ? 'progress-striped' : ''}`}
          style={{
            width: `${percentage}%`,
            backgroundColor: getVariantColor(),
            backgroundImage: striped
              ? 'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)'
              : undefined,
            backgroundSize: striped ? '1rem 1rem' : undefined,
          }}
        />
      </div>
    </div>
  );
};

export default Progress;