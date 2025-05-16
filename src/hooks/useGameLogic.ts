import { useState, useCallback } from 'react';
import { tonalities } from '../constants/tonalities';
import { GameHistoryEntry, GameMode, UserAnswersType } from '../types/game';
import { calculateScore } from '../utils/scoreCalculation';
import { generateHint, generateChallengeHint } from '../utils/hintGenerator';
import { filterTonalities, selectRandomTonalities } from '../utils/tonalityUtils';
import { useTimer } from './useTimer';

interface UseGameLogicProps {
  initialLevel?: number;
}

export const useGameLogic = ({ initialLevel = 1 }: UseGameLogicProps = {}) => {
  // Estados del juego
  const [currentMode, setCurrentMode] = useState<GameMode>('practice');
  const [selectedTonality, setSelectedTonality] = useState<string>('');
  const [userAnswers, setUserAnswers] = useState<UserAnswersType>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [level, setLevel] = useState<number>(initialLevel);
  const [selectedTonalities, setSelectedTonalities] = useState<string[]>([]);
  const [tonalityFilter, setTonalityFilter] = useState<'all' | 'major' | 'minor'>('all');
  const [gameHistory, setGameHistory] = useState<GameHistoryEntry[]>([]);
  const [hint, setHint] = useState<string>('');
  const [hintVisible, setHintVisible] = useState<boolean>(false);
  const [showTonalityReference, setShowTonalityReference] = useState<boolean>(false);
  
  // Timer hook
  const { timer, isTimerRunning, startTimer, stopTimer, resetTimer } = useTimer();

  // Filtrar tonalidades según la selección
  const filteredTonalitiesList = filterTonalities(tonalityFilter);

  // Iniciar el juego
  const startGame = useCallback(() => {
    if (currentMode === 'practice') {
      // En modo práctica el usuario selecciona la tonalidad
      if (!selectedTonality) return;
      setUserAnswers([]);
      setShowResults(false);
      startTimer();
    } else {
      // En modo desafío seleccionamos tonalidades aleatorias
      const randomTonalities = selectRandomTonalities(filteredTonalitiesList, level + 1);
      
      setSelectedTonalities(randomTonalities);
      
      // Inicializar respuestas para cada tonalidad
      const initialAnswers: { [tonalityIndex: number]: string[] } = {};
      randomTonalities.forEach((_, index) => {
        initialAnswers[index] = [];
      });
      setUserAnswers(initialAnswers);
      setShowResults(false);
      resetTimer();
      startTimer();
      setHintVisible(false);
    }
  }, [currentMode, selectedTonality, level, filteredTonalitiesList, startTimer, resetTimer]);

  // Manejar la selección de una nota por el usuario
  const handleNoteSelection = useCallback((note: string, tonalityIndex = 0) => {
    if (showResults) return;
    
    if (currentMode === 'practice') {
      // Para modo práctica
      const practiceAnswers = userAnswers as string[];
      if (practiceAnswers.includes(note)) {
        // Remover la nota si ya está seleccionada
        const updatedAnswers = [...practiceAnswers];
        updatedAnswers.splice(updatedAnswers.indexOf(note), 1);
        setUserAnswers(updatedAnswers);
      } else {
        // Agregar la nota
        setUserAnswers([...practiceAnswers, note]);
      }
    } else {
      // Para modo desafío
      const challengeAnswers = userAnswers as { [tonalityIndex: number]: string[] };
      const tonalityAnswers = [...(challengeAnswers[tonalityIndex] || [])];
      
      if (tonalityAnswers.includes(note)) {
        // Remover la nota si ya está seleccionada
        tonalityAnswers.splice(tonalityAnswers.indexOf(note), 1);
      } else {
        // Agregar la nota
        tonalityAnswers.push(note);
      }
      
      setUserAnswers({
        ...challengeAnswers,
        [tonalityIndex]: tonalityAnswers
      });
    }
  }, [currentMode, showResults, userAnswers]);

  // Verificar las respuestas
  const checkAnswers = useCallback(() => {
    stopTimer();
    setShowResults(true);
    
    if (currentMode === 'practice') {
      // En modo práctica
      const correctNotes = tonalities[selectedTonality];
      const practiceAnswers = userAnswers as string[];
      
      // Calcular puntuación
      const finalScore = calculateScore(practiceAnswers, correctNotes);
      setScore(finalScore);
      
      // Guardar el resultado en el historial
      setGameHistory(prev => [...prev, {
        tonality: selectedTonality,
        score: finalScore,
        time: timer
      }]);
      
    } else {
      // En modo desafío
      let totalScore = 0;
      const challengeAnswers = userAnswers as { [tonalityIndex: number]: string[] };
      
      selectedTonalities.forEach((tonality, index) => {
        const correctNotes = tonalities[tonality];
        const userTonalityAnswers = challengeAnswers[index] || [];
        
        // Calcular puntuación para esta tonalidad
        const finalTonalityScore = calculateScore(userTonalityAnswers, correctNotes);
        totalScore += finalTonalityScore;
        
        // Guardar en historial cada tonalidad individual
        setGameHistory(prev => [...prev, {
          tonality: tonality,
          score: finalTonalityScore,
          time: timer
        }]);
      });
      
      // Calcular promedio
      const averageScore = Math.round(totalScore / selectedTonalities.length);
      setScore(averageScore);
      
      // Actualizar el nivel si el desempeño es bueno
      if (averageScore >= 80) {
        setLevel(prevLevel => Math.min(prevLevel + 1, 5));
      } else if (averageScore < 50) {
        setLevel(prevLevel => Math.max(prevLevel - 1, 1));
      }
    }
  }, [currentMode, selectedTonality, userAnswers, timer, selectedTonalities, stopTimer]);

  // Reiniciar el juego
  const resetGame = useCallback(() => {
    setUserAnswers([]);
    setShowResults(false);
    setScore(0);
    resetTimer();
    setHint('');
    setHintVisible(false);
    setShowTonalityReference(false);
  }, [resetTimer]);

  // Dar una pista
  const showHint = useCallback(() => {
    let hintText = '';
    
    if (currentMode === 'practice') {
      // Generar pista para modo práctica
      hintText = generateHint(selectedTonality);
    } else {
      // Generar pistas para modo desafío
      hintText = generateChallengeHint();
    }
    
    setHint(hintText);
    setHintVisible(true);
  }, [currentMode, selectedTonality]);

  // Cambiar el modo de juego
  const changeGameMode = useCallback((mode: GameMode) => {
    setCurrentMode(mode);
    resetGame();
  }, [resetGame]);

  return {
    // Estado del juego
    currentMode,
    selectedTonality, 
    userAnswers,
    showResults,
    score,
    level,
    timer,
    isTimerRunning,
    selectedTonalities,
    tonalityFilter,
    gameHistory,
    hint,
    hintVisible,
    showTonalityReference,
    filteredTonalitiesList,

    // Acciones
    setSelectedTonality,
    setTonalityFilter,
    setShowTonalityReference,
    startGame,
    handleNoteSelection,
    checkAnswers,
    resetGame,
    showHint,
    changeGameMode
  };
}; 