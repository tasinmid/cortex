
import React, { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className={`glass-card rounded-lg p-6 h-full transition-all duration-700 hover:-translate-y-2 opacity-0 animate-fade-in-up
                ${hovered ? 'shadow-lg shadow-cortex-blue/20 scale-105 border-cortex-blue/30' : ''}`}
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: 'forwards',
        transformOrigin: 'center bottom',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`text-cortex-blue mb-4 ${hovered ? 'animate-bounce' : 'animate-float'} transition-all duration-300`}>
          {icon}
        </div>
        <h3 className={`text-xl font-semibold mb-2 text-cortex-white transition-all duration-300 ${hovered ? 'text-cortex-blue' : ''}`}>
          {title}
        </h3>
        <p className="text-cortex-gray transition-all duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
