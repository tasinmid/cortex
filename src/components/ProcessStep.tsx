
import React from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  delay = 0 
}) => {
  return (
    <div 
      className="flex opacity-0 animate-fade-in-left"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="mr-4 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-cortex-blue flex items-center justify-center text-xl font-bold text-cortex-white animate-pulse-glow">
          {number}
        </div>
        {number !== "5" && <div className="w-0.5 grow bg-cortex-gray bg-opacity-30 my-2"></div>}
      </div>
      <div className="pb-8">
        <h3 className="text-xl font-semibold mb-2 text-cortex-white">{title}</h3>
        <p className="text-cortex-gray">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
