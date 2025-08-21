import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon, SystemIcon } from '@/components/Icons';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'system');

  useEffect(() => {
    const root = document.documentElement;
    const apply = (t: Theme) => {
      const isDark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      root.classList.toggle('dark', isDark);
    };
    apply(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const items: { key: Theme; label: string; icon: React.ReactNode }[] = [
    { key: 'light', label: 'Light', icon: <SunIcon className="h-4 w-4" /> },
    { key: 'dark', label: 'Dark', icon: <MoonIcon className="h-4 w-4" /> },
    { key: 'system', label: 'System', icon: <SystemIcon className="h-4 w-4" /> },
  ];

  return (
    <div className="mt-2 grid grid-cols-3 gap-1 rounded-lg bg-gray-50 p-1 ring-1 ring-gray-200">
      {items.map(({ key, label, icon }) => (
        <button
          key={key}
          onClick={() => setTheme(key)}
          className={`flex items-center justify-center gap-1 rounded px-2 py-1 text-xs ${theme === key ? 'bg-white ring-1 ring-gray-300' : 'hover:bg-white/60'}`}
          aria-label={label}
        >
          {icon}
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

