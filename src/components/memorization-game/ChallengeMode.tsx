import React from 'react';
import NoteSelector from '../NoteSelector';
import HintDisplay from '../HintDisplay';

interface ChallengeModeProps {
  selectedTonalities: string[];
  userAnswers: { [tonalityIndex: number]: string[] };
  onNoteSelection: (note: string, tonalityIndex: number) => void;
  onVerify: () => void;
  onShowHint: () => void;
  hint: string;
  hintVisible: boolean;
}

const ChallengeMode: React.FC<ChallengeModeProps> = ({
  selectedTonalities,
  userAnswers,
  onNoteSelection,
  onVerify,
  onShowHint,
  hint,
  hintVisible
}) => {
  return (
    <div className="w-full">
      {selectedTonalities.map((tonality, index) => (
        <div key={tonality} className="mb-8 p-4 border rounded-md">
          <h2 className="text-xl font-semibold mb-4">{tonality}</h2>
          <NoteSelector 
            selectedNotes={userAnswers[index] || []}
            onNoteSelection={(note) => onNoteSelection(note, index)}
            compact
          />
        </div>
      ))}
      
      <div className="flex justify-between">
        <HintDisplay 
          hint={hint}
          visible={hintVisible}
          onShowHint={onShowHint}
        />
        <button 
          className="py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-green-700 transition-colors"
          onClick={onVerify}
        >
          Verificar desafío
        </button>
      </div>
    </div>
  );
};

export default ChallengeMode; 