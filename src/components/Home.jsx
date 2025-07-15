import React from 'react';
import { useNavigate } from 'react-router-dom'; // TODO: Add navigation functionality
import Footer from './Footer'; // TODO: Move to common folder when restructuring

const Home = () => {
  // TODO: Add navigation functionality
  const navigate = useNavigate();

  const handleViewStandings = () => {
    // CHANGE THIS: Navigate to standings page
    navigate('/standings');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <span className="text-white font-bold text-lg">🎮</span>
                </div>
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold text-white">BGMI BUZZ</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
                  <span className="mr-2">🏠</span>
                  Home
                </a>
                <a href="/standings" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
                  <span className="mr-2">📊</span>
                  Standings
                </a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
                  <span className="mr-2">👥</span>
                  Teams
                </a>
              </div>
            </div>

            {/* Admin Button */}
            <div className="hidden md:block">
              <button className="bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-600 flex items-center">
                <span className="mr-2">⚙️</span>
                Admin
                <span className="ml-2">↗️</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-8 mb-8">
          {/* Live Status */}
          <div className="flex justify-center mb-6">
            <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              LIVE NOW
            </span>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              BGMI Pro League Season 3
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              The ultimate BGMI esports tournament featuring the best teams
              competing for glory and massive prizes
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-green-400 text-2xl md:text-3xl font-bold flex items-center justify-center">
                <span className="mr-2">💰</span>
                ₹50,00,000
              </div>
              <div className="text-gray-400 text-sm mt-1">Prize Pool</div>
            </div>
            <div className="text-center">
              <div className="text-purple-400 text-2xl md:text-3xl font-bold flex items-center justify-center">
                <span className="mr-2">▶️</span>
                Match 12/24
              </div>
              <div className="text-gray-400 text-sm mt-1">Progress</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg flex items-center transition-colors"
              onClick={handleViewStandings} // TODO: Navigate to standings page
            >
              <span className="mr-2">🏆</span>
              View Live Standings
            </button>
            <button 
              className="bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
              onClick={() => {
                // TODO: Navigate to tournament details page
                console.log('Navigate to tournament details');
              }}
            >
              Tournament Details
            </button>
          </div>
        </div>

        {/* Tournaments Section */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="mr-2">🏆</span>
              Tournaments
            </h2>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              3 Active
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Live Tournament */}
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  LIVE
                </span>
                <span className="text-blue-400 text-2xl">🏆</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">BGMI Pro League Season 3</h3>
              <p className="text-gray-400 text-sm mb-4">1/15/2024 - 2/15/2024</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Prize Pool</span>
                  <span className="text-green-400 font-bold">₹50,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Teams</span>
                  <span className="text-blue-400 font-bold">16</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
                View Details
              </button>
            </div>

            {/* Upcoming Tournament */}
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  UPCOMING
                </span>
                <span className="text-blue-400 text-2xl">🏆</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">BGMI Masters Cup</h3>
              <p className="text-gray-400 text-sm mb-4">2/20/2024 - 3/10/2024</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Prize Pool</span>
                  <span className="text-green-400 font-bold">₹25,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Teams</span>
                  <span className="text-blue-400 font-bold">12</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
                View Details
              </button>
            </div>

            {/* Completed Tournament */}
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  COMPLETED
                </span>
                <span className="text-blue-400 text-2xl">🏆</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">BGMI Winter Championship</h3>
              <p className="text-gray-400 text-sm mb-4">12/1/2023 - 12/31/2023</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Prize Pool</span>
                  <span className="text-green-400 font-bold">₹30,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Teams</span>
                  <span className="text-blue-400 font-bold">16</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
