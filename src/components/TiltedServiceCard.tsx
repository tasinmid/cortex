
import React from 'react';
import TiltedCard from './TiltedCard';
import SpotlightCard from './SpotlightCard';
import { Badge } from './ui/badge';

interface TiltedServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  isNew?: boolean;
  isPopular?: boolean;
}

const TiltedServiceCard: React.FC<TiltedServiceCardProps> = ({ title, description, icon, delay = 0, isNew, isPopular }) => {
  const isGoldenCard = title === "Multi Agent Employee Team";
  
  const overlayContent = (
    <SpotlightCard 
      className={`h-full w-full flex flex-col justify-center items-center text-center backdrop-blur-md border transition-all duration-300 ${
        isGoldenCard 
          ? "bg-gradient-to-br from-amber-900/95 to-yellow-900/95 border-amber-400/50 shadow-2xl shadow-amber-400/30" 
          : "bg-gray-900 bg-opacity-95 border-gray-700 border-opacity-30"
      }`}
      spotlightColor={isGoldenCard ? "rgba(251, 191, 36, 0.25)" : "rgba(59, 130, 246, 0.15)"}
    >
      <div className="absolute top-3 right-3 flex gap-2">
        {isNew && (
          <Badge variant="default" className="bg-green-500 text-white text-xs">
            NEW
          </Badge>
        )}
        {isPopular && (
          <Badge variant="secondary" className={`text-white text-xs ${
            isGoldenCard ? "bg-amber-500" : "bg-orange-500"
          }`}>
            POPULAR
          </Badge>
        )}
      </div>
      <div className={`mb-4 transition-all duration-200 ${
        isGoldenCard ? "text-amber-300" : "text-cortex-blue"
      }`}>
        {icon}
      </div>
      <h3 className={`text-lg font-semibold mb-2 transition-all duration-200 ${
        isGoldenCard ? "text-amber-100" : "text-white"
      }`}>
        {title}
      </h3>
      <p className={`text-sm transition-all duration-200 ${
        isGoldenCard ? "text-amber-200" : "text-gray-300"
      }`}>
        {description}
      </p>
    </SpotlightCard>
  );

  return (
    <div 
      className={`opacity-0 animate-fade-in-up ${
        isGoldenCard ? "animate-pulse" : ""
      }`}
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: 'forwards',
        filter: isGoldenCard ? 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.4))' : 'none'
      }}
    >
      <TiltedCard
        containerHeight="250px"
        containerWidth="100%"
        imageHeight="250px"
        imageWidth="100%"
        overlayContent={overlayContent}
        displayOverlayContent={true}
        showTooltip={false}
        showMobileWarning={false}
        scaleOnHover={isGoldenCard ? 1.05 : 1.03}
        rotateAmplitude={8}
      />
    </div>
  );
};

export default TiltedServiceCard;
