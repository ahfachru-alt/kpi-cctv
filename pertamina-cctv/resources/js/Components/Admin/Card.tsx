import React from 'react';

export const Card: React.FC<{ className?: string; title?: string } & React.HTMLAttributes<HTMLDivElement>> = ({ className = '', title, children, ...rest }) => {
  return (
    <div className={`rounded-xl bg-white p-4 ring-1 ring-gray-200 ${className}`} {...rest}>
      {title && <div className="mb-2 text-sm font-semibold text-gray-700">{title}</div>}
      {children}
    </div>
  );
};

