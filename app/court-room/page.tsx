export default function CourtRoom() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Court Room
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-6xl mb-6">⚖️</div>
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">
            Coming Soon
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            This page is under development. Simulated legal proceedings will be available here.
          </p>
          <div className="bg-purple-50 rounded-lg p-4">
            <p className="text-sm text-purple-700">
              This feature will provide simulated legal proceedings where students can 
              participate in mock trials and learn about legal processes and procedures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


