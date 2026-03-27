import React, { useState } from 'react';

/**
 * Sidebar component for side navigation
 * @example
 * <Sidebar logo={<Logo />} items={[
 *   { label: 'Dashboard', icon: <Icon />, href: '/' },
 *   { label: 'Settings', icon: <Icon />, href: '/settings' }
 * ]} />
 */

export interface SidebarItem {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  badge?: React.ReactNode;
}

export interface SidebarProps {
  logo?: React.ReactNode;
  items: SidebarItem[];
  footer?: React.ReactNode;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  logo,
  items,
  footer,
  collapsible = false,
  defaultCollapsed = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  return (
    <aside
      className={`flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}
      style={{
        backgroundColor: 'var(--semantic-background-surface)',
        borderRight: '1px solid var(--semantic-border-default)',
        height: '100vh',
      }}
      role="navigation"
      aria-label="Sidebar navigation"
    >
      <div className="p-4 flex items-center justify-between" style={{ borderBottom: '1px solid var(--semantic-border-default)' }}>
        {!isCollapsed && logo && <div className="flex-1">{logo}</div>}
        {collapsible && (
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--semantic-text-secondary)' }}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d={isCollapsed ? 'M7 14l4-4-4-4' : 'M13 14l-4-4 4-4'}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={item.onClick}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-s transition-colors ${isCollapsed ? 'justify-center' : ''}`}
                style={{
                  backgroundColor: item.active ? 'var(--semantic-primary)' : 'transparent',
                  color: item.active ? 'var(--semantic-text-inverse)' : 'var(--semantic-text-primary)',
                }}
                aria-current={item.active ? 'page' : undefined}
                title={isCollapsed ? item.label : undefined}
              >
                {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                {!isCollapsed && (
                  <>
                    <span className="flex-1 text-sm font-medium">{item.label}</span>
                    {item.badge && <span>{item.badge}</span>}
                  </>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {footer && !isCollapsed && (
        <div className="p-4" style={{ borderTop: '1px solid var(--semantic-border-default)' }}>
          {footer}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;