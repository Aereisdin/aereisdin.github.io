import crestLogo from '../assets/FoxLanternLemon35.png'
import { useLanguage } from '../i18n/useLanguage'
import './FoxLanternLemon.css'

function FoxLanternLemon() {
  const { copy } = useLanguage()
  const { venture } = copy

  return (
    <section
      id="fox-lantern-lemon"
      className="section fox-section reveal-on-scroll"
    >
      <div className="section__header fox-section__header">
        <p className="section__eyebrow">{venture.eyebrow}</p>
        <h2>{venture.title}</h2>
        <p>{venture.intro}</p>
      </div>

      <div className="fox-section__grid">
        <div className="fox-section__content">
          <div className="fox-section__intro-card">
            <p className="fox-section__label">{venture.whatItIsLabel}</p>
            <p>{venture.whatItIs}</p>
          </div>

          <ul className="fox-section__highlights" aria-label={venture.highlightsAriaLabel}>
            {venture.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="fox-section__symbols">
            {venture.symbols.map((symbol) => (
              <article key={symbol.title} className="fox-section__symbol-card">
                <h3>{symbol.title}</h3>
                <p>{symbol.description}</p>
              </article>
            ))}
          </div>

          <div className="fox-section__actions">
            <a
              className="button-link"
              href="https://airbnb.com/h/foxlanternlemon"
              target="_blank"
              rel="noopener noreferrer"
            >
              {venture.ctaLabel}
            </a>
            <span className="fox-section__note">{venture.note}</span>
          </div>
        </div>

        <aside className="fox-section__brand-panel" aria-label={venture.brandMarksAriaLabel}>
          <div className="fox-section__crest-wrap">
            <img
              src={crestLogo}
              alt={venture.crestAlt}
              className="fox-section__crest"
            />
          </div>

          <div className="fox-section__motif-row" aria-label={venture.motifAriaLabel}>
            {venture.motif.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="fox-section__panel-copy">
            <p className="fox-section__label">{venture.brandDirectionLabel}</p>
            <p>{venture.brandDirection}</p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default FoxLanternLemon