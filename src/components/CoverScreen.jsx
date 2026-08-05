export default function CoverScreen({ config, onStart }) {
  return (
    <article className="content-card cover-card">
      <span className="eyebrow">{config.eyebrow}</span>

      <h1>{config.title}</h1>

      <p className="lead-text">{config.description}</p>

      <ol className="rules-list">
        {config.rules.map((rule, index) => (
          <li key={rule}>
            <span>{index + 1}</span>
            <p>{rule}</p>
          </li>
        ))}
      </ol>

      <blockquote>
        Não existe pressa. Existe apenas um caminho que eu preparei para levar
        você até mim.
      </blockquote>

      <button className="primary-button" type="button" onClick={onStart}>
        {config.buttonLabel}
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}
