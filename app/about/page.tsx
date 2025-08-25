export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About This Application
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            This web application is designed to create interactive HTML + JavaScript content 
            that can be deployed on the MOODLE Learning Management System (LMS).
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Purpose</h3>
              <p className="text-gray-600">
                To provide educators with tools to create engaging, interactive learning 
                experiences that can be seamlessly integrated into their MOODLE courses.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technology</h3>
              <p className="text-gray-600">
                Built with Next.js, TypeScript, and Tailwind CSS to ensure modern, 
                responsive, and accessible web experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🚪</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Escape Room</h3>
              <p className="text-blue-700 text-sm">
                Interactive puzzle-based learning experiences
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏁</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Coding Races</h3>
              <p className="text-blue-700 text-sm">
                Competitive programming challenges
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Court Room</h3>
              <p className="text-blue-700 text-sm">
                Simulated legal proceedings
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Accessibility
          </h2>
          <p className="text-gray-700 mb-4">
            This application is designed to comply with accessibility standards including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Semantic HTML structure</li>
            <li>Proper heading hierarchy</li>
            <li>Alt text for images</li>
            <li>Keyboard navigation support</li>
            <li>Screen reader compatibility</li>
            <li>High contrast color schemes</li>
            <li>Responsive design for all devices</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
