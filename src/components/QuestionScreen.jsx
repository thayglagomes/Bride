function renderEmphasis(text) {
  return text.split(/\*\*(.*?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? <strong key={`${part}-${index}`}>{part}</strong> : part,
  );
}

export default function QuestionScreen({
  question,
  selectedAnswerId,
  answerStatus,
  onSelectAnswer,
  onNext,
  onBack,
  isLastQuestion,
}) {
  const isCorrect = answerStatus === "correct";
  const isWrong = answerStatus === "wrong";

  return (
    <article
      className={`content-card question-card${isCorrect ? " is-correct" : ""}`}
    >
      <div className="question-heading">
        <span className="eyebrow">{question.eyebrow}</span>
        <h2>{question.question}</h2>
        <p>{question.hint}</p>
      </div>

      <div className="answer-list" role="radiogroup" aria-label="Alternativas">
        {question.alternatives.map((alternative) => {
          const isSelected = selectedAnswerId === alternative.id;
          const isSelectedCorrect =
            isSelected && alternative.id === question.correctAnswerId;
          const isSelectedWrong =
            isSelected && alternative.id !== question.correctAnswerId;

          return (
            <button
              key={alternative.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={isCorrect}
              className={[
                "answer-button",
                isSelected ? "is-selected" : "",
                isSelectedCorrect ? "is-correct" : "",
                isSelectedWrong ? "is-wrong" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onSelectAnswer(alternative.id)}
            >
              <span className="answer-letter">
                {alternative.id.toUpperCase()}
              </span>
              <span className="answer-content">
                <strong>{alternative.label}</strong>
                <small>{alternative.description}</small>
              </span>
            </button>
          );
        })}
      </div>

      <div
        className={[
          "feedback-message",
          isCorrect ? "is-success" : "",
          isWrong ? "is-error" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-live="polite"
      >
        {!answerStatus && "Escolha uma resposta para continuar."}
        {isWrong && question.wrongMessage}
        {isCorrect && "Resposta correta. O próximo trecho foi liberado."}
      </div>

      {isCorrect && (
        <section className="reward-panel">
          <div className="reward-heading">
            <div className="reward-icon" aria-hidden="true">
              {question.successIcon}
            </div>

            <div>
              <span>Próximo passo</span>
              <h3>{question.successAction}</h3>
            </div>
          </div>

          <div className={`revealed-text revealed-text-${question.id}`}>
            {question.successTitle ? (
              <strong className="revealed-title">{question.successTitle}</strong>
            ) : (
              <span>Texto revelado</span>
            )}
            <p>{renderEmphasis(question.successText)}</p>
          </div>

          <div className="question-actions">
            <button
              className="secondary-button"
              type="button"
              onClick={onBack}
            >
              ← Voltar
            </button>

            <button className="primary-button" type="button" onClick={onNext}>
              {isLastQuestion ? "Concluir o caminho" : "Próxima pergunta"}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      )}

      {!isCorrect && (
        <button className="text-button" type="button" onClick={onBack}>
          ← Voltar à etapa anterior
        </button>
      )}
    </article>
  );
}
