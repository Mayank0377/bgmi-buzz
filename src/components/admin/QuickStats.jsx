import React from 'react';

const QuickStats = ({ tournament }) => {
  const completedMatches = tournament.matches?.filter(match => match.isCompleted).length || 0;
  const totalMatches = tournament.matches?.length || 0;
  const totalTeams = tournament.teams?.length || 0;
  const progressPercentage = totalMatches > 0 ? (completedMatches / totalMatches) * 100 : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex items-center">
          <div className="text-2xl mr-3">🏆</div>
          <div>
            <div className="text-sm text-gray-400">Tournament Status</div>
            <div className={`font-semibold ${
              tournament.status === 'active' ? 'text-green-400' : 
              tournament.status === 'upcoming' ? 'text-yellow-400' : 
              tournament.status === 'completed' ? 'text-blue-400' : 'text-gray-400'
            }`}>
              {tournament.status?.toUpperCase() || 'DRAFT'}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex items-center">
          <div className="text-2xl mr-3">👥</div>
          <div>
            <div className="text-sm text-gray-400">Registered Teams</div>
            <div className="text-xl font-bold text-white">{totalTeams}</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex items-center">
          <div className="text-2xl mr-3">🎮</div>
          <div>
            <div className="text-sm text-gray-400">Match Progress</div>
            <div className="text-xl font-bold text-white">{completedMatches}/{totalMatches}</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex items-center">
          <div className="text-2xl mr-3">📊</div>
          <div>
            <div className="text-sm text-gray-400">Completion</div>
            <div className="text-xl font-bold text-white">{Math.round(progressPercentage)}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
