import React from 'react';
import './skeleton.css';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
}

export function Skeleton({
  width,
  height,
  className = '',
  style,
  ...props
}: SkeletonProps) {
  const resolvedStyle: React.CSSProperties = {
    ...(width !== undefined && { width: typeof width === 'number' ? `${width}px` : width }),
    ...(height !== undefined && { height: typeof height === 'number' ? `${height}px` : height }),
    ...style,
  };

  return (
    <div
      className={`skeleton-pixel ${className}`}
      style={resolvedStyle}
      aria-hidden
      {...props}
    />
  );
}

Skeleton.displayName = 'Skeleton';
