import { tonalities } from '../constants/tonalities';

/**
 * Genera una pista para una tonalidad específica
 * @param tonality Nombre de la tonalidad
 * @returns Texto con la pista
 */
export const generateHint = (tonality: string): string => {
  const correctNotes = tonalities[tonality];
  
  if (!correctNotes) return '';
  
  if (tonality.includes('Mayor')) {
    const root = correctNotes[0];
    return `La escala de ${tonality} comienza en ${root}. Para escalas mayores, recuerda el patrón: Tono, Tono, Semitono, Tono, Tono, Tono, Semitono. Si tiene sostenidos (#), siguen el orden: F#, C#, G#, D#, A#, E#, B#. Si tiene bemoles (b), siguen el orden: Bb, Eb, Ab, Db, Gb, Cb, Fb.`;
  } else {
    const root = correctNotes[0];
    return `La escala de ${tonality} comienza en ${root}. Para escalas menores naturales, recuerda el patrón: Tono, Semitono, Tono, Tono, Semitono, Tono, Tono. Esta escala tiene las mismas alteraciones que su relativa mayor (una tercera mayor arriba).`;
  }
};

/**
 * Genera una pista general para el modo desafío
 * @returns Texto con la pista
 */
export const generateChallengeHint = (): string => {
  return 'Recuerda los patrones de las escalas: Mayor: T-T-S-T-T-T-S, Menor natural: T-S-T-T-S-T-T. Observa el círculo de quintas y el orden de sostenidos/bemoles.';
}; 