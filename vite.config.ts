import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin as markdown } from 'vite-plugin-markdown';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Function to calculate read time
const calculateReadTime = (content: string): string => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const readTime = Math.ceil(words / wordsPerMinute);
  return readTime.toString();
};

// https://vitejs.dev/config/
export default defineConfig({
  base: '/new-salvium/',
  plugins: [
    react(),
    markdown({ mode: 'html' }),
    {
      name: 'markdown',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/content/blog/list') {
            try {
              const blogDir = path.join(process.cwd(), 'content', 'blog');
              const files = fs.readdirSync(blogDir)
                .filter(file => file.endsWith('.md'))
                .map(fileName => {
                  try {
                    const fileContent = fs.readFileSync(path.join(blogDir, fileName), 'utf-8');
                    const { data, content } = matter(fileContent);
                    
                    // Get the slug from the filename
                    const slug = fileName.replace(/\.md$/, '');
                    
                    // Get first paragraph as excerpt if not provided in frontmatter
                    const excerpt = data.excerpt || content.split('\n\n')[0].replace(/[#*`]/g, '').trim();
                    
                    // Calculate read time
                    const readTime = calculateReadTime(content);

                    // Generate image path based on the blog post title
                    const titleForImage = data.title || slug;
                    const imageSlug = titleForImage
                      .split(/[\s-]+/)
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ');
                    
                    const image = `/images/Blog ${imageSlug}-1024.webp`;
                    
                    return {
                      slug,
                      title: data.title || slug.replace(/-/g, ' '),
                      date: data.date || new Date().toISOString().split('T')[0],
                      content,
                      excerpt,
                      readTime,
                      image
                    };
                  } catch (err) {
                    console.error('Error processing file:', fileName, err);
                    return null;
                  }
                })
                .filter(post => post !== null)
                .sort((a, b) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime());

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(files));
            } catch (err) {
              console.error('Error reading blog directory:', err);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: 'Failed to read blog posts' }));
            }
          } else {
            next();
          }
        });
      }
    }
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['lucide-react'],
  },
  assetsInclude: ['**/*.md'],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  }
});
