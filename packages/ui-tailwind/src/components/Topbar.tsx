import React from 'react';

/**
 * Topbar component for top navigation
 * @example
 * <Topbar
 *   title="Dashboard"
 *   actions={<Button>New</Button>}
 *   user={<Avatar />}
 * />
 */

export interface TopbarProps {
  title?: string;
  breadcrumbs?: React.ReactNode;
  searchBar?: React.ReactNode;
  actions?: React.ReactNode;
  user?: React.ReactNode;
  fixed?: boolean;
}

export const Topbar: React.FC<TopbarProps> = ({
  title,
  breadcrumbs,
  searchBar,
  actions,
  user,
  fixed = false,
}) => {
  return (
    <header
      className={`w-full px-6 py-4 flex items-center gap-6 ${fixed ? 'fixed top-0 left-0 right-0 z-40' : ''}`}
      style={{
        backgroundColor: 'var(--semantic-background-surface)',
        borderBottom: '1px solid var(--semantic-border-default)',
      }}
      role="banner"
    >
      {breadcrumbs ? (
        <div className="flex-shrink-0">{breadcrumbs}</div>
      ) : title ? (
        <h1 className="text-xl font-semibold" style={{ color: 'var(--semantic-text-primary)' }}>
          {title}
        </h1>
      ) : null}

      {searchBar && <div className="flex-1 max-w-md">{searchBar}</div>}

      <div className="flex-1" />

      {actions && <div className="flex items-center gap-3">{actions}</div>}

      {user && <div className="flex-shrink-0">{user}</div>}
    </header>
  );
};

export default Topbar;