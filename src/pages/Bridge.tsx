import React from 'react';
import { ArrowLeftRight, Lock, ChevronDown, ExternalLink } from 'lucide-react';

const Bridge = () => {
  const chains = [
    { name: 'Ethereum', icon: '🌐' },
    { name: 'Binance Smart Chain', icon: '🟨' },
    { name: 'Polygon', icon: '💜' },
    { name: 'Avalanche', icon: '❄️' }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center font-['Josefin_Sans']">
          Cross-Chain <span className="text-[#00DFB7]">Bridge</span>
        </h1>
        <p className="text-gray-300 text-center mb-12 font-['Arial']">
          Bridge your assets across multiple blockchains while maintaining complete privacy.
          Fast, secure, and decentralized.
        </p>

        {/* Bridge Card */}
        <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg">
          {/* From Chain */}
          <div className="mb-6">
            <label className="text-gray-400 mb-2 block">From Chain</label>
            <div className="bg-[#121212] p-4 rounded-lg flex items-center justify-between">
              <button className="flex items-center gap-2 bg-[#242424] px-4 py-2 rounded-lg hover:bg-[#2a2a2a] transition w-full">
                <span>🌐</span> Ethereum <ChevronDown size={16} className="ml-auto" />
              </button>
            </div>
          </div>

          {/* Asset Selection */}
          <div className="mb-6">
            <label className="text-gray-400 mb-2 block">Asset</label>
            <div className="bg-[#121212] p-4 rounded-lg flex items-center justify-between">
              <input 
                type="number" 
                placeholder="0.0"
                className="bg-transparent text-2xl w-full outline-none"
              />
              <button className="flex items-center gap-2 bg-[#242424] px-4 py-2 rounded-lg hover:bg-[#2a2a2a] transition">
                SAL <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Bridge Icon */}
          <div className="flex justify-center my-4">
            <button className="bg-[#242424] p-3 rounded-full hover:bg-[#2a2a2a] transition">
              <ArrowLeftRight className="text-[#00DFB7]" />
            </button>
          </div>

          {/* To Chain */}
          <div className="mb-6">
            <label className="text-gray-400 mb-2 block">To Chain</label>
            <div className="bg-[#121212] p-4 rounded-lg flex items-center justify-between">
              <button className="flex items-center gap-2 bg-[#242424] px-4 py-2 rounded-lg hover:bg-[#2a2a2a] transition w-full">
                <span>💜</span> Polygon <ChevronDown size={16} className="ml-auto" />
              </button>
            </div>
          </div>

          {/* Privacy Badge */}
          <div className="flex items-center justify-center gap-2 text-[#00DFB7] mb-6">
            <Lock size={16} />
            <span className="text-sm">Private Bridge Transfer</span>
          </div>

          {/* Bridge Button */}
          <button className="w-full bg-[#00DFB7] text-black py-4 rounded-lg font-semibold hover:bg-[#00DFB7]/90 transition">
            Connect Wallet to Bridge
          </button>
        </div>

        {/* Bridge Info */}
        <div className="mt-8 bg-[#1A1A1A] p-6 rounded-lg">
          <h3 className="font-bold mb-4 font-['Josefin_Sans']">Bridge Information</h3>
          <div className="space-y-3 text-sm font-['Arial']">
            <div className="flex justify-between">
              <span className="text-gray-400">Bridge Fee</span>
              <span>0.1%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Estimated Time</span>
              <span>~15 minutes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Minimum Amount</span>
              <span>100 SAL</span>
            </div>
          </div>
        </div>

        {/* Supported Chains */}
        <div className="mt-12">
          <h3 className="text-center font-bold mb-6 font-['Josefin_Sans']">Supported Chains</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {chains.map((chain, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-lg text-center">
                <span className="text-2xl mb-2 block">{chain.icon}</span>
                <span className="text-sm">{chain.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bridge;
