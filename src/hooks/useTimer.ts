import { useState, useEffect } from 'react';

/**
 * Hook personalizado para gestionar un temporizador
 * @returns Objeto con el tiempo actual, si está corriendo, y funciones para controlarlo
 */
export const useTimer = () => {
  const [timer, setTimer] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Efecto para el temporizador
  useEffect(() => {
    let interval: number | undefined;
    if (isTimerRunning) {
      interval = window.setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  // Iniciar el temporizador
  const startTimer = () => {
    setIsTimerRunning(true);
  };

  // Detener el temporizador
  const stopTimer = () => {
    setIsTimerRunning(false);
  };

  // Reiniciar el temporizador
  const resetTimer = () => {
    setTimer(0);
    setIsTimerRunning(false);
  };

  return {
    timer,
    isTimerRunning,
    startTimer,
    stopTimer,
    resetTimer
  };
}; 