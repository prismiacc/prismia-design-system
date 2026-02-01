import React, { useState } from 'react';

/**
 * ColorPicker component for selecting colors
 * @example
 * <ColorPicker value="#7C66A5" onChange={(color) => setColor(color)} />
 * <ColorPicker label="Brand Color" />
 */

export interface ColorPickerProps {
  value?: string;
  onChange?: (color: string) => void;
  label?: string;
  disabled?: boolean;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value = '#7C66A5',
  onChange,
  label,
  disabled = false,
}) => {
  const [color, setColor] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    if (onChange) {
      onChange(newColor);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium" style={{ color: 'var(--semantic-text-primary)' }}>
          {label}
        </label>
      )}
      <div className="flex items-center gap-3">
        <div
          className="relative w-12 h-12 rounded-s cursor-pointer overflow-hidden"
          style={{
            border: '2px solid var(--semantic-border-default)',
          }}
        >
          <input
            type="color"
            value={color}
            onChange={handleChange}
            disabled={disabled}
            className="absolute inset-0 w-full h-full cursor-pointer"
            style={{ border: 'none' }}
            aria-label={label || 'Color picker'}
          />
        </div>
        <input
          type="text"
          value={color}
          onChange={(e) => {
            const newColor = e.target.value;
            setColor(newColor);
            if (onChange) {
              onChange(newColor);
            }
          }}
          disabled={disabled}
          className="flex-1 px-3 py-2 text-sm font-mono transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
          style={{
            backgroundColor: 'var(--semantic-background-surface)',
            color: 'var(--semantic-text-primary)',
            border: '1px solid var(--semantic-border-default)',
            borderRadius: 'var(--radius-s)',
          }}
          placeholder="#000000"
          maxLength={7}
          aria-label="Color hex value"
        />
      </div>
    </div>
  );
};

export default ColorPicker;