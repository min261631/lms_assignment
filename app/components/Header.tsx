'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';
import ThemeSelector from './ThemeSelector';

const Header: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Hamburger menu clicked, current state:', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    console.log('Closing menu');
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-200 relative">
      <div className="container mx-auto flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-6">
          {/* Student Number - Top Left */}
          <Link href="/" className="text-sm font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
            Student ID: 21930306
          </Link>       

        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
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
          
          {/* Hamburger Menu Button - Always visible on all screen sizes */}
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 border border-gray-300 dark:border-gray-600"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span 
              className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300 ease-in-out transform ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300 ease-in-out transform ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Navigation Menu - Always visible when opened */}
      <div 
        className={`absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 ease-in-out transform z-50 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container mx-auto px-8 py-6 space-y-4" role="navigation" aria-label="Navigation menu">
          <Link 
            href="/main_pages/tabs" 
            onClick={closeMenu}
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-semibold py-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-4"
          >
            Tabs
          </Link>
          <Link 
            href="/main_pages/escape-room" 
            onClick={closeMenu}
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-semibold py-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-4"
          >
            Escape Room
          </Link>
          <Link 
            href="/main_pages/coding-races" 
            onClick={closeMenu}
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-semibold py-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-4"
          >
            Coding Races
          </Link>
          <Link 
            href="/main_pages/about" 
            onClick={closeMenu}
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-semibold py-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-4"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
