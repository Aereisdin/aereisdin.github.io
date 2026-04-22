import { useLanguage } from '../i18n/useLanguage'
import './About.css'

function About() {
  const { copy } = useLanguage()
  const { about } = copy

  return (
    <section id="about" className="section about reveal-on-scroll">
      <div className="section__header">
        <p className="section__eyebrow">{about.eyebrow}</p>
        <h2>{about.title}</h2>
        <p>{about.intro}</p>
      </div>

      <div className="about__grid">
        <article className="about__card">
          <h3>{about.aboutTitle}</h3>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <article className="about__card about__card--accent">
          <h3>{about.practiceTitle}</h3>
          <ul>
            {about.practiceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default About