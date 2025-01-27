import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/cards.css';

const Pools = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const pools = [
    {
      name: 'GNTL Pool',
      description: 'A reliable mining pool for Salvium with excellent uptime and support.',
      icon: 'fa-server',
      hashrate: '125 MH/s',
      miners: '1,250',
      fee: '0.9%'
    },
    {
      name: 'HeroMiners',
      description: 'Professional mining pool with advanced features and detailed statistics.',
      icon: 'fa-hammer',
      hashrate: '85 MH/s',
      miners: '950',
      fee: '1.0%'
    },
    {
      name: 'Salvium Pool',
      description: 'Official Salvium mining pool with low fees and high reliability.',
      icon: 'fa-water',
      hashrate: '95 MH/s',
      miners: '1,100',
      fee: '0.8%'
    }
  ];

  return (
    <main className="relative z-10">
      {/* Hero Section */}
      <section className="relative bg-[#1e1e1e] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/new-salvium/images/newimages/Page Headers/Pools Header-1024.webp" alt="Pools Header" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e1e1e]/80 to-[#1e1e1e]"></div>
        </div>
        <div className="relative z-10 py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Mining <span className="gradient-text">Pools</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Join our trusted mining pools and start earning Salvium rewards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Pools Grid */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {pools.map((pool, index) => (
            <div 
              key={index}
              className="group block overflow-hidden bg-gradient-to-b from-[#282828]/95 to-[#1e1e1e]/98 border border-[#333333] hover:border-[#00DFB7] hover:shadow-lg hover:shadow-[#00DFB7]/10 transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#00DFB7]/10 flex items-center justify-center group-hover:bg-[#00DFB7]/20 transition-colors">
                  <i className={`fas ${pool.icon} text-3xl text-[#00DFB7]`}></i>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                  <div className="bg-[#00DFB7]/10 text-[#00DFB7] px-3 py-1 rounded">Mining Pool</div>
                </div>
                <h2 className="text-xl font-bold text-slate-50 font-['Josefin_Sans'] mb-3 text-center group-hover:text-[#00DFB7] transition-colors">{pool.name}</h2>
                <p className="text-slate-400 mb-6 text-sm text-center">{pool.description}</p>
                
                <div className="bg-[#1e1e1e]/50 rounded-lg p-4 mb-6 border border-[#333333]/50">
                  <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#00DFB7]/10">
                    <span className="text-slate-400">Hashrate</span>
                    <span className="text-[#00DFB7] font-semibold">{pool.hashrate}</span>
                  </div>
                  <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#00DFB7]/10">
                    <span className="text-slate-400">Miners</span>
                    <span className="text-[#00DFB7] font-semibold">{pool.miners}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Fee</span>
                    <span className="text-[#00DFB7] font-semibold">{pool.fee}</span>
                  </div>
                </div>

                <div className="text-[#00DFB7] font-medium flex items-center justify-center gap-2 group/link">
                  Start Mining
                  <i className="fas fa-arrow-right transform transition-transform group-hover/link:translate-x-1"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Pools;
