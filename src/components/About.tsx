import './About.css'

const aboutParagraphs = [
  'I approach problems as a systems thinker. I want to understand how the pieces connect, where the friction lives, and what is actually causing work to become harder than it needs to be.',
  'That usually means working across more than one layer at a time: software, infrastructure, documentation, process, and the day-to-day operational details that determine whether something holds together.',
  'I am less interested in novelty than in usefulness. The solutions I trust most are practical, maintainable, and capable of scaling over time without becoming fragile.',
  'That mindset extends beyond software. The Fox, Lantern, and Lemon is part of the same way of thinking: building an environment that feels intentional, cohesive, and well-considered, with the same attention to flow, detail, and experience that I bring to technical systems.',
]

const workAreas = [
  'Salesforce automation and process design that reduces manual work without making the system harder to understand.',
  'Web development and integrations that connect tools cleanly and support the real workflow around them.',
  'Microsoft 365, security, devices, and infrastructure work that keeps day-to-day operations dependable.',
  'Documentation, internal tooling, and operational cleanup that make systems easier to support over time.',
]

function About() {
  return (
    <section id="about" className="section about reveal-on-scroll">
      <div className="section__header">
        <p className="section__eyebrow">About</p>
        <h2>How I think about the work</h2>
        <p>
          I do my best work where technology, operations, and real-world use all
          start overlapping.
        </p>
      </div>

      <div className="about__grid">
        <article className="about__card">
          <h3>About me</h3>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <article className="about__card about__card--accent">
          <h3>What I work on</h3>
          <ul>
            {workAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default About