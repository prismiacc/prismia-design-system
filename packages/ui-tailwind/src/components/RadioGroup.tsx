import React from 'react';

/**
 * RadioGroup component for radio button groups
 * @example
 * <RadioGroup
 *   name="plan"
 *   options={[
 *     { value: 'free', label: 'Free Plan' },
 *     { value: 'pro', label: 'Pro Plan' }
 *   ]}
 *   value={selectedPlan}
 *   onChange={setSelectedPlan}
 * />
 */

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  direction?: 'horizontal' | 'vertical';
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  label,
  direction = 'vertical',
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium" style={{ color: 'var(--semantic-text-primary)' }}>
          {label}
        </label>
      )}
      <div
        className={`flex ${direction === 'horizontal' ? 'flex-row gap-4' : 'flex-col gap-2'}`}
        role="radiogroup"
        aria-label={label}
      >
        {options.map((option) => {
          const radioId = `${name}-${option.value}`;
          return (
            <div key={option.value} className="flex items-center gap-2">
              <input
                type="radio"
                id={radioId}
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange?.(e.target.value)}
                disabled={option.disabled}
                className="w-4 h-4 cursor-pointer"
                style={{
                  accentColor: 'var(--semantic-primary)',
                }}
              />
              <label
                htmlFor={radioId}
                className="text-sm cursor-pointer"
                style={{
                  color: option.disabled ? 'var(--semantic-text-secondary)' : 'var(--semantic-text-primary)',
                  opacity: option.disabled ? 0.6 : 1,
                }}
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioGroup;