import React from 'react';
import styles from '../styles/EmptyState.module.css';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
}) => {
  return (
    <div className={styles.emptyState}>
      {icon && <div className={styles.emptyState__icon}>{icon}</div>}
      <h3 className={styles.emptyState__title}>{title}</h3>
      {description && <p className={styles.emptyState__description}>{description}</p>}
      {action && <div className={styles.emptyState__action}>{action}</div>}
    </div>
  );
};