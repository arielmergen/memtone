import React from 'react';

interface GameSetupProps {
  currentMode: 'practice' | 'challenge';
  selectedTonality: string;
  tonalitiesList: string[];
  level: number;
  onTonalityChange: (tonality: string) => void;
  onStartGame: () => void;
}

const GameSetup: React.FC<GameSetupProps> = ({
  currentMode,
  selectedTonality,
  tonalitiesList,
  level,
  onTonalityChange,
  onStartGame
}) => {
  return (
    <div className="w-full">
      {currentMode === 'practice' ? (
        <div className="mb-4">
          <label className="block text-white mb-2">Selecciona una tonalidad:</label>
          <select 
            className="w-full p-2 text-center text-white border border-cyan-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
            value={selectedTonality}
            onChange={(e) => onTonalityChange(e.target.value)}
          >
            <option value="">-- Selecciona --</option>
            {tonalitiesList.map(tonality => (
              <option key={tonality} value={tonality}>{tonality}</option>
            ))}
          </select>
        </div>
      ) : (
        <div className="mb-4 text-center">
          <p className="text-white mb-2">
            En modo desafío deberás resolver {level + 1} tonalidades seleccionadas aleatoriamente.
          </p>
        </div>
      )}
      
      <button 
        className="w-full py-2 bg-transparent border border-cyan-600 hover:bg-cyan-600 text-white rounded-md transition-colors"
        onClick={onStartGame}
        disabled={currentMode === 'practice' && !selectedTonality}
      >
        Comenzar {currentMode === 'practice' ? 'Práctica' : 'Desafío'}
      </button>
    </div>
  );
};

export default GameSetup; 