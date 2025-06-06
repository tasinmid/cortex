
import React from 'react';
import TiltedCard from './TiltedCard';
import SpotlightCard from './SpotlightCard';

interface TiltedServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const TiltedServiceCard: React.FC<TiltedServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  const overlayContent = (
    <SpotlightCard 
      className="h-full w-full flex flex-col justify-center items-center text-center bg-gray-900 bg-opacity-95 backdrop-blur-md border border-gray-700 border-opacity-30"
      spotlightColor="rgba(59, 130, 246, 0.15)"
    >
      <div className="text-cortex-blue mb-4 transition-all duration-200">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white transition-all duration-200">
        {title}
      </h3>
      <p className="text-gray-300 text-sm transition-all duration-200">
        {description}
      </p>
    </SpotlightCard>
  );

  return (
    <div 
      className="opacity-0 animate-fade-in-up"
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: 'forwards',
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
        scaleOnHover={1.03}
        rotateAmplitude={8}
      />
    </div>
  );
};

export default TiltedServiceCard;
