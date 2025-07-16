// TODO: I have to replace with API calls for real-time data
// Placement Point Criteria: 1st=10, 2nd=6, 3rd=5, 4th=4, 5th=3, 6th=2, 7th=1, 8th=1, 9th-16th=0
export const placementPoints = {
  1: 10,  // Winner (WWCD)
  2: 6,   // 2nd place
  3: 5,   // 3rd place
  4: 4,   // 4th place
  5: 3,   // 5th place
  6: 2,   // 6th place
  7: 1,   // 7th place
  8: 1,   // 8th place
  9: 0,   // 9th place
  10: 0,  // 10th place
  11: 0,  // 11th place
  12: 0,  // 12th place
  13: 0,  // 13th place
  14: 0,  // 14th place
  15: 0,  // 15th place
  16: 0   // 16th place
};

// Helper function to get placement points for a position
export const getPlacementPoints = (placement) => {
  return placementPoints[placement] || 0;
};

// Helper function to create match result entry
export const createMatchResult = (teamId, kills, placement) => ({
  teamId,
  kills,
  placement,
  placementPoints: getPlacementPoints(placement),
  totalPoints: kills + getPlacementPoints(placement)
});

// Helper function to generate default team standings for incomplete matches
export const generateDefaultTeamResults = (teamIds) => {
  return teamIds.map((teamId, index) => 
    createMatchResult(teamId, 0, index + 1)
  );
};

// CHANGE THIS: Update teams data as needed
export const teamsData = [
  { id: 1, name: "Team RNTX", logo: "⚡" },
  { id: 2, name: "Team SOUL", logo: "🥁" },
  { id: 3, name: "Team GODLIKE", logo: "🌟" },
  { id: 4, name: "Team ORANGUTAN", logo: "💎" },
  { id: 5, name: "Team GDR", logo: "🚀" },
  { id: 6, name: "Team K9", logo: "🎯" },
  { id: 7, name: "Team TR", logo: "🔮" },
  { id: 8, name: "Team RGE", logo: "⭐" },
  { id: 9, name: "Team 8BIT", logo: "🎪" },
  { id: 10, name: "Team VXT", logo: "🎭" },
  { id: 11, name: "Team CK", logo: "🎨" },
  { id: 12, name: "Team TT", logo: "🎲" },
  { id: 13, name: "Team HH", logo: "🎸" },
  { id: 14, name: "Team VE", logo: "🎺" },
  { id: 15, name: "Team NONX", logo: "🎻" },
  { id: 16, name: "Team LE ", logo: "🥁" }
];

export const teamIds = teamsData.map(team => team.id);

export const tournamentConfig = {
  totalDays: 3,
  matchesPerDay: 6,
  teamsPerMatch: 16
};

const generateMatchStatus = (day, completedMatches = 0) => {
  const status = {};
  for (let i = 1; i <= tournamentConfig.matchesPerDay; i++) {
    status[`match${i}`] = i <= completedMatches;
  }
  return status;
};

export const matchCompletionStatus = {
  day1: generateMatchStatus(1, 6), // All 6 matches completed
  day2: generateMatchStatus(2, 6), // All 6 matches completed  
  day3: generateMatchStatus(3, 1)  // Only 1 match completed, 5 pending
};


