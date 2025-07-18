import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminTabs from "../components/admin/AdminTabs";
import TournamentOverview from "../components/admin/TournamentOverview";
import MatchManagement from "../components/admin/MatchManagement";
import TeamManagement from "../components/admin/TeamManagement";
import LiveStandings from "../components/admin/LiveStandings";
import TournamentSettings from "../components/admin/TournamentSettings";
import QuickStats from "../components/admin/QuickStats";
import NewTournament from "../components/admin/NewTournament";
import { sampleTournament } from "../data/sampleTournament";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [tournament, setTournament] = useState(sampleTournament);
    const [showNewTournament, setShowNewTournament] = useState(false);
    const [tournaments, setTournaments] = useState([sampleTournament]);
    const [showTournamentSelector, setShowTournamentSelector] = useState(false);

    useEffect(() => {
        // Check if admin is logged in
        const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
        if (!isLoggedIn) {
            navigate("/admin");
        }
    }, [navigate]);

    useEffect(() => {
        // Close tournament selector when clicking outside
        const handleClickOutside = (event) => {
            if (showTournamentSelector && !event.target.closest('.tournament-selector')) {
                setShowTournamentSelector(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showTournamentSelector]);

    const handleLogout = () => {
        localStorage.removeItem("isAdminLoggedIn");
        navigate("/");
    };

    const handleUpdateTournament = (updatedSettings) => {
        setTournament(prev => ({
            ...prev,
            ...updatedSettings
        }));
        
        // If tournament status changes to upcoming and user is on standings tab, switch to overview
        if (updatedSettings.status === 'upcoming' && activeTab === 'standings') {
            setActiveTab('overview');
        }
    };

    const handleUpdateMatch = (updatedMatch) => {
        setTournament(prev => ({
            ...prev,
            matches: prev.matches.map(match => 
                match.id === updatedMatch.id ? updatedMatch : match
            )
        }));
    };

    const handleAddMatch = () => {
        const newMatch = {
            id: Date.now(),
            map: 'Erangel',
            isCompleted: false,
            results: []
        };
        setTournament(prev => ({
            ...prev,
            matches: [...prev.matches, newMatch]
        }));
    };

    const handleUpdateTeams = (updatedTeams) => {
        setTournament(prev => ({
            ...prev,
            teams: updatedTeams
        }));
    };

    const handleEditTournament = (tournamentData) => {
        setActiveTab('settings');
    };

    const handleCreateTournament = (newTournament) => {
        setTournaments(prev => [...prev, newTournament]);
        setTournament(newTournament);
        setShowNewTournament(false);
        setActiveTab('overview');
    };

    const handleCancelNewTournament = () => {
        setShowNewTournament(false);
    };

    const handleSwitchTournament = (selectedTournament) => {
        setTournament(selectedTournament);
        setShowTournamentSelector(false);
        setActiveTab('overview'); // Reset to overview when switching tournaments
    };

    const renderTabContent = () => {
        if (showNewTournament) {
            return (
                <NewTournament 
                    onCreateTournament={handleCreateTournament}
                    onCancel={handleCancelNewTournament}
                />
            );
        }

        switch (activeTab) {
            case 'overview':
                return (
                    <TournamentOverview 
                        tournament={tournament}
                        onEditTournament={handleEditTournament}
                    />
                );
            case 'matches':
                return (
                    <MatchManagement 
                        tournament={tournament}
                        onUpdateMatch={handleUpdateMatch}
                        onAddMatch={handleAddMatch}
                    />
                );
            case 'teams':
                return (
                    <TeamManagement 
                        tournament={tournament}
                        onUpdateTeams={handleUpdateTeams}
                    />
                );
            case 'standings':
                return (
                    <LiveStandings 
                        tournament={tournament}
                    />
                );
            case 'settings':
                return (
                    <TournamentSettings 
                        tournament={tournament}
                        onUpdateTournament={handleUpdateTournament}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Left Side - Logo and Tournament Info */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg">
                                <span className="text-white font-bold text-xl">🎮</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white tracking-tight">
                                    Admin Dashboard
                                </h1>
                                <div className="flex items-center space-x-3 mt-1">
                                    {/* Tournament Selector */}
                                    {tournaments.length > 1 ? (
                                        <div className="relative tournament-selector">
                                            <button
                                                onClick={() => setShowTournamentSelector(!showTournamentSelector)}
                                                className="flex items-center space-x-2 text-sm text-gray-400 font-medium hover:text-white transition-colors"
                                            >
                                                <span>{tournament.name}</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            
                                            {showTournamentSelector && (
                                                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
                                                    <div className="p-2">
                                                        <div className="text-xs text-gray-400 font-medium mb-2 px-2">Select Tournament</div>
                                                        {tournaments.map((t) => (
                                                            <button
                                                                key={t.id}
                                                                onClick={() => handleSwitchTournament(t)}
                                                                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                                                                    t.id === tournament.id 
                                                                        ? 'bg-blue-600 text-white' 
                                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                                                }`}
                                                            >
                                                                <div className="flex items-center justify-between">
                                                                    <span className="font-medium">{t.name}</span>
                                                                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                                        t.status === 'active' ? 'bg-green-900 text-green-300' : 
                                                                        t.status === 'upcoming' ? 'bg-yellow-900 text-yellow-300' : 
                                                                        'bg-gray-700 text-gray-300'
                                                                    }`}>
                                                                        {t.status?.toUpperCase() || 'DRAFT'}
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <span className="text-sm text-gray-400 font-medium">{tournament.name}</span>
                                    )}
                                    
                                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                        tournament.status === 'active' ? 'bg-green-900 text-green-300' : 
                                        tournament.status === 'upcoming' ? 'bg-yellow-900 text-yellow-300' : 
                                        'bg-gray-700 text-gray-300'
                                    }`}>
                                        <div className={`w-2 h-2 rounded-full mr-1 ${
                                            tournament.status === 'active' ? 'bg-green-400' : 
                                            tournament.status === 'upcoming' ? 'bg-yellow-400' : 
                                            'bg-gray-400'
                                        }`}></div>
                                        {tournament.status?.toUpperCase() || 'DRAFT'}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Actions */}
                        <div className="flex items-center space-x-3">
                            {/* New Tournament Button */}
                            <button
                                onClick={() => setShowNewTournament(true)}
                                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                <span className="hidden sm:inline">New Tournament</span>
                                <span className="sm:hidden">New</span>
                            </button>

                            {/* Navigation Buttons */}
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => navigate("/")}
                                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center shadow-md hover:shadow-lg"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span className="hidden sm:inline">Home</span>
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center shadow-md hover:shadow-lg"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    <span className="hidden sm:inline">Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <QuickStats tournament={tournament} />
                <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} tournament={tournament} />
                {renderTabContent()}
            </div>
        </div>
    );
};

export default AdminDashboard;
