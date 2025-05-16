import React from 'react';
import { TonalityFilter as FilterType } from '../../types/game';

interface TonalityFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const TonalityFilter: React.FC<TonalityFilterProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="flex justify-center gap-2 w-full flex-wrap">
      <button 
        className={`py-1 px-3 rounded-md text-sm transition-colors
          ${currentFilter === 'all' ? 'bg-cyan-300 border border-cyan-300 text-black' : 'bg-transparent border border-cyan-300 text-white hover:bg-cyan-600'}`}
        onClick={() => onFilterChange('all')}
      >
        Todas
      </button>
      <button 
        className={`py-1 px-3 rounded-md text-sm transition-colors
          ${currentFilter === 'major' ? 'bg-cyan-300 border border-cyan-300 text-black' : 'bg-transparent border border-cyan-300 text-white hover:bg-cyan-600'}`}
        onClick={() => onFilterChange('major')}
      >
        Mayores
      </button>
      <button 
        className={`py-1 px-3 rounded-md text-sm transition-colors
          ${currentFilter === 'minor' ? 'bg-cyan-300 border border-cyan-300 text-black' : 'bg-transparent border border-cyan-300 text-white hover:bg-cyan-600'}`}
        onClick={() => onFilterChange('minor')}
      >
        Menores
      </button>
    </div>
  );
};

export default TonalityFilter; 