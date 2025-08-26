'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';
import ThemeSelector from './ThemeSelector';

const Header: React.FC = () => {
  const { resolvedTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-200">
      <div className="container mx-auto flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-gray-900 dark:bg-gradient-to-r dark:from-white dark:via-blue-200 dark:to-indigo-200 dark:bg-clip-text dark:text-transparent">
              CodeGen Pro
            </span>
          </div>
          <span className="text-sm font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 shadow-sm">
            Student #: 12345678
          </span>
        </div>
        <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
          <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-semibold hover:scale-105">
            Home
          </Link>
          <Link href="/main_pages/tabs" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-semibold hover:scale-105">
            Tabs
          </Link>
          <Link href="/main_pages/escape-room" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-semibold hover:scale-105">
            Escape Room
          </Link>
          <Link href="/main_pages/coding-races" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-semibold hover:scale-105">
            Coding Races
          </Link>
          <Link href="/main_pages/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-semibold hover:scale-105">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
