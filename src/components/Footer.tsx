import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-[#40E0D0]/10 mt-0 pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <img 
              src="/new-salvium/images/salvium_coin_square_white_512x512px_transparent-1024.webp"
              alt="Salvium Logo"
              style={{ height: '80px', width: 'auto' }}
              className="mb-6 mx-auto"
            />
            <p className="text-white max-w-md mx-auto mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Private blockchain with DeFi
            </p>
            {/* Social Icons */}
            <div className="flex justify-center space-x-6">
              <a href="https://x.com/salvium_io" className="hover:opacity-80 transition-opacity">
                <i className="fa-brands fa-x-twitter text-2xl" style={{ color: '#40E0D0' }}></i>
              </a>
              <a href="https://t.me/salviumcommunity" className="hover:opacity-80 transition-opacity">
                <i className="fa-brands fa-telegram text-2xl" style={{ color: '#40E0D0' }}></i>
              </a>
              <a href="https://discord.gg/salvium" className="hover:opacity-80 transition-opacity">
                <i className="fa-brands fa-discord text-2xl" style={{ color: '#40E0D0' }}></i>
              </a>
              <Link to="/docs/github" className="hover:opacity-80 transition-opacity">
                <i className="fa-brands fa-github text-2xl" style={{ color: '#40E0D0' }}></i>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#40E0D0]" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/exchanges" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors"
                >
                  Exchanges
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#40E0D0]" style={{ fontFamily: 'var(--font-heading)' }}>
              Tools
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/download" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors"
                >
                  Wallets
                </Link>
              </li>
              <li>
                <a 
                  href="https://explorer.salvium.io/" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors"
                >
                  Explorer
                </a>
              </li>
              <li>
                <Link 
                  to="/stats" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors"
                >
                  Stats
                </Link>
              </li>
              <li>
                <Link 
                  to="/tools" 
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-body)' }} 
                  className="hover:text-[#40E0D0]/80 transition-colors"
                >
                  3rd Party Tools
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white text-sm">
          <p style={{ fontFamily: 'var(--font-body)' }}>
            &copy; {new Date().getFullYear()} Salvium Protocol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
