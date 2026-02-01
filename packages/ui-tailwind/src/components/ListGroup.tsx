import React from 'react';

/**
 * ListGroup component for displaying lists of items
 * @example
 * <ListGroup items={[
 *   { label: 'Item 1', onClick: () => {} },
 *   { label: 'Item 2', active: true }
 * ]} />
 */

export interface ListGroupItem {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
}

export interface ListGroupProps {
  items: ListGroupItem[];
  variant?: 'default' | 'flush';
}

export const ListGroup: React.FC<ListGroupProps> = ({
  items,
  variant = 'default',
}) => {
  return (
    <ul
      className="flex flex-col"
      style={{
        border: variant === 'default' ? '1px solid var(--semantic-border-default)' : 'none',
        borderRadius: variant === 'default' ? 'var(--radius-s)' : '0',
        overflow: 'hidden',
      }}
      role="list"
    >
      {items.map((item, index) => {
        const ItemTag = item.href ? 'a' : 'button';
        
        return (
          <li key={index}>
            <ItemTag
              href={item.href}
              onClick={item.onClick}
              disabled={item.disabled}
              className="w-full px-4 py-3 flex items-center gap-3 text-left transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: item.active
                  ? 'var(--semantic-primary)'
                  : variant === 'default'
                  ? 'var(--semantic-background-surface)'
                  : 'transparent',
                color: item.active
                  ? 'var(--semantic-text-inverse)'
                  : 'var(--semantic-text-primary)',
                borderBottom: index < items.length - 1 ? '1px solid var(--semantic-border-default)' : 'none',
                cursor: item.disabled ? 'not-allowed' : 'pointer',
              }}
              aria-current={item.active ? 'true' : undefined}
              aria-disabled={item.disabled}
            >
              {item.icon && (
                <span className="flex-shrink-0" style={{ color: item.active ? 'inherit' : 'var(--semantic-primary)' }}>
                  {item.icon}
                </span>
              )}
              <span className="flex-1 text-sm font-medium">{item.label}</span>
              {item.badge && <span className="flex-shrink-0">{item.badge}</span>}
            </ItemTag>
          </li>
        );
      })}
    </ul>
  );
};

export default ListGroup;