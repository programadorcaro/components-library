import React from 'react';
import './alert.css';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'danger';
  icon?: string;
}

export function Alert({
  variant = 'info',
  icon,
  className = '',
  children,
  ...props
}: AlertProps) {
  const defaultIcons = {
    info: '\u2139',     // ℹ
    success: '\u2713',  // ✓
    warning: '\u26A0',  // ⚠
    danger: '\u2715',   // ✕
  };  

  const classes = [`alert-pixel`, `alert-${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      <span className="alert-icon">{icon || defaultIcons[variant]}</span>
      <div className="alert-content">{children}</div>
    </div>
  );
}

Alert.displayName = 'Alert';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: string;
}

export function Toast({
  icon = '',
  className = '',
  children,
  ...props
}: ToastProps) {
  return (
    <div className={`toast-pixel ${className}`} {...props}>
      {icon && <span className="toast-icon">{icon}</span>}
      <span className="toast-message">{children}</span>
    </div>
  );
}
