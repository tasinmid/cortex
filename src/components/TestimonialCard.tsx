
import React, { useState } from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  delay = 0,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`glass-card rounded-lg p-6 opacity-0 animate-fade-in-up transition-all duration-500
                ${hovered ? 'shadow-lg shadow-cortex-teal/20 translate-y-[-5px] border-cortex-teal/30' : ''}`}
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: 'forwards',
        transformOrigin: 'center' 
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`text-cortex-teal text-4xl mb-4 transition-all duration-300 ${hovered ? 'scale-110' : ''}`}>
        "
      </div>
      <p className={`text-cortex-gray mb-6 transition-all duration-300 ${hovered ? 'text-cortex-white' : ''}`}>
        {quote}
      </p>
      <div className="transition-all duration-300">
        <p className="font-semibold text-cortex-white">{author}</p>
        <p className={`text-sm text-cortex-gray transition-all duration-300 ${hovered ? 'text-cortex-teal' : ''}`}>
          {position}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
