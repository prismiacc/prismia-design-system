import React from 'react';
import styles from '../styles/Sidebar.module.css';

export interface SidebarProps {
  logo?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  width?: string | number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  logo,
  children,
  footer,
  width = 260
}) => {
  return (
    <aside className={styles.sidebar} style={{ width }}>
      {logo && <div className={styles.sidebar__logo}>{logo}</div>}
      <nav className={styles.sidebar__content}>{children}</nav>
      {footer && <div className={styles.sidebar__footer}>{footer}</div>}
    </aside>
  );
};