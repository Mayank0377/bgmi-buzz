// Sample tournament data for admin dashboard
import { teamsData, matchResults, tournamentConfig } from './standingsData.js';

// Convert the existing match data to admin dashboard format
const convertMatchData = () => {
  const matches = [];
  let matchId = 1;
  
  Object.keys(matchResults).forEach(day => {
    Object.keys(matchResults[day]).forEach(match => {
      const matchData = matchResults[day][match];
      
      // Add teams data to match results
      const results = matchData.map(result => {
        const team = teamsData.find(t => t.id === result.teamId);
        return {
          ...result,
          teamName: team ? team.name : `Team ${result.teamId}`
        };
      });
      
      matches.push({
        id: matchId++,
        day: day,
        match: match,
        map: getMapForMatch(day, match),
        isCompleted: results.length > 0,
        completedAt: results.length > 0 ? "2025-07-20T14:00:00Z" : null,
        results: results
      });
    });
  });
  
  return matches;
};

// Helper function to assign maps to matches
const getMapForMatch = (day, match) => {
  const maps = ['Erangel', 'Sanhok', 'Miramar', 'Vikendi', 'Livik', 'Karakin'];
  const matchNumber = parseInt(match.replace('match', ''));
  return maps[(matchNumber - 1) % maps.length];
};

// Add member data to teams
const teamsWithMembers = teamsData.map(team => ({
  ...team,
  members: [`${team.name}_Player1`, `${team.name}_Player2`, `${team.name}_Player3`, `${team.name}_Player4`],
  registeredAt: "2025-07-15T10:00:00Z"
}));

export const sampleTournament = {
  id: 1,
  name: "BGMI Winter Championship 2025",
  status: "active",
  startDate: "2025-07-20",
  endDate: "2025-07-22",
  days: tournamentConfig.totalDays,
  prizePool: "₹50,000",
  entryFee: "₹100",
  maxTeams: 16,
  description: "Elite BGMI tournament featuring top 16 teams from across the region",
  rules: "1. Each team must have exactly 4 players\n2. No cheating, hacking, or third-party software allowed\n3. All matches will be streamed live\n4. Disputes will be resolved by admin decision\n5. Teams must join lobby 15 minutes before match time\n6. Late teams will be disqualified",
  map: "Mixed",
  gameMode: "Squad",
  teams: teamsWithMembers,
  matches: convertMatchData()
};

export const placementPoints = {
  1: 10,  // Winner (WWCD)
  2: 6,   // 2nd place
  3: 5,   // 3rd place
  4: 4,   // 4th place
  5: 3,   // 5th place
  6: 2,   // 6th place
  7: 1,   // 7th place
  8: 1,   // 8th place
  9: 0,   // 9th place and below
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
  16: 0
};

export const getPlacementPoints = (placement) => {
  return placementPoints[placement] || 0;
};
