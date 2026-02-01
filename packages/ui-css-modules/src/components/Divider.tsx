import React from 'react';
import styles from '../styles/Divider.module.css';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'small' | 'medium' | 'large';
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  spacing = 'medium',
}) => {
  return (
    <div
      className={`${styles.divider} ${styles[`divider--${orientation}`]} ${styles[`divider--${spacing}`]}`}
      role="separator"
      aria-orientation={orientation}
    />
  );
};