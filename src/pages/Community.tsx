import React from 'react';

const Community = () => {
  const communities = [
    {
      name: 'Discord',
      description: 'Join our vibrant Discord community for real-time discussions, support, and updates.',
      icon: 'fa-discord',
      link: 'https://discord.gg/salvium',
      members: '15,000+'
    },
    {
      name: 'Telegram',
      description: 'Stay connected with our global community on Telegram for instant updates and chat.',
      icon: 'fa-telegram',
      link: 'https://t.me/salviumcommunity',
      members: '12,000+'
    },
    {
      name: 'Twitter',
      description: 'Follow us on Twitter for the latest news, announcements, and community highlights.',
      icon: 'fa-x-twitter',
      link: 'https://x.com/salvium_io',
      members: '25,000+'
    },
    {
      name: 'GitHub',
      description: 'Contribute to our open-source development and help shape the future of Salvium.',
      icon: 'fa-github',
      link: '/docs/github',
      members: '500+'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and documentation for developers and users.',
      icon: 'fa-book',
      link: '/docs'
    },
    {
      title: 'Knowledge Base',
      description: 'Learn about Salvium technology, features, and use cases.',
      icon: 'fa-graduation-cap',
      link: '/learn'
    },
    {
      title: 'Developer Portal',
      description: 'Resources and tools for building on the Salvium network.',
      icon: 'fa-code',
      link: '/developers'
    }
  ];

  const socialLinks = [
    {
      name: 'Discord',
      description: 'Join our vibrant Discord community for real-time discussions, support, and updates.',
      icon: 'fa-discord',
      url: 'https://discord.gg/salvium',
      members: '15,000+'
    },
    {
      name: 'Telegram',
      description: 'Stay connected with our global community on Telegram for instant updates and chat.',
      icon: 'fa-telegram',
      url: 'https://t.me/salviumcommunity',
      members: '12,000+'
    },
    {
      name: 'Twitter',
      description: 'Follow us on Twitter for the latest news, announcements, and community highlights.',
      icon: 'fa-x-twitter',
      url: 'https://x.com/salvium_io',
      members: '25,000+'
    },
    {
      name: 'GitHub',
      description: 'Contribute to our open-source development and help shape the future of Salvium.',
      icon: 'fa-github',
      url: '/docs/github',
      members: '500+'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1e1e1e] pt-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src="/new-salvium/images/newimages/Page Headers/Community Header-1024.webp" alt="Community Header" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
        </div>
        <div className="relative z-10 py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Join Our <span className="text-[#40E0D0]">Community</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Connect with fellow Salvium enthusiasts, developers, and community members
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Platforms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communities.map((community, index) => (
              <div
                key={index}
                className="bg-[#2A2A2A] p-8 rounded-lg border border-[#40E0D0]/10 hover:border-[#40E0D0]/30 transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#40E0D0]/10 flex items-center justify-center mr-4">
                    <i className={`fab ${community.icon} text-2xl text-[#40E0D0]`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{community.name}</h3>
                    <p className="text-white/60 mb-4">{community.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#40E0D0]">{community.members} members</span>
                      <a
                        href={community.link}
                        className="text-[#40E0D0] hover:text-[#40E0D0]/80 transition-colors"
                      >
                        Join →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Community <span className="text-[#40E0D0]">Resources</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-[#2A2A2A] p-6 rounded-lg border border-[#40E0D0]/10 hover:border-[#40E0D0]/30 transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 rounded-full bg-[#40E0D0]/10 flex items-center justify-center mb-4">
                  <i className={`fas ${resource.icon} text-xl text-[#40E0D0]`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-white/60 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="text-[#40E0D0] hover:text-[#40E0D0]/80 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2A2A2A] rounded-lg p-6 border border-[#40E0D0]/10 hover:border-[#40E0D0]/30 transition-all group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#40E0D0]/10 flex items-center justify-center group-hover:bg-[#40E0D0]/20 transition-colors">
                    <i className={`fab ${link.icon} text-2xl text-[#40E0D0]`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{link.name}</h3>
                    <p className="text-gray-400 text-sm">{link.members}</p>
                  </div>
                </div>
                <p className="text-gray-300">{link.description}</p>
                <div className="mt-4 flex items-center text-[#40E0D0] text-sm">
                  Join Community <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
