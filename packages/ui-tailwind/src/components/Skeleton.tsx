import React from 'react';

/**
 * Skeleton component for loading states
 * @example
 * <Skeleton variant="text" />
 * <Skeleton variant="circular" width={40} height={40} />
 * <Skeleton variant="rectangular" height={200} />
 */

export interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: number | string;
  height?: number | string;
  animation?: 'pulse' | 'wave' | 'none';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  animation = 'pulse',
}) => {
  const variantStyles = {
    text: {
      height: height || '1em',
      borderRadius: 'var(--radius-xs)',
    },
    circular: {
      width: width || 40,
      height: height || 40,
      borderRadius: '50%',
    },
    rectangular: {
      width: width || '100%',
      height: height || 100,
      borderRadius: 'var(--radius-s)',
    },
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'skeleton-wave',
    none: '',
  };

  return (
    <div
      className={`${animationClasses[animation]}`}
      style={{
        ...variantStyles[variant],
        backgroundColor: 'var(--semantic-background-tertiary)',
        width: width,
      }}
      role="status"
      aria-label="Loading..."
    />
  );
};

export default Skeleton;