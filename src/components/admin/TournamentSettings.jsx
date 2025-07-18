import React, { useState } from 'react';

const TournamentSettings = ({ tournament, onUpdateTournament }) => {
  const [settings, setSettings] = useState({
    name: tournament.name || '',
    startDate: tournament.startDate || '',
    endDate: tournament.endDate || '',
    prizePool: tournament.prizePool || '',
    entryFee: tournament.entryFee || '',
    maxTeams: tournament.maxTeams || 16,
    status: tournament.status || 'upcoming',
    description: tournament.description || '',
    rules: tournament.rules || '',
    map: tournament.map || 'Erangel',
    gameMode: tournament.gameMode || 'Squad',
    days: tournament.days || 1
  });

  const handleSettingChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    onUpdateTournament(settings);
  };

  const handleReset = () => {
    setSettings({
      name: tournament.name || '',
      startDate: tournament.startDate || '',
      endDate: tournament.endDate || '',
      prizePool: tournament.prizePool || '',
      entryFee: tournament.entryFee || '',
      maxTeams: tournament.maxTeams || 16,
      status: tournament.status || 'upcoming',
      description: tournament.description || '',
      rules: tournament.rules || '',
      map: tournament.map || 'Erangel',
      gameMode: tournament.gameMode || 'Squad',
      days: tournament.days || 1
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Tournament Settings</h2>
        <div className="flex space-x-2">
          <button
            onClick={handleReset}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Reset
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Save Settings
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">Basic Information</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tournament Name
            </label>
            <input
              type="text"
              value={settings.name}
              onChange={(e) => handleSettingChange('name', e.target.value)}
              className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter tournament name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={settings.startDate}
                onChange={(e) => handleSettingChange('startDate', e.target.value)}
                className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                End Date
              </label>
              <input
                type="date"
                value={settings.endDate}
                onChange={(e) => handleSettingChange('endDate', e.target.value)}
                className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Prize Pool
              </label>
              <input
                type="text"
                value={settings.prizePool}
                onChange={(e) => handleSettingChange('prizePool', e.target.value)}
                className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="₹10,000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Entry Fee
              </label>
              <input
                type="text"
                value={settings.entryFee}
                onChange={(e) => handleSettingChange('entryFee', e.target.value)}
                className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="₹50 or Free"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={settings.description}
              onChange={(e) => handleSettingChange('description', e.target.value)}
              rows="3"
              className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tournament description..."
            />
          </div>
        </div>

        {/* Game Settings */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">Game Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tournament Status
              </label>
              <select
                value={settings.status}
                onChange={(e) => handleSettingChange('status', e.target.value)}
                className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="upcoming">Upcoming</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Max Teams
              </label>
              <input
                type="number"
                value={settings.maxTeams}
                onChange={(e) => handleSettingChange('maxTeams', parseInt(e.target.value))}
                className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="4"
                max="64"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Game Mode
              </label>
              <select
                value={settings.gameMode}
                onChange={(e) => handleSettingChange('gameMode', e.target.value)}
                className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Squad">Squad</option>
                <option value="Duo">Duo</option>
                <option value="Solo">Solo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tournament Days
              </label>
              <input
                type="number"
                value={settings.days}
                onChange={(e) => handleSettingChange('days', parseInt(e.target.value))}
                className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
                max="30"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Map
            </label>
            <select
              value={settings.map}
              onChange={(e) => handleSettingChange('map', e.target.value)}
              className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Erangel">Erangel</option>
              <option value="Sanhok">Sanhok</option>
              <option value="Miramar">Miramar</option>
              <option value="Vikendi">Vikendi</option>
              <option value="Livik">Livik</option>
              <option value="Karakin">Karakin</option>
              <option value="Random">Random</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Rules & Regulations
            </label>
            <textarea
              value={settings.rules}
              onChange={(e) => handleSettingChange('rules', e.target.value)}
              rows="6"
              className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter tournament rules and regulations..."
            />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 p-4 bg-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-4">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default TournamentSettings;
