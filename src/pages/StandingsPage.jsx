import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateOverallStandings, tournamentInfo, matchResults, teamsData, matchCompletionStatus } from '../data/standingsData';
import StandingsHeader from '../components/standings/StandingsHeader';
import StandingsTabs from '../components/standings/StandingsTabs';
import OverallStandingsTab from '../components/standings/OverallStandingsTab';
import MatchResultsTab from '../components/standings/MatchResultsTab';

const StandingsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overall');
  const [selectedDay, setSelectedDay] = useState('day1');
  const [selectedMatch, setSelectedMatch] = useState('match1');

  const overallStandings = calculateOverallStandings();

  const getFirstAvailableMatch = (day) => {
    const dayMatches = matchCompletionStatus[day] || {};
    const availableMatch = Object.keys(dayMatches).find(match => dayMatches[match]);
    return availableMatch || 'match1';
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
    const firstAvailable = getFirstAvailableMatch(day);
    setSelectedMatch(firstAvailable);
  };

  const getRankBadge = (rank) => {
    if (rank === 1) return "bg-yellow-500 text-white";
    if (rank === 2) return "bg-gray-400 text-white";
    if (rank === 3) return "bg-orange-500 text-white";
    return "bg-gray-600 text-white";
  };

  const getRankDisplay = (rank) => {
    if (rank === 1) return "🥇 1st";
    if (rank === 2) return "🥈 2nd";
    if (rank === 3) return "🥉 3rd";
    return `#${rank}`;
  };

  const handleTeamClick = (teamId) => {
    console.log(`View team ${teamId} details`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <StandingsHeader 
        tournamentInfo={tournamentInfo}
        onBackClick={() => navigate('/')}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StandingsTabs 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === 'overall' && (
          <OverallStandingsTab
            overallStandings={overallStandings}
            getRankBadge={getRankBadge}
            getRankDisplay={getRankDisplay}
            handleTeamClick={handleTeamClick}
          />
        )}

        {activeTab === 'matches' && (
          <MatchResultsTab
            matchResults={matchResults}
            matchCompletionStatus={matchCompletionStatus}
            selectedDay={selectedDay}
            selectedMatch={selectedMatch}
            handleDayChange={handleDayChange}
            setSelectedMatch={setSelectedMatch}
            teamsData={teamsData}
          />
        )}
      </div>
    </div>
  );
};

export default StandingsPage;
