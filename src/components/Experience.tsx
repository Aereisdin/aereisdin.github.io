import { useLanguage } from '../i18n/useLanguage'
import './Experience.css'

function Experience() {
  const { copy } = useLanguage()
  const { capabilities } = copy

  return (
    <section id="experience" className="section experience reveal-on-scroll">
      <div className="section__header">
        <p className="section__eyebrow">{capabilities.eyebrow}</p>
        <h2>{capabilities.title}</h2>
        <p>{capabilities.intro}</p>
      </div>

      <div className="experience__grid">
        {capabilities.items.map((area) => (
          <article key={area.title} className="experience__card">
            <h3>{area.title}</h3>
            <ul>
              {area.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience