import React from 'react';

export const Card: React.FC<{ className?: string; title?: string } & React.HTMLAttributes<HTMLDivElement>> = ({ className = '', title, children, ...rest }) => {
  return (
    <div className={`rounded-xl bg-white p-4 ring-1 ring-gray-200 shadow-sm ${className}`} {...rest}>
      {title && <div className="mb-1 text-xs font-medium text-gray-600 uppercase tracking-wide">{title}</div>}
      {children}
    </div>
  );
};

