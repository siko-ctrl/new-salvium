import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const navigationItems = {
    'Get Started': [
      { label: 'Exchanges', path: '/exchanges' },
      { label: 'About', path: '/about' },
      { label: 'Lite Paper', path: '/papers' },
      { label: 'Downloads', path: '/download' }
    ],
    'Knowledge': [
      { label: 'Blog', path: '/blog' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Knowledge Base', path: 'https://siko-ctrl.github.io/docs-salvium/' },
      { label: 'Roadmap', path: '/roadmap' }
    ],
    'Tools': [
      { label: 'Tools Overview', path: '/tools' },
      { label: 'Mining Pools', path: '/pools' },
      { label: 'Statistics', path: '/stats' }
    ],
    'Get Involved': [
      { label: 'Community', path: '/community' },
      { label: 'GitHub', path: '/docs/github' }
    ]
  };

  return (
    <nav className="nav-fixed fixed w-full z-50 top-0 bg-[rgba(30,30,30,0.98)]" style={{ backdropFilter: 'blur(8px)' }}>
      <div className="container mx-auto px-4 py-1">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/new-salvium/images/salvium_wordmark_white_512x512px_transparent.webp" 
              alt="Salvium Logo" 
              className="w-24"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {Object.entries(navigationItems).map(([category, items]) => (
              <div key={category} className="relative dropdown-container">
                <button
                  className="flex items-center dropdown-button space-x-2"
                  style={{ color: '#40E0D0', fontFamily: 'var(--font-heading)' }}
                  onClick={() => toggleDropdown(category)}
                >
                  <span>{category}</span>
                  <svg className={`w-4 h-4 transform transition-transform duration-200 ${activeDropdown === category ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div
                  className={`dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl ${
                    activeDropdown === category ? 'block' : 'hidden'
                  }`}
                  style={{ background: 'rgba(30, 30, 30, 0.98)' }}
                >
                  <div className="py-2">
                    {items.map((item) => (
                      item.path.startsWith('http') ? (
                        <a
                          key={item.label}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-white hover:text-[#40E0D0] transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          key={item.label}
                          to={item.path}
                          className="block px-4 py-2 text-white hover:text-[#40E0D0] transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {Object.entries(navigationItems).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h3 className="text-[#40E0D0] font-semibold mb-2">{category}</h3>
                <div className="space-y-2">
                  {items.map((item) => (
                    item.path.startsWith('http') ? (
                      <a
                        key={item.label}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white hover:text-[#40E0D0] transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="block text-white hover:text-[#40E0D0] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
