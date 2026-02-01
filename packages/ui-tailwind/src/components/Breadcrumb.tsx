import React from 'react';

/**
 * Breadcrumb component for navigation hierarchy
 * @example
 * <Breadcrumb items={[
 *   { label: 'Home', href: '/' },
 *   { label: 'Products', href: '/products' },
 *   { label: 'Item', href: '/products/item' }
 * ]} />
 */

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator,
}) => {
  const defaultSeparator = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  onClick={item.onClick}
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: 'var(--semantic-text-secondary)' }}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className="text-sm"
                  style={{ color: isLast ? 'var(--semantic-text-primary)' : 'var(--semantic-text-secondary)' }}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span style={{ color: 'var(--semantic-text-secondary)' }} aria-hidden="true">
                  {separator || defaultSeparator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;