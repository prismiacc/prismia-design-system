import React, { useState, useEffect } from 'react';

/**
 * ScrollSpy component for tracking scroll position and highlighting navigation
 * @example
 * <ScrollSpy items={[
 *   { id: 'section-1', label: 'Section 1' },
 *   { id: 'section-2', label: 'Section 2' }
 * ]} />
 */

export interface ScrollSpyItem {
  id: string;
  label: string;
}

export interface ScrollSpyProps {
  items: ScrollSpyItem[];
  offset?: number;
}

export const ScrollSpy: React.FC<ScrollSpyProps> = ({
  items,
  offset = 100,
}) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = items.length - 1; i >= 0; i--) {
        const element = document.getElementById(items[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items, offset]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - offset + 50;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className="sticky top-4 p-4"
      style={{
        backgroundColor: 'var(--semantic-background-surface)',
        border: '1px solid var(--semantic-border-default)',
        borderRadius: 'var(--radius-s)',
      }}
      aria-label="Table of contents"
    >
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left px-3 py-2 text-sm transition-all rounded-s"
              style={{
                color: activeId === item.id ? 'var(--semantic-primary)' : 'var(--semantic-text-secondary)',
                backgroundColor: activeId === item.id ? 'rgba(216, 204, 232, 0.2)' : 'transparent',
                fontWeight: activeId === item.id ? 600 : 400,
                borderLeft: activeId === item.id ? '3px solid var(--semantic-primary)' : '3px solid transparent',
              }}
              aria-current={activeId === item.id ? 'location' : undefined}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ScrollSpy;