import React from 'react';

const StandingsTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-1 mb-8">
      <button
        onClick={() => setActiveTab('overall')}
        className={`flex items-center px-4 py-2 rounded-lg font-medium ${
          activeTab === 'overall'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        <span className="mr-2">🏆</span>
        Overall Standings
      </button>
      <button
        onClick={() => setActiveTab('matches')}
        className={`flex items-center px-4 py-2 rounded-lg font-medium ${
          activeTab === 'matches'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        <span className="mr-2">🎯</span>
        Match Results
      </button>
    </div>
  );
};

export default StandingsTabs;
