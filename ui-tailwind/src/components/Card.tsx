import React from 'react';

/**
 * Card container component
 * @example
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 */

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: 'none' | 'small' | 'medium' | 'large';
  shadow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'medium',
  shadow = true,
  className = '',
  ...props
}) => {
  const paddingStyles = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  };

  return (
    <div
      className={`${paddingStyles[padding]} ${shadow ? 'shadow-light' : ''} ${className}`}
      style={{
        backgroundColor: 'var(--component-card-bg)',
        border: '1px solid var(--semantic-border-default)',
        borderRadius: 'var(--radius-m)',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;