import React from 'react';
import '../styles/exchanges.css';

const Exchanges = () => {
  const exchanges = [
    {
      name: 'Seven Seas',
      image: '/new-salvium/images/newimages/Exchange Page/Cards/Seven Seas Card-1024.webp',
      type: 'Exchange',
      pairs: [
        { label: 'Trading Pair', value: 'SAL/USDT' }
      ],
      link: 'https://www.sevenseas.exchange'
    },
    {
      name: 'TradeOgre',
      image: '/new-salvium/images/newimages/Exchange Page/Cards/TradeOgre Card.png.webp',
      type: 'Exchange',
      pairs: [
        { label: 'Trading Pair 1', value: 'SAL/USDT' },
        { label: 'Trading Pair 2', value: 'SAL/BTC' }
      ],
      links: {
        usdt: 'https://tradeogre.com/exchange/SAL-USDT',
        btc: 'https://tradeogre.com/exchange/SAL-BTC'
      }
    },
    {
      name: 'XeggeX',
      image: '/new-salvium/images/newimages/Exchange Page/Cards/xeggex card-1024.webp',
      type: 'Exchange',
      pairs: [
        { label: 'Trading Pair', value: 'SAL/USDT' }
      ],
      link: 'https://xeggex.com/market/SAL_USDT'
    },
    {
      name: 'nonkyc',
      image: '/new-salvium/images/newimages/Exchange Page/Cards/No KYC Card-1024.webp',
      type: 'Exchange',
      pairs: [
        { label: 'Trading Pair', value: 'SAL/USDT' }
      ],
      link: 'https://nonkyc.io/market/SAL_USDT'
    },
    {
      name: 'CoinEx',
      image: '/new-salvium/images/newimages/Exchange Page/Cards/CoinEx Card-1024.webp',
      type: 'Exchange',
      pairs: [
        { label: 'Trading Pair', value: 'SAL/USDT' }
      ],
      link: 'https://www.coinex.com/exchange/sal-usdt'
    }
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="/new-salvium/images/newimages/Page Headers/Exchange Header-1024.webp" 
            alt="Exchange Header" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
        </div>
        <div className="relative z-10 py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Salvium <span className="gradient-text">Exchanges</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Trade Salvium on our partner exchanges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exchanges Grid */}
      <div className="container mx-auto px-4 exchange-content mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exchanges.map((exchange, index) => (
            <div 
              key={index}
              className="group block overflow-hidden bg-gradient-to-b from-[#282828]/95 to-[#1e1e1e]/98 border border-[#333333] hover:border-[#00DFB7] hover:shadow-lg hover:shadow-[#00DFB7]/10 transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={exchange.image}
                  alt={exchange.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                  <div className="bg-[#00DFB7]/10 text-[#00DFB7] px-3 py-1 rounded">{exchange.type}</div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-slate-50 font-['Josefin_Sans'] mb-3 text-center group-hover:text-[#00DFB7] transition-colors">
                  {exchange.name}
                </h2>

                {/* Trading Pairs */}
                <div className="bg-[#1e1e1e]/50 rounded-lg p-4 mb-6 border border-[#333333]/50">
                  {exchange.pairs.map((pair, pairIndex) => (
                    <div 
                      key={pairIndex}
                      className={`flex justify-between items-center ${
                        pairIndex !== exchange.pairs.length - 1 ? 'mb-3 pb-2 border-b border-[#00DFB7]/10' : ''
                      }`}
                    >
                      <span className="text-slate-400">{pair.label}</span>
                      <span className="text-[#00DFB7] font-semibold">{pair.value}</span>
                    </div>
                  ))}
                </div>

                {/* Visit Link */}
                {exchange.name === 'TradeOgre' ? (
                  <div className="flex gap-4">
                    <a href={exchange.links.usdt} target="_blank" rel="noopener noreferrer" className="text-[#00DFB7] font-medium flex items-center justify-center gap-2 group/link">
                      Trade SAL/USDT
                      <i className="fas fa-arrow-right transform transition-transform group-hover/link:translate-x-1"></i>
                    </a>
                    <a href={exchange.links.btc} target="_blank" rel="noopener noreferrer" className="text-[#00DFB7] font-medium flex items-center justify-center gap-2 group/link">
                      Trade SAL/BTC
                      <i className="fas fa-arrow-right transform transition-transform group-hover/link:translate-x-1"></i>
                    </a>
                  </div>
                ) : (
                  <a href={exchange.link} target="_blank" rel="noopener noreferrer" className="text-[#00DFB7] font-medium flex items-center justify-center gap-2 group/link">
                    Visit Exchange
                    <i className="fas fa-arrow-right transform transition-transform group-hover/link:translate-x-1"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Exchanges;
