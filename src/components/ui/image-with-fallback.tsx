'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  fallbackComponent?: React.ReactNode;
}

export function ImageWithFallback({
  src,
  fallback = '/placeholder.svg',
  fallbackComponent,
  className,
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError && fallbackComponent) {
    return <>{fallbackComponent}</>;
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={cn(
          "absolute inset-0 bg-muted animate-pulse rounded",
          className
        )} />
      )}
      <img
        {...props}
        src={hasError ? fallback : src}
        alt={alt}
        className={cn(
          "transition-opacity duration-200",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
}