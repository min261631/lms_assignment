export default function EscapeRoom() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
          Escape Room
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="text-6xl mb-6">🚪</div>
          <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-400 mb-4">
            Coming Soon
          </h2>
          <p className="text-lg text-black dark:text-gray-300 mb-6">
            This page is under development. Interactive puzzle-based learning experiences will be available here.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <p className="text-sm text-blue-900 dark:text-blue-300">
              This feature will allow students to engage in interactive escape room scenarios 
              designed to enhance learning through problem-solving and critical thinking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
