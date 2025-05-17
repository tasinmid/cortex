
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

  // Create unique animation based on author name
  const getQuoteAnimation = () => {
    switch (author) {
      case "Sarah N.":
        return hovered ? 'scale-110 text-cortex-blue' : '';
      case "James T.":
        return hovered ? 'scale-110 rotate-[-5deg] text-cortex-teal' : '';
      case "Leila K.":
        return hovered ? 'scale-110 text-cortex-blue translate-x-1' : '';
      default:
        return hovered ? 'scale-110' : '';
    }
  };

  // Get unique hover effect based on position
  const getPositionEffect = () => {
    switch (position) {
      case "Operations Director, Swift Rentals":
        return hovered ? 'text-cortex-blue' : '';
      case "CEO, UrbanRide Solutions":
        return hovered ? 'text-cortex-teal' : '';
      case "Ecom Manager, FlowWear":
        return hovered ? 'text-cortex-blue' : '';
      default:
        return hovered ? 'text-cortex-teal' : '';
    }
  };

  // Get glow color based on author
  const getGlowColor = () => {
    switch (author) {
      case "Sarah N.":
        return 'shadow-cortex-blue/30';
      case "James T.":
        return 'shadow-cortex-teal/30';
      case "Leila K.":
        return 'shadow-cortex-blue/30';
      default:
        return 'shadow-cortex-teal/20';
    }
  };

  return (
    <div 
      className={`glass-card rounded-lg p-6 opacity-0 animate-fade-in-up transition-all duration-500
                ${hovered ? `shadow-lg ${getGlowColor()} translate-y-[-5px] border-cortex-teal/30` : ''}`}
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: 'forwards',
        transformOrigin: 'center' 
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`text-cortex-teal text-4xl mb-4 transition-all duration-300 ${getQuoteAnimation()}`}>
        "
      </div>
      <p className={`text-cortex-gray mb-6 transition-all duration-300 ${hovered ? 'text-cortex-white' : ''}`}>
        {quote}
      </p>
      <div className="transition-all duration-300">
        <p className="font-semibold text-cortex-white">{author}</p>
        <p className={`text-sm text-cortex-gray transition-all duration-300 ${getPositionEffect()}`}>
          {position}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
