import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="md:hidden bg-white border-t border-gray-200 text-gray-700 fixed bottom-0 left-0 right-0 z-50 shadow-lg" role="navigation" aria-label="Mobile navigation">
      <div className="flex justify-around items-center p-4">
        <Link 
          href="/" 
          className="flex flex-col items-center p-2 text-xs hover:text-blue-600 transition-colors duration-200"
          aria-label="Home page"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="font-medium">Home</span>
        </Link>
        <Link 
          href="/tabs" 
          className="flex flex-col items-center p-2 text-xs hover:text-blue-600 transition-colors duration-200"
          aria-label="Tabs page"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="font-medium">Tabs</span>
        </Link>
        <Link 
          href="/escape-room" 
          className="flex flex-col items-center p-2 text-xs hover:text-blue-600 transition-colors duration-200"
          aria-label="Escape Room page"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="font-medium">Escape</span>
        </Link>
        <Link 
          href="/coding-races" 
          className="flex flex-col items-center p-2 text-xs hover:text-blue-600 transition-colors duration-200"
          aria-label="Coding Races page"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="font-medium">Races</span>
        </Link>
        <Link 
          href="/about" 
          className="flex flex-col items-center p-2 text-xs hover:text-blue-600 transition-colors duration-200"
          aria-label="About page"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium">About</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
