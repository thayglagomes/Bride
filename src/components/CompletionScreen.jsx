export default function CompletionScreen({ onRestart }) {
  return (
    <article className="content-card completion-card">
      <div className="completion-icon" aria-hidden="true">
        🚪
      </div>

      <span className="eyebrow">Todas as peças foram encontradas</span>

      <h2>Agora falta apenas uma resposta.</h2>

      <p className="lead-text">
        A tela termina aqui. O próximo capítulo começa quando a porta do quarto
        for aberta.
      </p>

      <div className="final-message">
        <span>Última instrução</span>
        <strong>Abra a porta do quarto.</strong>
        <p>
          Do outro lado, existe uma pergunta que não pertence ao jogo. Ela
          pertence à nossa vida.
        </p>
      </div>

      <button className="secondary-button" type="button" onClick={onRestart}>
        Recomeçar o protótipo
      </button>
    </article>
  );
}
