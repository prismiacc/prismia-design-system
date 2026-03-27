import React from 'react';

/**
 * Pagination component for navigating through pages
 * @example
 * <Pagination
 *   currentPage={1}
 *   totalPages={10}
 *   onPageChange={(page) => setPage(page)}
 * />
 */

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisible?: number;
  showFirstLast?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 5,
  showFirstLast = true,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const halfVisible = Math.floor(maxVisible / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);

    if (currentPage <= halfVisible) {
      endPage = Math.min(maxVisible, totalPages);
    }
    if (currentPage + halfVisible >= totalPages) {
      startPage = Math.max(1, totalPages - maxVisible + 1);
    }

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const PageButton: React.FC<{ page: number | string; active?: boolean }> = ({ page, active }) => {
    const isEllipsis = page === '...';
    
    return (
      <button
        onClick={() => typeof page === 'number' && onPageChange(page)}
        disabled={isEllipsis || active}
        className="min-w-[40px] h-10 px-3 text-sm font-medium transition-colors disabled:cursor-not-allowed"
        style={{
          backgroundColor: active ? 'var(--semantic-primary)' : 'transparent',
          color: active ? 'var(--semantic-text-inverse)' : 'var(--semantic-text-primary)',
          border: '1px solid var(--semantic-border-default)',
          borderRadius: 'var(--radius-s)',
        }}
        aria-current={active ? 'page' : undefined}
        aria-label={typeof page === 'number' ? `Page ${page}` : undefined}
      >
        {page}
      </button>
    );
  };

  return (
    <nav aria-label="Pagination" className="flex items-center gap-2">
      {showFirstLast && (
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="h-10 px-3 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: 'transparent',
            color: 'var(--semantic-text-primary)',
            border: '1px solid var(--semantic-border-default)',
            borderRadius: 'var(--radius-s)',
          }}
          aria-label="First page"
        >
          ««
        </button>
      )}
      
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-10 px-3 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          backgroundColor: 'transparent',
          color: 'var(--semantic-text-primary)',
          border: '1px solid var(--semantic-border-default)',
          borderRadius: 'var(--radius-s)',
        }}
        aria-label="Previous page"
      >
        ‹
      </button>

      {getPageNumbers().map((page, index) => (
        <PageButton key={index} page={page} active={page === currentPage} />
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-10 px-3 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          backgroundColor: 'transparent',
          color: 'var(--semantic-text-primary)',
          border: '1px solid var(--semantic-border-default)',
          borderRadius: 'var(--radius-s)',
        }}
        aria-label="Next page"
      >
        ›
      </button>

      {showFirstLast && (
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="h-10 px-3 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: 'transparent',
            color: 'var(--semantic-text-primary)',
            border: '1px solid var(--semantic-border-default)',
            borderRadius: 'var(--radius-s)',
          }}
          aria-label="Last page"
        >
          »»
        </button>
      )}
    </nav>
  );
};

export default Pagination;