import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative bg-[#1e1e1e] overflow-hidden py-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src="/new-salvium/images/pools-1024.webp" alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-white font-['Josefin_Sans'] !opacity-100"
        >
          Ready to Take the <span className="text-[#40E0D0]">Pill</span>?
        </h2>
        <p 
          className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-['Arial'] !opacity-100"
        >
          Start your journey with Salvium today and be part of the next generation of Private DeFi.
        </p>
        <Link 
          to="/download"
          className="inline-block bg-gradient-to-r from-[#00DFB7] to-[#00B4D8] hover:from-[#00B4D8] hover:to-[#00DFB7] text-white font-semibold py-4 px-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-['Josefin_Sans']"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;