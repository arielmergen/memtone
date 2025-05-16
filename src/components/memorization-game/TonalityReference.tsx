import React from 'react';
import { tonalities } from '../../constants/tonalities';

interface TonalityReferenceProps {
  onClose: () => void;
}

const TonalityReference: React.FC<TonalityReferenceProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Referencia de Tonalidades</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">Tonalidades Mayores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(tonalities).filter(key => key.includes('Mayor')).map(tonality => (
              <div key={tonality} className="border rounded-md p-3">
                <h4 className="font-bold">{tonality}</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {tonalities[tonality].map(note => (
                    <span key={note} className="px-2 py-1 bg-indigo-100 rounded-md text-sm">{note}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">Tonalidades Menores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(tonalities).filter(key => key.includes('menor')).map(tonality => (
              <div key={tonality} className="border rounded-md p-3">
                <h4 className="font-bold">{tonality}</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {tonalities[tonality].map(note => (
                    <span key={note} className="px-2 py-1 bg-indigo-100 rounded-md text-sm">{note}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="w-full py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default TonalityReference; 