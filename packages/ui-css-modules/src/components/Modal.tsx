import React, { useEffect } from 'react';
import styles from '../styles/Modal.module.css';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className={styles.modal__header}>
            <h2 className={styles.modal__title}>{title}</h2>
            <button onClick={onClose} className={styles.modal__close} aria-label="Close modal">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        )}
        <div className={styles.modal__body}>{children}</div>
        {footer && <div className={styles.modal__footer}>{footer}</div>}
      </div>
    </div>
  );
};