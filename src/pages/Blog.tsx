import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../utils/markdown';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { BlogPost } from '../utils/markdown';
import Hero from '../components/Hero';

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const blogPosts = await getBlogPosts();
        setPosts(blogPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // Get current posts
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Hero
        title="Salvium Blog"
        subtitle="Stay updated with the latest news, insights, and developments in the world of private DeFi."
        image="/new-salvium/images/wide-hero-1024.webp"
      />

      {/* Blog Posts */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center text-slate-400">Loading blog posts...</div>
          ) : posts.length === 0 ? (
            <div className="text-center text-slate-400">
              No blog posts found. Add markdown files to the content/blog directory to get started.
            </div>
          ) : (
            <>
              {/* Blog Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {currentPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group block overflow-hidden bg-gradient-to-b from-[#282828]/95 to-[#1e1e1e]/98 border border-[#333333] hover:border-[#00DFB7] hover:shadow-lg hover:shadow-[#00DFB7]/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                        <div className="bg-[#00DFB7]/10 text-[#00DFB7] px-3 py-1 rounded">{post.date}</div>
                        <div className="bg-[#00DFB7]/10 text-[#00DFB7] px-3 py-1 rounded">{post.readTime} min read</div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-slate-50 font-['Josefin_Sans'] mb-3 line-clamp-2 group-hover:text-[#00DFB7] transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-slate-400 line-clamp-3 mb-4 text-sm">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <div className="text-[#00DFB7] font-medium flex items-center gap-2 group/link">
                        Read More
                        <svg 
                          className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-3 mt-16">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 text-[#00DFB7] hover:bg-[#00DFB7]/10 rounded-lg disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                        currentPage === index + 1
                          ? 'bg-gradient-to-r from-[#00DFB7] to-[#00B4D8] text-white shadow-lg shadow-[#00DFB7]/20'
                          : 'text-[#00DFB7] hover:bg-[#00DFB7]/10'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 text-[#00DFB7] hover:bg-[#00DFB7]/10 rounded-lg disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
