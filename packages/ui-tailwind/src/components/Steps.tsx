import React from 'react';

/**
 * Steps component for step-by-step processes
 * @example
 * <Steps current={1} items={[
 *   { title: 'Login', description: 'Enter credentials' },
 *   { title: 'Verification', description: 'Verify code' },
 *   { title: 'Complete', description: 'All done!' }
 * ]} />
 */

export interface StepItem {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface StepsProps {
  items: StepItem[];
  current?: number;
  direction?: 'horizontal' | 'vertical';
  status?: 'process' | 'finish' | 'error';
}

export const Steps: React.FC<StepsProps> = ({
  items,
  current = 0,
  direction = 'horizontal',
  status = 'process',
}) => {
  const isHorizontal = direction === 'horizontal';

  return (
    <div
      className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} gap-4`}
      role="progressbar"
      aria-valuenow={current + 1}
      aria-valuemax={items.length}
    >
      {items.map((item, index) => {
        const isActive = index === current;
        const isCompleted = index < current;
        const stepStatus = isCompleted ? 'finish' : isActive ? status : 'wait';

        return (
          <div
            key={index}
            className={`flex ${isHorizontal ? 'flex-col' : 'flex-row'} items-center gap-2 flex-1`}
          >
            <div className="flex items-center gap-2">
              <div
                className="flex items-center justify-center"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor:
                    stepStatus === 'finish'
                      ? 'var(--base-semantic-success)'
                      : stepStatus === 'error'
                      ? 'var(--base-semantic-error)'
                      : isActive
                      ? 'var(--semantic-primary)'
                      : 'var(--semantic-background-tertiary)',
                  color: stepStatus === 'wait' ? 'var(--semantic-text-secondary)' : 'white',
                  fontWeight: '600',
                  fontSize: '14px',
                }}
              >
                {item.icon || index + 1}
              </div>
              <div className={`${isHorizontal ? 'text-center' : 'text-left'}`}>
                <div
                  className="text-sm font-semibold"
                  style={{
                    color: isActive
                      ? 'var(--semantic-text-primary)'
                      : 'var(--semantic-text-secondary)',
                  }}
                >
                  {item.title}
                </div>
                {item.description && (
                  <div className="text-xs" style={{ color: 'var(--semantic-text-secondary)' }}>
                    {item.description}
                  </div>
                )}
              </div>
            </div>
            {index < items.length - 1 && isHorizontal && (
              <div
                className="flex-1 h-0.5"
                style={{
                  backgroundColor:
                    index < current
                      ? 'var(--base-semantic-success)'
                      : 'var(--semantic-border-default)',
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Steps;