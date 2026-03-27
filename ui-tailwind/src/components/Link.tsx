import React from 'react';

/**
 * Link component for navigation
 * @example
 * <Link href="/about">About Us</Link>
 * <Link href="/docs" external>Documentation</Link>
 */

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  external?: boolean;
  underline?: 'none' | 'hover' | 'always';
  color?: 'primary' | 'secondary';
}

export const Link: React.FC<LinkProps> = ({
  children,
  external = false,
  underline = 'hover',
  color = 'primary',
  className = '',
  ...props
}) => {
  const underlineStyles = {
    none: 'no-underline',
    hover: 'no-underline hover:underline',
    always: 'underline',
  };

  const colorStyles = {
    primary: 'var(--semantic-primary)',
    secondary: 'var(--semantic-text-secondary)',
  };

  return (
    <a
      className={`transition-opacity hover:opacity-70 ${underlineStyles[underline]} ${className}`}
      style={{ color: colorStyles[color] }}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
      {external && (
        <svg className="inline-block ml-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 7.5v3a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1h3M7.5 2.5h4v4M5.5 8.5l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </a>
  );
};

export default Link;