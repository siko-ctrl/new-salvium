export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  readTime: string;
  image: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'dawn-of-new-market',
    title: 'The Dawn of a New Market',
    date: 'December 18, 2024',
    content: 'The Dawn of a New Market\n\nAs privacy coins face increasing scrutiny, a significant gap is emerging in the market.',
    excerpt: 'A new market opportunity emerges as privacy coins evolve to meet regulatory requirements while maintaining strong privacy features.',
    readTime: '4',
    image: '/images/blog/new-dawn.webp'
  },
  {
    slug: 'desktop-wallet-launch',
    title: 'Salvium 0.5.0 Launch. Including Desktop GUI Wallet',
    date: 'December 18, 2024',
    content: 'Salvium 0.5.0 Launch. Including Desktop GUI Wallet\n\nWe are excited to announce the release of Salvium 0.5.0.',
    excerpt: 'Introducing our latest milestone with the release of Salvium 0.5.0, featuring our highly anticipated Desktop GUI Wallet.',
    readTime: '6',
    image: '/images/blog/wallet.webp'
  },
  {
    slug: 'evolution-of-privacy',
    title: 'The Evolution of Privacy in Cryptocurrency',
    date: 'December 18, 2024',
    content: 'The Evolution of Privacy in Cryptocurrency\n\nFrom Underground to Compliant.',
    excerpt: 'Explore the journey of privacy in cryptocurrency, from its underground roots to becoming a compliant, mainstream solution.',
    readTime: '10',
    image: '/images/blog/evolution.webp'
  },
  {
    slug: 'privacy-ama',
    title: 'TRANSCRIPT - Pursuit of Privacy AMA',
    date: 'December 18, 2024',
    content: 'TRANSCRIPT - Pursuit of Privacy AMA\n\nThis is a transcript of our recent AMA session.',
    excerpt: "Read the full transcript of our AMA session focused on privacy in cryptocurrency and Salvium's approach.",
    readTime: '15',
    image: '/images/blog/ama.webp'
  },
  {
    slug: 'protocol-audit',
    title: 'Salvium Protocol Audit',
    date: 'December 18, 2024',
    content: 'Salvium Protocol Audit\n\nA Milestone in Innovation and Security.',
    excerpt: "Discover the results of our comprehensive protocol audit and what it means for Salvium's security and innovation.",
    readTime: '7',
    image: '/images/blog/audit.webp'
  },
  {
    slug: 'protocol-tx-innovation',
    title: "Protocol TX: The Innovation Powering Salvium's Blockchain",
    date: 'December 18, 2024',
    content: "Protocol TX: The Innovation\n\nExploring the technology behind Salvium.",
    excerpt: "Deep dive into Protocol TX, the innovative technology that powers Salvium's blockchain future.",
    readTime: '8',
    image: '/images/blog/protocol.webp'
  },
  {
    slug: 'treasury-update',
    title: 'Salvium Treasury Update',
    date: 'December 18, 2024',
    content: 'Treasury Update\n\nAugust 2024 funds locked for 2-years.',
    excerpt: 'Important update on the Salvium Treasury, including details on fund locking and future plans.',
    readTime: '4',
    image: '/images/blog/treasury.webp'
  },
  {
    slug: 'v06-series-update',
    title: "Understanding Salvium's v0.6 Series",
    date: 'December 18, 2024',
    content: "Understanding Salvium's v0.6 Series\n\nImproved Difficulty Algorithm.",
    excerpt: "Dive into the technical improvements and innovations coming with Salvium's v0.6 series updates.",
    readTime: '5',
    image: '/images/blog/v06.webp'
  }
];
