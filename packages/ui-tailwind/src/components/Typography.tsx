import React from 'react';

/**
 * Typography component for text styling
 * @example
 * <Typography variant="h1">Heading 1</Typography>
 * <Typography variant="body" color="secondary">Body text</Typography>
 */

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'bodySmall' | 'caption';
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'error' | 'success';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  color = 'primary',
  align = 'left',
  className = '',
}) => {
  const variantMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    body: 'p',
    bodySmall: 'p',
    caption: 'span',
  };

  const colorMap = {
    primary: 'var(--semantic-text-primary)',
    secondary: 'var(--semantic-text-secondary)',
    error: 'var(--base-semantic-error)',
    success: 'var(--base-semantic-success)',
  };

  const Component = variantMap[variant] as keyof JSX.IntrinsicElements;

  return (
    <Component
      className={className}
      style={{
        color: colorMap[color],
        textAlign: align,
      }}
    >
      {children}
    </Component>
  );
};

export default Typography;