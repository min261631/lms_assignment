'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white border-b border-gray-200 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              CodeGen Pro
            </span>
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-gray-100 to-blue-50 text-gray-700 px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
            Student #: 12345678
          </span>
        </div>
        <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-semibold hover:scale-105">
            Home
          </Link>
          <Link href="/main_pages/tabs" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-semibold hover:scale-105">
            Tabs
          </Link>
          <Link href="/main_pages/escape-room" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-semibold hover:scale-105">
            Escape Room
          </Link>
          <Link href="/main_pages/coding-races" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-semibold hover:scale-105">
            Coding Races
          </Link>
          <Link href="/main_pages/about" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-semibold hover:scale-105">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="bg-gradient-to-r from-gray-100 to-blue-50 hover:from-gray-200 hover:to-blue-100 text-gray-700 px-4 py-2 rounded-xl border border-gray-200 transition-all duration-200 font-semibold text-sm shadow-sm hover:shadow-md"
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
