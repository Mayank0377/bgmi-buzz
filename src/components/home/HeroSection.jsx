import React from 'react';

const HeroSection = ({ onViewStandings }) => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-8 mb-8">
        {/* Live Status */}
        <div className="flex justify-center mb-6">
          <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            LIVE NOW
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            BGMI Pro League Season 3
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            The ultimate BGMI esports tournament featuring the best teams
            competing for glory and massive prizes
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-green-400 text-2xl md:text-3xl font-bold flex items-center justify-center">
              <span className="mr-2">💰</span>
              ₹50,00,000
            </div>
            <div className="text-gray-400 text-sm mt-1">Prize Pool</div>
          </div>
          <div className="text-center">
            <div className="text-purple-400 text-2xl md:text-3xl font-bold flex items-center justify-center">
              <span className="mr-2">▶️</span>
              Match 12/24
            </div>
            <div className="text-gray-400 text-sm mt-1">Progress</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg flex items-center transition-colors"
            onClick={onViewStandings}
          >
            <span className="mr-2">🏆</span>
            View Live Standings
          </button>
          <button 
            className="bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
            onClick={() => {
              console.log('Navigate to tournament details');
            }}
          >
            Tournament Details
          </button>
        </div>
    </div>
  );
};

export default HeroSection;