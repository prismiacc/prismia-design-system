import React, { useState } from 'react';

/**
 * Tabs component for tabbed navigation
 * @example
 * <Tabs tabs={[
 *   { label: 'Tab 1', content: <div>Content 1</div> },
 *   { label: 'Tab 2', content: <div>Content 2</div> }
 * ]} />
 */

export interface Tab {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: number;
  variant?: 'line' | 'pills';
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab = 0,
  variant = 'line',
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div>
      <div
        className="flex gap-1"
        style={{
          borderBottom: variant === 'line' ? '1px solid var(--semantic-border-default)' : 'none',
        }}
        role="tablist"
        aria-label="Tabs"
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => !tab.disabled && setActiveTab(index)}
            className={`px-4 py-2.5 text-sm font-medium transition-all ${
              variant === 'pills' ? 'rounded-s' : ''
            }`}
            style={{
              color: activeTab === index ? 'var(--semantic-primary)' : 'var(--semantic-text-secondary)',
              backgroundColor: variant === 'pills' && activeTab === index
                ? 'var(--semantic-background-tertiary)'
                : 'transparent',
              borderBottom: variant === 'line' && activeTab === index
                ? '2px solid var(--semantic-primary)'
                : variant === 'line'
                ? '2px solid transparent'
                : 'none',
              opacity: tab.disabled ? 0.5 : 1,
              cursor: tab.disabled ? 'not-allowed' : 'pointer',
            }}
            role="tab"
            aria-selected={activeTab === index}
            aria-disabled={tab.disabled}
            tabIndex={activeTab === index ? 0 : -1}
          >
            <div className="flex items-center gap-2">
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>
      <div
        className="mt-4"
        style={{ color: 'var(--semantic-text-primary)' }}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export default Tabs;