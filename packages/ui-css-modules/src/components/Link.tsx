import React from 'react';
import styles from '../styles/Link.module.css';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'primary' | 'secondary';
  underline?: 'always' | 'hover' | 'never';
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  variant = 'default',
  underline = 'hover',
  children,
  className = '',
  ...props
}) => {
  return (
    <a
      className={`${styles.link} ${styles[`link--${variant}`]} ${styles[`link--underline-${underline}`]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};