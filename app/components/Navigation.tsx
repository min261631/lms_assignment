import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="md:hidden bg-blue-600 text-white fixed bottom-0 left-0 right-0 z-50" role="navigation" aria-label="Mobile navigation">
      <div className="flex justify-around items-center p-2">
        <Link 
          href="/" 
          className="flex flex-col items-center p-2 text-xs hover:text-blue-200 transition-colors"
          aria-label="Home page"
        >
          <span>🏠</span>
          <span>Home</span>
        </Link>
        <Link 
          href="/about" 
          className="flex flex-col items-center p-2 text-xs hover:text-blue-200 transition-colors"
          aria-label="About page"
        >
          <span>ℹ️</span>
          <span>About</span>
        </Link>
        <Link 
          href="/escape-room" 
          className="flex flex-col items-center p-2 text-xs hover:text-blue-200 transition-colors"
          aria-label="Escape Room page"
        >
          <span>🚪</span>
          <span>Escape</span>
        </Link>
        <Link 
          href="/coding-races" 
          className="flex flex-col items-center p-2 text-xs hover:text-blue-200 transition-colors"
          aria-label="Coding Races page"
        >
          <span>🏁</span>
          <span>Races</span>
        </Link>
        <Link 
          href="/court-room" 
          className="flex flex-col items-center p-2 text-xs hover:text-blue-200 transition-colors"
          aria-label="Court Room page"
        >
          <span>⚖️</span>
          <span>Court</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
