import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import Card from './Card';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  readTime: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, slug, readTime, image }) => {
  return (
    <Card to={`/blog/${slug}`} className="group h-full" variant="rounded">
      {/* Image */}
      <div className="relative aspect-[16/9] rounded-t-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-[calc(100%-9rem)]">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {date}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            {readTime} min read
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-50 font-['Josefin_Sans'] mb-3 line-clamp-2 group-hover:text-[#00DFB7] transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-400 line-clamp-3 mb-4 flex-grow">
          {excerpt}
        </p>

        {/* Read More */}
        <div className="text-[#00DFB7] font-medium flex items-center gap-2 mt-auto">
          Read More
          <svg 
            className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
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
    </Card>
  );
};

export default BlogCard;
