import React from 'react';

/**
 * Divider component for separating content
 * @example
 * <Divider />
 * <Divider orientation="vertical" />
 */

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'small' | 'medium' | 'large';
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  spacing = 'medium',
  className = '',
  ...props
}) => {
  const spacingStyles = {
    small: orientation === 'horizontal' ? 'my-2' : 'mx-2',
    medium: orientation === 'horizontal' ? 'my-4' : 'mx-4',
    large: orientation === 'horizontal' ? 'my-6' : 'mx-6',
  };

  if (orientation === 'vertical') {
    return (
      <div
        className={`${spacingStyles[spacing]} ${className}`}
        style={{
          width: '1px',
          height: '100%',
          backgroundColor: 'var(--semantic-border-default)',
        }}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    );
  }

  return (
    <hr
      className={`border-0 ${spacingStyles[spacing]} ${className}`}
      style={{
        height: '1px',
        backgroundColor: 'var(--semantic-border-default)',
      }}
      role="separator"
      aria-orientation="horizontal"
      {...props}
    />
  );
};

export default Divider;