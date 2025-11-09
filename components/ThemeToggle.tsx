'use client';

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.classList.contains('dark'));
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setIsDark(false);
    }
    else {
      html.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-lg transition-colors duration-300 opacity-0
        ${isDark === null ? 'pointer-events-none' : 'animate-slide-in-down-delay-400'}`}
    >
      {isDark ? 'dark' : 'light'}
    </button>
  )
}