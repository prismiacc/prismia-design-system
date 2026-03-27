import React from 'react';

/**
 * Timeline component for displaying chronological events
 * @example
 * <Timeline items={[
 *   { title: 'Project Started', time: '2024-01-01', description: 'Initial commit' },
 *   { title: 'First Release', time: '2024-02-15', color: 'success' }
 * ]} />
 */

export interface TimelineItem {
  title: string;
  time?: string;
  description?: string;
  icon?: React.ReactNode;
  color?: 'default' | 'success' | 'error' | 'warning';
}

export interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const colorMap = {
    default: 'var(--semantic-primary)',
    success: 'var(--base-semantic-success)',
    error: 'var(--base-semantic-error)',
    warning: 'var(--base-semantic-warning)',
  };

  return (
    <div className="relative">
      {items.map((item, index) => {
        const color = item.color || 'default';
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="relative flex gap-4 pb-8">
            <div className="flex flex-col items-center">
              <div
                className="flex items-center justify-center"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: colorMap[color],
                  color: 'white',
                  flexShrink: 0,
                }}
              >
                {item.icon || (
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                    }}
                  />
                )}
              </div>
              {!isLast && (
                <div
                  className="w-0.5 flex-1"
                  style={{
                    backgroundColor: 'var(--semantic-border-default)',
                    height: '100%',
                    minHeight: '40px',
                  }}
                />
              )}
            </div>
            <div className="flex-1 pt-1">
              <div className="flex items-baseline justify-between mb-1">
                <h4
                  className="text-base font-semibold"
                  style={{ color: 'var(--semantic-text-primary)' }}
                >
                  {item.title}
                </h4>
                {item.time && (
                  <span
                    className="text-sm"
                    style={{ color: 'var(--semantic-text-secondary)' }}
                  >
                    {item.time}
                  </span>
                )}
              </div>
              {item.description && (
                <p
                  className="text-sm"
                  style={{ color: 'var(--semantic-text-secondary)' }}
                >
                  {item.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;