import { useLanguage } from '../i18n/useLanguage'
import './Personal.css'

function Personal() {
  const { copy } = useLanguage()
  const { personal } = copy

  return (
    <section id="personal" className="section personal reveal-on-scroll">
      <div className="section__header personal__header">
        <p className="section__eyebrow">{personal.eyebrow}</p>
        <h2>{personal.title}</h2>
        <p>{personal.intro}</p>
      </div>

      <div className="personal__grid">
        {personal.cards.map((card, index) => (
          <article
            key={card.title}
            className={`personal__card${index === 1 ? ' personal__card--accent' : ''}`}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Personal