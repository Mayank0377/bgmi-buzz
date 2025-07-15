// standingsData.js - Tournament standings and match results data
// TODO: Replace with API calls for real-time data

// CHANGE THIS: Update placement points system - Admin controlled
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

// CHANGE THIS: Update teams data as needed
export const teamsData = [
  { id: 1, name: "Team Alpha", logo: "🔥" },
  { id: 2, name: "Team Beta", logo: "⚡" },
  { id: 3, name: "Team Gamma", logo: "🌟" },
  { id: 4, name: "Team Delta", logo: "💎" },
  { id: 5, name: "Team Echo", logo: "🚀" },
  { id: 6, name: "Team Foxtrot", logo: "🎯" },
  { id: 7, name: "Team Golf", logo: "🔮" },
  { id: 8, name: "Team Hotel", logo: "⭐" },
  { id: 9, name: "Team India", logo: "🎪" },
  { id: 10, name: "Team Juliet", logo: "🎭" },
  { id: 11, name: "Team Kilo", logo: "🎨" },
  { id: 12, name: "Team Lima", logo: "🎲" },
  { id: 13, name: "Team Mike", logo: "🎸" },
  { id: 14, name: "Team November", logo: "🎺" },
  { id: 15, name: "Team Oscar", logo: "🎻" },
  { id: 16, name: "Team Papa", logo: "🥁" }
];

// CHANGE THIS: Track which matches are completed
export const matchCompletionStatus = {
  day1: {
    match1: true,
    match2: true,
    match3: true,
    match4: true,
    match5: true,
    match6: true
  },
  day2: {
    match1: true,
    match2: true,
    match3: true,
    match4: false, // Currently ongoing or upcoming
    match5: false,
    match6: false
  },
  day3: {
    match1: false,
    match2: false,
    match3: false,
    match4: false,
    match5: false,
    match6: false
  }
};

