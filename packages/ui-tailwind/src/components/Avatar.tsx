import React from 'react';

/**
 * Avatar component for user profile images
 * @example
 * <Avatar src="/user.jpg" alt="John Doe" />
 * <Avatar fallback="JD" size="large" />
 */

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'User avatar',
  fallback,
  size = 'medium',
}) => {
  const [imageError, setImageError] = React.useState(false);

  const sizeStyles = {
    small: 'w-8 h-8 text-xs',
    medium: 'w-12 h-12 text-sm',
    large: 'w-16 h-16 text-base',
  };

  const showFallback = !src || imageError;

  return (
    <div
      className={`${sizeStyles[size]} rounded-full flex items-center justify-center overflow-hidden font-medium`}
      style={{
        backgroundColor: showFallback ? 'var(--semantic-primary)' : 'transparent',
        color: showFallback ? 'var(--semantic-text-inverse)' : undefined,
        border: '2px solid var(--semantic-border-default)',
      }}
      role="img"
      aria-label={alt}
    >
      {showFallback ? (
        <span>{fallback || alt.charAt(0).toUpperCase()}</span>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
};

export default Avatar;