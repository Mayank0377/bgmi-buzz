import React, { useState } from 'react';
import { teamsData } from '../data/standingsData';

const TeamsPage = () => {
  const defaultPlayers = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];
  const [teams, setTeams] = useState(teamsData);

  const handleAddTeam = () => {
    const newTeam = {
      id: `team-${teams.length + 1}`,
      name: 'New Team',
      logo: '🏆',
      members: defaultPlayers,
    };
    setTeams([...teams, newTeam]);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-8 relative">
      <h1 className="text-5xl font-extrabold text-center text-blue-400 mb-10">Teams</h1>
      <button
        onClick={handleAddTeam}
        className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md"
      >
        Add Team
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {teams.map((team) => (
          <div
            key={team.id}
            className="bg-gray-800 shadow-lg rounded-lg border border-gray-700 group relative overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center p-6">
              <div className="w-24 h-24 bg-gray-600 flex items-center justify-center rounded-full shadow-md mb-4">
                {team.logo}
              </div>
              <h2 className="text-xl font-bold text-white text-center mb-3 group-hover:text-blue-400 transition-colors">
                {team.name}
              </h2>
            </div>

            {/* Hidden details, visible on hover */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-95 p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-2xl font-bold text-white text-center mb-3">{team.name}</h2>
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold mb-2">Players:</h3>
                <ul className="list-disc list-inside">
                  {(team.members?.length ? team.members : defaultPlayers).map((member, index) => (
                    <li key={index}>{member}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
