// Tipos para las tonalidades y sus notas
export interface TonalityNotes {
  [key: string]: string[];
}

// Entrada en el historial del juego
export interface GameHistoryEntry {
  tonality: string;
  score: number;
  time: number;
}

// Tipo para las respuestas de los usuarios
export type UserAnswersType = string[] | { [tonalityIndex: number]: string[] };

// Tipos de modo de juego
export type GameMode = 'practice' | 'challenge';

// Tipos de filtros de tonalidades
export type TonalityFilter = 'all' | 'major' | 'minor';

// Estado del juego
export interface GameState {
  currentMode: GameMode;
  selectedTonality: string;
  userAnswers: UserAnswersType;
  showResults: boolean;
  score: number;
  level: number;
  timer: number;
  isTimerRunning: boolean;
  selectedTonalities: string[];
  tonalityFilter: TonalityFilter;
  gameHistory: GameHistoryEntry[];
  hint: string;
  hintVisible: boolean;
  showTonalityReference: boolean;
} 