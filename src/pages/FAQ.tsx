import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <main className="relative z-10">
      {/* Hero Section */}
      <section className="relative">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img 
            src="/new-salvium/images/newimages/Page Headers/FAQ Header-1024.webp" 
            alt="FAQ Header" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
        </div>
        <div className="relative z-10 py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 text-center mx-auto max-w-2xl">
                Find answers to common questions about Salvium's technology, features, and ecosystem
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
              <nav className="p-8 bg-gradient-to-b from-[rgba(40,40,40,0.95)] to-[rgba(30,30,30,0.98)] border border-[rgba(0,191,165,0.15)] rounded-md sticky top-24">
                <div className="text-xl font-semibold text-[#00bfa5] mb-4 pb-4 border-b border-[rgba(0,191,165,0.15)]">
                  Quick Navigation
                </div>
                <ul className="space-y-4">
                  <li><a href="#general" className="text-gray-300 hover:text-[#00bfa5] transition-colors">General Information</a></li>
                  <li><a href="#tokenomics" className="text-gray-300 hover:text-[#00bfa5] transition-colors">Tokenomics & Mining</a></li>
                  <li><a href="#privacy" className="text-gray-300 hover:text-[#00bfa5] transition-colors">Privacy & Security</a></li>
                  <li><a href="#technology" className="text-gray-300 hover:text-[#00bfa5] transition-colors">Technology & Features</a></li>
                  <li><a href="#usage" className="text-gray-300 hover:text-[#00bfa5] transition-colors">Usage & Participation</a></li>
                </ul>
              </nav>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <div className="max-w-3xl">
                {/* General Information */}
                <section id="general" data-aos="fade-up">
                  <h2 className="text-4xl text-[#00bfa5] font-semibold mb-6">General Information</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">What is Salvium?</h3>
                      <p className="text-lg text-gray-300">
                        For a comprehensive overview of Salvium, please visit our About page.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">How does Salvium differ from other privacy coins like Monero?</h3>
                      <p className="text-lg text-gray-300">
                        While Salvium builds on Monero's privacy features, it distinguishes itself through its focus on DeFi capabilities and regulatory compliance. Salvium introduces staking, yield generation, and features designed to meet emerging crypto regulations while maintaining strong privacy protections.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">Who is behind the Salvium project?</h3>
                      <p className="text-lg text-gray-300">
                        Salvium is developed by a team of experienced, anonymous experts in Monero, decentralized finance (DeFi), and applied cryptography. While the team members remain anonymous to maintain the project's decentralized nature, they bring a wealth of experience from pioneering work in implementing advanced cryptographic techniques for transaction privacy and security. The project began as a research initiative in early 2023 and has since evolved into a full-fledged blockchain platform.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="h-px bg-[rgba(0,191,165,0.15)] my-16"></div>

                {/* Tokenomics and Mining */}
                <section id="tokenomics" data-aos="fade-up">
                  <h2 className="text-4xl text-[#00bfa5] font-semibold mb-6">Tokenomics & Mining</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">What is the total supply of Salvium (SAL) tokens?</h3>
                      <p className="text-lg text-gray-300">
                        The initial supply of Salvium is 184.4 million SAL, with a tail emission of 3 SAL per block after the initial supply is mined.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">What is the block time for Salvium?</h3>
                      <p className="text-lg text-gray-300">
                        The block time for Salvium is 120 seconds (2 minutes).
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">How can I mine Salvium?</h3>
                      <p className="text-lg text-gray-300">
                        Salvium uses the RandomX mining algorithm. Detailed mining instructions are available in our official documentation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">Was there a pre-mine for Salvium, and if so, what was its purpose?</h3>
                      <p className="text-lg text-gray-300">Yes, Salvium had a 12.01% pre-mine. This pre-mine serves two main purposes:</p>
                      <ul className="list-none pl-6 space-y-3 mt-4">
                        <li className="relative text-gray-300 before:content-['•'] before:text-[#40E0D0] before:text-2xl before:absolute before:-left-6 before:-top-1">
                          <strong>Build (3.5%)</strong>: Allocated as incentives for early developers and contributors to support the project's launch.
                        </li>
                        <li className="relative text-gray-300 before:content-['•'] before:text-[#40E0D0] before:text-2xl before:absolute before:-left-6 before:-top-1">
                          <strong>Operations (8.48%)</strong>: Set aside for ongoing development, enhancements, and new feature implementation. These tokens are time-locked and released over 24 monthly installments.
                        </li>
                      </ul>
                      <p className="text-lg text-gray-300 mt-4">
                        The pre-mine is crucial for funding the project's development and ensuring its long-term sustainability.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="h-px bg-[rgba(0,191,165,0.15)] my-16"></div>

                {/* Privacy and Security */}
                <section id="privacy" data-aos="fade-up">
                  <h2 className="text-4xl text-[#00bfa5] font-semibold mb-6">Privacy & Security</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">How does Salvium ensure privacy in transactions?</h3>
                      <p className="text-lg text-gray-300">
                        Salvium uses a combination of Ring Signatures, Ring Confidential Transactions (RingCT), and Stealth Addresses to protect the privacy of senders, receivers, and transaction amounts.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">How does Salvium address regulatory compliance?</h3>
                      <p className="text-lg text-gray-300">
                        Salvium is actively working towards regulatory compliance. We're implementing features like Exchange Mode, refundable transactions, and view keys to meet emerging regulatory requirements while maintaining core privacy features.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">What is the purpose of the "Exchange Mode" in Salvium?</h3>
                      <p className="text-lg text-gray-300">
                        Exchange Mode is designed to help exchanges comply with MiCA regulations. It includes features like freezing incoming payments and the ability to return exact received funds, enabling exchanges to operate with Salvium while meeting regulatory requirements.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="h-px bg-[rgba(0,191,165,0.15)] my-16"></div>

                {/* Technology and Features */}
                <section id="technology" data-aos="fade-up">
                  <h2 className="text-4xl text-[#00bfa5] font-semibold mb-6">Technology & Features</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">How does staking work in Salvium?</h3>
                      <p className="text-lg text-gray-300">
                        Staking in Salvium allows users to lock their SAL tokens to earn rewards. Stakers receive 20% of the block reward, distributed proportionally among all active stakers based on their staked amount.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">What is the "protocol_tx" feature in Salvium?</h3>
                      <p className="text-lg text-gray-300">
                        Protocol_tx is a block-level transaction used for minting new coins (except block rewards) and facilitating advanced features like stake payouts and yield distribution.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">What are Asynchronous Transactions in Salvium?</h3>
                      <p className="text-lg text-gray-300">
                        Asynchronous Transactions allow for minting of coins in separate blocks from burn transactions, enabling more complex operations like yield payouts for staking.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">How does Salvium plan to implement smart contracts?</h3>
                      <p className="text-lg text-gray-300">
                        Smart contract functionality is planned for Phase 3 of Salvium's development. We aim to leverage our protocol_tx innovation and provide middleware for Solidity to enable complex DeFi applications.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="h-px bg-[rgba(0,191,165,0.15)] my-16"></div>

                {/* Usage and Participation */}
                <section id="usage" data-aos="fade-up">
                  <h2 className="text-4xl text-[#00bfa5] font-semibold mb-6">Usage & Participation</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">Is Salvium compatible with hardware wallets?</h3>
                      <p className="text-lg text-gray-300">
                        Currently, Salvium is not compatible with hardware wallets. However, there's no technical reason preventing compatibility in the future, and we're exploring this option as part of our ongoing development.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl text-[#00bfa5] font-semibold mb-4">How can I get involved with the Salvium project?</h3>
                      <p className="text-lg text-gray-300">There are several ways to get involved with Salvium:</p>
                      <ul className="list-none pl-6 space-y-3 mt-4">
                        <li className="relative text-gray-300 before:content-['•'] before:text-[#40E0D0] before:text-2xl before:absolute before:-left-6 before:-top-1">
                          Join our community on Discord and participate in discussions
                        </li>
                        <li className="relative text-gray-300 before:content-['•'] before:text-[#40E0D0] before:text-2xl before:absolute before:-left-6 before:-top-1">
                          Contribute to our open-source codebase on GitHub
                        </li>
                        <li className="relative text-gray-300 before:content-['•'] before:text-[#40E0D0] before:text-2xl before:absolute before:-left-6 before:-top-1">
                          Help with testing new features and providing feedback
                        </li>
                        <li className="relative text-gray-300 before:content-['•'] before:text-[#40E0D0] before:text-2xl before:absolute before:-left-6 before:-top-1">
                          Create educational content about Salvium
                        </li>
                        <li className="relative text-gray-300 before:content-['•'] before:text-[#40E0D0] before:text-2xl before:absolute before:-left-6 before:-top-1">
                          Spread the word about Salvium in your networks
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
