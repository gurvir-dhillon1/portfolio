'use client';

import { useState } from "react";

export default function ThemeToggle() {
  const enum MODES {
    'DARK',
    'LIGHT',
    'RAINY'
  };

  const [themeMode, setThemeMode] = useState<MODES>(MODES.DARK);

  const toggleTheme = () => {
    setThemeMode((themeMode + 1) % 3)
    const html = document.documentElement;
    if (themeMode === MODES.LIGHT) {
      html.classList.remove('dark')
    } else {
      html.classList.add('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className='bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-lg transition-colors duration-300 opacity-0
        animate-slide-in-down-delay-400'
    >
      {
        themeMode
      }
    </button>
  )
}