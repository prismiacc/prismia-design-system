import React from 'react';
import styles from '../styles/Navbar.module.css';

export interface NavbarProps {
  logo?: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ logo, children, actions }) => {
  return (
    <nav className={styles.navbar}>
      {logo && <div className={styles.navbar__logo}>{logo}</div>}
      <div className={styles.navbar__content}>{children}</div>
      {actions && <div className={styles.navbar__actions}>{actions}</div>}
    </nav>
  );
};