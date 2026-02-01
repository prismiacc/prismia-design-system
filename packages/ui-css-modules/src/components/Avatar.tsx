import React from 'react';
import styles from '../styles/Avatar.module.css';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
  fallback?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'medium',
  fallback,
}) => {
  const [error, setError] = React.useState(false);
  
  const getFallbackText = () => {
    if (fallback) return fallback;
    if (alt) return alt.charAt(0).toUpperCase();
    return 'U';
  };

  return (
    <div className={`${styles.avatar} ${styles[`avatar--${size}`]}`}>
      {src && !error ? (
        <img
          src={src}
          alt={alt}
          className={styles.avatar__image}
          onError={() => setError(true)}
        />
      ) : (
        <span className={styles.avatar__fallback}>{getFallbackText()}</span>
      )}
    </div>
  );
};