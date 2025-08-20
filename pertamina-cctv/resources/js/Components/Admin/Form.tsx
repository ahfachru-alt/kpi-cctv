import React from 'react';

export const Field: React.FC<{ label: string; error?: string; children: React.ReactNode }>
  = ({ label, error, children }) => (
  <div>
    <label className="block text-sm mb-1">{label}</label>
    {children}
    {error && <div className="text-xs text-rose-600 mt-1">{error}</div>}
  </div>
);

export const Actions: React.FC<{ children: React.ReactNode }>
  = ({ children }) => (
  <div className="flex gap-2 pt-2">{children}</div>
);

