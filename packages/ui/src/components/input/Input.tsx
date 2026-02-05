import React from 'react';
import './input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: 'default' | 'success' | 'error';
}

export function Input({
  state = 'default',
  className = '',
  ...props
}: InputProps) {
  const classes = [
    'input-pixel',
    state !== 'default' && `input-${state}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <input className={classes} {...props} />;
}

Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  state?: 'default' | 'success' | 'error';
}

export function Textarea({
  state = 'default',
  className = '',
  ...props
}: TextareaProps) {
  const classes = [
    'input-pixel',
    'textarea-pixel',
    state !== 'default' && `input-${state}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <textarea className={classes} {...props} />;
}

Textarea.displayName = 'Textarea';

// Select foi movido para seu próprio componente em /components/select

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({
  label,
  className = '',
  id,
  ...props
}: CheckboxProps) {
  const checkboxId =
    id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label className={`checkbox-pixel ${className}`}>
      <input type="checkbox" id={checkboxId} {...props} />
      <span className="checkmark"></span>
      {label && <span className="pixel-text-small">{label}</span>}
    </label>
  );
}
