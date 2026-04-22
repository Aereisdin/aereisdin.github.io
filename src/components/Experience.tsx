import './Experience.css'

const experienceAreas = [
  {
    title: 'Infrastructure and operations',
    items: [
      'Run day-to-day IT work across user support, devices, networking, and the operational maintenance that keeps systems from drifting.',
      'Handle lifecycle, patching, and routine upkeep with an eye toward stability instead of constant firefighting.',
      'Support Microsoft 365, VOIP, and the tools people depend on to get through the workday without unnecessary friction.',
    ],
  },
  {
    title: 'Automation and application systems',
    items: [
      'Design Salesforce workflows that cut down manual work while keeping the process legible and maintainable.',
      'Use Flows, Apex, Visualforce, and Lightning Web Components when configuration alone stops being enough.',
      'Clean up data, reporting, and system visibility when the edges start getting messy.',
    ],
  },
  {
    title: 'Resilience and cross-system problem solving',
    items: [
      'Look after backups, monitoring, and general stability for both in-office and remote users.',
      'Apply security practices that are practical enough to stick, not just correct in theory.',
      'Work through cross-system issues without losing sight of the business problem underneath them.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience reveal-on-scroll">
      <div className="section__header">
        <p className="section__eyebrow">Experience</p>
        <h2>What I work on</h2>
        <p>
          The throughline is usually the same: make the system clearer, more
          dependable, and easier to run than it was before.
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