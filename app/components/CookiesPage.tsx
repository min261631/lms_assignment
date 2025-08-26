'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Cookie utility functions
const setCookie = (name: string, value: string, days: number = 7) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

export default function CookiesPage() {
  const { theme } = useTheme();
  const [cookieName, setCookieName] = useState('');
  const [cookieValue, setCookieValue] = useState('');
  const [cookieDays, setCookieDays] = useState(7);
  const [allCookies, setAllCookies] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [consentStatus, setConsentStatus] = useState<string>('');
  const [breadcrumbHistory, setBreadcrumbHistory] = useState<string[]>([]);

  // Load all cookies on component mount
  useEffect(() => {
    loadAllCookies();
    const consent = localStorage.getItem('cookieConsent');
    setConsentStatus(consent || 'not-set');
    
    // Load breadcrumb history from localStorage
    const savedHistory = localStorage.getItem('breadcrumbHistory');
    if (savedHistory) {
      try {
        setBreadcrumbHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Error parsing breadcrumb history:', error);
      }
    }
  }, []);

  const addToBreadcrumbHistory = (page: string) => {
    const newHistory = [...breadcrumbHistory, page];
    setBreadcrumbHistory(newHistory);
    localStorage.setItem('breadcrumbHistory', JSON.stringify(newHistory));
  };

  const clearBreadcrumbHistory = () => {
    setBreadcrumbHistory([]);
    localStorage.removeItem('breadcrumbHistory');
    setMessage('Breadcrumb history cleared!');
  };

  const loadAllCookies = () => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    setAllCookies(cookies);
  };

  const handleSetCookie = () => {
    if (!cookieName.trim()) {
      setMessage('Please enter a cookie name');
      return;
    }
    
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'accepted') {
      setMessage('Please accept cookies first to set new cookies');
      return;
    }
    
    setCookie(cookieName, cookieValue, cookieDays);
    setMessage(`Cookie "${cookieName}" set successfully for ${cookieDays} days!`);
    setCookieName('');
    setCookieValue('');
    loadAllCookies();
  };

  const handleDeleteCookie = (cookieName: string) => {
    deleteCookie(cookieName);
    setMessage(`Cookie "${cookieName}" deleted successfully!`);
    loadAllCookies();
  };

  const handleClearAllCookies = () => {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      if (name) {
        deleteCookie(name);
      }
    });
    setMessage('All cookies cleared successfully!');
    loadAllCookies();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Cookie Management
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Test and manage browser cookies for tab memory functionality
            </p>
            
            {/* Consent Status */}
            <div className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold">
              {consentStatus === 'accepted' ? (
                <div className="flex items-center text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/20 px-3 py-2 rounded-lg">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cookies Accepted
                </div>
              ) : consentStatus === 'declined' ? (
                <div className="flex items-center text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/20 px-3 py-2 rounded-lg">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cookies Declined
                </div>
              ) : (
                <div className="flex items-center text-yellow-700 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20 px-3 py-2 rounded-lg">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  Cookie Consent Not Set
                </div>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Set Cookie Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Set Cookie
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Cookie Name
                  </label>
                  <input
                    type="text"
                    value={cookieName}
                    onChange={(e) => setCookieName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
                    placeholder="e.g., activeTab"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Cookie Value
                  </label>
                  <input
                    type="text"
                    value={cookieValue}
                    onChange={(e) => setCookieValue(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
                    placeholder="e.g., tab1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Expiration (days)
                  </label>
                  <input
                    type="number"
                    value={cookieDays}
                    onChange={(e) => setCookieDays(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
                    min="1"
                    max="365"
                  />
                </div>

                <button
                  onClick={handleSetCookie}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Set Cookie
                </button>
              </div>
            </div>

            {/* View Cookies Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Current Cookies
                  </h2>
                </div>
                <button
                  onClick={handleClearAllCookies}
                  className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-3">
                {allCookies.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                    No cookies found
                  </p>
                ) : (
                  allCookies.map((cookie, index) => {
                    const [name, value] = cookie.split('=');
                    return (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white">{name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{value}</div>
                        </div>
                        <button
                          onClick={() => handleDeleteCookie(name)}
                          className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-3 py-1 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Message Display */}
          {message && (
            <div className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-4 rounded-xl shadow-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {message}
              </div>
            </div>
          )}

          {/* Information Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                How Cookies Work
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Tab Memory Feature
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The CodeGenerator component uses cookies to remember which tab you were working on. When you return to the page, it automatically restores your previous tab selection.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                  <code className="text-sm text-gray-800 dark:text-gray-200">
                    Cookie: activeTab = "tab1"<br/>
                    Expires: 30 days
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Cookie Benefits
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Persists across browser sessions
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Automatic tab restoration
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Configurable expiration time
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Secure and reliable storage
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Breadcrumb History Section */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Breadcrumb Navigation History
                </h2>
              </div>
              <button
                onClick={clearBreadcrumbHistory}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Clear History
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => addToBreadcrumbHistory('Home')}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors duration-200"
                >
                  Add Home
                </button>
                <button
                  onClick={() => addToBreadcrumbHistory('Tabs Generator')}
                  className="px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors duration-200"
                >
                  Add Tabs
                </button>
                <button
                  onClick={() => addToBreadcrumbHistory('About')}
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-900/40 transition-colors duration-200"
                >
                  Add About
                </button>
                <button
                  onClick={() => addToBreadcrumbHistory('Cookie Management')}
                  className="px-4 py-2 bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-lg text-sm font-medium hover:bg-orange-200 dark:hover:bg-orange-900/40 transition-colors duration-200"
                >
                  Add Cookies
                </button>
              </div>

              {breadcrumbHistory.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                  No breadcrumb history yet. Click the buttons above to add pages to your navigation history.
                </p>
              ) : (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Your Navigation Path:
                  </h3>
                  <div className="flex items-center flex-wrap gap-2">
                    {breadcrumbHistory.map((page, index) => (
                      <div key={index} className="flex items-center">
                        <span className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-500">
                          {page}
                        </span>
                        {index < breadcrumbHistory.length - 1 && (
                          <svg 
                            className="w-4 h-4 text-gray-400 dark:text-gray-500 mx-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
