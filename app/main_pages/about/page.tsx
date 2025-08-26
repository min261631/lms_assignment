'use client';

import { useTheme } from '../../contexts/ThemeContext';

export default function About() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About This Project
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A professional HTML5 code generator designed for enterprise web development and MOODLE LMS integration.
            </p>
          </div>

          {/* Student Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
              <svg className="w-6 h-6 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Student Information
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-blue-600 mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <strong className="text-gray-900 font-semibold">Name:</strong>
                <p className="text-gray-600 mt-2 font-medium">John Doe</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-green-600 mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <strong className="text-gray-900 font-semibold">Student Number:</strong>
                <p className="text-gray-600 mt-2 font-medium">12345678</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-purple-600 mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <strong className="text-gray-900 font-semibold">Course:</strong>
                <p className="text-gray-600 mt-2 font-medium">CSE3CWA - Web Applications</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-orange-600 mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <strong className="text-gray-900 font-semibold">Institution:</strong>
                <p className="text-gray-600 mt-2 font-medium">La Trobe University</p>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
              <svg className="w-6 h-6 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Project Description
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                This web application is designed to generate <span className="font-semibold text-blue-600">HTML5 + JavaScript code</span> that can be deployed on MOODLE LMS. 
                The application supports various HTML5 components including tabs, carousels, accordions, modals, and more.
              </p>
              <p>
                The generated code includes <span className="font-semibold text-green-600">inline CSS and JavaScript</span>, making it compatible with MOODLE's HTML5 capabilities 
                without requiring external CSS classes or files.
              </p>
              <p>
                Features include <span className="font-semibold text-purple-600">dark/light theme support</span>, accessibility compliance, and responsive design for optimal 
                user experience across different devices.
              </p>
            </div>
          </div>

          {/* Video Tutorial */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
              <svg className="w-6 h-6 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              How to Use This Website
            </h2>
            <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-200">
              <div className="text-6xl mb-6">🎬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Video Tutorial Coming Soon
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                A comprehensive video tutorial will be added here to demonstrate how to use the HTML5 generator, 
                configure components, and deploy the generated code to MOODLE LMS.
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
              <svg className="w-6 h-6 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-blue-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  HTML5 Components
                </h4>
                <p className="text-gray-600">
                  Generate tabs, carousels, accordions, modals, and more with inline CSS and JavaScript.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-green-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Dark/Light Theme
                </h4>
                <p className="text-gray-600">
                  Toggle between dark and light themes with automatic system preference detection.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-purple-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Accessibility
                </h4>
                <p className="text-gray-600">
                  Built with accessibility standards in mind, including ARIA labels and keyboard navigation.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-orange-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Responsive Design
                </h4>
                <p className="text-gray-600">
                  Fully responsive design that works seamlessly across desktop, tablet, and mobile devices.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-red-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Cookie Support
                </h4>
                <p className="text-gray-600">
                  Remembers user preferences including theme selection and menu state.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-indigo-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Copy to Clipboard
                </h4>
                <p className="text-gray-600">
                  One-click copy functionality for generated HTML code with instant deployment capability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
