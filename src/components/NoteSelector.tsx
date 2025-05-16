import React from 'react';
import { allNotes } from '../constants/tonalities';

interface NoteSelectorProps {
  selectedNotes: string[];
  onNoteSelection: (note: string) => void;
  disabled?: boolean;
  compact?: boolean;
}

const NoteSelector: React.FC<NoteSelectorProps> = ({ 
  selectedNotes, 
  onNoteSelection, 
  disabled = false,
  compact = false
}) => {
  return (
    <div className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 ${!compact ? 'mb-6' : 'mb-4'}`}>
      {allNotes.map(note => (
        <button
          key={note}
          className={`py-2 ${compact ? 'px-2 text-sm' : 'px-3 font-semibold'} rounded-md transition-colors
            ${selectedNotes.includes(note)
              ? 'bg-cyan-300 border border-cyan-300 text-black'
              : 'bg-transparent border border-cyan-300 text-white hover:bg-cyan-600'}`}
          onClick={() => onNoteSelection(note)}
          disabled={disabled}
        >
          {note}
        </button>
      ))}
    </div>
  );
};

export default React.memo(NoteSelector); 