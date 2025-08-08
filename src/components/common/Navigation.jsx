import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    // Check admin login status
    const checkAdminStatus = () => {
      const adminStatus = localStorage.getItem('isAdminLoggedIn');
      setIsAdminLoggedIn(adminStatus === 'true');
    };

    checkAdminStatus();

    // Listen for storage changes (when admin logs in/out in another tab)
    window.addEventListener('storage', checkAdminStatus);

    // Check periodically for login status changes
    const interval = setInterval(checkAdminStatus, 1000);

    return () => {
      window.removeEventListener('storage', checkAdminStatus);
      clearInterval(interval);
    };
  }, []);

  const handleAdminClick = () => {
    if (isAdminLoggedIn) {
      navigate('/admin/dashboard');
    } else {
      navigate('/admin');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    setIsAdminLoggedIn(false);
    navigate('/');
  };
  return (
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
              <a href="/teams" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
                <span className="mr-2">👥</span>
                Teams
              </a>
            </div>
          </div>

          {/* Admin Section */}
          <div className="hidden md:flex items-center space-x-3">
            {isAdminLoggedIn ? (
              <>
                <button
                  onClick={handleAdminClick}
                  className="bg-blue-600 border-2 border-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 border-2 border-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 hover:border-red-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={handleAdminClick}
                className="bg-red-600 border-2 border-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 hover:border-red-400 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Admin
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
