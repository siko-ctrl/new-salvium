import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Roadmap = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const phases = [
    {
      title: 'Phase 1: Foundation',
      content: [
        'Development of core protocol infrastructure including the implementation of secure multi-party computation (MPC) for private order matching. This phase focuses on establishing the fundamental architecture that will support decentralized dark pool trading while maintaining transaction privacy.',
        'Implementation of the base layer protocol, including smart contract development and integration with existing DeFi protocols. This establishes the groundwork for future features and ensures compatibility with the broader ecosystem.'
      ]
    },
    {
      title: 'Phase 2: Enhancement',
      content: [
        'Integration of advanced features such as cross-chain functionality and enhanced privacy measures. This includes developing bridges to major blockchain networks and implementing zero-knowledge proofs for additional privacy layers.',
        'Expansion of protocol capabilities to support various trading pairs and asset types, making the platform more versatile and accessible to different types of traders and investors.'
      ]
    },
    {
      title: 'Phase 3: Scaling',
      content: [
        'Implementation of layer-2 scaling solutions to improve transaction throughput and reduce gas costs. This phase focuses on making the protocol more efficient and cost-effective for users while maintaining security and privacy.',
        'Development of additional features based on community feedback and market needs, ensuring the protocol remains competitive and relevant in the evolving DeFi landscape.'
      ]
    },
    {
      title: 'Phase 4: Ecosystem Growth',
      content: [
        'Launch of governance mechanisms and community initiatives to decentralize protocol development and decision-making. This includes the implementation of a DAO structure and community voting systems.',
        'Expansion of partnerships and integrations with other DeFi protocols and services, creating a comprehensive ecosystem that provides value to all participants.'
      ]
    }
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative bg-[#1e1e1e] overflow-hidden pt-16">
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/new-salvium/images/newimages/Roadmap-1024.webp" type="image/webp" media="(min-width: 1024px)" />
            <source srcSet="/new-salvium/images/newimages/Roadmap-640.webp" type="image/webp" media="(min-width: 640px)" />
            <img 
              src="/new-salvium/images/newimages/Roadmap.webp" 
              alt="Roadmap Header" 
              className="w-full h-full object-cover opacity-30"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
        </div>
        <div className="relative z-10 py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our <span className="text-[#40E0D0]">Roadmap</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Follow our journey as we build the future of private DeFi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {phases.map((phase, index) => (
                <div key={index} className="roadmap-item" data-aos="fade-up">
                  <h2 className="text-3xl font-bold mb-6 text-[#40E0D0]">{phase.title}</h2>
                  <ul className="space-y-4 text-lg text-gray-300">
                    {phase.content.map((paragraph, pIndex) => (
                      <li key={pIndex}>{paragraph}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Roadmap;
