import React from 'react';
import styles from '../styles/ListGroup.module.css';

export interface ListGroupItemProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export const ListGroupItem: React.FC<ListGroupItemProps> = ({
  children,
  active = false,
  onClick
}) => {
  const Component = onClick ? 'button' : 'div';
  
  return (
    <Component
      className={`${styles.listGroup__item} ${active ? styles['listGroup__item--active'] : ''}`}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export interface ListGroupProps {
  children: React.ReactNode;
}

export const ListGroup: React.FC<ListGroupProps> = ({ children }) => {
  return <div className={styles.listGroup}>{children}</div>;
};