
import React, { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  const [hovered, setHovered] = useState(false);
  
  // Determine the icon animation based on the service title
  const getIconAnimation = () => {
    switch (title) {
      case "AI Chatbots":
        return hovered ? 'animate-pulse' : 'animate-float';
      case "CRM + WhatsApp Automations":
        return hovered ? 'scale-110 rotate-12' : 'animate-spin-slow';
      case "AI Agents":
        return hovered ? 'scale-125' : 'animate-scale';
      case "Backend Automations":
        return hovered ? 'translate-y-[-5px]' : 'animate-float';
      case "Voice Assistant Integrations":
        return hovered ? 'scale-110' : 'translate-x-1 animate-fade-in-right';
      case "Custom Training & Support":
        return hovered ? 'scale-105 rotate-[-5deg]' : 'animate-scale';
      default:
        return hovered ? 'scale-110' : 'animate-float';
    }
  };

  // Get color effect based on title for subtle variety
  const getTitleColor = () => {
    switch (title) {
      case "AI Chatbots":
        return hovered ? 'text-cortex-blue' : '';
      case "CRM + WhatsApp Automations":
        return hovered ? 'text-cortex-teal' : '';
      case "AI Agents":
        return hovered ? 'text-cortex-blue' : '';
      case "Backend Automations":
        return hovered ? 'text-cortex-teal' : '';
      case "Voice Assistant Integrations":
        return hovered ? 'text-cortex-blue' : '';
      case "Custom Training & Support":
        return hovered ? 'text-cortex-teal' : '';
      default:
        return hovered ? 'text-cortex-blue' : '';
    }
  };
  
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
        <div className={`text-cortex-blue mb-4 transition-all duration-300 ${getIconAnimation()}`}>
          {icon}
        </div>
        <h3 className={`text-xl font-semibold mb-2 text-cortex-white transition-all duration-300 ${getTitleColor()}`}>
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
