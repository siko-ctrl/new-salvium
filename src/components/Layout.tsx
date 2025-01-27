import React from 'react';
import CTA from './CTA';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showCTA?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showCTA = true }) => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col">
      <Header />
      <div className="flex-grow">
        {children}
      </div>
      {showCTA && <CTA />}
      <Footer />

      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img 
          src="/new-salvium/images/background.webp"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
    </div>
  );
};

export default Layout;
