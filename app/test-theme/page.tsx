'use client';

import { useTheme } from '../contexts/ThemeContext';

export default function TestTheme() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Theme Test Page
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Theme Info */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Current Theme Status
            </h2>
            <div className="space-y-2 text-sm">
              <div><strong>Theme Setting:</strong> <span className="text-blue-600 dark:text-blue-400">{theme}</span></div>
              <div><strong>Resolved Theme:</strong> <span className="text-green-600 dark:text-green-400">{resolvedTheme}</span></div>
              <div><strong>HTML Classes:</strong> <span className="text-purple-600 dark:text-purple-400">{typeof document !== 'undefined' ? document.documentElement.className : 'N/A'}</span></div>
              <div><strong>Has Dark Class:</strong> <span className="text-orange-600 dark:text-orange-400">{typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') ? 'Yes' : 'No' : 'N/A'}</span></div>
            </div>
          </div>

          {/* Theme Controls */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Theme Controls
            </h2>
            <div className="space-y-3">
              <button 
                onClick={() => setTheme('light')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Set Light Mode
              </button>
              <button 
                onClick={() => setTheme('dark')}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Set Dark Mode
              </button>
              <button 
                onClick={() => setTheme('system')}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Set System Theme
              </button>
            </div>
          </div>
        </div>

        {/* Visual Test */}
        <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Visual Test
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">White Card</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">This should be white in light mode and dark gray in dark mode.</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Blue Card</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">This should be light blue in light mode and dark blue in dark mode.</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Green Card</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">This should be light green in light mode and dark green in dark mode.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