// CHANGE THIS: Update match results data - 6 matches per day
// Admin Note: When updating standings, modify the match results below
// Ensure placementPoints follow the criteria: 10,6,5,4,3,2,1,1,0 for positions 1-8,9-16
// totalPoints = kills + placementPoints
export const matchResults = {
  day1: {
    match1: [
      { teamId: 1, kills: 8, placement: 1, placementPoints: 10, totalPoints: 18 },
      { teamId: 2, kills: 6, placement: 2, placementPoints: 6, totalPoints: 12 },
      { teamId: 3, kills: 4, placement: 3, placementPoints: 5, totalPoints: 9 },
      { teamId: 4, kills: 3, placement: 4, placementPoints: 4, totalPoints: 7 },
      { teamId: 5, kills: 5, placement: 5, placementPoints: 3, totalPoints: 8 },
      { teamId: 6, kills: 2, placement: 6, placementPoints: 2, totalPoints: 4 },
      { teamId: 7, kills: 1, placement: 7, placementPoints: 1, totalPoints: 2 },
      { teamId: 8, kills: 3, placement: 8, placementPoints: 1, totalPoints: 4 },
      { teamId: 9, kills: 2, placement: 9, placementPoints: 0, totalPoints: 2 },
      { teamId: 10, kills: 1, placement: 10, placementPoints: 0, totalPoints: 1 },
      { teamId: 11, kills: 0, placement: 11, placementPoints: 0, totalPoints: 0 },
      { teamId: 12, kills: 1, placement: 12, placementPoints: 0, totalPoints: 1 },
      { teamId: 13, kills: 2, placement: 13, placementPoints: 0, totalPoints: 2 },
      { teamId: 14, kills: 0, placement: 14, placementPoints: 0, totalPoints: 0 },
      { teamId: 15, kills: 1, placement: 15, placementPoints: 0, totalPoints: 1 },
      { teamId: 16, kills: 0, placement: 16, placementPoints: 0, totalPoints: 0 }
    ],
    match2: [
      { teamId: 2, kills: 7, placement: 1, placementPoints: 10, totalPoints: 17 },
      { teamId: 1, kills: 5, placement: 2, placementPoints: 6, totalPoints: 11 },
      { teamId: 4, kills: 6, placement: 3, placementPoints: 5, totalPoints: 11 },
      { teamId: 3, kills: 2, placement: 4, placementPoints: 4, totalPoints: 6 },
      { teamId: 6, kills: 4, placement: 5, placementPoints: 3, totalPoints: 7 },
      { teamId: 5, kills: 1, placement: 6, placementPoints: 2, totalPoints: 3 },
      { teamId: 8, kills: 3, placement: 7, placementPoints: 1, totalPoints: 4 },
      { teamId: 7, kills: 2, placement: 8, placementPoints: 1, totalPoints: 3 },
      { teamId: 10, kills: 1, placement: 9, placementPoints: 0, totalPoints: 1 },
      { teamId: 9, kills: 0, placement: 10, placementPoints: 0, totalPoints: 0 },
      { teamId: 12, kills: 2, placement: 11, placementPoints: 0, totalPoints: 2 },
      { teamId: 11, kills: 1, placement: 12, placementPoints: 0, totalPoints: 1 },
      { teamId: 14, kills: 1, placement: 13, placementPoints: 0, totalPoints: 1 },
      { teamId: 13, kills: 0, placement: 14, placementPoints: 0, totalPoints: 0 },
      { teamId: 16, kills: 1, placement: 15, placementPoints: 0, totalPoints: 1 },
      { teamId: 15, kills: 0, placement: 16, placementPoints: 0, totalPoints: 0 }
    ],
    match3: [
      { teamId: 3, kills: 9, placement: 1, placementPoints: 10, totalPoints: 19 },
      { teamId: 5, kills: 4, placement: 2, placementPoints: 6, totalPoints: 10 },
      { teamId: 1, kills: 3, placement: 3, placementPoints: 5, totalPoints: 8 },
      { teamId: 7, kills: 5, placement: 4, placementPoints: 4, totalPoints: 9 },
      { teamId: 2, kills: 2, placement: 5, placementPoints: 3, totalPoints: 5 },
      { teamId: 4, kills: 1, placement: 6, placementPoints: 2, totalPoints: 3 },
      { teamId: 9, kills: 3, placement: 7, placementPoints: 1, totalPoints: 4 },
      { teamId: 6, kills: 2, placement: 8, placementPoints: 1, totalPoints: 3 },
      { teamId: 11, kills: 1, placement: 9, placementPoints: 0, totalPoints: 1 },
      { teamId: 8, kills: 0, placement: 10, placementPoints: 0, totalPoints: 0 },
      { teamId: 13, kills: 2, placement: 11, placementPoints: 0, totalPoints: 2 },
      { teamId: 10, kills: 1, placement: 12, placementPoints: 0, totalPoints: 1 },
      { teamId: 15, kills: 1, placement: 13, placementPoints: 0, totalPoints: 1 },
      { teamId: 12, kills: 0, placement: 14, placementPoints: 0, totalPoints: 0 },
      { teamId: 16, kills: 0, placement: 15, placementPoints: 0, totalPoints: 0 },
      { teamId: 14, kills: 0, placement: 16, placementPoints: 0, totalPoints: 0 }
    ],
    match4: [
      { teamId: 4, kills: 8, placement: 1, placementPoints: 10, totalPoints: 18 },
      { teamId: 6, kills: 5, placement: 2, placementPoints: 6, totalPoints: 11 },
      { teamId: 2, kills: 4, placement: 3, placementPoints: 5, totalPoints: 9 },
      { teamId: 8, kills: 6, placement: 4, placementPoints: 4, totalPoints: 10 },
      { teamId: 1, kills: 2, placement: 5, placementPoints: 3, totalPoints: 5 },
      { teamId: 3, kills: 1, placement: 6, placementPoints: 2, totalPoints: 3 },
      { teamId: 10, kills: 3, placement: 7, placementPoints: 1, totalPoints: 4 },
      { teamId: 5, kills: 1, placement: 8, placementPoints: 1, totalPoints: 2 },
      { teamId: 12, kills: 2, placement: 9, placementPoints: 0, totalPoints: 2 },
      { teamId: 7, kills: 0, placement: 10, placementPoints: 0, totalPoints: 0 },
      { teamId: 14, kills: 1, placement: 11, placementPoints: 0, totalPoints: 1 },
      { teamId: 9, kills: 1, placement: 12, placementPoints: 0, totalPoints: 1 },
      { teamId: 16, kills: 1, placement: 13, placementPoints: 0, totalPoints: 1 },
      { teamId: 11, kills: 0, placement: 14, placementPoints: 0, totalPoints: 0 },
      { teamId: 15, kills: 0, placement: 15, placementPoints: 0, totalPoints: 0 },
      { teamId: 13, kills: 0, placement: 16, placementPoints: 0, totalPoints: 0 }
    ],
    match5: [
      { teamId: 5, kills: 7, placement: 1, placementPoints: 10, totalPoints: 17 },
      { teamId: 7, kills: 6, placement: 2, placementPoints: 6, totalPoints: 12 },
      { teamId: 9, kills: 4, placement: 3, placementPoints: 5, totalPoints: 9 },
      { teamId: 1, kills: 3, placement: 4, placementPoints: 4, totalPoints: 7 },
      { teamId: 11, kills: 5, placement: 5, placementPoints: 3, totalPoints: 8 },
      { teamId: 2, kills: 2, placement: 6, placementPoints: 2, totalPoints: 4 },
      { teamId: 13, kills: 2, placement: 7, placementPoints: 1, totalPoints: 3 },
      { teamId: 3, kills: 1, placement: 8, placementPoints: 1, totalPoints: 2 },
      { teamId: 15, kills: 2, placement: 9, placementPoints: 0, totalPoints: 2 },
      { teamId: 4, kills: 1, placement: 10, placementPoints: 0, totalPoints: 1 },
      { teamId: 16, kills: 1, placement: 11, placementPoints: 0, totalPoints: 1 },
      { teamId: 6, kills: 0, placement: 12, placementPoints: 0, totalPoints: 0 },
      { teamId: 12, kills: 1, placement: 13, placementPoints: 0, totalPoints: 1 },
      { teamId: 8, kills: 0, placement: 14, placementPoints: 0, totalPoints: 0 },
      { teamId: 14, kills: 0, placement: 15, placementPoints: 0, totalPoints: 0 },
      { teamId: 10, kills: 0, placement: 16, placementPoints: 0, totalPoints: 0 }
    ],
    match6: [
      { teamId: 6, kills: 8, placement: 1, placementPoints: 10, totalPoints: 18 },
      { teamId: 8, kills: 5, placement: 2, placementPoints: 6, totalPoints: 11 },
      { teamId: 10, kills: 6, placement: 3, placementPoints: 5, totalPoints: 11 },
      { teamId: 12, kills: 4, placement: 4, placementPoints: 4, totalPoints: 8 },
      { teamId: 14, kills: 3, placement: 5, placementPoints: 3, totalPoints: 6 },
      { teamId: 16, kills: 2, placement: 6, placementPoints: 2, totalPoints: 4 },
      { teamId: 1, kills: 1, placement: 7, placementPoints: 1, totalPoints: 2 },
      { teamId: 15, kills: 2, placement: 8, placementPoints: 1, totalPoints: 3 },
      { teamId: 2, kills: 1, placement: 9, placementPoints: 0, totalPoints: 1 },
      { teamId: 3, kills: 0, placement: 10, placementPoints: 0, totalPoints: 0 },
      { teamId: 4, kills: 1, placement: 11, placementPoints: 0, totalPoints: 1 },
      { teamId: 5, kills: 0, placement: 12, placementPoints: 0, totalPoints: 0 },
      { teamId: 7, kills: 1, placement: 13, placementPoints: 0, totalPoints: 1 },
      { teamId: 9, kills: 0, placement: 14, placementPoints: 0, totalPoints: 0 },
      { teamId: 11, kills: 0, placement: 15, placementPoints: 0, totalPoints: 0 },
      { teamId: 13, kills: 0, placement: 16, placementPoints: 0, totalPoints: 0 }
    ]
  },
  day2: {
    match1: [
      { teamId: 7, kills: 9, placement: 1, placementPoints: 10, totalPoints: 19 },
      { teamId: 9, kills: 5, placement: 2, placementPoints: 6, totalPoints: 11 },
      { teamId: 11, kills: 4, placement: 3, placementPoints: 5, totalPoints: 9 },
      { teamId: 13, kills: 6, placement: 4, placementPoints: 4, totalPoints: 10 },
      { teamId: 15, kills: 3, placement: 5, placementPoints: 3, totalPoints: 6 },
      { teamId: 1, kills: 2, placement: 6, placementPoints: 2, totalPoints: 4 },
      { teamId: 3, kills: 2, placement: 7, placementPoints: 1, totalPoints: 3 },
      { teamId: 5, kills: 1, placement: 8, placementPoints: 1, totalPoints: 2 },
      { teamId: 2, kills: 1, placement: 9, placementPoints: 0, totalPoints: 1 },
      { teamId: 4, kills: 0, placement: 10, placementPoints: 0, totalPoints: 0 },
      { teamId: 6, kills: 1, placement: 11, placementPoints: 0, totalPoints: 1 },
      { teamId: 8, kills: 0, placement: 12, placementPoints: 0, totalPoints: 0 },
      { teamId: 10, kills: 1, placement: 13, placementPoints: 0, totalPoints: 1 },
      { teamId: 12, kills: 0, placement: 14, placementPoints: 0, totalPoints: 0 },
      { teamId: 14, kills: 0, placement: 15, placementPoints: 0, totalPoints: 0 },
      { teamId: 16, kills: 0, placement: 16, placementPoints: 0, totalPoints: 0 }
    ],
    match2: [
      { teamId: 8, kills: 7, placement: 1, placementPoints: 10, totalPoints: 17 },
      { teamId: 10, kills: 6, placement: 2, placementPoints: 6, totalPoints: 12 },
      { teamId: 12, kills: 5, placement: 3, placementPoints: 5, totalPoints: 10 },
      { teamId: 14, kills: 4, placement: 4, placementPoints: 4, totalPoints: 8 },
      { teamId: 16, kills: 3, placement: 5, placementPoints: 3, totalPoints: 6 },
      { teamId: 2, kills: 2, placement: 6, placementPoints: 2, totalPoints: 4 },
      { teamId: 4, kills: 3, placement: 7, placementPoints: 1, totalPoints: 4 },
      { teamId: 6, kills: 1, placement: 8, placementPoints: 1, totalPoints: 2 },
      { teamId: 1, kills: 1, placement: 9, placementPoints: 0, totalPoints: 1 },
      { teamId: 3, kills: 0, placement: 10, placementPoints: 0, totalPoints: 0 },
      { teamId: 5, kills: 1, placement: 11, placementPoints: 0, totalPoints: 1 },
      { teamId: 7, kills: 0, placement: 12, placementPoints: 0, totalPoints: 0 },
      { teamId: 9, kills: 1, placement: 13, placementPoints: 0, totalPoints: 1 },
      { teamId: 11, kills: 0, placement: 14, placementPoints: 0, totalPoints: 0 },
      { teamId: 13, kills: 0, placement: 15, placementPoints: 0, totalPoints: 0 },
      { teamId: 15, kills: 0, placement: 16, placementPoints: 0, totalPoints: 0 }
    ],
    match3: [
      { teamId: 9, kills: 8, placement: 1, placementPoints: 10, totalPoints: 18 },
      { teamId: 11, kills: 5, placement: 2, placementPoints: 6, totalPoints: 11 },
      { teamId: 13, kills: 4, placement: 3, placementPoints: 5, totalPoints: 9 },
      { teamId: 15, kills: 6, placement: 4, placementPoints: 4, totalPoints: 10 },
      { teamId: 1, kills: 3, placement: 5, placementPoints: 3, totalPoints: 6 },
      { teamId: 3, kills: 2, placement: 6, placementPoints: 2, totalPoints: 4 },
      { teamId: 5, kills: 2, placement: 7, placementPoints: 1, totalPoints: 3 },
      { teamId: 7, kills: 1, placement: 8, placementPoints: 1, totalPoints: 2 },
      { teamId: 2, kills: 1, placement: 9, placementPoints: 0, totalPoints: 1 },
      { teamId: 4, kills: 0, placement: 10, placementPoints: 0, totalPoints: 0 },
      { teamId: 6, kills: 1, placement: 11, placementPoints: 0, totalPoints: 1 },
      { teamId: 8, kills: 0, placement: 12, placementPoints: 0, totalPoints: 0 },
      { teamId: 10, kills: 1, placement: 13, placementPoints: 0, totalPoints: 1 },
      { teamId: 12, kills: 0, placement: 14, placementPoints: 0, totalPoints: 0 },
      { teamId: 14, kills: 0, placement: 15, placementPoints: 0, totalPoints: 0 },
      { teamId: 16, kills: 0, placement: 16, placementPoints: 0, totalPoints: 0 }
    ],
    match4: [
      { teamId: 10, kills: 7, placement: 1, placementPoints: 10, totalPoints: 17 },
      { teamId: 12, kills: 6, placement: 2, placementPoints: 6, totalPoints: 12 },
      { teamId: 14, kills: 5, placement: 3, placementPoints: 5, totalPoints: 10 },
      { teamId: 16, kills: 4, placement: 4, placementPoints: 4, totalPoints: 8 },
      { teamId: 2, kills: 3, placement: 5, placementPoints: 3, totalPoints: 6 },
      { teamId: 4, kills: 2, placement: 6, placementPoints: 2, totalPoints: 4 },
      { teamId: 6, kills: 3, placement: 7, placementPoints: 1, totalPoints: 4 },
      { teamId: 8, kills: 1, placement: 8, placementPoints: 1, totalPoints: 2 },
      { teamId: 1, kills: 1, placement: 9, placementPoints: 0, totalPoints: 1 },
      { teamId: 3, kills: 0, placement: 10, placementPoints: 0, totalPoints: 0 },
      { teamId: 5, kills: 1, placement: 11, placementPoints: 0, totalPoints: 1 },
      { teamId: 7, kills: 0, placement: 12, placementPoints: 0, totalPoints: 0 },
      { teamId: 9, kills: 1, placement: 13, placementPoints: 0, totalPoints: 1 },
      { teamId: 11, kills: 0, placement: 14, placementPoints: 0, totalPoints: 0 },
      { teamId: 13, kills: 0, placement: 15, placementPoints: 0, totalPoints: 0 },
      { teamId: 15, kills: 0, placement: 16, placementPoints: 0, totalPoints: 0 }
    ],
    match5: [
      { teamId: 11, kills: 8, placement: 1, placementPoints: 10, totalPoints: 18 },
      { teamId: 13, kills: 5, placement: 2, placementPoints: 6, totalPoints: 11 },
      { teamId: 15, kills: 4, placement: 3, placementPoints: 5, totalPoints: 9 },
      { teamId: 1, kills: 6, placement: 4, placementPoints: 4, totalPoints: 10 },
      { teamId: 3, kills: 3, placement: 5, placementPoints: 3, totalPoints: 6 },
      { teamId: 5, kills: 2, placement: 6, placementPoints: 2, totalPoints: 4 },
      { teamId: 7, kills: 2, placement: 7, placementPoints: 1, totalPoints: 3 },
      { teamId: 9, kills: 1, placement: 8, placementPoints: 1, totalPoints: 2 },
      { teamId: 2, kills: 1, placement: 9, placementPoints: 0, totalPoints: 1 },
      { teamId: 4, kills: 0, placement: 10, placementPoints: 0, totalPoints: 0 },
      { teamId: 6, kills: 1, placement: 11, placementPoints: 0, totalPoints: 1 },
      { teamId: 8, kills: 0, placement: 12, placementPoints: 0, totalPoints: 0 },
      { teamId: 10, kills: 1, placement: 13, placementPoints: 0, totalPoints: 1 },
      { teamId: 12, kills: 0, placement: 14, placementPoints: 0, totalPoints: 0 },
      { teamId: 14, kills: 0, placement: 15, placementPoints: 0, totalPoints: 0 },
      { teamId: 16, kills: 0, placement: 16, placementPoints: 0, totalPoints: 0 }
    ],
    match6: [
      { teamId: 12, kills: 9, placement: 1, placementPoints: 10, totalPoints: 19 },
      { teamId: 14, kills: 5, placement: 2, placementPoints: 6, totalPoints: 11 },
      { teamId: 16, kills: 4, placement: 3, placementPoints: 5, totalPoints: 9 },
      { teamId: 2, kills: 6, placement: 4, placementPoints: 4, totalPoints: 10 },
      { teamId: 4, kills: 3, placement: 5, placementPoints: 3, totalPoints: 6 },
      { teamId: 6, kills: 2, placement: 6, placementPoints: 2, totalPoints: 4 },
      { teamId: 8, kills: 2, placement: 7, placementPoints: 1, totalPoints: 3 },
      { teamId: 10, kills: 1, placement: 8, placementPoints: 1, totalPoints: 2 },
      { teamId: 1, kills: 1, placement: 9, placementPoints: 0, totalPoints: 1 },
      { teamId: 3, kills: 0, placement: 10, placementPoints: 0, totalPoints: 0 },
      { teamId: 5, kills: 1, placement: 11, placementPoints: 0, totalPoints: 1 },
      { teamId: 7, kills: 0, placement: 12, placementPoints: 0, totalPoints: 0 },
      { teamId: 9, kills: 1, placement: 13, placementPoints: 0, totalPoints: 1 },
      { teamId: 11, kills: 0, placement: 14, placementPoints: 0, totalPoints: 0 },
      { teamId: 13, kills: 0, placement: 15, placementPoints: 0, totalPoints: 0 },
      { teamId: 15, kills: 0, placement: 16, placementPoints: 0, totalPoints: 0 }
    ]
  },
  day3: {
    match1: [
      { teamId: 13, kills: 8, placement: 1, placementPoints: 10, totalPoints: 18 },
      { teamId: 15, kills: 6, placement: 2, placementPoints: 6, totalPoints: 12 },
      { teamId: 1, kills: 5, placement: 3, placementPoints: 5, totalPoints: 10 },
      { teamId: 3, kills: 4, placement: 4, placementPoints: 4, totalPoints: 8 },
      { teamId: 5, kills: 3, placement: 5, placementPoints: 3, totalPoints: 6 },
      { teamId: 7, kills: 2, placement: 6, placementPoints: 2, totalPoints: 4 },
      { teamId: 9, kills: 2, placement: 7, placementPoints: 1, totalPoints: 3 },
      { teamId: 11, kills: 1, placement: 8, placementPoints: 1, totalPoints: 2 },
      { teamId: 2, kills: 1, placement: 9, placementPoints: 0, totalPoints: 1 },
      { teamId: 4, kills: 0, placement: 10, placementPoints: 0, totalPoints: 0 },
      { teamId: 6, kills: 1, placement: 11, placementPoints: 0, totalPoints: 1 },
      { teamId: 8, kills: 0, placement: 12, placementPoints: 0, totalPoints: 0 },
      { teamId: 10, kills: 1, placement: 13, placementPoints: 0, totalPoints: 1 },
      { teamId: 12, kills: 0, placement: 14, placementPoints: 0, totalPoints: 0 },
      { teamId: 14, kills: 0, placement: 15, placementPoints: 0, totalPoints: 0 },
      { teamId: 16, kills: 0, placement: 16, placementPoints: 0, totalPoints: 0 }
    ],
    // TODO: Add matches 2-6 for day 3
    match2: [],
    match3: [],
    match4: [],
    match5: [],
    match6: []
  }
};

// CHANGE THIS: Calculate overall standings based on all matches
export const calculateOverallStandings = () => {
  const standings = teamsData.map(team => {
    let totalPoints = 0;
    let totalKills = 0;
    let placementPoints = 0;
    let wwcdCount = 0;

    // Calculate totals from all matches
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
      killPoints: totalKills, // 1 kill = 1 point
      wwcdCount
    };
  });

  // Sort by total points (highest first)
  return standings.sort((a, b) => b.totalPoints - a.totalPoints);
};

// Tournament info
export const tournamentInfo = {
  // CHANGE THIS: Update tournament details
  name: "BGMI Pro League Season 3",
  prizePool: "₹50,00,000",
  teams: 16,
  currentDay: 2,
  totalDays: 3,
  startDate: "Dec 15, 2024",
  status: "Live"
};
