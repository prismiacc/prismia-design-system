import React, { useEffect } from 'react';

/**
 * Modal component for dialogs and overlays
 * @example
 * <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm">
 *   <p>Are you sure?</p>
 * </Modal>
 */

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeStyles = {
    small: 'max-w-md',
    medium: 'max-w-lg',
    large: 'max-w-2xl',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        className={`w-full ${sizeStyles[size]} p-6 shadow-medium`}
        style={{
          backgroundColor: 'var(--semantic-background-surface)',
          borderRadius: 'var(--radius-l)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-center justify-between mb-4">
            <h2
              id="modal-title"
              className="text-xl font-semibold"
              style={{ color: 'var(--semantic-text-primary)' }}
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-1 hover:opacity-70 transition-opacity"
              aria-label="Close modal"
              style={{ color: 'var(--semantic-text-secondary)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
        <div className="mb-6" style={{ color: 'var(--semantic-text-primary)' }}>
          {children}
        </div>
        {footer && (
          <div className="flex items-center justify-end gap-3 pt-4 border-t" style={{ borderColor: 'var(--semantic-border-default)' }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;