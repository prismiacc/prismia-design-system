import React, { useRef } from 'react';
import styles from '../styles/Upload.module.css';

export interface UploadProps {
  onUpload?: (files: FileList) => void;
  accept?: string;
  multiple?: boolean;
  label?: string;
}

export const Upload: React.FC<UploadProps> = ({
  onUpload,
  accept,
  multiple = false,
  label = 'Click to upload or drag and drop'
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && onUpload) {
      onUpload(e.target.files);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && onUpload) {
      onUpload(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className={styles.upload}
      onClick={() => inputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        ref={inputRef}
        type="file"
        onChange={handleChange}
        accept={accept}
        multiple={multiple}
        className={styles.upload__input}
      />
      <svg className={styles.upload__icon} width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 12v16M12 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect x="4" y="4" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
      </svg>
      <p className={styles.upload__label}>{label}</p>
    </div>
  );
};