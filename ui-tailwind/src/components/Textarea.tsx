import React from 'react';

/**
 * Textarea component for multi-line text input
 * @example
 * <Textarea label="Description" rows={4} />
 * <Textarea placeholder="Enter your message..." error="Required field" />
 */

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  resize = 'vertical',
  id,
  className = '',
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  const resizeStyles = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize',
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-sm font-medium"
          style={{ color: 'var(--semantic-text-primary)' }}
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`px-3 py-2 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${resizeStyles[resize]} ${className}`}
        style={{
          backgroundColor: 'var(--semantic-background-surface)',
          color: 'var(--semantic-text-primary)',
          border: `1px solid ${error ? 'var(--base-semantic-error)' : 'var(--semantic-border-default)'}`,
          borderRadius: 'var(--radius-s)',
        }}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
        {...props}
      />
      {error && (
        <span
          id={`${textareaId}-error`}
          className="text-sm"
          style={{ color: 'var(--base-semantic-error)' }}
          role="alert"
        >
          {error}
        </span>
      )}
      {!error && helperText && (
        <span
          id={`${textareaId}-helper`}
          className="text-sm"
          style={{ color: 'var(--semantic-text-secondary)' }}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Textarea;