import React from 'react';

/**
 * Indicator component for status indicators
 * @example
 * <Indicator status="online">User Avatar</Indicator>
 * <Indicator count={5}>Notification Icon</Indicator>
 */

export interface IndicatorProps {
  children: React.ReactNode;
  status?: 'online' | 'offline' | 'busy' | 'away';
  count?: number;
  dot?: boolean;
}

export const Indicator: React.FC<IndicatorProps> = ({
  children,
  status,
  count,
  dot = false,
}) => {
  const statusColors = {
    online: 'var(--base-semantic-success)',
    offline: 'var(--semantic-text-secondary)',
    busy: 'var(--base-semantic-error)',
    away: 'var(--base-semantic-warning)',
  };

  const showBadge = status || count !== undefined || dot;

  return (
    <div className="relative inline-block">
      {children}
      {showBadge && (
        <span
          className="absolute -top-1 -right-1 flex items-center justify-center"
          style={{
            minWidth: dot || !count ? '10px' : '20px',
            height: dot || !count ? '10px' : '20px',
            backgroundColor: status ? statusColors[status] : 'var(--base-semantic-error)',
            borderRadius: '50%',
            border: '2px solid var(--semantic-background-surface)',
            fontSize: '11px',
            fontWeight: '600',
            color: 'white',
            padding: count && count > 9 ? '0 4px' : '0',
          }}
        >
          {!dot && count !== undefined && (count > 99 ? '99+' : count)}
        </span>
      )}
    </div>
  );
};

export default Indicator;