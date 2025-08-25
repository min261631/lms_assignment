import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to LTU Web Application
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            HTML Code Generator
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            You can generate HTML code here to deploy on MOODLE LMS.
          </p>
          <div className="bg-gray-100 rounded-lg p-4 text-left">
            <p className="text-sm text-gray-600 font-mono">
              This application allows you to create interactive HTML + JavaScript content 
              that can be easily integrated into your MOODLE learning management system.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Escape Room</h3>
            <p className="text-gray-600">Interactive puzzle-based learning experience</p>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Coding Races</h3>
            <p className="text-gray-600">Competitive programming challenges</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">Court Room</h3>
            <p className="text-gray-600">Simulated legal proceedings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
