import React, { useState } from 'react';

/**
 * Navbar component for top navigation
 * @example
 * <Navbar logo={<img src="/logo.png" />} items={[
 *   { label: 'Home', href: '/' },
 *   { label: 'About', href: '/about' }
 * ]} />
 */

export interface NavbarItem {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface NavbarProps {
  logo?: React.ReactNode;
  items?: NavbarItem[];
  actions?: React.ReactNode;
  fixed?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  items = [],
  actions,
  fixed = false,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`w-full px-6 py-4 ${fixed ? 'fixed top-0 left-0 right-0 z-40' : ''}`}
      style={{
        backgroundColor: 'var(--semantic-background-surface)',
        borderBottom: '1px solid var(--semantic-border-default)',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          {logo && <div className="flex-shrink-0">{logo}</div>}
          
          <div className="hidden md:flex items-center gap-6">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={item.onClick}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{
                  color: item.active ? 'var(--semantic-primary)' : 'var(--semantic-text-primary)',
                }}
                aria-current={item.active ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {actions && <div className="hidden md:flex items-center gap-3">{actions}</div>}
          
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            style={{ color: 'var(--semantic-text-primary)' }}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-4 pt-4 border-t" style={{ borderColor: 'var(--semantic-border-default)' }}>
          <div className="flex flex-col gap-3">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={item.onClick}
                className="text-sm font-medium py-2 transition-colors hover:opacity-70"
                style={{
                  color: item.active ? 'var(--semantic-primary)' : 'var(--semantic-text-primary)',
                }}
              >
                {item.label}
              </a>
            ))}
            {actions && <div className="mt-3 pt-3 border-t" style={{ borderColor: 'var(--semantic-border-default)' }}>{actions}</div>}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;