import React from 'react';
import './pixel-title.css';

export interface PixelTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function PixelTitle({
  className = '',
  children,
  ...props
}: PixelTitleProps) {
  const classes = ['pixel-title', className].filter(Boolean).join(' ');

  return (
    <h1 className={classes} {...props}>
      {children}
    </h1>
  );
}
