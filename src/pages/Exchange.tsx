import React from 'react';
import { ArrowLeftRight, Lock, ChevronDown } from 'lucide-react';

const Exchange = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center font-['Josefin_Sans']">
          Private <span className="text-[#00DFB7]">Exchange</span>
        </h1>
        <p className="text-gray-300 text-center mb-12 font-['Arial']">
          Trade your assets with complete privacy using our decentralized exchange.
        </p>

        {/* Exchange Card */}
        <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg">
          {/* From Token */}
          <div className="mb-6">
            <label className="text-gray-400 mb-2 block">From</label>
            <div className="bg-[#121212] p-4 rounded-lg flex items-center justify-between">
              <input 
                type="number" 
                placeholder="0.0"
                className="bg-transparent text-2xl w-full outline-none"
              />
              <button className="flex items-center gap-2 bg-[#242424] px-4 py-2 rounded-lg hover:bg-[#2a2a2a] transition">
                ETH <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Swap Icon */}
          <div className="flex justify-center my-4">
            <button className="bg-[#242424] p-3 rounded-full hover:bg-[#2a2a2a] transition">
              <ArrowLeftRight className="text-[#00DFB7]" />
            </button>
          </div>

          {/* To Token */}
          <div className="mb-6">
            <label className="text-gray-400 mb-2 block">To</label>
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

          {/* Privacy Badge */}
          <div className="flex items-center justify-center gap-2 text-[#00DFB7] mb-6">
            <Lock size={16} />
            <span className="text-sm">Private Transaction</span>
          </div>

          {/* Swap Button */}
          <button className="w-full bg-[#00DFB7] text-black py-4 rounded-lg font-semibold hover:bg-[#00DFB7]/90 transition">
            Connect Wallet to Swap
          </button>
        </div>

        {/* Exchange Info */}
        <div className="mt-8 bg-[#1A1A1A] p-6 rounded-lg">
          <h3 className="font-bold mb-4 font-['Josefin_Sans']">Exchange Information</h3>
          <div className="space-y-3 text-sm font-['Arial']">
            <div className="flex justify-between">
              <span className="text-gray-400">Exchange Rate</span>
              <span>1 ETH = 1000 SAL</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Price Impact</span>
              <span className="text-[#00DFB7]">{'<0.01%'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Minimum Received</span>
              <span>990 SAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
