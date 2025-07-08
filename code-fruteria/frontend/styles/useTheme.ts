import { useEffect, useState } from 'react';
import { themeStyles, ThemeMode } from './theme';

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as ThemeMode | null;
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored);
    }

    const handler = () => {
      const updated = localStorage.getItem('theme') as ThemeMode | null;
      if (updated === 'dark' || updated === 'light') {
        setTheme(updated);
      }
    };

    window.addEventListener('theme-change', handler);
    return () => window.removeEventListener('theme-change', handler);
  }, []);

  return {
    theme,
    styles: themeStyles[theme],
  };
};