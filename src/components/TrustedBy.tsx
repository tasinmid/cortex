
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
    small: isMobile ? "w-[65px]" : "w-[90px] md:w-[110px]",
    regular: isMobile ? "w-[80px]" : "w-[120px] md:w-[140px]",
    large: isMobile ? "w-[100px]" : "w-[150px] md:w-[170px]"
  }[size];

  return (
    <div className={`px-2 md:px-4 flex items-center justify-center`}>
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
  const containerRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const logos = [
    { src: "/lovable-uploads/b496ff38-7427-4c67-948a-f5e4613de137.png", alt: "Trust Immigration Consultant", size: "small" as const },
    { src: "/lovable-uploads/3657e19d-928a-41b7-9cc0-e44a2419828c.png", alt: "TIC Innovative Inc", size: "small" as const },
    { src: "/lovable-uploads/d90673b2-d99e-4164-952f-0f6156c4fcb9.png", alt: "WANAAN", size: "large" as const },
    { src: "/lovable-uploads/52093435-e02e-40b0-b201-eede68679cbd.png", alt: "Evergrow Marketing", size: "large" as const },
  ];

  useEffect(() => {
    const scrollContainer = containerRef.current;
    const loopContainer = loopRef.current;
    if (!scrollContainer || !loopContainer) return;

    // Clone the logos once to ensure continuous loop
    const cloneContainer = loopContainer.cloneNode(true) as HTMLDivElement;
    scrollContainer.appendChild(cloneContainer);

    let scrollPos = 0;
    const scrollSpeed = isMobile ? 1 : 0.6;
    let lastTimestamp = 0;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!scrollContainer) return;
      
      // If first run or enough time passed
      if (!lastTimestamp || timestamp - lastTimestamp >= 16) { // ~60fps
        lastTimestamp = timestamp;
        scrollPos += scrollSpeed;
        
        // If we've scrolled past the first set of logos, reset position to create infinite loop
        if (scrollPos >= loopContainer.offsetWidth) {
          scrollPos = 0;
        }
        
        scrollContainer.scrollLeft = scrollPos;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    // Pause scrolling when hovering
    scrollContainer.addEventListener('mouseenter', () => {
      cancelAnimationFrame(animationId);
    });
    
    scrollContainer.addEventListener('mouseleave', () => {
      animationId = requestAnimationFrame(animate);
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
          ref={containerRef}
          className="flex overflow-x-hidden"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div ref={loopRef} className="flex flex-nowrap">
            {logos.map((logo, index) => (
              <div key={index} className="logo-item">
                <TrustedByLogo src={logo.src} alt={logo.alt} size={logo.size} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
