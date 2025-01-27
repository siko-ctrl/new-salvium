import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  gradient?: boolean;
  height?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image,
  gradient = true,
  height = 'medium',
  children
}) => {
  const heightClasses = {
    small: 'h-[300px]',
    medium: 'h-[400px]',
    large: 'h-[500px]'
  };

  return (
    <div className={`relative w-full ${heightClasses[height]} mb-16`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/default-hero.jpg';
          }}
        />
        {gradient && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        )}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-['Josefin_Sans']">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-['Arial']">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Hero;
