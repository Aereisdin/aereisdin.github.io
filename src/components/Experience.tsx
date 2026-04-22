import './Experience.css'

const experienceAreas = [
  {
    title: 'Infrastructure and support',
    items: [
      'Handle day-to-day IT work for a small organization, from user support to endpoints and networking.',
      'Take care of device lifecycle, patching, and the routine upkeep that keeps things from drifting.',
      'Support Microsoft 365, VOIP, and the other tools people need to get through the workday.',
    ],
  },
  {
    title: 'Systems and automation',
    items: [
      'Build Salesforce workflows that cut down manual work without making the process harder to understand.',
      'Use Flows, Apex, Visualforce, and Lightning Web Components when a plain configuration is not enough.',
      'Clean up data, reporting, and visibility when systems start getting messy around the edges.',
    ],
  },
  {
    title: 'Security and resilience',
    items: [
      'Look after backups, monitoring, and general stability for both in-office and remote users.',
      'Apply security habits that are practical enough to stick, not just good on paper.',
      'Work through cross-system issues without losing track of the actual business problem underneath them.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__header">
        <p className="section__eyebrow">Experience</p>
        <h2>The kind of work I end up doing most often</h2>
        <p>
          A lot of my work comes down to keeping systems reliable, untangling
          process problems, and building something more maintainable than what
          was there before.
        </p>
      </div>

      <div className="experience__grid">
        {experienceAreas.map((area) => (
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