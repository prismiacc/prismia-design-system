import React from 'react';

/**
 * Drawer component for side panels
 * @example
 * <Drawer open={isOpen} onClose={() => setIsOpen(false)} placement="right">
 *   <DrawerContent />
 * </Drawer>
 */

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  width?: number | string;
  height?: number | string;
}

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  children,
  placement = 'right',
  width = 320,
  height = 320,
}) => {
  if (!open) return null;

  const isVertical = placement === 'left' || placement === 'right';
  const size = isVertical ? width : height;

  const placementStyles = {
    left: { left: 0, top: 0, bottom: 0, width: size },
    right: { right: 0, top: 0, bottom: 0, width: size },
    top: { top: 0, left: 0, right: 0, height: size },
    bottom: { bottom: 0, left: 0, right: 0, height: size },
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
        style={{ transition: 'opacity 0.3s' }}
      />
      <div
        className="fixed z-50"
        style={{
          ...placementStyles[placement],
          backgroundColor: 'var(--semantic-background-surface)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          transition: 'transform 0.3s',
        }}
        role="dialog"
        aria-modal="true"
      >
        <div className="h-full overflow-y-auto p-6">{children}</div>
      </div>
    </>
  );
};

export default Drawer;