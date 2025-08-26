import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl mb-8">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 dark:bg-gradient-to-r dark:from-white dark:via-blue-200 dark:to-indigo-200 dark:bg-clip-text dark:text-transparent mb-8">
              La Trobe University LMS 
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Create enterprise-grade HTML5 components with inline CSS and JavaScript. 
              Designed for professional applications and seamless MOODLE LMS integration.
            </p>
          </div>



          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

                     <Link href="/main_pages/tabs" className="group">
               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-blue-200 dark:group-hover:border-blue-700 border border-gray-200 dark:border-gray-700">
                 <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                   Generate Tabs
                 </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Create interactive tab layouts and get the ready made customized code
                </p>
              </div>
            </Link>

            <Link href="/main_pages/escape-room" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-green-200 dark:group-hover:border-green-700 border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Escape Room
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Interactive puzzle-based learning experiences with engaging challenges
                </p>
              </div>
            </Link>

            <Link href="/main_pages/coding-races" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-purple-200 dark:group-hover:border-purple-700 border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Coding Races
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Competitive programming challenges with real-time leaderboards
                </p>
              </div>
            </Link>

            <Link href="/main_pages/about" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-orange-200 dark:group-hover:border-orange-700 border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  About Project
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Learn about the project, student information, and how to use this platform
                </p>
              </div>
            </Link>


          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Ready to Create Professional Content?</h3>
              <p className="text-blue-100 dark:text-blue-200 mb-8 text-lg">
                Start building enterprise-grade HTML5 components for your applications today!
              </p>
              <Link href="/main_pages/tabs">
                <button className="bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-gray-200 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105">
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
