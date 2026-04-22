import './Projects.css'

const projectAreas = [
  {
    id: 'salesforce-process-development',
    title: 'Salesforce Process Development',
    description:
      'Designed and implemented workflows to improve lead distribution, data flow, and operational visibility.',
    tags: ['Salesforce', 'Flows', 'Automation'],
  },
  {
    id: 'system-administration',
    title: 'System Administration & Reliability',
    description:
      'Managed a full office environment including user systems, network infrastructure, backups, and security practices.',
    tags: ['M365', 'Networking', 'Reliability'],
  },
  {
    id: 'workflow-integration',
    title: 'Web-Based Workflow Integration',
    description:
      'Built and tested integrations between web forms, Salesforce, and supporting platforms to ensure accurate and consistent data flow.',
    tags: ['Web Forms', 'Integrations', 'Data Flow'],
  },
  {
    id: 'system-refinement',
    title: 'Ongoing System Refinement',
    description:
      'Continuously identifying inefficiencies and improving internal processes through practical, well-structured solutions.',
    tags: ['Process Design', 'Internal Systems', 'Refinement'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects reveal-on-scroll">
      <div className="section__header">
        <p className="section__eyebrow">Selected Work</p>
        <h2>Selected Work</h2>
        <p>
          A few examples of the kind of work I return to most often across
          infrastructure, business systems, and process improvement.
        </p>
      </div>

      <div className="projects__grid">
        {projectAreas.map((project) => (
          <article key={project.id} className="projects__card">
            <span className="projects__eyebrow">Selected work</span>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <ul className="projects__tags" aria-label={`${project.title} technologies`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects