import React, { useState } from 'react';
import styles from '../styles/Tabs.module.css';

export interface Tab {
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: number;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__list} role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabs__tab} ${activeTab === index ? styles['tabs__tab--active'] : ''}`}
            onClick={() => setActiveTab(index)}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tabpanel-${index}`}
          >
            {tab.icon && <span className={styles.tabs__icon}>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className={styles.tabs__content}
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
      >
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};