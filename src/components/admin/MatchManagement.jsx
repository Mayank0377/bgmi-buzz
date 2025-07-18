import React, { useState } from 'react';

const MatchManagement = ({ tournament, onUpdateMatch }) => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [matchResults, setMatchResults] = useState([]);

  // Group matches by day (assuming 6 matches per day)
  const matchesByDay = {};
  tournament.matches?.forEach((match, index) => {
    const day = Math.floor(index / 6) + 1; // 6 matches per day
    const matchNumber = (index % 6) + 1;
    if (!matchesByDay[day]) {
      matchesByDay[day] = [];
    }
    matchesByDay[day].push({
      ...match,
      matchNumber,
      originalIndex: index
    });
  });

  // Check if a day is completed (all matches in that day are completed)
  const isDayCompleted = (day) => {
    const dayMatches = matchesByDay[day];
    return dayMatches && dayMatches.every(match => match.isCompleted);
  };

  const handleMatchSelect = (match) => {
    setSelectedMatch(match);
    
    // If match has no results (pending), automatically generate team results with all registered teams
    if (!match.results || match.results.length === 0) {
      // Generate default team results for all 16 teams
      const defaultResults = [];
      for (let i = 1; i <= 16; i++) {
        const teamNames = [
          "Team RNTX", "Team SOUL", "Team GODLIKE", "Team ORANGUTAN", 
          "Team GDR", "Team K9", "Team TR", "Team RGE", 
          "Team 8BIT", "Team VXT", "Team CK", "Team TT", 
          "Team HH", "Team VE", "Team NONX", "Team LE"
        ];
        
        defaultResults.push({
          teamId: i,
          teamName: teamNames[i - 1],
          kills: 0,
          placement: 0,
          placementPoints: 0,
          totalPoints: 0
        });
      }
      setMatchResults(defaultResults);
    } else {
      setMatchResults(match.results);
    }
  };

  const handleAddTeamResult = () => {
    const newResult = {
      teamId: '',
      teamName: '',
      kills: 0,
      placement: matchResults.length + 1,
      placementPoints: 0,
      totalPoints: 0
    };
    setMatchResults([...matchResults, newResult]);
  };

  const handleUpdateResult = (index, field, value) => {
    const updatedResults = [...matchResults];
    updatedResults[index] = {
      ...updatedResults[index],
      [field]: value
    };

    // Calculate points if kills or placement changed
    if (field === 'kills' || field === 'placement') {
      const kills = parseInt(updatedResults[index].kills) || 0;
      const placement = parseInt(updatedResults[index].placement) || 0;
      const placementPoints = placement > 0 ? getPlacementPoints(placement) : 0;
      updatedResults[index].placementPoints = placementPoints;
      updatedResults[index].totalPoints = kills + placementPoints;
    }

    // If placement points are manually edited, recalculate total points
    if (field === 'placementPoints') {
      const kills = parseInt(updatedResults[index].kills) || 0;
      const placementPoints = parseInt(updatedResults[index].placementPoints) || 0;
      updatedResults[index].totalPoints = kills + placementPoints;
    }

    setMatchResults(updatedResults);
  };

  const handleRemoveResult = (index) => {
    const updatedResults = matchResults.filter((_, i) => i !== index);
    setMatchResults(updatedResults);
  };

  const handleSortByPoints = () => {
    const sortedResults = [...matchResults].sort((a, b) => {
      // Primary sort by total points (highest first)
      if (b.totalPoints !== a.totalPoints) {
        return b.totalPoints - a.totalPoints;
      }
      // Tiebreaker: sort by placement points (highest first)
      return b.placementPoints - a.placementPoints;
    });
    // Update final placement based on new sorted order
    sortedResults.forEach((result, index) => {
      result.placement = index + 1;
      result.placementPoints = getPlacementPoints(index + 1);
      result.totalPoints = parseInt(result.kills || 0) + result.placementPoints;
    });
    setMatchResults(sortedResults);
  };

  const handleSaveMatch = () => {
    if (selectedMatch) {
      const updatedMatch = {
        ...selectedMatch,
        results: matchResults,
        isCompleted: true,
        completedAt: new Date().toISOString()
      };
      onUpdateMatch(updatedMatch);
      setSelectedMatch(null);
      setMatchResults([]);
    }
  };

  const getPlacementPoints = (placement) => {
    const points = {
      1: 10, 2: 6, 3: 5, 4: 4, 5: 3, 6: 2, 7: 1, 8: 1
    };
    return points[placement] || 0;
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Match List */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Match Management</h3>
          
          {/* Day Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {Object.keys(matchesByDay).map(day => {
              const dayNum = parseInt(day);
              const isCompleted = isDayCompleted(day);
              const isSelected = selectedDay === dayNum;
              
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(dayNum)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isSelected
                      ? (isCompleted ? 'bg-green-600 text-white' : 'bg-blue-600 text-white')
                      : (isCompleted ? 'bg-green-700 hover:bg-green-600 text-green-100' : 'bg-gray-700 hover:bg-gray-600 text-gray-300')
                  }`}
                >
                  Day {day}
                  {isCompleted && <span className="ml-1 text-xs">✓</span>}
                </button>
              );
            })}
          </div>

          {/* Matches for Selected Day */}
          <div className="space-y-3">
            {matchesByDay[selectedDay]?.map((match) => (
              <div
                key={match.id}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedMatch?.id === match.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                }`}
                onClick={() => handleMatchSelect(match)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Match {match.matchNumber}</div>
                    <div className="text-sm opacity-75">
                      {match.map || 'Map not set'}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs px-2 py-1 rounded ${
                      match.isCompleted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-black'
                    }`}>
                      {match.isCompleted ? 'Complete' : 'Pending'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Match Details */}
        <div className="lg:col-span-2">
          {selectedMatch ? (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">
                  Day {selectedDay} - Match {selectedMatch.matchNumber} Results
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={handleSortByPoints}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Sort
                  </button>
                  <button
                    onClick={handleAddTeamResult}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Add Team
                  </button>
                  <button
                    onClick={handleSaveMatch}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Save Match
                  </button>
                </div>
              </div>

              {/* Match Results Table */}
              <div className="bg-gray-700 rounded-lg overflow-hidden">
                {/* Placement Points Reference */}
                <div className="bg-gray-600 px-4 py-2 text-xs text-gray-300">
                  <strong>Placement Points:</strong> 1st=10, 2nd=6, 3rd=5, 4th=4, 5th=3, 6th=2, 7th=1, 8th=1, 9th-16th=0
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-600">
                      <tr>
                        <th className="px-4 py-3 text-center text-white">Rank</th>
                        <th className="px-4 py-3 text-left text-white">Team Name</th>
                        <th className="px-4 py-3 text-center text-white">Kills</th>
                        <th className="px-4 py-3 text-center text-white">
                          Placement Points
                          <div className="text-xs text-gray-400 font-normal">(Editable)</div>
                        </th>
                        <th className="px-4 py-3 text-center text-white">Total Points</th>
                        <th className="px-4 py-3 text-center text-white">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {matchResults.map((result, index) => (
                        <tr key={index} className="border-b border-gray-600">
                          <td className="px-4 py-3 text-center">
                            <input
                              type="number"
                              value={result.placement}
                              onChange={(e) => handleUpdateResult(index, 'placement', e.target.value)}
                              onFocus={(e) => e.target.select()}
                              className="w-16 bg-gray-600 text-white rounded px-2 py-1 text-sm text-center"
                              min="1"
                              max="16"
                            />
                          </td>
                          <td className="px-4 py-3">
                            <input
                              type="text"
                              value={result.teamName}
                              onChange={(e) => handleUpdateResult(index, 'teamName', e.target.value)}
                              onFocus={(e) => e.target.select()}
                              className="w-full bg-gray-600 text-white rounded px-2 py-1 text-sm"
                              placeholder="Team Name"
                            />
                          </td>
                          <td className="px-4 py-3 text-center">
                            <input
                              type="number"
                              value={result.kills}
                              onChange={(e) => handleUpdateResult(index, 'kills', e.target.value)}
                              onFocus={(e) => e.target.select()}
                              className="w-16 bg-gray-600 text-white rounded px-2 py-1 text-sm text-center"
                              min="0"
                            />
                          </td>
                          <td className="px-4 py-3 text-center">
                            <input
                              type="number"
                              value={result.placementPoints}
                              onChange={(e) => handleUpdateResult(index, 'placementPoints', e.target.value)}
                              onFocus={(e) => e.target.select()}
                              className="w-16 bg-gray-600 text-white rounded px-2 py-1 text-sm text-center"
                              min="0"
                              max="10"
                            />
                          </td>
                          <td className="px-4 py-3 text-center">
                            <div className="text-lg font-bold text-white">{result.totalPoints}</div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <button
                              onClick={() => handleRemoveResult(index)}
                              className="text-red-400 hover:text-red-300 text-lg"
                            >
                              ×
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-gray-400">
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <div>Select a day and match to view and edit results</div>
                <div className="text-sm mt-2">Choose from Day {Object.keys(matchesByDay).join(', Day ')}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchManagement;
