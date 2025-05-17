
import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale' | 'fade-out-up' | 'fade-out-down';
  exitAnimation?: 'fade-out-up' | 'fade-out-down' | 'fade-out-left' | 'fade-out-right' | 'scale-out';
  threshold?: number;
  delay?: number;
  duration?: number;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  id,
  animation = 'fade-in-up',
  exitAnimation = 'fade-out-down',
  threshold = 0.1,
  delay = 0,
  duration = 700,
}) => {
  const { ref, isVisible, hasTriggered } = useIntersectionObserver({
    threshold,
    triggerOnce: false,
  });
  
  const [wasVisible, setWasVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  
  useEffect(() => {
    if (isVisible && !wasVisible) {
      setWasVisible(true);
      setIsExiting(false);
    } else if (!isVisible && wasVisible) {
      setIsExiting(true);
    }
  }, [isVisible, wasVisible]);

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`${className} transition-all`}
      style={{
        opacity: !wasVisible ? 0 : 1,
        animationName: isVisible ? animation : isExiting ? exitAnimation : 'none',
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
