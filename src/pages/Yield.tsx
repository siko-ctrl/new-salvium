import React from 'react';
import { Lock, TrendingUp, DollarSign, Percent } from 'lucide-react';

const Yield = () => {
  const yieldPools = [
    {
      name: 'SAL-ETH LP Farm',
      apy: '45%',
      tvl: '$2.1M',
      risk: 'Low',
      strategy: 'Automated Market Making'
    },
    {
      name: 'SAL-USDC Vault',
      apy: '28%',
      tvl: '$1.8M',
      risk: 'Low-Medium',
      strategy: 'Stable LP + Yield Aggregation'
    },
    {
      name: 'Cross-Chain Yield',
      apy: '65%',
      tvl: '$900K',
      risk: 'Medium',
      strategy: 'Multi-Chain Yield Farming'
    },
    {
      name: 'Privacy Pool',
      apy: '35%',
      tvl: '$1.5M',
      risk: 'Low',
      strategy: 'Private LP Farming'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center font-['Josefin_Sans']">
          Yield <span className="text-[#00DFB7]">Generation</span>
        </h1>
        <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto font-['Arial']">
          Generate passive income through our innovative yield farming strategies while
          maintaining complete privacy and security.
        </p>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: <DollarSign size={24} />, label: 'Total Value Locked', value: '$6.3M' },
            { icon: <Percent size={24} />, label: 'Average APY', value: '43.25%' },
            { icon: <Lock size={24} />, label: 'Active Farmers', value: '892' },
            { icon: <TrendingUp size={24} />, label: 'Weekly Yield', value: '$124K' }
          ].map((stat, index) => (
            <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg text-center">
              <div className="text-[#00DFB7] flex justify-center mb-4">{stat.icon}</div>
              <h3 className="font-bold mb-2 font-['Josefin_Sans']">{stat.value}</h3>
              <p className="text-gray-400 text-sm font-['Arial']">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Yield Pools */}
        <div className="grid md:grid-cols-2 gap-8">
          {yieldPools.map((pool, index) => (
            <div key={index} className="bg-[#1A1A1A] p-8 rounded-lg">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold font-['Josefin_Sans']">{pool.name}</h3>
                <span className="bg-[#00DFB7]/20 text-[#00DFB7] px-3 py-1 rounded-full text-sm">
                  {pool.risk}
                </span>
              </div>
              
              <div className="space-y-4 mb-8 font-['Arial']">
                <div className="flex justify-between">
                  <span className="text-gray-400">APY</span>
                  <span className="text-[#00DFB7]">{pool.apy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">TVL</span>
                  <span>{pool.tvl}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Strategy</span>
                  <span className="text-right">{pool.strategy}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-[#00DFB7] text-black py-3 rounded-lg font-semibold hover:bg-[#00DFB7]/90 transition">
                  Deposit
                </button>
                <button className="flex-1 border border-[#00DFB7] text-[#00DFB7] py-3 rounded-lg font-semibold hover:bg-[#00DFB7]/10 transition">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy Notice */}
        <div className="mt-16 bg-[#1A1A1A] p-8 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2 text-[#00DFB7] mb-4">
            <Lock size={20} />
            <h3 className="font-bold font-['Josefin_Sans']">Privacy-First Yield Farming</h3>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto font-['Arial']">
            All yield farming activities are protected by our privacy protocol. Generate yields
            while keeping your financial activities completely confidential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Yield;
