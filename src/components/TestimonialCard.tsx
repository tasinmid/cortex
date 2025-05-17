
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  delay = 0,
}) => {
  return (
    <div 
      className="glass-card rounded-lg p-6 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="text-cortex-teal text-4xl mb-4">"</div>
      <p className="text-cortex-gray mb-6">{quote}</p>
      <div>
        <p className="font-semibold text-cortex-white">{author}</p>
        <p className="text-sm text-cortex-gray">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
