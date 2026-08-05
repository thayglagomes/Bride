import { useEffect, useMemo, useRef, useState } from "react";
import CompletionScreen from "./components/CompletionScreen";
import CoverScreen from "./components/CoverScreen";
import ProgressPath from "./components/ProgressPath";
import QuestionScreen from "./components/QuestionScreen";
import { gameConfig } from "./data/gameData";

const COMPLETION_STEP = gameConfig.questions.length + 1;

function getSavedProgress() {
  try {
    const saved = localStorage.getItem(gameConfig.storageKey);

    if (!saved) {
      return 0;
    }

    const parsed = Number(saved);

    if (
      Number.isInteger(parsed) &&
      parsed >= 0 &&
      parsed <= COMPLETION_STEP
    ) {
      return parsed;
    }
  } catch {
    // O jogo continua normalmente caso o navegador bloqueie o localStorage.
  }

  return 0;
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(getSavedProgress);
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const touchStartX = useRef(null);

  const currentQuestion =
    currentStep >= 1 && currentStep <= gameConfig.questions.length
      ? gameConfig.questions[currentStep - 1]
      : null;

  const isCompletion = currentStep === COMPLETION_STEP;

  const activeScene = useMemo(() => {
    if (currentStep === 0) {
      return gameConfig.cover;
    }

    if (isCompletion) {
      return gameConfig.questions.at(-1);
    }

    return currentQuestion;
  }, [currentQuestion, currentStep, isCompletion]);

  const completedStep = Math.min(
    currentStep - (answerStatus === "correct" ? 0 : 1),
    gameConfig.questions.length,
  );

  useEffect(() => {
    try {
      localStorage.setItem(gameConfig.storageKey, String(currentStep));
    } catch {
      // Persistência é opcional.
    }
  }, [currentStep]);

  useEffect(() => {
    setSelectedAnswerId(null);
    setAnswerStatus(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        resetGame();
      }

      if (event.key === "ArrowLeft" && currentStep > 0) {
        goBack();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentStep]);

  function startGame() {
    setCurrentStep(1);
  }

  function selectAnswer(answerId) {
    if (!currentQuestion || answerStatus === "correct") {
      return;
    }

    setSelectedAnswerId(answerId);

    if (answerId === currentQuestion.correctAnswerId) {
      setAnswerStatus("correct");
      return;
    }

    setAnswerStatus("wrong");
  }

  function goNext() {
    if (currentStep < gameConfig.questions.length) {
      setCurrentStep((step) => step + 1);
      return;
    }

    setCurrentStep(COMPLETION_STEP);
  }

  function goBack() {
    setCurrentStep((step) => Math.max(0, step - 1));
  }

  function resetGame() {
    try {
      localStorage.removeItem(gameConfig.storageKey);
    } catch {
      // Persistência é opcional.
    }

    setCurrentStep(0);
    setSelectedAnswerId(null);
    setAnswerStatus(null);
  }

  function handleTouchStart(event) {
    touchStartX.current = event.changedTouches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const distance = touchEndX - touchStartX.current;
    touchStartX.current = null;

    // Deslizar para a direita volta uma etapa.
    if (distance > 90 && currentStep > 0) {
      goBack();
    }
  }

  const contentPosition = activeScene?.contentPosition ?? "left";
  const backgroundPosition = activeScene?.backgroundPosition ?? 0;

  return (
    <div
      className="app-shell"
      style={{ "--background-position": `${backgroundPosition}%` }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="journey-background" aria-hidden="true" />
      <div className="background-overlay" aria-hidden="true" />

      <header className="topbar">
        <div className="brand">
          <span>Jogo interativo</span>
          <strong>{gameConfig.title}</strong>
        </div>

        <ProgressPath
          currentStep={Math.min(currentStep, gameConfig.questions.length)}
          completedStep={completedStep}
          totalSteps={gameConfig.questions.length}
        />

        <button
          type="button"
          className="reset-button"
          onClick={resetGame}
          title="Recomeçar"
          aria-label="Recomeçar o jogo"
        >
          ↻
        </button>
      </header>

      <main className={`screen-layout content-${contentPosition}`}>
        <div className="content-wrapper" key={currentStep}>
          {currentStep === 0 && (
            <CoverScreen config={gameConfig.cover} onStart={startGame} />
          )}

          {currentQuestion && (
            <QuestionScreen
              question={currentQuestion}
              selectedAnswerId={selectedAnswerId}
              answerStatus={answerStatus}
              onSelectAnswer={selectAnswer}
              onNext={goNext}
              onBack={goBack}
              isLastQuestion={
                currentStep === gameConfig.questions.length
              }
            />
          )}

          {isCompletion && <CompletionScreen onRestart={resetGame} />}
        </div>
      </main>

      <footer className="footer-note">
        <span>{gameConfig.coupleName}</span>
        <span aria-hidden="true">•</span>
        <span>
          {isCompletion
            ? "Caminho concluído"
            : currentStep === 0
              ? "A jornada começa aqui"
              : `Etapa ${currentStep} de ${gameConfig.questions.length}`}
        </span>
      </footer>
    </div>
  );
}
