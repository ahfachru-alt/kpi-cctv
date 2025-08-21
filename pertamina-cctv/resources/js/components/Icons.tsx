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
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07 6.07-1.41-1.41M8.34 8.34 6.93 6.93m10.14-1.41-1.41 1.41M8.34 15.66l-1.41 1.41" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const SystemIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
    <path d="M8 20h8" />
  </svg>
);

// Navigation icons to mimic Laravel Starter Kit minimal style
export const DashboardIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

export const TableIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18M9 4v16M15 4v16" />
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const MapIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" />
    <path d="M9 3v15M15 6v15" />
  </svg>
);

export const LocationIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z" />
    <circle cx="12" cy="11" r="2" />
  </svg>
);

export const ContactIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const BellIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export const ChatIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
  </svg>
);

