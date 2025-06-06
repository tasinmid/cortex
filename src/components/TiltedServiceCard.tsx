
import React from 'react';
import TiltedCard from './TiltedCard';

interface TiltedServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const TiltedServiceCard: React.FC<TiltedServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  const overlayContent = (
    <div className="glass-card rounded-lg p-6 h-full w-full flex flex-col justify-center items-center text-center bg-cortex-navy bg-opacity-90 backdrop-blur-md border border-cortex-gray border-opacity-10">
      <div className="text-cortex-blue mb-4 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-cortex-white transition-all duration-300">
        {title}
      </h3>
      <p className="text-cortex-gray transition-all duration-300">
        {description}
      </p>
    </div>
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
        containerHeight="300px"
        containerWidth="100%"
        imageHeight="300px"
        imageWidth="100%"
        overlayContent={overlayContent}
        displayOverlayContent={true}
        showTooltip={false}
        showMobileWarning={false}
        scaleOnHover={1.05}
        rotateAmplitude={10}
      />
    </div>
  );
};

export default TiltedServiceCard;
