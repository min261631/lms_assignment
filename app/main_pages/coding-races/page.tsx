export default function CodingRaces() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
          Coding Races
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="text-6xl mb-6">🏁</div>
          <h2 className="text-2xl font-semibold text-green-800 dark:text-green-400 mb-4">
            Coming Soon
          </h2>
          <p className="text-lg text-black dark:text-gray-300 mb-6">
            This page is under development. Competitive programming challenges will be available here.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
            <p className="text-sm text-green-900 dark:text-green-300">
              This feature will provide competitive programming challenges where students 
              can race against time and each other to solve coding problems efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
