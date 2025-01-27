// Simple frontmatter parser for browser
const parseFrontMatter = (content: string) => {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontMatterRegex);

  if (!match) {
    return {
      data: {},
      content: content
    };
  }

  const yaml = match[1];
  const restContent = match[2];

  // Parse YAML-like frontmatter
  const data: Record<string, string> = {};
  yaml.split('\n').forEach(line => {
    const [key, ...values] = line.split(':');
    if (key && values.length) {
      data[key.trim()] = values.join(':').trim();
    }
  });

  return {
    data,
    content: restContent
  };
};

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  readTime: string;
  image: string;
}

// Function to calculate read time
const calculateReadTime = (content: string): string => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes.toString();
};

// Import all markdown files
const markdownFiles = import.meta.glob('../content/blog/*.md', { 
  eager: true,
  as: 'raw'
});

// Function to get blog posts
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const posts = Object.entries(markdownFiles).map(([filepath, content]) => {
    const { data, content: markdownContent } = parseFrontMatter(content);
    
    // Extract filename without extension
    const filename = filepath.split('/').pop() || '';
    const slug = filename
      .replace(/^\d{4}-\d{2}-\d{2}-/, '') // Remove date prefix if exists
      .replace(/\.md$/, '') // Remove .md extension
      .toLowerCase()
      .replace(/\s+/g, '-');

    // Format date from frontmatter or filename
    const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/);
    const date = data.date 
      ? new Date(data.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      : dateMatch
        ? new Date(dateMatch[1]).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        : 'December 18, 2024';

    return {
      slug,
      title: data.title || filename.replace(/\.md$/, ''),
      date,
      content: markdownContent,
      excerpt: data.excerpt || markdownContent.slice(0, 150) + '...',
      readTime: calculateReadTime(markdownContent),
      image: data.image 
        ? data.image.startsWith('/') 
          ? `/new-salvium${data.image}`
          : `/new-salvium/images/blog/${data.image}`
        : '/new-salvium/images/blog/default.webp'
    };
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Function to get a single blog post by slug
export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
};

// Function to get adjacent posts
export const getAdjacentPosts = async (currentSlug: string): Promise<{ 
  previous: BlogPost | null;
  next: BlogPost | null;
}> => {
  const posts = await getBlogPosts();
  const currentIndex = posts.findIndex(post => post.slug === currentSlug);
  
  return {
    previous: currentIndex > 0 ? posts[currentIndex - 1] : null,
    next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  };
};
