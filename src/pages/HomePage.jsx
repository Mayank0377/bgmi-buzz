import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/common/Navigation';
import HeroSection from '../components/home/HeroSection';
import TournamentsSection from '../components/home/TournamentsSection';
import Footer from '../components/layout/Footer';

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewStandings = () => {
    navigate('/standings');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection onViewStandings={handleViewStandings} />
        <TournamentsSection onViewStandings={handleViewStandings} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
