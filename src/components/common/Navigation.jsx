import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="bg-blue-600 p-2 rounded-lg">
                <span className="text-white font-bold text-lg">🎮</span>
              </div>
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold text-white">BGMI BUZZ</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
                <span className="mr-2">🏠</span>
                Home
              </a>
              <a href="/standings" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
                <span className="mr-2">📊</span>
                Standings
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
                <span className="mr-2">👥</span>
                Teams
              </a>
            </div>
          </div>

          {/* Admin Button */}
          <div className="hidden md:block">
            <button className="bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-600 flex items-center">
              <span className="mr-2">⚙️</span>
              Admin
              <span className="ml-2">↗️</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
