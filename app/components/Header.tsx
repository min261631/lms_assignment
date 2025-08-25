'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md border border-gray-200">
            Student #: 12345678
          </span>
        </div>
        <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
            Home
          </Link>
          <Link href="/tabs" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
            Tabs
          </Link>
          <Link href="/escape-room" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
            Escape Room
          </Link>
          <Link href="/coding-races" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
            Coding Races
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md border border-gray-200 transition-colors duration-200 font-medium text-sm"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
