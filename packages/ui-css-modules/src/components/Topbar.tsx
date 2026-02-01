import React from 'react';
import styles from '../styles/Topbar.module.css';

export interface TopbarProps {
  title?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

export const Topbar: React.FC<TopbarProps> = ({ title, children, actions }) => {
  return (
    <header className={styles.topbar}>
      {title && <h1 className={styles.topbar__title}>{title}</h1>}
      {children && <div className={styles.topbar__content}>{children}</div>}
      {actions && <div className={styles.topbar__actions}>{actions}</div>}
    </header>
  );
};