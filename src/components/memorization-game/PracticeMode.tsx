import React from 'react';
import NoteSelector from '../NoteSelector';
import HintDisplay from '../HintDisplay';

interface PracticeModeProps {
  selectedTonality: string;
  userAnswers: string[];
  onNoteSelection: (note: string) => void;
  onVerify: () => void;
  onShowHint: () => void;
  hint: string;
  hintVisible: boolean;
}

const PracticeMode: React.FC<PracticeModeProps> = ({
  selectedTonality,
  userAnswers,
  onNoteSelection,
  onVerify,
  onShowHint,
  hint,
  hintVisible
}) => {
  return (
    <div className="w-full mb-6">
      <h2 className="text-xl text-cyan-400 font-semibold mb-4 text-center">{selectedTonality}</h2>
      <p className="text-white mb-4 text-center">
        Selecciona todas las notas que pertenecen a esta tonalidad:
      </p>
      
      <NoteSelector 
        selectedNotes={userAnswers}
        onNoteSelection={onNoteSelection}
      />
      
      <div className="flex flex-col gap-2 justify-between">
        <HintDisplay 
          hint={hint}
          visible={hintVisible}
          onShowHint={onShowHint}
        />
        <button 
          className="py-2 px-4 bg-transparent border border-cyan-300 text-white rounded-md hover:bg-cyan-600 hover:border-cyan-600 transition-colors"
          onClick={onVerify}
        >
          Verificar
        </button>
      </div>
    </div>
  );
};

export default PracticeMode; 