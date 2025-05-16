import React from 'react';

interface HintDisplayProps {
  hint: string;
  visible: boolean;
  onShowHint: () => void;
}

const HintDisplay: React.FC<HintDisplayProps> = ({ hint, visible, onShowHint }) => {
  return (
    <>
      <button 
        className="py-2 px-4 bg-transparent border border-cyan-300 text-white rounded-md hover:bg-cyan-600 hover:border-cyan-600 transition-colors"
        onClick={onShowHint}
      >
        Pista
      </button>
      
      {visible && hint && (
        <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-md">
          <p className="text-yellow-800">{hint}</p>
        </div>
      )}
    </>
  );
};

export default HintDisplay; 