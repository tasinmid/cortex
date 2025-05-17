
import React, { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  const [hovered, setHovered] = useState(false);
  
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
  
  // Get glow color based on title
  const getGlowColor = () => {
    switch (title) {
      case "AI Chatbots":
        return hovered ? 'shadow-cortex-blue/40' : '';
      case "CRM + WhatsApp Automations":
        return hovered ? 'shadow-cortex-teal/40' : '';
      case "AI Agents":
        return hovered ? 'shadow-cortex-blue/40' : '';
      case "Backend Automations":
        return hovered ? 'shadow-cortex-teal/40' : '';
      case "Voice Assistant Integrations":
        return hovered ? 'shadow-cortex-blue/40' : '';
      case "Custom Training & Support":
        return hovered ? 'shadow-cortex-teal/40' : '';
      default:
        return hovered ? 'shadow-cortex-blue/40' : '';
    }
  };
  
  return (
    <div 
      className={`glass-card rounded-lg p-6 h-full transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up
                ${hovered ? `shadow-lg ${getGlowColor()} scale-105 border-cortex-blue/30` : ''}`}
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: 'forwards',
        transformOrigin: 'center center',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`flex flex-col items-center text-center transition-all duration-300 ${hovered ? 'scale-105' : ''}`}>
        <div className="text-cortex-blue mb-4 transition-all duration-300">
          {icon}
        </div>
        <h3 className={`text-xl font-semibold mb-2 text-cortex-white transition-all duration-300 ${getTitleColor()}`}>
          {title}
        </h3>
        <p className={`text-cortex-gray transition-all duration-300 ${hovered ? 'text-cortex-white' : ''}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
