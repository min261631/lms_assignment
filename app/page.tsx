import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Professional HTML5 Code Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Create enterprise-grade HTML5 components with inline CSS and JavaScript. 
              Designed for professional applications and seamless MOODLE LMS integration.
            </p>
          </div>

          {/* Main Feature Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 mb-16">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Enterprise HTML + JavaScript Generator
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Generate production-ready HTML5 code with inline CSS and JavaScript for seamless enterprise deployment.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <p className="text-gray-700 font-medium text-center">
                Create professional web components that can be deployed instantly. 
                The generated code includes all necessary CSS and JavaScript inline, ensuring complete compatibility and zero external dependencies.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/tabs" className="group">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 group-hover:border-blue-300">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Tabs Generator
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Create professional tabbed interfaces with up to 15 customizable tabs
                </p>
              </div>
            </Link>

            <Link href="/escape-room" className="group">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 group-hover:border-green-300">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Escape Room
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Interactive puzzle-based learning experiences with engaging challenges
                </p>
              </div>
            </Link>

            <Link href="/coding-races" className="group">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 group-hover:border-purple-300">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-700 transition-colors duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Coding Races
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Competitive programming challenges with real-time leaderboards
                </p>
              </div>
            </Link>

            <Link href="/about" className="group">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 group-hover:border-orange-300">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-700 transition-colors duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  About Project
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Learn about the project, student information, and how to use this platform
                </p>
              </div>
            </Link>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Create Professional Content?</h3>
              <p className="text-blue-100 mb-6">
                Start building enterprise-grade HTML5 components for your applications today!
              </p>
              <Link href="/tabs">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-sm">
                  Get Started with Tabs →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
