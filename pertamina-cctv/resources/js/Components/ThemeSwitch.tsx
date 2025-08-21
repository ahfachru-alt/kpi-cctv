import React, { useEffect, useState } from 'react';

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

  return (
    <div className="mt-2 grid grid-cols-3 gap-1 rounded-lg bg-gray-50 p-1 ring-1 ring-gray-200">
      {(['light','dark','system'] as Theme[]).map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`rounded px-2 py-1 text-xs capitalize ${theme === t ? 'bg-white ring-1 ring-gray-300' : 'hover:bg-white/60'}`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

