import React from 'react';

const OverallStandingsTab = ({ overallStandings, getRankBadge, getRankDisplay, handleTeamClick }) => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="mr-2">🏆</span>
          Overall Tournament Standings
        </h2>
        <p className="text-gray-400 mb-6">
          Click on team names to view player details
        </p>

        {/* Standings Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Rank</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Team</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">WWCD</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Placement Points</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Kill Points</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Total Points</th>
              </tr>
            </thead>
            <tbody>
              {overallStandings.map((team, index) => {
                const rank = index + 1;
                return (
                  <tr
                    key={team.id}
                    className="border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleTeamClick(team.id)}
                  >
                    {/* Rank */}
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-sm font-medium ${getRankBadge(rank)}`}>
                        {getRankDisplay(rank)}
                      </span>
                    </td>

                    {/* Team */}
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="bg-gray-600 p-2 rounded-lg mr-3">
                          <span className="text-lg">{team.logo}</span>
                        </div>
                        <div>
                          <div className="text-blue-400 font-medium hover:text-blue-300">
                            {team.name}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* WWCD */}
                    <td className="py-4 px-4 text-right">
                      <span className="text-green-400 font-bold">{team.wwcdCount}</span>
                    </td>

                    {/* Placement Points */}
                    <td className="py-4 px-4 text-right">
                      <span className="text-purple-400 font-bold">{team.placementPoints}</span>
                    </td>

                    {/* Kill Points */}
                    <td className="py-4 px-4 text-right">
                      <span className="text-red-400 font-bold flex items-center justify-end">
                        <span className="mr-1">⚡</span>
                        {team.killPoints}
                      </span>
                    </td>

                    {/* Total Points */}
                    <td className="py-4 px-4 text-right">
                      <span className="text-blue-400 font-bold text-lg">{team.totalPoints}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OverallStandingsTab;
