import React from 'react';

const Footer: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white p-6 mt-auto transition-colors duration-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © 2024 LTU Web Application. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right space-y-1">
            <p className="text-sm">
              Student Name: [Your Name]
            </p>
            <p className="text-sm">
              Student Number: 12345678
            </p>
            <p className="text-sm">
              Date: {currentDate}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