// Simplified match data: [teamId, kills, placement] - helper functions calculate the rest
const rawMatchData = {
  day1: {
    match1: [[1,8,1],[2,6,2],[3,4,3],[4,3,4],[5,5,5],[6,2,6],[7,1,7],[8,3,8],[9,2,9],[10,1,10],[11,0,11],[12,1,12],[13,2,13],[14,0,14],[15,1,15],[16,0,16]],
    match2: [[2,7,1],[1,5,2],[4,6,3],[3,2,4],[6,4,5],[5,1,6],[8,3,7],[7,2,8],[10,1,9],[9,0,10],[12,2,11],[11,1,12],[14,1,13],[13,0,14],[16,1,15],[15,0,16]],
    match3: [[3,9,1],[5,4,2],[1,3,3],[7,5,4],[2,2,5],[4,1,6],[9,3,7],[6,2,8],[11,1,9],[8,0,10],[13,2,11],[10,1,12],[15,1,13],[12,0,14],[16,0,15],[14,0,16]],
    match4: [[4,8,1],[6,5,2],[2,4,3],[8,6,4],[1,2,5],[3,1,6],[10,3,7],[5,1,8],[12,2,9],[7,0,10],[14,1,11],[9,1,12],[16,1,13],[11,0,14],[15,0,15],[13,0,16]],
    match5: [[5,7,1],[7,6,2],[9,4,3],[1,3,4],[11,5,5],[2,2,6],[13,2,7],[3,1,8],[15,2,9],[4,1,10],[16,1,11],[6,0,12],[12,1,13],[8,0,14],[14,0,15],[10,0,16]],
    match6: [[6,8,1],[8,5,2],[10,6,3],[12,4,4],[14,3,5],[16,2,6],[1,1,7],[15,2,8],[2,1,9],[3,0,10],[4,1,11],[5,0,12],[7,1,13],[9,0,14],[11,0,15],[13,0,16]]
  },
  day2: {
    match1: [[7,9,1],[9,5,2],[11,4,3],[13,6,4],[15,3,5],[1,2,6],[3,2,7],[5,1,8],[2,1,9],[4,0,10],[6,1,11],[8,0,12],[10,1,13],[12,0,14],[14,0,15],[16,0,16]],
    match2: [[8,7,1],[10,6,2],[12,5,3],[14,4,4],[16,3,5],[2,2,6],[4,3,7],[6,1,8],[1,1,9],[3,0,10],[5,1,11],[7,0,12],[9,1,13],[11,0,14],[13,0,15],[15,0,16]],
    match3: [[9,8,1],[11,5,2],[13,4,3],[15,6,4],[1,3,5],[3,2,6],[5,2,7],[7,1,8],[2,1,9],[4,0,10],[6,1,11],[8,0,12],[10,1,13],[12,0,14],[14,0,15],[16,0,16]],
    match4: [[10,7,1],[12,6,2],[14,5,3],[16,4,4],[2,3,5],[4,2,6],[6,3,7],[8,1,8],[1,1,9],[3,0,10],[5,1,11],[7,0,12],[9,1,13],[11,0,14],[13,0,15],[15,0,16]],
    match5: [[11,8,1],[13,5,2],[15,4,3],[1,6,4],[3,3,5],[5,2,6],[7,2,7],[9,1,8],[2,1,9],[4,0,10],[6,1,11],[8,0,12],[10,1,13],[12,0,14],[14,0,15],[16,0,16]],
    match6: [[12,9,1],[14,5,2],[16,4,3],[2,6,4],[4,3,5],[6,2,6],[8,2,7],[10,1,8],[1,1,9],[3,0,10],[5,1,11],[7,0,12],[9,1,13],[11,0,14],[13,0,15],[15,0,16]]
  },
  day3: {
    match1: [[13,8,1],[15,6,2],[1,5,3],[3,4,4],[5,3,5],[7,2,6],[9,2,7],[11,1,8],[2,1,9],[4,0,10],[6,1,11],[8,0,12],[10,1,13],[12,0,14],[14,0,15],[16,0,16]],
    match2: [], 
    match3: [],
    match4: [],
    match5: [],
    match6: []
  }
};

// Convert raw data to full match results using helper functions
export const matchResults = {};
Object.keys(rawMatchData).forEach(day => {
  matchResults[day] = {};
  Object.keys(rawMatchData[day]).forEach(match => {
    if (rawMatchData[day][match].length > 0) {
      matchResults[day][match] = rawMatchData[day][match].map(([teamId, kills, placement]) => 
        createMatchResult(teamId, kills, placement)
      );
    } else {
      matchResults[day][match] = [];
    }
  });
});

export const calculateOverallStandings = () => {
  const standings = teamsData.map(team => {
    let totalPoints = 0;
    let totalKills = 0;
    let placementPoints = 0;
    let wwcdCount = 0;

    Object.values(matchResults).forEach(day => {
      Object.values(day).forEach(match => {
        const teamResult = match.find(result => result.teamId === team.id);
        if (teamResult) {
          totalPoints += teamResult.totalPoints;
          totalKills += teamResult.kills;
          placementPoints += teamResult.placementPoints;
          if (teamResult.placement === 1) wwcdCount++;
        }
      });
    });

    return {
      ...team,
      totalPoints,
      totalKills,
      placementPoints,
      killPoints: totalKills,
      wwcdCount
    };
  });

  return standings.sort((a, b) => b.totalPoints - a.totalPoints);
};


export const tournamentInfo = {
  name: "BGMI Pro League Season 3",
  prizePool: "₹50,00,000",
  teams: teamsData.length,
  currentDay: 3,
  totalDays: tournamentConfig.totalDays,
  startDate: "Dec 15, 2024",
  status: "Live"
};

export const getCompletedMatchesCount = () => {
  let count = 0;
  Object.values(matchCompletionStatus).forEach(day => {
    Object.values(day).forEach(match => {
      if (match) count++;
    });
  });
  return count;
};

export const getTotalMatchesCount = () => {
  return tournamentConfig.totalDays * tournamentConfig.matchesPerDay;
};


export const addMatchResult = (day, matchNumber, results) => {
  if (!matchResults[day]) {
    matchResults[day] = {};
  }
  matchResults[day][`match${matchNumber}`] = results.map(([teamId, kills, placement]) => 
    createMatchResult(teamId, kills, placement)
  );
  

  if (!matchCompletionStatus[day]) {
    matchCompletionStatus[day] = {};
  }
  matchCompletionStatus[day][`match${matchNumber}`] = true;
};
