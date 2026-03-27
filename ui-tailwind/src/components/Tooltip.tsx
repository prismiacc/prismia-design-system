import React, { useState } from 'react';

/**
 * Tooltip component for contextual information
 * @example
 * <Tooltip content="This is a tooltip">
 *   <button>Hover me</button>
 * </Tooltip>
 */

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div className="relative inline-block">
      {React.cloneElement(children, {
        onMouseEnter: () => setIsVisible(true),
        onMouseLeave: () => setIsVisible(false),
        onFocus: () => setIsVisible(true),
        onBlur: () => setIsVisible(false),
        'aria-describedby': isVisible ? 'tooltip' : undefined,
      })}
      {isVisible && (
        <div
          id="tooltip"
          role="tooltip"
          className={`absolute z-50 px-3 py-2 text-sm whitespace-nowrap shadow-medium ${positionStyles[position]}`}
          style={{
            backgroundColor: 'var(--base-contrast-graphite)',
            color: 'var(--semantic-text-inverse)',
            borderRadius: 'var(--radius-s)',
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;