import { tonalities } from '../constants/tonalities';
import { TonalityFilter } from '../types/game';

/**
 * Filtra las tonalidades según el filtro seleccionado
 * @param filter Filtro a aplicar ('all', 'major', 'minor')
 * @returns Array con los nombres de las tonalidades filtradas
 */
export const filterTonalities = (filter: TonalityFilter): string[] => {
  return Object.keys(tonalities).filter(key => {
    if (filter === 'all') return true;
    if (filter === 'major') return key.includes('Mayor');
    if (filter === 'minor') return key.includes('menor');
    return true;
  });
};

/**
 * Selecciona aleatoriamente n tonalidades del array de tonalidades filtradas
 * @param filteredTonalities Array de tonalidades ya filtradas
 * @param count Número de tonalidades a seleccionar
 * @returns Array con las tonalidades seleccionadas
 */
export const selectRandomTonalities = (filteredTonalities: string[], count: number): string[] => {
  const randomTonalities: string[] = [];
  const maxCount = Math.min(count, filteredTonalities.length);
  
  while (randomTonalities.length < maxCount) {
    const randomIndex = Math.floor(Math.random() * filteredTonalities.length);
    const tonality = filteredTonalities[randomIndex];
    if (!randomTonalities.includes(tonality)) {
      randomTonalities.push(tonality);
    }
  }
  
  return randomTonalities;
}; 