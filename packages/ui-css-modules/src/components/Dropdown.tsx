import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Dropdown.module.css';

export interface DropdownItem {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

export interface DropdownProps {
  label: React.ReactNode;
  items: DropdownItem[];
}

export const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={styles.dropdown__trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      
      {isOpen && (
        <ul className={styles.dropdown__menu} role="menu">
          {items.map((item, index) => (
            <li key={index} role="none">
              <button
                className={styles.dropdown__item}
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                role="menuitem"
              >
                {item.icon && <span className={styles.dropdown__icon}>{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};