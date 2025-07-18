import React from 'react';

const TournamentOverview = ({ tournament, onEditTournament }) => {
  const completedMatches = tournament.matches?.filter(match => match.isCompleted).length || 0;
  const totalMatches = tournament.matches?.length || 0;
  const progressPercentage = totalMatches > 0 ? (completedMatches / totalMatches) * 100 : 0;

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">{tournament.name}</h2>
        <button
          onClick={() => onEditTournament(tournament)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
        >
          Edit Tournament
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="text-gray-400 text-sm">Status</div>
          <div className={`text-lg font-semibold ${
            tournament.status === 'active' ? 'text-green-400' : 
            tournament.status === 'upcoming' ? 'text-yellow-400' : 'text-gray-400'
          }`}>
            {tournament.status?.toUpperCase() || 'DRAFT'}
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="text-gray-400 text-sm">Days</div>
          <div className="text-lg font-semibold text-white">
            {tournament.days || 0} Days
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="text-gray-400 text-sm">Matches</div>
          <div className="text-lg font-semibold text-white">
            {completedMatches}/{totalMatches}
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="text-gray-400 text-sm">Teams</div>
          <div className="text-lg font-semibold text-white">
            {tournament.teams?.length || 0}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Tournament Progress</span>
          <span className="text-sm text-gray-400">{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Tournament Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Tournament Info</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Start Date:</span>
              <span className="text-white">{tournament.startDate || 'Not set'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">End Date:</span>
              <span className="text-white">{tournament.endDate || 'Not set'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Prize Pool:</span>
              <span className="text-white">{tournament.prizePool || 'Not set'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Entry Fee:</span>
              <span className="text-white">{tournament.entryFee || 'Free'}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Next Actions</h3>
          <div className="space-y-2">
            {tournament.status === 'upcoming' && (
              <div className="text-sm text-yellow-400">
                • Tournament is scheduled to start
              </div>
            )}
            {tournament.status === 'active' && completedMatches < totalMatches && (
              <div className="text-sm text-green-400">
                • {totalMatches - completedMatches} matches remaining
              </div>
            )}
            {tournament.status === 'active' && completedMatches === totalMatches && (
              <div className="text-sm text-blue-400">
                • All matches completed - Review results
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentOverview;
