import React, { useEffect } from 'react';

/**
 * Toast component for temporary notifications
 * @example
 * <Toast variant="success" onClose={() => {}}>
 *   Changes saved successfully
 * </Toast>
 */

export interface ToastProps {
  variant?: 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  variant = 'info',
  children,
  onClose,
  duration = 5000,
}) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getVariantStyles = () => {
    const variants = {
      success: {
        backgroundColor: 'var(--base-semantic-success)',
        color: 'var(--semantic-text-inverse)',
      },
      warning: {
        backgroundColor: 'var(--base-semantic-warning)',
        color: 'var(--semantic-text-inverse)',
      },
      error: {
        backgroundColor: 'var(--base-semantic-error)',
        color: 'var(--semantic-text-inverse)',
      },
      info: {
        backgroundColor: 'var(--base-semantic-info)',
        color: 'var(--semantic-text-inverse)',
      },
    };
    return variants[variant];
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 px-4 py-3 shadow-medium flex items-center gap-3 min-w-[300px] max-w-md animate-slide-up"
      style={{
        ...getVariantStyles(),
        borderRadius: 'var(--radius-s)',
      }}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex-1 text-sm">{children}</div>
      <button
        onClick={onClose}
        className="flex-shrink-0 p-1 hover:opacity-70 transition-opacity"
        aria-label="Close notification"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default Toast;