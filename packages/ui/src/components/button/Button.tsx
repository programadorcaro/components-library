import React from 'react';
import './button.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'danger'
    | 'success'
    | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  animation?: 'pulse' | 'shake' | 'glow' | 'none';
  style8bit?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  animation = 'none',
  style8bit = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClass = style8bit ? 'btn-8bit' : 'btn-pixel';
  const classes = [
    baseClass,
    !style8bit && `btn-${variant}`,
    size !== 'md' && `btn-${size}`,
    animation !== 'none' && `btn-${animation}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
