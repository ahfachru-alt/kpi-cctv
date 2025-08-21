import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
};

export const Button: React.FC<Props> = ({ variant = 'primary', className = '', children, ...rest }) => {
  const base = 'inline-flex items-center rounded px-3 py-2 text-sm font-medium focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  const styles: Record<NonNullable<Props['variant']>, string> = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-white text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50',
    danger: 'bg-rose-600 text-white hover:bg-rose-700',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
};

