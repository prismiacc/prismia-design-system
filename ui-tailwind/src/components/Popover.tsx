import React, { useState, useRef, useEffect } from 'react';

/**
 * Popover component for contextual content overlays
 * @example
 * <Popover trigger={<button>Click me</button>} title="Info">
 *   <p>Popover content here</p>
 * </Popover>
 */

export interface PopoverProps {
  trigger: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  closeOnClickOutside?: boolean;
}

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  title,
  children,
  position = 'bottom',
  closeOnClickOutside = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (closeOnClickOutside && popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeOnClickOutside]);

  const positionStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div ref={popoverRef} className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)} role="button" tabIndex={0} aria-haspopup="true" aria-expanded={isOpen}>
        {trigger}
      </div>
      {isOpen && (
        <div
          className={`absolute z-50 w-64 p-4 shadow-medium ${positionStyles[position]}`}
          style={{
            backgroundColor: 'var(--semantic-background-surface)',
            border: '1px solid var(--semantic-border-default)',
            borderRadius: 'var(--radius-s)',
          }}
          role="dialog"
          aria-labelledby={title ? 'popover-title' : undefined}
        >
          {title && (
            <div className="flex items-center justify-between mb-2">
              <h3
                id="popover-title"
                className="font-semibold text-sm"
                style={{ color: 'var(--semantic-text-primary)' }}
              >
                {title}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:opacity-70 transition-opacity"
                aria-label="Close popover"
                style={{ color: 'var(--semantic-text-secondary)' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          )}
          <div className="text-sm" style={{ color: 'var(--semantic-text-primary)' }}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;