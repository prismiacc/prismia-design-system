import React, { useState } from 'react';

/**
 * Accordion component for collapsible content sections
 * @example
 * <Accordion>
 *   <AccordionItem title="Section 1">Content 1</AccordionItem>
 *   <AccordionItem title="Section 2">Content 2</AccordionItem>
 * </Accordion>
 */

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export interface AccordionProps {
  children: React.ReactNode;
  allowMultiple?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps & { isOpen: boolean; onToggle: () => void }> = ({
  title,
  children,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      style={{
        borderBottom: '1px solid var(--semantic-border-default)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between text-left transition-colors hover:opacity-80"
        style={{
          backgroundColor: 'var(--semantic-background-surface)',
          color: 'var(--semantic-text-primary)',
        }}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
      >
        <span className="font-medium">{title}</span>
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
          id={`accordion-content-${title}`}
          className="px-4 py-3"
          style={{
            backgroundColor: 'var(--semantic-background-primary)',
            color: 'var(--semantic-text-primary)',
          }}
          role="region"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export const Accordion: React.FC<AccordionProps> = ({
  children,
  allowMultiple = false,
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      setOpenItems(prev => prev.includes(index) ? [] : [index]);
    }
  };

  return (
    <div
      style={{
        border: '1px solid var(--semantic-border-default)',
        borderRadius: 'var(--radius-m)',
        overflow: 'hidden',
      }}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isOpen: openItems.includes(index),
            onToggle: () => toggleItem(index),
          });
        }
        return child;
      })}
    </div>
  );
};

export default Accordion;