import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 fixed bottom-0 left-0 right-0 z-50 shadow-2xl transition-colors duration-200" role="navigation" aria-label="Mobile navigation">
      <div className="flex justify-around items-center p-6">
        <Link 
          href="/" 
          className="flex flex-col items-center p-3 text-xs hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group"
          aria-label="Home page"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span className="font-bold">Home</span>
        </Link>
        <Link 
          href="/main_pages/tabs" 
          className="flex flex-col items-center p-3 text-xs hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group"
          aria-label="Tabs page"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="font-bold">Tabs</span>
        </Link>
        <Link 
          href="/main_pages/escape-room" 
          className="flex flex-col items-center p-3 text-xs hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group"
          aria-label="Escape Room page"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <span className="font-bold">Escape</span>
        </Link>
        <Link 
          href="/main_pages/coding-races" 
          className="flex flex-col items-center p-3 text-xs hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group"
          aria-label="Coding Races page"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-bold">Races</span>
        </Link>
        <Link 
          href="/main_pages/about" 
          className="flex flex-col items-center p-3 text-xs hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group"
          aria-label="About page"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="font-bold">About</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
