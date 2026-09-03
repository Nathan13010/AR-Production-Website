import type { MouseEventHandler, ReactNode } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  href?: string;
  to?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  disabled?: boolean;
  analyticsEvent?: string;
  analyticsLabel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  className = '',
  onClick,
  type = 'button',
  target,
  rel,
  disabled = false,
  analyticsEvent,
  analyticsLabel,
}: ButtonProps) {
  const classes = `button button--${variant} ${className}`.trim();

  if (href) {
    return <a href={href} className={classes} onClick={onClick} target={target} rel={rel} data-analytics-event={analyticsEvent} data-analytics-label={analyticsLabel}>{children}</a>;
  }
  if (to) {
    return <Link to={to} className={classes} onClick={onClick} data-analytics-event={analyticsEvent} data-analytics-label={analyticsLabel}>{children}</Link>;
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
