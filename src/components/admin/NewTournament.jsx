import React, { useState } from 'react';
import { teamsData } from '../../data/standingsData';

const NewTournament = ({ onCreateTournament, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    prizePool: '',
    entryFee: '0',
    maxTeams: '16',
    days: '3',
    matchesPerDay: '6',
    status: 'upcoming',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [newTeamName, setNewTeamName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleAddNewTeam = () => {
    if (newTeamName.trim() && selectedTeams.length < parseInt(formData.maxTeams)) {
      const newTeam = {
        id: Date.now(),
        name: newTeamName.trim(),
        logo: "🎮"
      };
      setSelectedTeams(prev => [...prev, newTeam]);
      setNewTeamName('');
    }
  };

  const handleRemoveTeam = (teamId) => {
    setSelectedTeams(prev => prev.filter(team => team.id !== teamId));
  };

  const handleToggleExistingTeam = (team) => {
    const isSelected = selectedTeams.some(t => t.id === team.id);
    if (isSelected) {
      setSelectedTeams(prev => prev.filter(t => t.id !== team.id));
    } else if (selectedTeams.length < parseInt(formData.maxTeams)) {
      setSelectedTeams(prev => [...prev, team]);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Tournament name is required';
    }
    
    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required';
    }
    
    if (!formData.endDate) {
      newErrors.endDate = 'End date is required';
    }
    
    if (formData.startDate && formData.endDate && formData.startDate > formData.endDate) {
      newErrors.endDate = 'End date must be after start date';
    }
    
    if (!formData.prizePool.trim()) {
      newErrors.prizePool = 'Prize pool is required';
    }

    if (!formData.maxTeams || parseInt(formData.maxTeams) < 4 || parseInt(formData.maxTeams) > 128) {
      newErrors.maxTeams = 'Max teams must be between 4 and 128';
    }

    if (!formData.days || parseInt(formData.days) < 1 || parseInt(formData.days) > 30) {
      newErrors.days = 'Tournament days must be between 1 and 30';
    }

    if (!formData.matchesPerDay || parseInt(formData.matchesPerDay) < 1 || parseInt(formData.matchesPerDay) > 20) {
      newErrors.matchesPerDay = 'Matches per day must be between 1 and 20';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Create tournament object
    const newTournament = {
      id: Date.now(),
      name: formData.name,
      startDate: formData.startDate,
      endDate: formData.endDate,
      prizePool: formData.prizePool,
      entryFee: formData.entryFee === '0' ? 'Free' : `₹${formData.entryFee}`,
      maxTeams: parseInt(formData.maxTeams),
      days: parseInt(formData.days),
      matchesPerDay: parseInt(formData.matchesPerDay),
      status: formData.status,
      description: formData.description,
      teams: selectedTeams,
      matches: []
    };

    // Generate matches based on days and matches per day
    const matches = [];
    const totalMatches = parseInt(formData.days) * parseInt(formData.matchesPerDay);
    
    for (let i = 0; i < totalMatches; i++) {
      matches.push({
        id: Date.now() + i,
        map: i % 4 === 0 ? 'Erangel' : i % 4 === 1 ? 'Miramar' : i % 4 === 2 ? 'Sanhok' : 'Vikendi',
        isCompleted: false,
        results: []
      });
    }

    newTournament.matches = matches;

    onCreateTournament(newTournament);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Register New Tournament</h2>
        <button
          onClick={onCancel}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
        >
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tournament Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tournament Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter tournament name"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Prize Pool */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Prize Pool *
            </label>
            <input
              type="text"
              name="prizePool"
              value={formData.prizePool}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., ₹50,000"
            />
            {errors.prizePool && <p className="text-red-400 text-sm mt-1">{errors.prizePool}</p>}
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Start Date *
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.startDate && <p className="text-red-400 text-sm mt-1">{errors.startDate}</p>}
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              End Date *
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.endDate && <p className="text-red-400 text-sm mt-1">{errors.endDate}</p>}
          </div>

          {/* Entry Fee */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Entry Fee (₹)
            </label>
            <input
              type="number"
              name="entryFee"
              value={formData.entryFee}
              onChange={handleChange}
              min="0"
              className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0 for free"
            />
          </div>

          {/* Max Teams */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Max Teams
            </label>
            <input
              type="number"
              name="maxTeams"
              value={formData.maxTeams}
              onChange={handleChange}
              min="4"
              max="128"
              className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter number of teams"
            />
            {errors.maxTeams && <p className="text-red-400 text-sm mt-1">{errors.maxTeams}</p>}
          </div>

          {/* Days */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tournament Days
            </label>
            <input
              type="number"
              name="days"
              value={formData.days}
              onChange={handleChange}
              min="1"
              max="30"
              className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter number of days"
            />
            {errors.days && <p className="text-red-400 text-sm mt-1">{errors.days}</p>}
          </div>

          {/* Matches Per Day */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Matches Per Day
            </label>
            <input
              type="number"
              name="matchesPerDay"
              value={formData.matchesPerDay}
              onChange={handleChange}
              min="1"
              max="20"
              className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter matches per day"
            />
            {errors.matchesPerDay && <p className="text-red-400 text-sm mt-1">{errors.matchesPerDay}</p>}
          </div>
        </div>

        {/* Team Management Section */}
        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-4">
            Team Management ({selectedTeams.length}/{formData.maxTeams})
          </h3>
          
          <div className="space-y-4">
            {/* Manual Team Entry */}
            <div className="flex gap-2">
              <input
                type="text"
                value={newTeamName}
                onChange={(e) => setNewTeamName(e.target.value)}
                placeholder="Enter team name"
                className="flex-1 bg-gray-600 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && handleAddNewTeam()}
              />
              <button
                type="button"
                onClick={handleAddNewTeam}
                disabled={!newTeamName.trim() || selectedTeams.length >= parseInt(formData.maxTeams)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors disabled:bg-gray-500"
              >
                Add Team
              </button>
            </div>

            {/* Selected Teams Display */}
            {selectedTeams.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">Selected Teams:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedTeams.map((team) => (
                    <div key={team.id} className="flex items-center justify-between bg-gray-600 p-2 rounded-md">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{team.logo}</span>
                        <span className="text-sm font-medium text-white">{team.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveTeam(team.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Available Teams */}
            {teamsData.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">Available Teams:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-40 overflow-y-auto">
                  {teamsData.map((team) => {
                    const isSelected = selectedTeams.some(t => t.id === team.id);
                    const canSelect = selectedTeams.length < parseInt(formData.maxTeams);
                    return (
                      <button
                        key={team.id}
                        type="button"
                        onClick={() => handleToggleExistingTeam(team)}
                        disabled={!canSelect && !isSelected}
                        className={`p-2 rounded-md text-sm transition-colors ${
                          isSelected 
                            ? 'bg-blue-600 text-white' 
                            : canSelect 
                              ? 'bg-gray-600 text-white hover:bg-gray-500' 
                              : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center gap-1">
                          <span className="text-xs">{team.logo}</span>
                          <span className="truncate">{team.name}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Tournament Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter tournament description..."
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Tournament Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent md:w-auto"
          >
            <option value="upcoming">Upcoming</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Create Tournament
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTournament;
