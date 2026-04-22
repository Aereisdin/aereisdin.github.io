import './Experience.css'

const experienceAreas = [
  {
    title: 'Systems & Infrastructure',
    items: [
      'Maintaining and securing Windows environments, managing networks, backups, and ensuring reliability across both office and remote users.',
    ],
  },
  {
    title: 'Business Systems & Automation',
    items: [
      'Designing and refining workflows in Salesforce and related platforms to improve efficiency, visibility, and data quality.',
    ],
  },
  {
    title: 'Web & Process Design',
    items: [
      'Building web-based processes and integrations that connect systems together and create smoother, more intuitive user experiences.',
    ],
  },
  {
    title: 'Operations & Support',
    items: [
      'Supporting users, devices, and software ecosystems to keep everything running consistently and without friction.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience reveal-on-scroll">
      <div className="section__header">
        <p className="section__eyebrow">Capabilities</p>
        <h2>Capabilities</h2>
        <p>
          These are the areas where I spend most of my time building, refining,
          and supporting the systems around modern work.
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