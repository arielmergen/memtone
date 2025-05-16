import { TonalityNotes } from '../types/game';

// Definición de todas las tonalidades mayores y menores con sus notas
export const tonalities: TonalityNotes = {
  'C Mayor (Do Mayor)': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
  'G Mayor (Sol Mayor)': ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
  'D Mayor (Re Mayor)': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
  'A Mayor (La Mayor)': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
  'E Mayor (Mi Mayor)': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
  'B Mayor (Si Mayor)': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
  'F# Mayor (Fa# Mayor)': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
  'C# Mayor (Do# Mayor)': ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],
  'F Mayor (Fa Mayor)': ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
  'Bb Mayor (Sib Mayor)': ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
  'Eb Mayor (Mib Mayor)': ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
  'Ab Mayor (Lab Mayor)': ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
  'Db Mayor (Reb Mayor)': ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
  'Gb Mayor (Solb Mayor)': ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
  'Cb Mayor (Dob Mayor)': ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb'],
  'A menor (La menor)': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  'E menor (Mi menor)': ['E', 'F#', 'G', 'A', 'B', 'C', 'D'],
  'B menor (Si menor)': ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'],
  'F# menor (Fa# menor)': ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E'],
  'C# menor (Do# menor)': ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'],
  'G# menor (Sol# menor)': ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'],
  'D# menor (Re# menor)': ['D#', 'E#', 'F#', 'G#', 'A#', 'B', 'C#'],
  'A# menor (La# menor)': ['A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#'],
  'D menor (Re menor)': ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'],
  'G menor (Sol menor)': ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'],
  'C menor (Do menor)': ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
  'F menor (Fa menor)': ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
  'Bb menor (Sib menor)': ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab'],
  'Eb menor (Mib menor)': ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db'],
  'Ab menor (Lab menor)': ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb']
};

// Todas las posibles notas para selección
export const allNotes = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'E#', 'Fb', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'B#', 'Cb']; 