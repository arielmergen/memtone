import React from 'react';
import { GameMode } from '../../types/game';

interface ModeSelectorProps {
  currentMode: GameMode;
  onModeChange: (mode: GameMode) => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ currentMode, onModeChange }) => {
  return (
    <div className="flex justify-center gap-4 w-full flex-wrap">
      <button
        className={`py-2 px-4 rounded-md font-semibold transition-colors
          ${currentMode === 'practice' ? 'bg-cyan-300 border border-cyan-300 hover:bg-cyan-400 hover:text-black text-black' : 'bg-transparent border border-cyan-300 hover:bg-cyan-600 text-white'}`}
        onClick={() => onModeChange('practice')}
      >
        Modo Práctica
      </button>
      <button 
        className={`py-2 px-4 rounded-md font-semibold transition-colors
          ${currentMode === 'challenge' ? 'bg-cyan-300 border border-cyan-300 hover:bg-cyan-400 text-black' : 'bg-transparent border border-cyan-600 hover:bg-cyan-600 text-white'}`}
        onClick={() => onModeChange('challenge')}
      >
        Modo Desafío
      </button>
    </div>
  );
};

export default ModeSelector; 