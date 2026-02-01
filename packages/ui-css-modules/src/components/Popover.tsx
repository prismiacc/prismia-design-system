import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Popover.module.css';

export interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  content,
  position = 'bottom'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.popover} ref={popoverRef}>
      <div
        className={styles.popover__trigger}
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
      </div>
      
      {isOpen && (
        <div
          className={`${styles.popover__content} ${styles[`popover__content--${position}`]}`}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
};