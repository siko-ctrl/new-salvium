import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/cards.css';
import EcosystemCard from '../components/EcosystemCard';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative bg-[#1e1e1e] overflow-hidden pt-16 min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/new-salvium/images/wide-hero-1024.webp" alt="Hero Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
        </div>
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="hero-content text-center lg:text-left" data-aos="fade-right">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white !opacity-100">
                  The Future of <span className="text-[#40E0D0]">Private DeFi</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 md:mb-8 !opacity-100 max-w-xl mx-auto lg:mx-0">
                  Experience true financial privacy with Salvium's innovative blockchain technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 md:mb-12">
                  <Link to="/about" className="px-6 md:px-8 py-3 border border-[#40E0D0] bg-[#40E0D0]/10 hover:bg-[#40E0D0]/20 text-white transition-colors font-semibold inline-flex items-center justify-center rounded-none w-full sm:w-auto">
                    Get Started
                  </Link>
                  <a href="https://siko-ctrl.github.io/docs-salvium/" className="px-6 md:px-8 py-3 border border-[#40E0D0] text-white hover:bg-[#40E0D0]/10 transition-colors font-semibold inline-flex items-center justify-center rounded-none w-full sm:w-auto">
                    Learn More
                  </a>
                </div>
                {/* Trust indicators */}
                <div className="trust-indicators flex flex-wrap items-center justify-center lg:justify-start gap-4 xs:gap-6 sm:gap-8 mt-6 sm:mt-8">
                  <div className="trust-indicator flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#40E0D0]/5 transition-colors">
                    <img src="/new-salvium/images/lock-icon.svg" alt="Private" className="w-8 h-8 sm:w-9 sm:h-9" />
                    <span className="text-lg sm:text-xl font-medium whitespace-nowrap text-white opacity-100">Private</span>
                  </div>
                  <div className="trust-indicator flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#40E0D0]/5 transition-colors">
                    <img src="/new-salvium/images/shield-icon.svg" alt="Secure" className="w-8 h-8 sm:w-9 sm:h-9" />
                    <span className="text-lg sm:text-xl font-medium whitespace-nowrap text-white opacity-100">Secure</span>
                  </div>
                  <div className="trust-indicator flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#40E0D0]/5 transition-colors">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center" style={{ color: '#40E0D0' }}>
                      <i className="fa-solid fa-network-wired text-2xl"></i>
                    </div>
                    <span className="text-lg sm:text-xl font-medium whitespace-nowrap text-white opacity-100">DeFi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
              Why Choose <span className="gradient-text">Salvium</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Experience the next generation of private, secure, and efficient decentralized finance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EcosystemCard
              image="/new-salvium/images/newimages/Page%20Headers/Litepaper%20Header.webp"
              tag="Privacy"
              title="Complete Privacy"
              description="Your transactions are fully protected with cutting-edge cryptography and zero-knowledge proofs."
              link="/privacy"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            
            <EcosystemCard
              image="/new-salvium/images/newimages/Page%20Headers/Exchange%20Header.webp"
              tag="Security"
              title="Enhanced Security"
              description="Built on a robust blockchain with industry-leading security measures and audited smart contracts."
              link="/security"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            
            <EcosystemCard
              image="/new-salvium/images/newimages/Page%20Headers/Pools%20Header.webp"
              tag="Speed"
              title="Lightning Fast"
              description="Experience near-instantaneous transaction speeds with our optimized protocol."
              link="/speed"
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 bg-[#1e1e1e]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Ecosystem</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the components that make Salvium the most advanced private DeFi platform.
            </p>
          </div>
          <div className="ecosystem-grid">
            <EcosystemCard
              image="/new-salvium/images/wide-hero-1024.webp"
              tag="Privacy"
              title="Zero-Knowledge Privacy"
              description="Experience complete transaction privacy with our advanced zero-knowledge proof technology."
              link="/privacy"
            />
            <EcosystemCard
              image="/new-salvium/images/wide-hero-1024.webp"
              tag="DeFi"
              title="Decentralized Finance"
              description="Access a full suite of DeFi tools while maintaining your privacy and security."
              link="/defi"
            />
            <EcosystemCard
              image="/new-salvium/images/wide-hero-1024.webp"
              tag="Security"
              title="Enhanced Security"
              description="Built with state-of-the-art security measures to protect your assets and identity."
              link="/security"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
