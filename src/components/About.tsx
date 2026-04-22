import './About.css'

const strengths = [
  'I usually end up translating between the technical side and the business side.',
  'I prefer practical solutions over clever ones that are hard to live with.',
  'If a process is messy, I want to understand it before I try to automate it.',
]

const focusAreas = [
  'Keeping infrastructure dependable for the people who use it every day.',
  'Cleaning up Salesforce workflows so they are easier to follow and maintain.',
  'Building documentation and internal processes that do not fall apart the moment something changes.',
]

function About() {
  return (
    <section id="about" className="section about reveal-on-scroll">
      <div className="section__header">
        <p className="section__eyebrow">About</p>
        <h2>A little more about how I work</h2>
        <p>
          I am most useful when there is a gap between how something is supposed
          to work and how it actually works in real life. That is usually where
          support, systems, and process all start overlapping.
        </p>
      </div>

      <div className="about__grid">
        <article className="about__card">
          <h3>How I tend to approach things</h3>
          <ul>
            {strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </article>

        <article className="about__card about__card--accent">
          <h3>What I spend time on right now</h3>
          <ul>
            {focusAreas.map((focus) => (
              <li key={focus}>{focus}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default About