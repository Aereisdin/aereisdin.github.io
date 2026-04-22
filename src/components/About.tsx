import './About.css'

const aboutParagraphs = [
  'I work at the intersection of systems, structure, and usability.',
  'In my day-to-day work, I manage and improve the technical foundation of an organization, maintaining infrastructure, supporting users, and ensuring that everything people rely on is stable, secure, and ready to work.',
  'Beyond that, I focus on building better ways of working. I design and refine processes within Salesforce and across connected systems, turning complex workflows into something more streamlined, more transparent, and easier to use.',
  'What I enjoy most is creating systems from the ground up, where technical capability meets thoughtful design. Whether it is automation, internal tools, or web-based workflows, I aim to build solutions that feel clean, durable, and intuitive over time.',
]

const workAreas = [
  'Systems and infrastructure that support stable, secure day-to-day work.',
  'Business systems and automation that improve process clarity, efficiency, and data quality.',
  'Web and process design that connect systems together into smoother user experiences.',
  'Operational support that keeps people, devices, and software ecosystems running without friction.',
]

function About() {
  return (
    <section id="about" className="section about reveal-on-scroll">
      <div className="section__header">
        <p className="section__eyebrow">About</p>
        <h2>About</h2>
        <p>
          I build where technical structure and real-world usability need to
          meet cleanly.
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
          <h3>How that shows up in practice</h3>
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