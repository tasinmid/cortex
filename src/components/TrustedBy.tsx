
import React from 'react';
import { Separator } from '@/components/ui/separator';

interface TrustedByLogoProps {
  src: string;
  alt: string;
}

const TrustedByLogo: React.FC<TrustedByLogoProps> = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <img 
        src={src} 
        alt={alt} 
        className="h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity" 
      />
    </div>
  );
};

const TrustedBy: React.FC = () => {
  const logos = [
    { src: "/lovable-uploads/b496ff38-7427-4c67-948a-f5e4613de137.png", alt: "Trust Immigration Consultant" },
    // Add more logos as needed
  ];

  return (
    <div className="py-12 bg-cortex-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-cortex-white uppercase tracking-wider">Trusted By</h3>
          <Separator className="w-24 mx-auto mt-2 bg-cortex-gray opacity-30" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo, index) => (
            <TrustedByLogo key={index} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
