import React from 'react';
import '../styles/papers.css';

const Papers = () => {
  const papers = [
    {
      language: 'English',
      title: 'English Version',
      image: '/new-salvium/images/litepaper/english-litepaper-1024.webp',
      description: 'The comprehensive guide to Salvium Protocol, its features, and technical specifications.',
      readTime: '15 min read',
      fileType: 'PDF',
      link: 'litepapers/salvium-litepaper-v1_0-english.pdf'
    },
    {
      language: 'Chinese',
      title: 'Chinese Version',
      image: '/new-salvium/images/litepaper/chinese-litepaper-1024.webp',
      description: 'Salvium Protocol的完整指南，包括其功能和技术规格。',
      readTime: '15 min read',
      fileType: 'PDF',
      link: 'litepapers/salvium-litepaper-v1_0-chinese.pdf'
    },
    {
      language: 'Japanese',
      title: 'Japanese Version',
      image: '/new-salvium/images/litepaper/japanese-litepaper-1024.webp',
      description: 'Salvium Protocolの包括的なガイド、その機能と技術仕様。',
      readTime: '15 min read',
      fileType: 'PDF',
      link: 'litepapers/salvium-litepaper-v1_0-japanese.pdf'
    },
    {
      language: 'Korean',
      title: 'Korean Version',
      image: '/new-salvium/images/litepaper/korean-litepaper-1024.webp',
      description: '살비움 프로토콜의 포괄적인 가이드, 기능 및 기술 사양.',
      readTime: '15 min read',
      fileType: 'PDF',
      link: 'litepapers/salvium-litepaper-v1_0-korean.pdf'
    },
    {
      language: 'French',
      title: 'French Version',
      image: '/new-salvium/images/litepaper/french-litepaper-1024.webp',
      description: 'Une vue d\'ensemble complète de la technologie, de la vision et de la feuille de route de Salvium.',
      readTime: '15 min read',
      fileType: 'PDF',
      link: 'litepapers/salvium-litepaper-v1_0-french.pdf'
    },
    {
      language: 'German',
      title: 'German Version',
      image: '/new-salvium/images/litepaper/german-litepaper-1024.webp',
      description: 'Der umfassende Leitfaden zum Salvium-Protokoll, seinen Funktionen und technischen Spezifikationen.',
      readTime: '15 min read',
      fileType: 'PDF',
      link: 'litepapers/salvium-litepaper-v1_0-german.pdf'
    }
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="/new-salvium/images/newimages/Page Headers/Litepaper Header-1024.webp" 
            alt="Papers Header" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
        </div>
        <div className="relative z-10 py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Salvium <span className="gradient-text">Papers</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Explore our technical documentation and research
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Papers Grid */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {papers.map((paper, index) => (
            <div 
              key={index}
              className="group block overflow-hidden bg-gradient-to-b from-[#282828]/95 to-[#1e1e1e]/98 border border-[#333333] hover:border-[#00DFB7] hover:shadow-lg hover:shadow-[#00DFB7]/10 transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
                  <div className="bg-[#00DFB7]/10 text-[#00DFB7] px-3 py-1 rounded">{paper.language}</div>
                  <div className="bg-[#00DFB7]/10 text-[#00DFB7] px-3 py-1 rounded">{paper.readTime}</div>
                  <div className="bg-[#00DFB7]/10 text-[#00DFB7] px-3 py-1 rounded">{paper.fileType}</div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-slate-50 font-['Josefin_Sans'] mb-3 line-clamp-2 group-hover:text-[#00DFB7] transition-colors">
                  {paper.title}
                </h2>

                {/* Description */}
                <p className="text-slate-400 line-clamp-3 mb-4 text-sm">
                  {paper.description}
                </p>

                {/* Download Link */}
                <a 
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00DFB7] font-medium flex items-center gap-2 group/link"
                >
                  Download PDF
                  <i className="fas fa-arrow-right transform transition-transform group-hover/link:translate-x-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Papers;
