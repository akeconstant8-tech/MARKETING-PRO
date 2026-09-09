import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'danger' | 'gradient';
  fullWidth?: boolean;
  loading?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  fullWidth,
  loading,
  disabled,
  className,
  children,
  ...rest
}: Props) {
  const classes = ['btn', `btn-${variant}`, fullWidth ? 'btn-full' : '', className ?? ''].join(' ').trim();

  return (
    <button className={classes} disabled={disabled || loading} {...rest}>
      {loading ? <span className="btn-spinner" /> : children}
    </button>
  );
}
