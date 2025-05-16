/**
 * Formatea segundos en formato minutos:segundos (MM:SS)
 * @param seconds Número de segundos a formatear
 * @returns String en formato MM:SS
 */
export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
} 