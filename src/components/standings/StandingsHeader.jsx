import React from 'react';

const StandingsHeader = ({ tournamentInfo, onBackClick }) => {
  return (
    <div className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Back Button */}
        <div className="flex items-center mb-4">
          <button 
            className="flex items-center text-gray-300 hover:text-white"
            onClick={onBackClick}
          >
            <span className="mr-2">←</span>
            Back to Tournaments
          </button>
        </div>

        {/* Tournament Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">
            {tournamentInfo.name}
          </h1>
          <div className="flex justify-center items-center space-x-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {tournamentInfo.status}
            </span>
            <span className="text-gray-400">
              Prize Pool: {tournamentInfo.prizePool}
            </span>
          </div>
        </div>

        {/* Tournament Stats */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-yellow-400 text-2xl font-bold flex items-center justify-center">
                <span className="mr-2">🏆</span>
                {tournamentInfo.prizePool}
              </div>
              <div className="text-gray-200 text-sm mt-1">Prize Pool</div>
            </div>
            <div>
              <div className="text-green-400 text-2xl font-bold flex items-center justify-center">
                <span className="mr-2">👥</span>
                {tournamentInfo.teams}
              </div>
              <div className="text-gray-200 text-sm mt-1">Teams</div>
            </div>
            <div>
              <div className="text-orange-400 text-2xl font-bold flex items-center justify-center">
                <span className="mr-2">🎯</span>
                {tournamentInfo.currentMatch}
              </div>
              <div className="text-gray-200 text-sm mt-1">Matches</div>
            </div>
            <div>
              <div className="text-purple-400 text-2xl font-bold flex items-center justify-center">
                <span className="mr-2">📅</span>
                {tournamentInfo.startDate}
              </div>
              <div className="text-gray-200 text-sm mt-1">Started</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandingsHeader;
