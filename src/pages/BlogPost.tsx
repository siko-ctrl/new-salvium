import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogPost, getAdjacentPosts, type BlogPost as BlogPostType } from '../utils/markdown';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';

interface AdjacentPosts {
  previous: BlogPostType | null;
  next: BlogPostType | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [adjacentPosts, setAdjacentPosts] = useState<AdjacentPosts>({ previous: null, next: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const currentPost = await getBlogPost(slug || '');
        if (!currentPost) {
          navigate('/blog');
          return;
        }
        setPost(currentPost);
        const adjacent = await getAdjacentPosts(slug || '');
        setAdjacentPosts(adjacent);
      } catch (error) {
        console.error('Error loading blog post:', error);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1e1e1e]">
        <div className="text-slate-400">Loading post...</div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      {/* Header */}
      <header className="relative bg-gradient-to-b from-[#1e1e1e] to-[#1e1e1e] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link to="/blog" className="text-[#00DFB7] hover:underline mb-8 inline-flex items-center gap-2">
              <ArrowLeft size={20} />
              Back to Blog
            </Link>

            {/* Title and Meta */}
            <h1 className="text-4xl font-bold text-slate-50 font-['Josefin_Sans'] mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {post.readTime} min read
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="relative aspect-[2/1] mb-12 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-invert prose-lg max-w-none mb-16">
            <style jsx global>{`
              .prose {
                max-width: none;
                color: #D1D5DB;
              }
              .prose h1 {
                color: #F9FAFB;
                font-size: 2.25rem;
                margin-top: 2rem;
                margin-bottom: 1rem;
                font-weight: 700;
                font-family: 'Josefin Sans', sans-serif;
              }
              .prose h2 {
                color: #F9FAFB;
                font-size: 1.875rem;
                margin-top: 2rem;
                margin-bottom: 1rem;
                font-weight: 700;
                font-family: 'Josefin Sans', sans-serif;
              }
              .prose h3 {
                color: #F9FAFB;
                font-size: 1.5rem;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
                font-weight: 600;
                font-family: 'Josefin Sans', sans-serif;
              }
              .prose h4 {
                color: #F9FAFB;
                font-size: 1.25rem;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
                font-weight: 600;
                font-family: 'Josefin Sans', sans-serif;
              }
              .prose p {
                margin-top: 1.25rem;
                margin-bottom: 1.25rem;
                line-height: 1.8;
              }
              .prose strong {
                color: #F9FAFB;
                font-weight: 600;
              }
              .prose a {
                color: #00DFB7;
                text-decoration: none;
                font-weight: 500;
              }
              .prose a:hover {
                text-decoration: underline;
              }
              .prose ul {
                margin-top: 1.25rem;
                margin-bottom: 1.25rem;
                list-style-type: disc;
                padding-left: 1.625rem;
              }
              .prose ol {
                margin-top: 1.25rem;
                margin-bottom: 1.25rem;
                list-style-type: decimal;
                padding-left: 1.625rem;
              }
              .prose li {
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;
                padding-left: 0.375rem;
              }
              .prose blockquote {
                margin-top: 2rem;
                margin-bottom: 2rem;
                padding-left: 1.5rem;
                border-left: 4px solid #00DFB7;
                font-style: italic;
                color: #9CA3AF;
              }
              .prose code {
                color: #00DFB7;
                background-color: #242424;
                padding: 0.2rem 0.4rem;
                border-radius: 0.25rem;
                font-size: 0.875em;
              }
              .prose pre {
                background-color: #242424;
                padding: 1.25rem;
                border-radius: 0.5rem;
                overflow-x: auto;
                margin-top: 1.5rem;
                margin-bottom: 1.5rem;
              }
              .prose pre code {
                background-color: transparent;
                padding: 0;
                color: #D1D5DB;
                font-size: 0.875em;
              }
              .prose img {
                margin-top: 2rem;
                margin-bottom: 2rem;
                border-radius: 0.5rem;
              }
              .prose hr {
                margin-top: 3rem;
                margin-bottom: 3rem;
                border-color: #333333;
              }
              .prose table {
                width: 100%;
                margin-top: 2rem;
                margin-bottom: 2rem;
                border-collapse: collapse;
              }
              .prose th {
                background-color: #242424;
                padding: 0.75rem 1rem;
                text-align: left;
                font-weight: 600;
                color: #F9FAFB;
              }
              .prose td {
                padding: 0.75rem 1rem;
                border-bottom: 1px solid #333333;
              }
            `}</style>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </article>

          {/* Navigation */}
          <nav className="mt-16 border-t border-slate-800 pt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {adjacentPosts.previous && (
                <Link 
                  to={`/blog/${adjacentPosts.previous.slug}`}
                  className="group p-6 rounded-xl bg-[#242424] border border-[#333333] hover:border-[#00DFB7] transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <ArrowLeft className="text-[#00DFB7] transition-transform group-hover:-translate-x-2" />
                    <div>
                      <div className="text-sm text-slate-400">Previous Post</div>
                      <div className="text-lg font-semibold text-slate-200 line-clamp-1">{adjacentPosts.previous.title}</div>
                    </div>
                  </div>
                </Link>
              )}

              {adjacentPosts.next && (
                <Link 
                  to={`/blog/${adjacentPosts.next.slug}`}
                  className="group p-6 rounded-xl bg-[#242424] border border-[#333333] hover:border-[#00DFB7] transition-all duration-300"
                >
                  <div className="flex items-center gap-4 justify-end">
                    <div className="text-right">
                      <div className="text-sm text-slate-400">Next Post</div>
                      <div className="text-lg font-semibold text-slate-200 line-clamp-1">{adjacentPosts.next.title}</div>
                    </div>
                    <ArrowRight className="text-[#00DFB7] transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
