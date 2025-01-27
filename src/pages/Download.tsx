import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/downloads.css';

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  const desktopWallets = [
    {
      title: 'Windows',
      image: '/new-salvium/images/downloads/Micorsoft_Windows_logo.jpg',
      sha: '54c7b3f1be21a310cdbc161b7a7dbe4b5f6a28dd3d9f208cd428da47ce7f952f',
      link: 'https://github.com/salvium/salvium-gui/releases/download/v0.7.2/salvium-gui-v0.7.2a-win64.zip'
    },
    {
      title: 'Linux',
      image: '/new-salvium/images/downloads/Linux_logo.jpg',
      sha: 'd05d1d15bbbc69c6a73f32ebf4b742f9dc4cad4283cc4d1d6c5295438855d43f',
      link: 'https://github.com/salvium/salvium-gui/releases/download/v0.7.2/salvium-gui-v0.7.2-linux-x86_64.zip'
    }
  ];

  const cliWallets = [
    {
      title: 'Windows (x64)',
      image: '/new-salvium/images/downloads/Micorsoft_Windows_logo.jpg',
      sha: 'f24b728ae17fbe5021edd72c8c984a90a42e2cc17e49fc3ad780be3438706669',
      link: 'https://github.com/salvium/salvium/releases/download/v0.7.2/salvium-v0.7.2-win64.zip'
    },
    {
      title: 'Windows (ARM64)',
      image: '/new-salvium/images/downloads/Micorsoft_Windows_logo.jpg',
      sha: '2d417fe4d1ad2f45668d448a9f2f8d8d8a9f2f8d8a9f2f8d8a9f2f8d8a9f2f8d',
      link: 'https://github.com/salvium/salvium/releases/download/v0.7.2/salvium-v0.7.2-win-arm64.zip'
    },
    {
      title: 'macOS (ARM64)',
      image: '/new-salvium/images/downloads/Apple_computers_logo.jpg',
      sha: '3879083156ca41408a00afabafcc30bfa15670c287c0cea7925c963f3043d32c',
      link: 'https://github.com/salvium/salvium/releases/download/v0.7.2/salvium-v0.7.2-macos-arm64.zip'
    },
    {
      title: 'macOS (x86)',
      image: '/new-salvium/images/downloads/Apple_computers_logo.jpg',
      sha: '509fcc0d11496911b46f7985704834ec8abd270ed251af3950beb69709f1a7ff',
      link: 'https://github.com/salvium/salvium/releases/download/v0.7.2/salvium-v0.7.2-macos-x86_64.zip'
    },
    {
      title: 'Linux',
      image: '/new-salvium/images/downloads/Linux_logo.jpg',
      sha: 'a0a8df74cc7ba9db2c00d5e62e87a4653dc74094daae0947390256ac43b4db8b',
      link: 'https://github.com/salvium/salvium/releases/download/v0.7.2/salvium-v0.7.2-linux-x86_64.zip'
    }
  ];

  const DownloadCard = ({ title, image, sha, link, type = 'Desktop' }) => (
    <div className="download-card" data-aos="fade-up">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <span className="download-tag">{type}</span>
        <h3 className="download-title">{title}</h3>
        <div className="sha-text">
          SHA256: {sha}
        </div>
        <a href={link} className="card-link">
          Download
          <i className="fa-solid fa-angle-down"></i>
        </a>
      </div>
    </div>
  );

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src="/new-salvium/images/newimages/Page Headers/Download Header-1024.webp" alt="Download Header" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
        </div>
        <div className="relative z-10 py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Salvium <span className="gradient-text">Downloads</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Get started with Salvium wallets and tools
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-8">
        {/* Desktop Wallet Section */}
        <h2 className="text-3xl font-bold text-center mb-4 mt-16" data-aos="fade-up">
          Desktop Wallets
        </h2>
        <p className="text-gray-400 text-center mb-8" data-aos="fade-up" data-aos-delay="100">
          Download the Salvium Desktop Wallet for your operating system
        </p>

        <div className="downloads-grid">
          {desktopWallets.map((wallet, index) => (
            <DownloadCard key={index} {...wallet} />
          ))}
        </div>

        {/* CLI Section */}
        <h2 className="text-4xl font-bold text-center mb-4 mt-24" data-aos="fade-up">
          Command Line Interface
        </h2>
        <p className="text-center text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="100">
          Download the Salvium CLI for your operating system
        </p>

        <div className="downloads-grid">
          {cliWallets.map((wallet, index) => (
            <DownloadCard key={index} {...wallet} type="CLI" />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Download;
