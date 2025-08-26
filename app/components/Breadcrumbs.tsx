'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../contexts/ThemeContext';

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

export default function Breadcrumbs() {
  const { theme } = useTheme();
  const pathname = usePathname();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      
      // Convert path to readable label
      let label = path;
      if (path === 'main_pages') {
        label = 'Pages';
      } else if (path === 'tabs') {
        label = 'Tabs Generator';
      } else if (path === 'about') {
        label = 'About';
      } else if (path === 'escape-room') {
        label = 'Escape Room';
      } else if (path === 'coding-races') {
        label = 'Coding Races';
      } else if (path === 'cookies') {
        label = 'Cookie Management';
      } else {
        // Capitalize first letter and replace hyphens with spaces
        label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
      }

      breadcrumbs.push({
        label,
        href: currentPath,
        isCurrent: index === paths.length - 1
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center">
              {index > 0 && (
                <svg 
                  className="w-4 h-4 text-gray-400 dark:text-gray-500 mx-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              
              {breadcrumb.isCurrent ? (
                <span 
                  className="text-gray-900 dark:text-white font-semibold"
                  aria-current="page"
                >
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:underline"
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
