import React, { useState, useEffect, useRef } from 'react';

/**
 * Dropdown component for contextual menus
 * @example
 * <Dropdown trigger={<button>Menu</button>}>
 *   <DropdownItem onClick={() => {}}>Action 1</DropdownItem>
 *   <DropdownItem onClick={() => {}}>Action 2</DropdownItem>
 * </Dropdown>
 */

export interface DropdownItemProps {
  onClick?: () => void;
  children: React.ReactNode;
  danger?: boolean;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right';
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  onClick,
  children,
  danger = false,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-4 py-2 text-left text-sm transition-colors hover:opacity-80"
      style={{
        backgroundColor: 'transparent',
        color: danger ? 'var(--base-semantic-error)' : 'var(--semantic-text-primary)',
      }}
      role="menuitem"
    >
      {children}
    </button>
  );
};

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  align = 'left',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)} role="button" tabIndex={0} aria-haspopup="true" aria-expanded={isOpen}>
        {trigger}
      </div>
      {isOpen && (
        <div
          className={`absolute z-50 mt-2 min-w-[200px] py-2 shadow-medium ${align === 'right' ? 'right-0' : 'left-0'}`}
          style={{
            backgroundColor: 'var(--semantic-background-surface)',
            border: '1px solid var(--semantic-border-default)',
            borderRadius: 'var(--radius-s)',
          }}
          role="menu"
          aria-orientation="vertical"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;