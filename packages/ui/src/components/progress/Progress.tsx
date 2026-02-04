import React from 'react';
import './progress.css';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  variant?: 'default' | 'accent' | 'success';
}

export function ProgressBar({
  value,
  max = 100,
  variant = 'default',
  className = '',
  ...props
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const classes = [
    'progress-pixel',
    variant !== 'default' && `progress-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      <div className="progress-fill" style={{ width: `${percentage}%` }} />
    </div>
  );
}

export interface HealthBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  label?: string;
  showText?: boolean;
  type?: 'hp' | 'mp' | 'xp';
}

export function HealthBar({
  value,
  max = 100,
  label = 'HP',
  showText = true,
  type = 'hp',
  className = '',
  ...props
}: HealthBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const classes = [
    'health-bar',
    type !== 'hp' && `health-bar-${type}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      <div className="health-bar-label">{label}</div>
      <div className="health-bar-fill" style={{ width: `${percentage}%` }} />
      {showText && (
        <div className="health-bar-text">
          {value}/{max}
        </div>
      )}
    </div>
  );
}

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'dots' | 'spinner';
}

export function Loader({
  type = 'dots',
  className = '',
  ...props
}: LoaderProps) {
  if (type === 'dots') {
    return (
      <div className={`loader-dots ${className}`} {...props}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }

  // type === 'spinner'
  return <div className={`loader-spinner ${className}`} {...props} />;
}
