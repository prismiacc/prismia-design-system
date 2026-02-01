import React from 'react';
import styles from '../styles/Card.module.css';

export interface CardProps {
  children: React.ReactNode;
  padding?: 'small' | 'medium' | 'large';
  hoverable?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'medium',
  hoverable = false,
  className = '',
}) => {
  return (
    <div
      className={`${styles.card} ${styles[`card--${padding}`]} ${hoverable ? styles['card--hoverable'] : ''} ${className}`}
    >
      {children}
    </div>
  );
};