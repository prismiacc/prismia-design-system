import React, { useState } from 'react';

/**
 * Collapse component for toggling content visibility
 * @example
 * <Collapse title="Click to expand">
 *   <p>Hidden content here</p>
 * </Collapse>
 */

export interface CollapseProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
}

export const Collapse: React.FC<CollapseProps> = ({
  title,
  children,
  defaultOpen = false,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        border: '1px solid var(--semantic-border-default)',
        borderRadius: 'var(--radius-s)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center gap-3 text-left transition-colors hover:opacity-80"
        style={{
          backgroundColor: 'var(--semantic-background-surface)',
          color: 'var(--semantic-text-primary)',
        }}
        aria-expanded={isOpen}
        aria-controls="collapse-content"
      >
        {icon && <span style={{ color: 'var(--semantic-primary)' }}>{icon}</span>}
        <span className="flex-1 font-medium">{title}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {isOpen && (
        <div
          id="collapse-content"
          className="px-4 py-3"
          style={{
            backgroundColor: 'var(--semantic-background-primary)',
            color: 'var(--semantic-text-primary)',
            borderTop: '1px solid var(--semantic-border-default)',
          }}
          role="region"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;