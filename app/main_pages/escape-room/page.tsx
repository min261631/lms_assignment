'use client';

export default function EscapeRoomPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Coming Soon Content */}
          <div className="text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl mb-12 animate-pulse">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>

            {/* Heading */}
            <h1 className="text-6xl font-extrabold text-white mb-6">
              The Coding Escape Room
            </h1>
            
            {/* Coming Soon Badge */}
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-full font-bold text-xl mb-8 shadow-lg">
              COMING SOON
            </div>

            {/* Description */}
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Get ready for an immersive coding challenge! Solve programming puzzles, 
              debug mysteries, and race against time to escape the virtual room.
            </p>

            {/* Features List */}
            <div className="grid md:grid-cols-3 gap-6 mt-16 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">🧩</div>
                <h3 className="text-xl font-bold text-white mb-2">Code Puzzles</h3>
                <p className="text-gray-300">Challenge your programming skills with intricate puzzles</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold text-white mb-2">Timed Challenges</h3>
                <p className="text-gray-300">Race against the clock to complete all stages</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-white mb-2">Achievements</h3>
                <p className="text-gray-300">Track your progress and compete with others</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16">
              <p className="text-lg text-gray-400 mb-6">
                This feature is currently under development. Stay tuned for updates!
              </p>
              <button 
                disabled
                className="bg-gray-600 text-gray-300 px-10 py-4 rounded-xl text-lg font-semibold cursor-not-allowed opacity-60"
              >
                Launch Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
