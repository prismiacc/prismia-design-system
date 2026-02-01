import React from 'react';

/**
 * ScrollArea component for custom scrollable content
 * @example
 * <ScrollArea height={300}>
 *   <div>Long content here...</div>
 * </ScrollArea>
 */

export interface ScrollAreaProps {
  children: React.ReactNode;
  height?: number | string;
  maxHeight?: number | string;
  className?: string;
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  height,
  maxHeight,
  className = '',
}) => {
  return (
    <div
      className={`overflow-auto ${className}`}
      style={{
        height: height,
        maxHeight: maxHeight,
        scrollbarWidth: 'thin',
        scrollbarColor: 'var(--semantic-border-default) transparent',
      }}
      role="region"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default ScrollArea;