import React from 'react';
import './pixel-title.css';

export interface PixelTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  glitch?: boolean;
  float?: boolean;
}

export function PixelTitle({
  className = '',
  text,
  glitch = true,
  float = true,
  ...props
}: PixelTitleProps) {
  const classes = [
    'pixel-title',
    glitch && 'glitch',
    float && 'float',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <h1 className={classes} {...props} data-text={text}>
      {text}
    </h1>
  );
}

PixelTitle.displayName = 'PixelTitle';
