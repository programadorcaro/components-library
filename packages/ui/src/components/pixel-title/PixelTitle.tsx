import React from 'react';
import './pixel-title.css';

export interface PixelTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

export function PixelTitle({
  className = '',
  text,
  ...props
}: PixelTitleProps) {
  const classes = ['pixel-title glitch', className].filter(Boolean).join(' ');

  return (
    <h1 className={classes} {...props} data-text={text}>
      {text}
    </h1>
  );
}
