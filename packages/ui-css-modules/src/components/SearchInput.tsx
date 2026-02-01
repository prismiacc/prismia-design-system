import React from 'react';
import styles from '../styles/SearchInput.module.css';

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onClear?: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onClear,
  className = '',
  ...props
}) => {
  return (
    <div className={`${styles.searchInput} ${className}`}>
      <svg className={styles.searchInput__icon} width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM14 14l2.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <input
        type="search"
        value={value}
        className={styles.searchInput__field}
        {...props}
      />
      {value && onClear && (
        <button
          type="button"
          onClick={onClear}
          className={styles.searchInput__clear}
          aria-label="Clear search"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </div>
  );
};