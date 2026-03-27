import React, { useState } from 'react';

/**
 * Upload component for file uploads
 * @example
 * <Upload label="Profile Picture" accept="image/*" />
 * <Upload multiple maxSize={5242880} onUpload={(files) => {}} />
 */

export interface UploadProps {
  label?: string;
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  onUpload?: (files: File[]) => void;
  error?: string;
  helperText?: string;
}

export const Upload: React.FC<UploadProps> = ({
  label,
  accept,
  multiple = false,
  maxSize,
  onUpload,
  error,
  helperText,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const inputId = `upload-${Math.random().toString(36).substr(2, 9)}`;

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;

    const filesArray = Array.from(fileList);
    const validFiles = filesArray.filter((file) => {
      if (maxSize && file.size > maxSize) {
        return false;
      }
      return true;
    });

    setFiles(validFiles);
    if (onUpload) {
      onUpload(validFiles);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    if (onUpload) {
      onUpload(newFiles);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium" style={{ color: 'var(--semantic-text-primary)' }}>
          {label}
        </label>
      )}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className="relative"
      >
        <input
          type="file"
          id={inputId}
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className="sr-only"
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        />
        <label
          htmlFor={inputId}
          className="flex flex-col items-center justify-center p-8 cursor-pointer transition-colors"
          style={{
            backgroundColor: dragActive ? 'var(--semantic-background-tertiary)' : 'var(--semantic-background-surface)',
            border: `2px dashed ${error ? 'var(--base-semantic-error)' : dragActive ? 'var(--semantic-primary)' : 'var(--semantic-border-default)'}`,
            borderRadius: 'var(--radius-s)',
          }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--semantic-text-secondary)' }}>
            <path d="M24 12v24M12 24h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="mt-3 text-sm font-medium" style={{ color: 'var(--semantic-text-primary)' }}>
            {dragActive ? 'Drop files here' : 'Click to upload or drag and drop'}
          </p>
          {accept && (
            <p className="mt-1 text-xs" style={{ color: 'var(--semantic-text-secondary)' }}>
              {accept}
            </p>
          )}
          {maxSize && (
            <p className="mt-1 text-xs" style={{ color: 'var(--semantic-text-secondary)' }}>
              Max size: {(maxSize / 1024 / 1024).toFixed(1)}MB
            </p>
          )}
        </label>
      </div>
      {files.length > 0 && (
        <div className="flex flex-col gap-2 mt-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3"
              style={{
                backgroundColor: 'var(--semantic-background-surface)',
                border: '1px solid var(--semantic-border-default)',
                borderRadius: 'var(--radius-s)',
              }}
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--semantic-primary)' }}>
                  <path d="M6 2h8l4 4v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate" style={{ color: 'var(--semantic-text-primary)' }}>
                    {file.name}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--semantic-text-secondary)' }}>
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="p-1 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--semantic-text-secondary)' }}
                aria-label={`Remove ${file.name}`}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
      {error && (
        <span
          id={`${inputId}-error`}
          className="text-sm"
          style={{ color: 'var(--base-semantic-error)' }}
          role="alert"
        >
          {error}
        </span>
      )}
      {!error && helperText && (
        <span
          id={`${inputId}-helper`}
          className="text-sm"
          style={{ color: 'var(--semantic-text-secondary)' }}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Upload;