import React from 'react';
import './skeleton.css';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'rect' | 'text' | 'circular';
  width?: string | number;
  height?: string | number;
}

export function Skeleton({
  variant = 'rect',
  width,
  height,
  className = '',
  style,
  ...props
}: SkeletonProps) {
  const classes = [
    'skeleton-pixel',
    variant !== 'rect' && `skeleton-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const resolvedStyle: React.CSSProperties = {
    ...(width !== undefined && { width: typeof width === 'number' ? `${width}px` : width }),
    ...(height !== undefined && { height: typeof height === 'number' ? `${height}px` : height }),
    ...style,
  };

  return (
    <div
      className={classes}
      style={resolvedStyle}
      aria-hidden
      {...props}
    />
  );
}
