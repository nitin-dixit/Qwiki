"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 p-1 rounded-full bg-stone-100 dark:bg-stone-800">
        <div className="w-8 h-8" />
        <div className="w-8 h-8" />
        <div className="w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0.5 p-1 rounded-full bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
      {/* Sun - Light Mode */}
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 active:scale-90 ${
          theme === "light"
            ? "bg-amber-100 text-amber-600 shadow-sm"
            : "text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
        }`}
        aria-label="Light mode"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-4 h-4 transition-transform duration-500 ${
            theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-75"
          }`}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </button>

      {/* System Default */}
      <button
        type="button"
        onClick={() => setTheme("system")}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 active:scale-90 ${
          theme === "system"
            ? "bg-stone-200 text-stone-700 dark:bg-stone-600 dark:text-stone-200 shadow-sm"
            : "text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
        }`}
        aria-label="System theme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 transition-transform duration-300"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      </button>

      {/* Moon - Dark Mode */}
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 active:scale-90 ${
          theme === "dark"
            ? "bg-indigo-900 text-indigo-200 shadow-sm"
            : "text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
        }`}
        aria-label="Dark mode"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-4 h-4 transition-transform duration-500 ${
            theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-75"
          }`}
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </button>
    </div>
  );
}
