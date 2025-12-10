import React from 'react';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`bg-[#1A1A1E] rounded-xl p-6 border border-white/5 ${
        hover
          ? 'transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02]'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
