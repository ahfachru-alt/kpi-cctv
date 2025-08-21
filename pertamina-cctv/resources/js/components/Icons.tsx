import React from 'react';

export type IconProps = { className?: string };

export const GoogleIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.15 0 5.98 1.09 8.2 2.88l6.15-6.15C34.5 2.54 29.62 0.5 24 0.5 14.92 0.5 6.98 5.76 3.05 13.27l7.16 5.56C12.03 13.41 17.57 9.5 24 9.5z"/>
    <path fill="#34A853" d="M46.5 24c0-1.57-.14-3.07-.4-4.5H24v9h12.7c-.55 2.96-2.22 5.46-4.7 7.16l7.17 5.56C43.81 37.32 46.5 31.14 46.5 24z"/>
    <path fill="#4A90E2" d="M10.21 18.83 3.05 13.27C1.61 16 0.8 19.1 0.8 22.5c0 3.4.81 6.5 2.24 9.23l7.17-5.56c-.47 1.37-.73 2.84-.73 4.42 0-1.58.26-3.05.73-4.42z"/>
    <path fill="#FBBC05" d="M24 46.5c6.48 0 11.94-2.14 15.85-5.78l-7.17-5.56c-2.02 1.36-4.6 2.17-8.68 2.17-6.43 0-11.97-3.91-13.79-9.34l-7.17 5.56C6.98 42.24 14.92 46.5 24 46.5z"/>
    <path fill="none" d="M0 0h48v48H0z"/>
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <circle cx="12" cy="12" r="4" strokeWidth="2" />
    <path strokeWidth="2" d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07 6.07-1.41-1.41M8.34 8.34 6.93 6.93m10.14-1.41-1.41 1.41M8.34 15.66l-1.41 1.41" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeWidth="2" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const SystemIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <rect x="3" y="4" width="18" height="12" rx="2" ry="2" strokeWidth="2" />
    <path strokeWidth="2" d="M8 20h8" />
  </svg>
);

