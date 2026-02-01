import React from 'react';

/**
 * EmptyState component for displaying empty data states
 * @example
 * <EmptyState
 *   title="No results found"
 *   description="Try adjusting your search criteria"
 *   action={<Button>Clear filters</Button>}
 * />
 */

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center py-12 px-6"
      role="status"
      aria-live="polite"
    >
      {icon && (
        <div className="mb-4" style={{ color: 'var(--semantic-text-secondary)' }}>
          {icon}
        </div>
      )}
      {!icon && (
        <div className="mb-4" style={{ color: 'var(--semantic-text-secondary)' }}>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
            <path
              d="M32 20v24M20 32h24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.3"
            />
          </svg>
        </div>
      )}
      <h3
        className="text-lg font-semibold mb-2"
        style={{ color: 'var(--semantic-text-primary)' }}
      >
        {title}
      </h3>
      {description && (
        <p
          className="text-sm mb-6 max-w-sm"
          style={{ color: 'var(--semantic-text-secondary)' }}
        >
          {description}
        </p>
      )}
      {action && <div>{action}</div>}
    </div>
  );
};

export default EmptyState;