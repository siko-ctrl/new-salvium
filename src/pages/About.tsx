import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: 'mobile'
    });
  }, []);

  return (
    <main className="relative z-10">
      {/* Hero Section */}
      <section className="relative">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/new-salvium/images/newimages/About.webp" type="image/webp" />
            <img src="/new-salvium/images/newimages/About.png" alt="About Salvium" className="w-full h-full object-cover opacity-30" />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
        </div>
        <div className="relative z-10 py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
                About <span className="gradient-text">Salvium</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 text-center mx-auto max-w-2xl">
                Revolutionizing DeFi through innovation, security, and accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Navigation Sidebar */}
            <div className="md:col-span-1">
              <nav className="p-8 bg-gradient-to-b from-[rgba(40,40,40,0.95)] to-[rgba(30,30,30,0.98)] border border-[rgba(0,191,165,0.15)] rounded-md">
                <div className="text-xl font-semibold text-[#00bfa5] mb-4 pb-4 border-b border-[rgba(0,191,165,0.15)]">
                  Quick Navigation
                </div>
                <ul className="space-y-4">
                  <li><a href="#overview" className="text-gray-300 hover:text-[#00bfa5] transition-colors">Overview</a></li>
                  <li><a href="#technology" className="text-gray-300 hover:text-[#00bfa5] transition-colors">Technology</a></li>
                  <li><a href="#features" className="text-gray-300 hover:text-[#00bfa5] transition-colors">Key Features</a></li>
                  <li><a href="#security" className="text-gray-300 hover:text-[#00bfa5] transition-colors">Security</a></li>
                  <li><a href="#distribution" className="text-gray-300 hover:text-[#00bfa5] transition-colors">Token Distribution</a></li>
                </ul>
              </nav>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <div className="max-w-3xl">
                <section id="overview" data-aos="fade-up">
                  <h2 className="text-4xl text-[#00bfa5] font-semibold mb-6">Overview</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    Salvium is a cutting-edge proof-of-work private blockchain that seamlessly combines staking, enhanced privacy and DeFi capabilities while navigating crypto regulations. Built on a fork of Monero, it retains Monero's advanced privacy features such as stealth addresses and ring signatures.
                  </p>
                  <p className="text-lg text-gray-300 mb-6">
                    Taking a 'privacy-first' approach, Salvium is designed to meet full MiCA compliance. At launch, we will introduce phase one compliance features, such as refundable payments and a specialized 'exchange mode' for supporting these refunds.
                  </p>
                </section>

                <div className="h-px bg-[rgba(0,191,165,0.15)] my-16"></div>

                <section id="technology" data-aos="fade-up">
                  <h2 className="text-4xl text-[#00bfa5] font-semibold mb-6">Technology</h2>
                  <h3 className="text-2xl text-[#00bfa5] font-semibold mt-8 mb-4">Mining Specifications</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Salvium utilizes the RandomX algorithm with a 120-second block time and a block reward of 123.825 SAL. Our dynamic difficulty adjustment ensures network stability and fair mining opportunities for all participants.
                  </p>
                  <h3 className="text-2xl text-[#00bfa5] font-semibold mt-8 mb-4">Staking Mechanism</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Our innovative staking system allocates 20% of block rewards to stakers, featuring no minimum lock period and instant unstaking capabilities. This flexible approach allows users to participate in network security while maintaining liquidity.
                  </p>
                </section>

                <div className="h-px bg-[rgba(0,191,165,0.15)] my-16"></div>

                <section id="features" data-aos="fade-up">
                  <h2 className="text-4xl text-[#00bfa5] font-semibold mb-6">Key Features</h2>
                  <p className="text-lg text-gray-300 mb-4">
                    Salvium introduces several groundbreaking features to the privacy coin ecosystem:
                  </p>
                  <ul className="list-none pl-6 space-y-3 mb-6">
                    <li className="relative text-gray-300 before:content-['•'] before:text-[#40E0D0] before:text-2xl before:absolute before:-left-6 before:-top-1">
                      Native staking with flexible options
                    </li>
                    <li className="relative text-gray-300 before:content-['•'] before:text-[#40E0D0] before:text-2xl before:absolute before:-left-6 before:-top-1">
                      Advanced privacy features inherited from Monero
                    </li>
                    <li className="relative text-gray-300 before:content-['•'] before:text-[#40E0D0] before:text-2xl before:absolute before:-left-6 before:-top-1">
                      Conditional Payments System for enhanced DeFi capabilities
                    </li>
                    <li className="relative text-gray-300 before:content-['•'] before:text-[#40E0D0] before:text-2xl before:absolute before:-left-6 before:-top-1">
                      Regulatory compliance tools for exchange integration
                    </li>
                  </ul>
                </section>

                <div className="h-px bg-[rgba(0,191,165,0.15)] my-16"></div>

                <section id="security" data-aos="fade-up">
                  <h2 className="text-4xl text-[#00bfa5] font-semibold mb-6">Security & Compliance</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    Security is paramount at Salvium. We champion ethical usage while ensuring regulatory compliance, laying the groundwork for truly private decentralized finance. Our selective transparency features allow users to control their privacy level, crucial for exchange compliance.
                  </p>
                  <p className="text-lg text-gray-300 mb-6">
                    The platform is proactively designed with upcoming regulations in mind, ensuring long-term sustainability and adoption.
                  </p>
                </section>

                <div className="h-px bg-[rgba(0,191,165,0.15)] my-16"></div>

                <section id="distribution" data-aos="fade-up">
                  <h2 className="text-4xl text-[#00bfa5] font-semibold mb-6">Token Distribution</h2>
                  <p className="text-lg text-gray-300 mb-4">
                    Salvium's token distribution is carefully designed to ensure sustainable development and community growth:
                  </p>
                  <ul className="list-none pl-6 space-y-3 mb-6">
                    <li className="relative text-gray-300 before:content-['•'] before:text-[#40E0D0] before:text-2xl before:absolute before:-left-6 before:-top-1">
                      <strong>Development Fund (40%)</strong>: Allocated for ongoing development, security audits, and technical improvements
                    </li>
                    <li className="relative text-gray-300 before:content-['•'] before:text-[#40E0D0] before:text-2xl before:absolute before:-left-6 before:-top-1">
                      <strong>Community Fund (30%)</strong>: Dedicated to community rewards, ecosystem growth, and governance initiatives
                    </li>
                    <li className="relative text-gray-300 before:content-['•'] before:text-[#40E0D0] before:text-2xl before:absolute before:-left-6 before:-top-1">
                      <strong>Marketing Fund (20%)</strong>: Reserved for marketing initiatives and awareness campaigns
                    </li>
                    <li className="relative text-gray-300 before:content-['•'] before:text-[#40E0D0] before:text-2xl before:absolute before:-left-6 before:-top-1">
                      <strong>Team Fund (10%)</strong>: Allocated for team compensation and operational expenses
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
