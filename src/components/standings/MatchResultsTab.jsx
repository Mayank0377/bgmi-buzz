import React from 'react';

const MatchResultsTab = ({ 
  matchResults, 
  matchCompletionStatus, 
  selectedDay, 
  selectedMatch, 
  handleDayChange, 
  setSelectedMatch, 
  teamsData 
}) => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="mr-2">🎯</span>
          Day-wise Match Results
        </h2>

        {/* Day Selection */}
        <div className="flex space-x-2 mb-6">
          {Object.keys(matchResults).map((day) => {
            const dayMatches = matchCompletionStatus[day];
            const completedMatches = Object.values(dayMatches).filter(Boolean).length;
            const totalMatches = Object.keys(dayMatches).length;
            const isDayComplete = completedMatches === totalMatches;
            const hasAnyMatches = completedMatches > 0;
            
            return (
              <button
                key={day}
                onClick={() => hasAnyMatches && handleDayChange(day)}
                disabled={!hasAnyMatches}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedDay === day && hasAnyMatches
                    ? 'bg-red-600 text-white shadow-lg'
                    : hasAnyMatches
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    : 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50'
                }`}
              >
                <span className="flex items-center">
                  {isDayComplete ? '✅' : hasAnyMatches ? '🔴' : '⏳'}
                  <span className="ml-2">
                    {day === 'day1' ? 'Day 1' : day === 'day2' ? 'Day 2' : 'Day 3'}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Match Selection */}
        <div className="flex space-x-2 mb-6">
          {Object.keys(matchResults[selectedDay] || {}).map((match) => {
            const isCompleted = matchCompletionStatus[selectedDay]?.[match];
            const isOngoing = selectedDay === 'day2' && match === 'match4';
            
            return (
              <button
                key={match}
                onClick={() => isCompleted && setSelectedMatch(match)}
                disabled={!isCompleted}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedMatch === match && isCompleted
                    ? 'bg-red-600 text-white shadow-lg'
                    : isCompleted
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    : isOngoing
                    ? 'bg-yellow-600 text-white animate-pulse'
                    : 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50'
                }`}
              >
                <span className="flex items-center">
                  {isCompleted ? '✅' : isOngoing ? '🔴' : '⏳'} 
                  <span className="ml-1">
                    {match === 'match1' ? 'Match 1' : match === 'match2' ? 'Match 2' : `Match ${match.slice(-1)}`}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Match Results Table */}
        {matchResults[selectedDay] && matchResults[selectedDay][selectedMatch] && matchCompletionStatus[selectedDay]?.[selectedMatch] ? (
          <div>
            <h3 className="text-lg font-bold text-red-400 mb-4">
              {selectedDay.replace('day', 'Day ')} - {selectedMatch.replace('match', 'Match ')} Results
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">Rank</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Team</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">Kills</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">Placement Pts</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">Total Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {matchResults[selectedDay][selectedMatch]
                    .sort((a, b) => a.placement - b.placement)
                    .map((result) => {
                      const team = teamsData.find(t => t.id === result.teamId);
                      const rank = result.placement;
                      const isWWCD = result.placement === 1;
                      
                      return (
                        <tr key={result.teamId} className="border-b border-gray-700 hover:bg-gray-700">
                          {/* Rank */}
                          <td className="py-3 px-4 text-center">
                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                              rank === 1 ? 'bg-yellow-500 text-white' :
                              rank === 2 ? 'bg-gray-400 text-white' :
                              rank === 3 ? 'bg-orange-500 text-white' :
                              'bg-gray-600 text-white'
                            }`}>
                              {rank}
                            </span>
                          </td>
                          
                          {/* Team */}
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              <div className="bg-gray-600 p-2 rounded-lg mr-3">
                                <span className="text-lg">{team?.logo}</span>
                              </div>
                              <div>
                                <span className="text-blue-400 font-medium">{team?.name}</span>
                                {isWWCD && <span className="ml-2 text-yellow-400 font-bold">🏆 WWCD</span>}
                              </div>
                            </div>
                          </td>
                          
                          {/* Kills */}
                          <td className="py-3 px-4 text-center">
                            <span className="text-red-400 font-bold text-lg">⚡ {result.kills}</span>
                          </td>
                          
                          {/* Placement Points */}
                          <td className="py-3 px-4 text-center">
                            <span className="text-purple-400 font-bold text-lg">{result.placementPoints}</span>
                          </td>
                          
                          {/* Total Points */}
                          <td className="py-3 px-4 text-center">
                            <span className="text-blue-400 font-bold text-xl">{result.totalPoints}</span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">⏳</div>
            <h3 className="text-xl font-bold text-gray-400 mb-2">Match Not Available</h3>
            <p className="text-gray-500">
              {selectedDay.replace('day', 'Day ')} - {selectedMatch.replace('match', 'Match ')} hasn't been completed yet.
            </p>
            <p className="text-gray-500 mt-2">
              Please select a completed match to view results.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchResultsTab;
