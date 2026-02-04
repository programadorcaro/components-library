import React from 'react';
import './badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'danger' | 'warning';
}

export function Badge({
  variant = 'primary',
  className = '',
  children,
  ...props
}: BadgeProps) {
  const classes = ['badge', `badge-${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}

export interface LevelBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  level?: 1 | 2 | 3 | 4;
}

export function LevelBadge({
  level = 1,
  className = '',
  children,
  ...props
}: LevelBadgeProps) {
  const classes = ['badge-level', `badge-level-${level}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'pink' | 'cyan' | 'yellow';
}

export function Label({
  variant = 'pink',
  className = '',
  children,
  ...props
}: LabelProps) {
  const classes = ['label', `label-${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
