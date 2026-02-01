import React from 'react';

/**
 * Checkbox, Radio, and Switch components
 * @example
 * <Checkbox label="Accept terms" checked={true} />
 * <Radio name="option" label="Option 1" value="1" />
 * <Switch label="Enable notifications" checked={false} />
 */

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, className = '', ...props }) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={checkboxId}
        className={`w-4 h-4 cursor-pointer transition-colors ${className}`}
        style={{
          accentColor: 'var(--semantic-primary)',
        }}
        {...props}
      />
      {label && (
        <label
          htmlFor={checkboxId}
          className="text-sm cursor-pointer"
          style={{ color: 'var(--semantic-text-primary)' }}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export const Radio: React.FC<RadioProps> = ({ label, id, className = '', ...props }) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        id={radioId}
        className={`w-4 h-4 cursor-pointer transition-colors ${className}`}
        style={{
          accentColor: 'var(--semantic-primary)',
        }}
        {...props}
      />
      {label && (
        <label
          htmlFor={radioId}
          className="text-sm cursor-pointer"
          style={{ color: 'var(--semantic-text-primary)' }}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export const Switch: React.FC<SwitchProps> = ({ label, id, checked, className = '', ...props }) => {
  const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex items-center gap-2">
      <label htmlFor={switchId} className="relative inline-block w-11 h-6 cursor-pointer">
        <input
          type="checkbox"
          id={switchId}
          checked={checked}
          className="sr-only peer"
          {...props}
        />
        <span
          className="absolute inset-0 transition-colors rounded-full peer-focus:ring-2 peer-focus:ring-offset-1"
          style={{
            backgroundColor: checked ? 'var(--semantic-primary)' : 'var(--semantic-border-default)',
            borderRadius: 'var(--radius-xl)',
          }}
        />
        <span
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </label>
      {label && (
        <label
          htmlFor={switchId}
          className="text-sm cursor-pointer"
          style={{ color: 'var(--semantic-text-primary)' }}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default { Checkbox, Radio, Switch };