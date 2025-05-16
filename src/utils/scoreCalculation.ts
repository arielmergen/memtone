/**
 * Calcula la puntuación basada en las respuestas del usuario y las notas correctas
 * @param userSelectedNotes Notas seleccionadas por el usuario
 * @param correctNotes Notas correctas de la tonalidad
 * @returns Puntuación calculada en porcentaje (0-100)
 */
export const calculateScore = (userSelectedNotes: string[], correctNotes: string[]): number => {
  // Calcular puntuación para esta tonalidad
  let tonalityScore = 0;
  
  // Sumar puntos por cada nota correcta seleccionada
  userSelectedNotes.forEach(note => {
    if (correctNotes.includes(note)) {
      tonalityScore++;
    } else {
      tonalityScore = Math.max(0, tonalityScore - 0.5); // Penalización por nota incorrecta
    }
  });
  
  // Penalización por notas correctas no seleccionadas
  const notSelectedCorrectNotes = correctNotes.filter(note => !userSelectedNotes.includes(note)).length;
  tonalityScore = Math.max(0, tonalityScore - notSelectedCorrectNotes * 0.5);
  
  // Calcular porcentaje
  const maxScore = correctNotes.length;
  return Math.round((tonalityScore / maxScore) * 100);
};

/**
 * Genera un mensaje basado en la puntuación
 * @param score Puntuación obtenida (0-100)
 * @returns Mensaje de retroalimentación
 */
export const getScoreFeedback = (score: number): string => {
  if (score >= 90) return '¡Excelente! Dominas estas tonalidades.';
  if (score >= 70) return '¡Muy bien! Estás avanzando rápidamente.';
  if (score >= 50) return 'Buen trabajo. Sigue practicando.';
  return 'Todavía necesitas más práctica. No te rindas.';
}; 