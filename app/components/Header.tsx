import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-mono bg-blue-700 px-2 py-1 rounded">
            Student #: 12345678
          </span>
        </div>
        <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Main navigation">
          <Link href="/" className="hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors">
            About
          </Link>
          <Link href="/escape-room" className="hover:text-blue-200 transition-colors">
            Escape Room
          </Link>
          <Link href="/coding-races" className="hover:text-blue-200 transition-colors">
            Coding Races
          </Link>
          <Link href="/court-room" className="hover:text-blue-200 transition-colors">
            Court Room
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
