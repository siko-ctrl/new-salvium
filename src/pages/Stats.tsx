import React from 'react';

const Stats = () => {
  const networkStats = [
    {
      title: 'Network Hashrate',
      value: '255 MH/s',
      icon: 'fa-microchip',
      change: '+12%'
    },
    {
      title: 'Active Miners',
      value: '2,720',
      icon: 'fa-users',
      change: '+8%'
    },
    {
      title: 'Block Height',
      value: '1,234,567',
      icon: 'fa-cube',
      change: '+0.1%'
    },
    {
      title: 'Difficulty',
      value: '123.45 M',
      icon: 'fa-chart-line',
      change: '+5%'
    }
  ];

  const marketStats = [
    {
      title: 'Market Cap',
      value: '$12.5M',
      icon: 'fa-chart-pie',
      change: '+15%'
    },
    {
      title: 'Price',
      value: '$0.125',
      icon: 'fa-dollar-sign',
      change: '+10%'
    },
    {
      title: '24h Volume',
      value: '$1.2M',
      icon: 'fa-chart-bar',
      change: '+20%'
    },
    {
      title: 'Circulating Supply',
      value: '100M',
      icon: 'fa-coins',
      change: '+0.5%'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1e1e1e] pt-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src="/images/stats-hero-1024.webp" alt="Stats Header" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
        </div>
        <div className="relative z-10 py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Network <span className="text-[#40E0D0]">Statistics</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Real-time insights into the Salvium network performance and market data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Network <span className="text-[#40E0D0]">Performance</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networkStats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#2A2A2A] p-6 rounded-lg border border-[#40E0D0]/10 hover:border-[#40E0D0]/30 transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#40E0D0]/10 flex items-center justify-center">
                    <i className={`fas ${stat.icon} text-xl text-[#40E0D0]`}></i>
                  </div>
                  <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-white/60 text-sm mb-2">{stat.title}</h3>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Market <span className="text-[#40E0D0]">Statistics</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#2A2A2A] p-6 rounded-lg border border-[#40E0D0]/10 hover:border-[#40E0D0]/30 transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#40E0D0]/10 flex items-center justify-center">
                    <i className={`fas ${stat.icon} text-xl text-[#40E0D0]`}></i>
                  </div>
                  <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-white/60 text-sm mb-2">{stat.title}</h3>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
