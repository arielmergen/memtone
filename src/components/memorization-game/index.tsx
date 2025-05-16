import React from 'react';
import { useGameLogic } from '../../hooks/useGameLogic';
import TonalityReference from './TonalityReference';
import ModeSelector from './ModeSelector';
import TonalityFilter from './TonalityFilter';
import GameInfo from './GameInfo';
import GameSetup from './GameSetup';
import PracticeMode from './PracticeMode';
import ChallengeMode from './ChallengeMode';
import ResultsView from './ResultsView';
import GameHistory from './GameHistory';

export default function MemTone() {
  const {
    // Estado
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
  } = useGameLogic();

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-6 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl mt-8 gap-4">
      <h1 className="text-3xl text-cyan-300 font-extrabold mb-4 text-primary flex items-center gap-2">
        MemTone
      </h1>
      
      {/* Botón para mostrar referencias de tonalidades */}
      <button
        className="w-full py-2 bg-transparent border border-cyan-600 hover:bg-cyan-600 hover:text-white text-white rounded-md transition-colors gap-2"
        onClick={() => setShowTonalityReference(true)}
      >
        Ver referencia de tonalidades
      </button>
      
      {showTonalityReference && (
        <TonalityReference onClose={() => setShowTonalityReference(false)} />
      )}
      
      {/* Selector de modo */}
      <div className="w-full">
        <ModeSelector 
          currentMode={currentMode}
          onModeChange={changeGameMode}
        />
      </div>
      
      {/* Filtro de tonalidades */}
      <div className="flex gap-2 mb-6 w-full">
        <TonalityFilter 
          currentFilter={tonalityFilter}
          onFilterChange={setTonalityFilter}
        />
      </div>
      
      {/* Información del juego */}
      { isTimerRunning && <GameInfo 
        timer={timer}
        level={level}
        score={score}
        showResults={showResults}
        isChallenge={currentMode === 'challenge'}
      />
      }
      
      {/* Configuración y juego */}
      <div className="w-full">
        {!isTimerRunning && !showResults ? (
          <GameSetup 
            currentMode={currentMode}
            selectedTonality={selectedTonality}
            tonalitiesList={filteredTonalitiesList}
            level={level}
            onTonalityChange={setSelectedTonality}
            onStartGame={startGame}
          />
        ) : isTimerRunning && !showResults ? (
          currentMode === 'practice' ? (
            <PracticeMode 
              selectedTonality={selectedTonality}
              userAnswers={userAnswers as string[]}
              onNoteSelection={(note) => handleNoteSelection(note)}
              onVerify={checkAnswers}
              onShowHint={showHint}
              hint={hint}
              hintVisible={hintVisible}
            />
          ) : (
            <ChallengeMode 
              selectedTonalities={selectedTonalities}
              userAnswers={userAnswers as { [tonalityIndex: number]: string[] }}
              onNoteSelection={handleNoteSelection}
              onVerify={checkAnswers}
              onShowHint={showHint}
              hint={hint}
              hintVisible={hintVisible}
            />
          )
        ) : null}
      </div>
      
      {/* Resultados */}
      {showResults && (
        <ResultsView 
          currentMode={currentMode}
          selectedTonality={selectedTonality}
          selectedTonalities={selectedTonalities}
          userAnswers={userAnswers}
          score={score}
          timer={timer}
          onReset={resetGame}
          onPlayAgain={() => {
            resetGame();
            startGame();
          }}
        />
      )}
      
      {/* Historial */}
      {gameHistory.length > 0 && !isTimerRunning && (
        <div className="w-full mt-4">
          <GameHistory history={gameHistory} />
        </div>
      )}
    </div>
  );
} 