import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EcosystemCardProps {
  image: string;
  tag: string;
  title: string;
  description: string;
  link: string;
}

const EcosystemCard: React.FC<EcosystemCardProps> = ({
  image,
  tag,
  title,
  description,
  link,
}) => {
  return (
    <Link
      to={link}
      className="group block overflow-hidden bg-gradient-to-b from-[#282828]/95 to-[#1e1e1e]/98 border border-[#333333] hover:border-[#00DFB7] hover:shadow-lg hover:shadow-[#00DFB7]/10 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tag */}
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
          <div className="bg-[#00DFB7]/10 text-[#00DFB7] px-3 py-1 rounded">{tag}</div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-slate-50 font-['Josefin_Sans'] mb-3 line-clamp-2 group-hover:text-[#00DFB7] transition-colors">
          {title}
        </h2>

        {/* Description */}
        <p className="text-slate-400 line-clamp-3 mb-4 text-sm">
          {description}
        </p>

        {/* Learn More */}
        <div className="text-[#00DFB7] font-medium flex items-center gap-2 group/link">
          Learn More
          <ArrowRight className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default EcosystemCard;
