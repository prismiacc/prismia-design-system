import React from 'react';
import styles from '../styles/Typography.module.css';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption';
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  className = ''
}) => {
  const Component = variant.startsWith('h') ? variant : 'p';
  
  return React.createElement(
    Component,
    {
      className: `${styles.typography} ${styles[`typography--${variant}`]} ${className}`
    },
    children
  );
};