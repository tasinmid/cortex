
import React, { useEffect, useRef } from 'react';
import { Separator } from '@/components/ui/separator';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';

interface TrustedByLogoProps {
  src: string;
  alt: string;
  size?: 'small' | 'regular' | 'large';
}

const TrustedByLogo: React.FC<TrustedByLogoProps> = ({ src, alt, size = 'regular' }) => {
  const isMobile = useIsMobile();
  const widthClass = {
    small: isMobile ? "w-[70px]" : "w-[100px] md:w-[120px]",
    regular: isMobile ? "w-[80px]" : "w-[120px] md:w-[140px]",
    large: isMobile ? "w-[90px]" : "w-[140px] md:w-[160px]"
  }[size];

  return (
    <div className={`px-3 md:px-4 flex items-center justify-center`}>
      <div className={widthClass}>
        <AspectRatio ratio={3/2} className="overflow-hidden">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity" 
          />
        </AspectRatio>
      </div>
    </div>
  );
};

const TrustedBy: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const logos = [
    { src: "/lovable-uploads/b496ff38-7427-4c67-948a-f5e4613de137.png", alt: "Trust Immigration Consultant", size: "small" as const },
    { src: "/lovable-uploads/3657e19d-928a-41b7-9cc0-e44a2419828c.png", alt: "TIC Innovative Inc", size: "small" as const },
    { src: "/lovable-uploads/d90673b2-d99e-4164-952f-0f6156c4fcb9.png", alt: "WANAAN", size: "large" as const },
    { src: "/lovable-uploads/52093435-e02e-40b0-b201-eede68679cbd.png", alt: "Evergrow Marketing", size: "large" as const },
    // Duplicate logos for continuous scrolling effect
    { src: "/lovable-uploads/b496ff38-7427-4c67-948a-f5e4613de137.png", alt: "Trust Immigration Consultant", size: "small" as const },
    { src: "/lovable-uploads/3657e19d-928a-41b7-9cc0-e44a2419828c.png", alt: "TIC Innovative Inc", size: "small" as const },
    { src: "/lovable-uploads/d90673b2-d99e-4164-952f-0f6156c4fcb9.png", alt: "WANAAN", size: "large" as const },
    { src: "/lovable-uploads/52093435-e02e-40b0-b201-eede68679cbd.png", alt: "Evergrow Marketing", size: "large" as const },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = isMobile ? 0.5 : 0.3;
    let scrollPosition = 0;
    let animationId: number;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPosition += scrollSpeed;
      
      // Reset scroll position when half of the content is scrolled (to create infinite loop)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };
    
    scroll();
    
    // Pause scrolling when hovering
    scrollContainer.addEventListener('mouseenter', () => {
      cancelAnimationFrame(animationId);
    });
    
    scrollContainer.addEventListener('mouseleave', () => {
      scroll();
    });
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isMobile]);

  return (
    <div className="py-6 bg-cortex-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-cortex-white uppercase tracking-wider">Trusted By</h3>
          <Separator className="w-24 mx-auto mt-2 bg-cortex-gray opacity-30" />
        </div>
        <div 
          ref={scrollRef}
          className="flex flex-nowrap overflow-x-hidden"
          style={{ scrollBehavior: 'smooth' }}
        >
          {logos.map((logo, index) => (
            <TrustedByLogo key={index} src={logo.src} alt={logo.alt} size={logo.size} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
