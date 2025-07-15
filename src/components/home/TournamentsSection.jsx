import React from 'react';

const TournamentsSection = ({ onViewStandings }) => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <span className="mr-2">🏆</span>
          Tournaments
        </h2>
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          3 Active
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Live Tournament */}
        <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              LIVE
            </span>
            <span className="text-blue-400 text-2xl">🏆</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">BGMI Pro League Season 3</h3>
          <p className="text-gray-400 text-sm mb-4">1/15/2024 - 2/15/2024</p>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Prize Pool</span>
              <span className="text-green-400 font-bold">₹50,00,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Teams</span>
              <span className="text-blue-400 font-bold">16</span>
            </div>
          </div>
          
          <button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
            onClick={onViewStandings}
          >
            View Standings
          </button>
        </div>

        {/* Upcoming Tournament */}
        <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              UPCOMING
            </span>
            <span className="text-blue-400 text-2xl">🏆</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">BGMI Masters Cup</h3>
          <p className="text-gray-400 text-sm mb-4">2/20/2024 - 3/10/2024</p>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Prize Pool</span>
              <span className="text-green-400 font-bold">₹25,00,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Teams</span>
              <span className="text-blue-400 font-bold">12</span>
            </div>
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
            View Details
          </button>
        </div>

        {/* Completed Tournament */}
        <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              COMPLETED
            </span>
            <span className="text-blue-400 text-2xl">🏆</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">BGMI Winter Championship</h3>
          <p className="text-gray-400 text-sm mb-4">12/1/2023 - 12/31/2023</p>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Prize Pool</span>
              <span className="text-green-400 font-bold">₹30,00,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Teams</span>
              <span className="text-blue-400 font-bold">16</span>
            </div>
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TournamentsSection;