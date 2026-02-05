import React from 'react';
import './card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'accent' | 'danger' | 'success';
}

export function Card({
  variant = 'default',
  className = '',
  children,
  ...props
}: CardProps) {
  const classes = [
    'pixel-card',
    variant !== 'default' && `card-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({
  className = '',
  children,
  ...props
}: CardHeaderProps) {
  return (
    <div className={`pixel-card-header ${className}`} {...props}>
      {children}
    </div>
  );
}

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({
  className = '',
  children,
  ...props
}: CardTitleProps) {
  return (
    <h3 className={`pixel-card-title ${className}`} {...props}>
      {children}
    </h3>
  );
}

CardTitle.displayName = 'CardTitle';

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardBody({
  className = '',
  children,
  ...props
}: CardBodyProps) {
  return (
    <div className={`pixel-card-body ${className}`} {...props}>
      {children}
    </div>
  );
}

CardBody.displayName = 'CardBody';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({
  className = '',
  children,
  ...props
}: CardFooterProps) {
  return (
    <div className={`pixel-card-footer ${className}`} {...props}>
      {children}
    </div>
  );
}

CardFooter.displayName = 'CardFooter';
