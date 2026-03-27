import React from 'react';

/**
 * SearchInput component with search icon
 * @example
 * <SearchInput placeholder="Search..." />
 * <SearchInput onSearch={(value) => handleSearch(value)} />
 */

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onSearch?: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  placeholder = 'Search...',
  className = '',
  ...props
}) => {
  const [value, setValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(value);
    }
    if (props.onKeyDown) {
      props.onKeyDown(e);
    }
  };

  const handleClear = () => {
    setValue('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--semantic-text-secondary)' }}>
          <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <input
        type="search"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`w-full pl-10 pr-10 py-2 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${className}`}
        style={{
          backgroundColor: 'var(--semantic-background-surface)',
          color: 'var(--semantic-text-primary)',
          border: '1px solid var(--semantic-border-default)',
          borderRadius: 'var(--radius-s)',
        }}
        {...props}
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
          style={{ color: 'var(--semantic-text-secondary)' }}
          aria-label="Clear search"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchInput;