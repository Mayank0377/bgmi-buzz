import React, { useState } from 'react';
import { teamsData } from '../../data/standingsData';

const TeamManagement = ({ tournament, onUpdateTeams }) => {
  const [teams, setTeams] = useState(tournament.teams || []);
  const [newTeam, setNewTeam] = useState({ name: '', logo: '', members: ['', '', '', ''] });
  const [showAddForm, setShowAddForm] = useState(false);
  const [expandedTeam, setExpandedTeam] = useState(null);
  const [editingTeam, setEditingTeam] = useState(null);
  const [editingData, setEditingData] = useState({});

  const availableTeams = teamsData.filter(team => 
    !teams.some(existingTeam => existingTeam.id === team.id)
  );

  const handleAddTeam = () => {
    if (newTeam.name.trim()) {
      const team = {
        id: Date.now(),
        name: newTeam.name,
        logo: newTeam.logo || '🎮',
        members: newTeam.members.filter(member => member.trim()),
        registeredAt: new Date().toISOString()
      };
      const updatedTeams = [...teams, team];
      setTeams(updatedTeams);
      onUpdateTeams(updatedTeams);
      setNewTeam({ name: '', logo: '', members: ['', '', '', ''] });
      setShowAddForm(false);
    }
  };

  const handleAddExistingTeam = (existingTeam) => {
    const team = {
      ...existingTeam,
      members: [`${existingTeam.name}_Player1`, `${existingTeam.name}_Player2`, `${existingTeam.name}_Player3`, `${existingTeam.name}_Player4`],
      registeredAt: new Date().toISOString()
    };
    const updatedTeams = [...teams, team];
    setTeams(updatedTeams);
    onUpdateTeams(updatedTeams);
  };

  const handleRemoveTeam = (teamId) => {
    const updatedTeams = teams.filter(team => team.id !== teamId);
    setTeams(updatedTeams);
    onUpdateTeams(updatedTeams);
  };

  const handleUpdateTeam = (teamId, field, value) => {
    const updatedTeams = teams.map(team =>
      team.id === teamId ? { ...team, [field]: value } : team
    );
    setTeams(updatedTeams);
    onUpdateTeams(updatedTeams);
  };

  const handleMemberChange = (index, value) => {
    const updatedMembers = [...newTeam.members];
    updatedMembers[index] = value;
    setNewTeam({ ...newTeam, members: updatedMembers });
  };

  const handleToggleExpanded = (teamId) => {
    setExpandedTeam(expandedTeam === teamId ? null : teamId);
  };

  const handleEditTeam = (team) => {
    setEditingTeam(team.id);
    setEditingData({
      name: team.name,
      logo: team.logo,
      members: team.members || ['', '', '', '']
    });
  };

  const handleSaveEdit = (teamId) => {
    const updatedTeams = teams.map(team =>
      team.id === teamId ? { 
        ...team, 
        name: editingData.name || `Team ${teamId}`,
        logo: editingData.logo || '🎮',
        members: editingData.members.filter(member => member.trim())
      } : team
    );
    setTeams(updatedTeams);
    onUpdateTeams(updatedTeams);
    setEditingTeam(null);
    setEditingData({});
  };

  const handleCancelEdit = () => {
    setEditingTeam(null);
    setEditingData({});
  };

  const handleEditDataChange = (field, value) => {
    setEditingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEditMemberChange = (index, value) => {
    const updatedMembers = [...(editingData.members || ['', '', '', ''])];
    updatedMembers[index] = value;
    setEditingData(prev => ({
      ...prev,
      members: updatedMembers
    }));
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Team Management</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            {showAddForm ? 'Cancel' : 'Add Custom Team'}
          </button>
        </div>
      </div>

      {/* Quick Add from Existing Teams */}
      {availableTeams.length > 0 && (
        <div className="bg-gray-700 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Add Teams</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {availableTeams.map(team => (
              <button
                key={team.id}
                onClick={() => handleAddExistingTeam(team)}
                className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-2 rounded-md text-sm transition-colors duration-200 flex items-center space-x-2"
              >
                <span>{team.logo}</span>
                <span className="truncate">{team.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Add Team Form */}
      {showAddForm && (
        <div className="bg-gray-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Add New Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Team Name
              </label>
              <input
                type="text"
                value={newTeam.name}
                onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
                className="w-full bg-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter team name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Team Logo (Emoji)
              </label>
              <input
                type="text"
                value={newTeam.logo}
                onChange={(e) => setNewTeam({ ...newTeam, logo: e.target.value })}
                className="w-full bg-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="🎮"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Team Members (Up to 4)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {newTeam.members.map((member, index) => (
                <input
                  key={index}
                  type="text"
                  value={member}
                  onChange={(e) => handleMemberChange(index, e.target.value)}
                  className="bg-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Member ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-4 flex space-x-2">
            <button
              onClick={handleAddTeam}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
            >
              Add Team
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Edit Team Modal */}
      {editingTeam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-white mb-4">Edit Team</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Team Name
                </label>
                <input
                  type="text"
                  value={editingData.name}
                  onChange={(e) => handleEditDataChange('name', e.target.value)}
                  className="w-full bg-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter team name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Team Logo (Emoji)
                </label>
                <input
                  type="text"
                  value={editingData.logo}
                  onChange={(e) => handleEditDataChange('logo', e.target.value)}
                  className="w-full bg-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="🎮"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Team Members (Up to 4)
                </label>
                <div className="space-y-2">
                  {(editingData.members || ['', '', '', '']).map((member, index) => (
                    <input
                      key={index}
                      type="text"
                      value={member}
                      onChange={(e) => handleEditMemberChange(index, e.target.value)}
                      className="w-full bg-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={`Member ${index + 1} (default: ${editingData.name || 'Team'}_Player${index + 1})`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-2">
              <button
                onClick={() => handleSaveEdit(editingTeam)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm flex-1"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancelEdit}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm flex-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Teams List */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {teams.map((team) => {
          const isExpanded = expandedTeam === team.id;
          return (
            <div 
              key={team.id} 
              className={`bg-gray-700 rounded-lg p-3 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                isExpanded ? 'col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4 scale-105 shadow-xl' : ''
              }`}
              onClick={() => handleToggleExpanded(team.id)}
            >
              {/* Compact View */}
              {!isExpanded && (
                <div className="text-center">
                  <div className="text-2xl mb-1">{team.logo}</div>
                  <h3 className="font-semibold text-white text-sm truncate">{team.name}</h3>
                  <div className="text-xs text-gray-400">
                    {team.members?.length || 0} members
                  </div>
                </div>
              )}
              
              {/* Expanded View */}
              {isExpanded && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{team.logo}</div>
                      <div>
                        <h3 className="font-semibold text-white">{team.name}</h3>
                        <div className="text-sm text-gray-400">
                          {team.members?.length || 0} members
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditTeam(team);
                        }}
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveTeam(team.id);
                        }}
                        className="text-red-400 hover:text-red-300 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  {team.members && team.members.length > 0 && (
                    <div>
                      <div className="text-sm font-medium text-gray-300 mb-2">Members:</div>
                      <div className="space-y-1">
                        {team.members.map((member, index) => (
                          <div key={index} className="text-sm text-gray-400">
                            {member || `${team.name}_Player${index + 1}`}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-3 border-t border-gray-600">
                    <div className="text-xs text-gray-500">
                      Registered: {new Date(team.registeredAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {teams.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <div className="text-4xl mb-4">👥</div>
          <div>No teams registered yet</div>
          <div className="text-sm">Click "Add Team" to get started</div>
        </div>
      )}
    </div>
  );
};

export default TeamManagement;
