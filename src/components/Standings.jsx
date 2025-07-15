// Standings.jsx - Main standings page component
// TODO: Add real-time data updates, filtering options

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateOverallStandings, tournamentInfo, matchResults, teamsData, matchCompletionStatus } from '../data/standingsData';

const Standings = () => {
  // TODO: Add navigation functionality
  const navigate = useNavigate();

  // CHANGE THIS: Add state management for active tab
  const [activeTab, setActiveTab] = useState('overall'); // overall, matches
  const [selectedDay, setSelectedDay] = useState('day1');
  const [selectedMatch, setSelectedMatch] = useState('match1');

  // Get data
  const overallStandings = calculateOverallStandings();

  // Helper function to get first available match for a day
  const getFirstAvailableMatch = (day) => {
    const dayMatches = matchCompletionStatus[day] || {};
    const availableMatch = Object.keys(dayMatches).find(match => dayMatches[match]);
    return availableMatch || 'match1';
  };

  // Update selected match when day changes
  const handleDayChange = (day) => {
    setSelectedDay(day);
    const firstAvailable = getFirstAvailableMatch(day);
    setSelectedMatch(firstAvailable);
  };

  // Get rank badge styling
  const getRankBadge = (rank) => {
    if (rank === 1) return "bg-yellow-500 text-white"; // Gold
    if (rank === 2) return "bg-gray-400 text-white"; // Silver
    if (rank === 3) return "bg-orange-500 text-white"; // Bronze
    return "bg-gray-600 text-white";
  };

  // Get rank display
  const getRankDisplay = (rank) => {
    if (rank === 1) return "🥇 1st";
    if (rank === 2) return "🥈 2nd";
    if (rank === 3) return "🥉 3rd";
    return `#${rank}`;
  };

  const handleTeamClick = (teamId) => {
    // TODO: Navigate to team detail page
    console.log(`View team ${teamId} details`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Back Button */}
          <div className="flex items-center mb-4">
            <button 
              className="flex items-center text-gray-300 hover:text-white"
              onClick={() => {
                // TODO: Navigate back to tournaments/home
                navigate('/');
              }}
            >
              <span className="mr-2">←</span>
              Back to Tournaments
            </button>
          </div>

          {/* Tournament Title */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              {/* CHANGE THIS: Tournament name comes from data */}
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
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

        {/* Overall Standings Tab */}
        {activeTab === 'overall' && (
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
        )}

        {/* Match Results Tab */}
        {activeTab === 'matches' && (
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
                        <span className="ml-1 text-xs opacity-75">
                          ({completedMatches}/{totalMatches})
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
                  const isOngoing = selectedDay === 'day2' && match === 'match4'; // CHANGE THIS: Update ongoing match
                  
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
        )}
      </div>
    </div>
  );
};

export default Standings;
