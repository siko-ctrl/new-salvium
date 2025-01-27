import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  to?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'rounded';
}

const Card: React.FC<CardProps> = ({ to, children, className = '', variant = 'default' }) => {
  const baseClasses = "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-slate-600/50";
  const variantClasses = {
    default: "rounded-lg",
    rounded: "rounded-xl"
  };

  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cardClasses}>
        {children}
      </Link>
    );
  }

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;
