import React from 'react';
import { Lock, Wallet, TrendingUp } from 'lucide-react';

const Staking = () => {
  const stakingPools = [
    {
      name: 'SAL Staking',
      apr: '12.5%',
      totalStaked: '1.2M SAL',
      minStake: '100 SAL',
      lockPeriod: '30 days'
    },
    {
      name: 'LP Staking',
      apr: '25%',
      totalStaked: '500K SAL-ETH LP',
      minStake: '1 LP',
      lockPeriod: '60 days'
    },
    {
      name: 'Governance Staking',
      apr: '18%',
      totalStaked: '800K SAL',
      minStake: '1000 SAL',
      lockPeriod: '90 days'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center font-['Josefin_Sans']">
          Private <span className="text-[#00DFB7]">Staking</span>
        </h1>
        <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto font-['Arial']">
          Stake your assets securely and privately. Earn competitive yields while maintaining
          complete confidentiality of your financial activities.
        </p>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <Wallet size={24} />, label: 'Total Value Locked', value: '$5.2M' },
            { icon: <Lock size={24} />, label: 'Private Stakers', value: '1,234' },
            { icon: <TrendingUp size={24} />, label: 'Average APR', value: '18.5%' }
          ].map((stat, index) => (
            <div key={index} className="bg-[#1A1A1A] p-8 rounded-lg text-center">
              <div className="text-[#00DFB7] flex justify-center mb-4">{stat.icon}</div>
              <h3 className="font-bold mb-2 font-['Josefin_Sans']">{stat.value}</h3>
              <p className="text-gray-400 text-sm font-['Arial']">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Staking Pools */}
        <div className="grid md:grid-cols-3 gap-8">
          {stakingPools.map((pool, index) => (
            <div key={index} className="bg-[#1A1A1A] p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 font-['Josefin_Sans']">{pool.name}</h3>
              
              <div className="space-y-4 mb-8 font-['Arial']">
                <div className="flex justify-between">
                  <span className="text-gray-400">APR</span>
                  <span className="text-[#00DFB7]">{pool.apr}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Staked</span>
                  <span>{pool.totalStaked}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Min Stake</span>
                  <span>{pool.minStake}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Lock Period</span>
                  <span>{pool.lockPeriod}</span>
                </div>
              </div>

              <button className="w-full bg-[#00DFB7] text-black py-3 rounded-lg font-semibold hover:bg-[#00DFB7]/90 transition">
                Stake Now
              </button>
            </div>
          ))}
        </div>

        {/* Privacy Notice */}
        <div className="mt-16 bg-[#1A1A1A] p-8 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2 text-[#00DFB7] mb-4">
            <Lock size={20} />
            <h3 className="font-bold font-['Josefin_Sans']">Privacy Guaranteed</h3>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto font-['Arial']">
            All staking activities are protected by zero-knowledge proofs, ensuring your financial
            privacy while allowing you to participate in our ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Staking;
