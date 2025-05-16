import React from 'react';
import { GameHistoryEntry } from '../../types/game';
import { formatTime } from '../../utils/formatTime';

interface GameHistoryProps {
  history: GameHistoryEntry[];
  maxEntries?: number;
}

const GameHistory: React.FC<GameHistoryProps> = ({ history, maxEntries = 10 }) => {
  if (history.length === 0) {
    return null;
  }

  // Mostrar solo las últimas entradas
  const recentHistory = history.slice(-maxEntries);

  return (
    <div className="w-full mt-8">
      <h2 className="text-xl text-cyan-300 font-semibold mb-4">Historial de juegos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-transparent text-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Tonalidad</th>
              <th className="py-2 px-4 border-b">Puntuación</th>
              <th className="py-2 px-4 border-b">Tiempo</th>
            </tr>
          </thead>
          <tbody>
            {recentHistory.map((entry, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : ''}>
                <td className="py-2 px-4">{entry.tonality}</td>
                <td className={`py-2 px-4 text-center ${
                  entry.score >= 80 ? 'text-green-600' : 
                  entry.score >= 50 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {entry.score}%
                </td>
                <td className="py-2 px-4 text-center">{formatTime(entry.time)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameHistory; 