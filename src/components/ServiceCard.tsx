
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <div 
      className="glass-card rounded-lg p-6 h-full transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-cortex-blue mb-4 animate-float">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-cortex-white">{title}</h3>
        <p className="text-cortex-gray">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
