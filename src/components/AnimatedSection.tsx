
import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale' | 'fade-out-up' | 'fade-out-down';
  threshold?: number;
  delay?: number;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  id,
  animation = 'fade-in-up',
  threshold = 0.1,
  delay = 0,
}) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    triggerOnce: true,
  });

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
