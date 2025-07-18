import React, { useState } from 'react';

const AdminTabs = ({ activeTab, setActiveTab, tournament }) => {
  const allTabs = [
    { id: 'overview', label: 'Tournament Overview', icon: '📊' },
    { id: 'matches', label: 'Match Management', icon: '🎮' },
    { id: 'teams', label: 'Team Management', icon: '👥' },
    { id: 'standings', label: 'Live Standings', icon: '🏆' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  // Filter tabs based on tournament status
  const getAvailableTabs = () => {
    if (tournament?.status === 'upcoming') {
      // For upcoming tournaments, don't show Live Standings
      return allTabs.filter(tab => tab.id !== 'standings');
    }
    return allTabs;
  };

  const tabs = getAvailableTabs();

  return (
    <div className="border-b border-gray-700 mb-6">
      <nav className="flex space-x-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AdminTabs;
