import React from 'react';
import { formatTime } from '../../utils/formatTime';

interface GameInfoProps {
  timer: number;
  level?: number;
  score?: number;
  showResults: boolean;
  isChallenge: boolean;
}

const GameInfo: React.FC<GameInfoProps> = ({ 
  timer, 
  level = 1, 
  score = 0, 
  showResults, 
  isChallenge 
}) => {
  // Función para determinar la clase de color según la puntuación
  const getScoreColorClass = () => {
    if (score >= 80) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="flex justify-between w-full mb-4">
      <div className="text-white">
        <span className="font-semibold">Tiempo:</span> {formatTime(timer)}
      </div>
      
      {isChallenge && (
        <div className="text-white">
          <span className="font-semibold">Nivel:</span> {level}
        </div>
      )}
      
      {showResults && (
        <div className={`font-bold ${getScoreColorClass()}`}>
          Puntuación: {score}%
        </div>
      )}
    </div>
  );
};

export default GameInfo; 