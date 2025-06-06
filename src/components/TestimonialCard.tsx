
import React from 'react';
import ProfileCard from './ProfileCard';

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
  // Custom gradient based on author
  const getCustomGradient = () => {
    switch (author) {
      case "Sarah N.":
        return "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(220,100%,70%,var(--card-opacity)) 4%,hsla(220,50%,60%,calc(var(--card-opacity)*0.75)) 10%,hsla(220,25%,50%,calc(var(--card-opacity)*0.5)) 50%,hsla(220,0%,40%,0) 100%),radial-gradient(35% 52% at 55% 20%,#3b82f6c4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#60a5faff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#3b82ffff 0%,#60a5faff 40%,#60a5faff 60%,#3b82ffff 100%)";
      case "James T.":
        return "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(180,100%,70%,var(--card-opacity)) 4%,hsla(180,50%,60%,calc(var(--card-opacity)*0.75)) 10%,hsla(180,25%,50%,calc(var(--card-opacity)*0.5)) 50%,hsla(180,0%,40%,0) 100%),radial-gradient(35% 52% at 55% 20%,#14b8a6c4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#5eead4ff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#14b8a6ff 0%,#5eead4ff 40%,#5eead4ff 60%,#14b8a6ff 100%)";
      case "Leila K.":
        return "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(260,100%,70%,var(--card-opacity)) 4%,hsla(260,50%,60%,calc(var(--card-opacity)*0.75)) 10%,hsla(260,25%,50%,calc(var(--card-opacity)*0.5)) 50%,hsla(260,0%,40%,0) 100%),radial-gradient(35% 52% at 55% 20%,#8b5cf6c4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#c4b5fdff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#8b5cf6ff 0%,#c4b5fdff 40%,#c4b5fdff 60%,#8b5cf6ff 100%)";
      default:
        return undefined;
    }
  };

  return (
    <div 
      className="opacity-0 animate-fade-in-up h-80"
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: 'forwards',
      }}
    >
      <ProfileCard
        quote={quote}
        author={author}
        position={position}
        behindGradient={getCustomGradient()}
        className="testimonial-card"
        enableTilt={true}
        showUserInfo={false}
      />
    </div>
  );
};

export default TestimonialCard;
