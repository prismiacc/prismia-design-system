import React from 'react';
import styles from '../styles/Breadcrumb.module.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol className={styles.breadcrumb__list}>
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumb__item}>
            {item.href ? (
              <a href={item.href} className={styles.breadcrumb__link}>
                {item.label}
              </a>
            ) : (
              <span className={styles.breadcrumb__current}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};