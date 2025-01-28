import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-[#40E0D0]/10 mt-0 pt-8 sm:pt-16">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Social Section */}
          <div className="text-center sm:col-span-2 md:col-span-1 order-1 md:order-1">
            <img 
              src="/new-salvium/images/salvium_coin_square_white_512x512px_transparent-1024.webp"
              alt="Salvium Logo"
              className="h-16 sm:h-20 w-auto mb-4 sm:mb-6 mx-auto"
            />
            <p className="text-white text-sm sm:text-base max-w-md mx-auto mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Private blockchain with DeFi
            </p>
            {/* Social Icons */}
            <div className="flex justify-center space-x-6">
              <a href="https://x.com/salvium_io" className="hover:opacity-80 transition-opacity">
                <i className="fa-brands fa-x-twitter text-xl sm:text-2xl" style={{ color: '#40E0D0' }}></i>
              </a>
              <a href="https://t.me/salviumcommunity" className="hover:opacity-80 transition-opacity">
                <i className="fa-brands fa-telegram text-xl sm:text-2xl" style={{ color: '#40E0D0' }}></i>
              </a>
              <a href="https://discord.gg/salvium" className="hover:opacity-80 transition-opacity">
                <i className="fa-brands fa-discord text-xl sm:text-2xl" style={{ color: '#40E0D0' }}></i>
              </a>
              <Link to="/docs/github" className="hover:opacity-80 transition-opacity">
                <i className="fa-brands fa-github text-xl sm:text-2xl" style={{ color: '#40E0D0' }}></i>
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-center sm:text-left order-2 md:order-2">
            <h4 className="text-lg font-semibold mb-4 text-[#40E0D0]" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors text-sm sm:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors text-sm sm:text-base"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors text-sm sm:text-base"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/exchanges" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors text-sm sm:text-base"
                >
                  Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools Section */}
          <div className="text-center sm:text-left order-3 md:order-3">
            <h4 className="text-lg font-semibold mb-4 text-[#40E0D0]" style={{ fontFamily: 'var(--font-heading)' }}>
              Tools
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/download" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors text-sm sm:text-base"
                >
                  Wallets
                </Link>
              </li>
              <li>
                <a 
                  href="https://explorer.salvium.io/" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors text-sm sm:text-base"
                >
                  Explorer
                </a>
              </li>
              <li>
                <Link 
                  to="/pools" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors text-sm sm:text-base"
                >
                  Mining Pools
                </Link>
              </li>
              <li>
                <Link 
                  to="/stats" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors text-sm sm:text-base"
                >
                  Statistics
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-400 pt-4 border-t border-[#40E0D0]/10">
          <p>&copy; {new Date().getFullYear()} Salvium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
