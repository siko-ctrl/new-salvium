import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import '../styles/cards.css';

const Tools = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const tools = [
    {
      name: 'CoinGecko',
      image: '/new-salvium/images/newimages/Tools/CoinGecko.webp',
      platform: 'Price Tracking',
      description: 'Track Salvium price, market cap, and trading volume on CoinGecko',
      link: 'https://www.coingecko.com/en/coins/salvium',
    },
    {
      name: 'Coinpaprika',
      image: '/new-salvium/images/newimages/Tools/Coinpaprika.webp',
      platform: 'Market Analysis',
      description: 'View detailed market analysis and statistics on Coinpaprika',
      link: 'https://coinpaprika.com/coin/sal-salvium/',
    },
    {
      name: 'Coinranking',
      image: '/new-salvium/images/newimages/Tools/Coinranking.webp',
      platform: 'Rankings',
      description: 'Check Salvium\'s ranking and market performance',
      link: 'https://coinranking.com/coin/Vl1CI175t+salvium-sal',
    },
    {
      name: 'Forbes',
      image: '/new-salvium/images/newimages/Tools/Forbes.webp',
      platform: 'Market Insights',
      description: 'Professional market analysis and insights from Forbes',
      link: 'https://www.forbes.com/digital-assets/assets/salvium-sal/',
    },
    {
      name: 'LiveCoinWatch',
      image: '/new-salvium/images/newimages/Tools/LiveCoinWatch.webp',
      platform: 'Live Tracking',
      description: 'Real-time price tracking and market data analysis',
      link: 'https://www.livecoinwatch.com/price/Salvium-SAL',
    },
  ];

  return (
    <main className="relative z-10">
      {/* Hero Section */}
      <section className="relative bg-[#1e1e1e] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/new-salvium/images/newimages/Page Headers/Exchange Header-1024.webp" alt="Tools Header" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e1e1e]/80 to-[#1e1e1e]"></div>
        </div>
        <div className="relative z-10 py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Third Party <span className="gradient-text">Tools</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Explore community-built tools and resources for Salvium
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coin Trackers Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">Coin <span className="gradient-text">Trackers</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="group block overflow-hidden bg-gradient-to-b from-[#282828]/95 to-[#1e1e1e]/98 border border-[#333333] hover:border-[#00DFB7] hover:shadow-lg hover:shadow-[#00DFB7]/10 transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <div className="bg-[#00DFB7]/10 text-[#00DFB7] px-3 py-1 rounded">{tool.platform}</div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-slate-50 font-['Josefin_Sans'] mb-3 line-clamp-2 group-hover:text-[#00DFB7] transition-colors">
                    {tool.name}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-400 line-clamp-3 mb-4 text-sm">
                    {tool.description}
                  </p>

                  {/* Download Link */}
                  <a 
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00DFB7] font-medium flex items-center gap-2 group/link"
                  >
                    Download Now
                    <i className="fas fa-arrow-right transform transition-transform group-hover/link:translate-x-1"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mining Tools Section */}
      <section className="py-16 relative overflow-hidden bg-[#0B272C] mt-8">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">Mining <span className="gradient-text">Tools</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mining Calculator */}
            <a href="#" className="card rounded-xl p-8 text-center" data-aos="fade-up">
              <i className="fas fa-calculator text-4xl mb-6" style={{ color: 'var(--color-primary)' }}></i>
              <h3 className="text-xl font-semibold mb-3">Mining Calculator</h3>
              <p className="text-gray-400">Calculate your potential mining earnings with our advanced calculator</p>
              <div className="mt-4">
                <span className="card-tag">Coming Soon</span>
              </div>
            </a>

            {/* Network Statistics */}
            <a href="#" className="card rounded-xl p-8 text-center" data-aos="fade-up" data-aos-delay="100">
              <i className="fas fa-chart-network text-4xl mb-6" style={{ color: 'var(--color-primary)' }}></i>
              <h3 className="text-xl font-semibold mb-3">Network Statistics</h3>
              <p className="text-gray-400">View detailed network statistics and mining difficulty</p>
              <div className="mt-4">
                <span className="card-tag">Coming Soon</span>
              </div>
            </a>

            {/* Mining Software */}
            <a href="#" className="card rounded-xl p-8 text-center" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-microchip text-4xl mb-6" style={{ color: 'var(--color-primary)' }}></i>
              <h3 className="text-xl font-semibold mb-3">Mining Software</h3>
              <p className="text-gray-400">Download and configure mining software for Salvium</p>
              <div className="mt-4">
                <span className="card-tag">Coming Soon</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tools;
