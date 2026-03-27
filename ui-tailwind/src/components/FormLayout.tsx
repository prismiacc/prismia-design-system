import React from 'react';

/**
 * FormLayout component for structuring forms
 * @example
 * <FormLayout onSubmit={handleSubmit}>
 *   <FormField label="Name" required>
 *     <Input name="name" />
 *   </FormField>
 * </FormLayout>
 */

export interface FormFieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  children: React.ReactNode;
  inline?: boolean;
}

export interface FormLayoutProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
  spacing?: 'small' | 'medium' | 'large';
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  required,
  error,
  helperText,
  children,
  inline = false,
}) => {
  return (
    <div className={`${inline ? 'flex items-center gap-4' : 'flex flex-col gap-2'}`}>
      {label && (
        <label
          className={`text-sm font-medium ${inline ? 'min-w-[120px]' : ''}`}
          style={{ color: 'var(--semantic-text-primary)' }}
        >
          {label}
          {required && <span style={{ color: 'var(--base-semantic-error)' }}> *</span>}
        </label>
      )}
      <div className="flex-1">
        {children}
        {error && (
          <span
            className="text-sm mt-1 block"
            style={{ color: 'var(--base-semantic-error)' }}
            role="alert"
          >
            {error}
          </span>
        )}
        {!error && helperText && (
          <span
            className="text-sm mt-1 block"
            style={{ color: 'var(--semantic-text-secondary)' }}
          >
            {helperText}
          </span>
        )}
      </div>
    </div>
  );
};

export const FormLayout: React.FC<FormLayoutProps> = ({
  children,
  columns = 1,
  spacing = 'medium',
  ...props
}) => {
  const spacingStyles = {
    small: 'gap-3',
    medium: 'gap-4',
    large: 'gap-6',
  };

  const columnStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <form {...props}>
      <div className={`grid ${columnStyles[columns]} ${spacingStyles[spacing]}`}>
        {children}
      </div>
    </form>
  );
};

export default FormLayout;