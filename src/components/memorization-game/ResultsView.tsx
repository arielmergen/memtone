import React from 'react';
import { tonalities } from '../../constants/tonalities';
import { formatTime } from '../../utils/formatTime';
import { getScoreFeedback } from '../../utils/scoreCalculation';

interface ResultsViewProps {
  currentMode: 'practice' | 'challenge';
  selectedTonality: string;
  selectedTonalities: string[];
  userAnswers: string[] | { [tonalityIndex: number]: string[] };
  score: number;
  timer: number;
  onReset: () => void;
  onPlayAgain: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({
  currentMode,
  selectedTonality,
  selectedTonalities,
  userAnswers,
  score,
  timer,
  onReset,
  onPlayAgain
}) => {
  return (
    <div className="w-full mt-4">
      <h2 className="text-xl text-white font-semibold mb-4 text-center">Resultados</h2>
      
      {currentMode === 'practice' ? (
        <div className="flex flex-col gap-2 mb-6 text-center">
          <h3 className="text-white font-semibold mb-2">{selectedTonality}</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {tonalities[selectedTonality].map(note => (
              <div
                key={note}
                className={`py-2 px-3 rounded-md text-center font-semibold
                  ${(userAnswers as string[]).includes(note)
                    ? 'bg-transparent border border-cyan-300 text-white'
                    : 'bg-transparent border border-red-500 text-white'}`}
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {selectedTonalities.map((tonality, index) => (
            <div key={tonality} className="mb-6">
              <h3 className="font-semibold mb-2">{tonality}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                {tonalities[tonality].map(note => {
                  const challengeAnswers = userAnswers as { [tonalityIndex: number]: string[] };
                  const tonalityAnswers = challengeAnswers[index] || [];
                  return (
                    <div
                      key={`${tonality}-${note}`}
                      className={`py-2 px-2 rounded-md text-center text-sm
                        ${tonalityAnswers.includes(note) 
                          ? 'bg-transparent border border-cyan-300 text-white' 
                          : 'bg-transparent border border-red-500 text-white'}`}
                    >
                      {note}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-6 p-4 bg-transparent border border-cyan-300 rounded-md">
        <p className="text-cyan-500 font-semibold">
          Puntuación final: {score}% en {formatTime(timer)}
        </p>
        <p className="text-white mt-2">
          {getScoreFeedback(score)}
        </p>
      </div>
      
      <div className="flex justify-between mt-6">
        <button 
          className="py-2 px-4 bg-transparent border border-cyan-300 text-white rounded-md hover:bg-cyan-600 hover:border-cyan-600 transition-colors"
          onClick={onReset}
        >
          Volver
        </button>
        <button 
          className="py-2 px-4 bg-transparent border border-cyan-300 text-white rounded-md hover:bg-cyan-600 hover:border-cyan-600 transition-colors"
          onClick={onPlayAgain}
        >
          Jugar de nuevo
        </button>
      </div>
    </div>
  );
};

export default ResultsView; 