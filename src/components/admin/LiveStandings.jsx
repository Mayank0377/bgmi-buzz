import React, { useState } from 'react';
import { calculateOverallStandings } from '../../data/standingsData';

const LiveStandings = ({ tournament }) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  // Use the existing standings calculation function
  const standings = calculateOverallStandings();

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Live Standings</h2>
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            refreshing
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {refreshing ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>

      {/* Tournament Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="text-gray-400 text-sm">Total Teams</div>
          <div className="text-2xl font-bold text-white">{tournament.teams?.length || 0}</div>
        </div>
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="text-gray-400 text-sm">Completed Matches</div>
          <div className="text-2xl font-bold text-white">
            {tournament.matches?.filter(m => m.isCompleted).length || 0}
          </div>
        </div>
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="text-gray-400 text-sm">Total Matches</div>
          <div className="text-2xl font-bold text-white">{tournament.matches?.length || 0}</div>
        </div>
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="text-gray-400 text-sm">Tournament Status</div>
          <div className={`text-lg font-semibold ${
            tournament.status === 'active' ? 'text-green-400' : 
            tournament.status === 'upcoming' ? 'text-yellow-400' : 'text-gray-400'
          }`}>
            {tournament.status?.toUpperCase() || 'DRAFT'}
          </div>
        </div>
      </div>

      {/* Standings Table */}
      <div className="bg-gray-700 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-600">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Team
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Total Points
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Kill Points
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Placement Points
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">
                  WWCD
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600">
              {standings.map((team, index) => (
                <tr key={team.id} className="hover:bg-gray-600 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-yellow-500 text-black' :
                        index === 1 ? 'bg-gray-400 text-black' :
                        index === 2 ? 'bg-orange-600 text-white' :
                        'bg-gray-700 text-white'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-xl mr-3">{team.logo}</div>
                      <div>
                        <div className="text-sm font-medium text-white">{team.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="text-sm font-bold text-white">{team.totalPoints}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="text-sm text-red-400">{team.totalKills}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="text-sm text-blue-400">{team.placementPoints}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="text-sm text-yellow-400">{team.wwcdCount}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {standings.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <div className="text-4xl mb-4">🏆</div>
          <div>No standings data available</div>
          <div className="text-sm">Complete some matches to see standings</div>
        </div>
      )}
    </div>
  );
};

export default LiveStandings;
