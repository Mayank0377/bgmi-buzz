// Footer.jsx - Website footer component
// TODO: Update social media links, contact information, and legal pages

import React from 'react';

const Footer = () => {
  // CHANGE THIS: Update current year dynamically if needed
  const currentYear = new Date().getFullYear();

  // CHANGE THIS: Update social media links and handles
  const socialLinks = [
    {
      name: 'YouTube',
      icon: '📺',
      url: 'https://youtube.com/bgmibuzz', // TODO: Replace with actual YouTube channel
      handle: '@BGMIBuzz'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/bgmibuzz', // TODO: Replace with actual Twitter handle
      handle: '@BGMIBuzz'
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com/bgmibuzz', // TODO: Replace with actual Instagram handle
      handle: '@BGMIBuzz'
    },
    {
      name: 'Discord',
      icon: '💬',
      url: 'https://discord.gg/bgmibuzz', // TODO: Replace with actual Discord server
      handle: 'Join Server'
    }
  ];

  // CHANGE THIS: Update footer navigation links
  const footerLinks = {
    tournaments: [
      { name: 'Live Tournaments', href: '/tournaments/live' }, // TODO: Add actual routes
      { name: 'Upcoming Events', href: '/tournaments/upcoming' },
      { name: 'Past Championships', href: '/tournaments/completed' },
      { name: 'Tournament Rules', href: '/rules' }
    ],
    teams: [
      { name: 'Team Rankings', href: '/standings' },
      { name: 'Team Profiles', href: '/teams' },
      { name: 'Player Stats', href: '/players' },
      { name: 'Team Registration', href: '/register' }
    ],
    support: [
      { name: 'Contact Us', href: '/contact' }, // TODO: Create contact page
      { name: 'FAQ', href: '/faq' },
      { name: 'Support Center', href: '/support' },
      { name: 'Report Issue', href: '/report' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' }, // TODO: Create legal pages
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Disclaimer', href: '/disclaimer' }
    ]
  };

  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              {/* Logo and Brand Name */}
              <div className="flex items-center mb-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <span className="text-white font-bold text-lg">🎮</span>
                </div>
                <div className="ml-3">
                  {/* CHANGE THIS: Update brand name if needed */}
                  <span className="text-xl font-bold text-white">BGMI BUZZ</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-400 mb-4 text-sm">
                {/* CHANGE THIS: Update company description */}
                The ultimate BGMI esports tournament platform.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-3">
                {socialLinks.slice(0, 4).map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors"
                    title={`Follow us on ${social.name}`}
                  >
                    <span className="text-sm">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Tournaments Links */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-sm">Tournaments</h3>
              <ul className="space-y-1">
                {footerLinks.tournaments.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Teams Links */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-sm">Teams</h3>
              <ul className="space-y-1">
                {footerLinks.teams.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-sm">Support</h3>
              <ul className="space-y-1">
                {footerLinks.support.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-xs mb-2 md:mb-0">
              {/* CHANGE THIS: Update copyright and company name */}
              <p>&copy; {currentYear} BGMI BUZZ. All rights reserved.</p>
            </div>

            {/* Additional Links */}
            <div className="flex space-x-4 text-xs">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
