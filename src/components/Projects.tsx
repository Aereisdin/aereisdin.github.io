import './Projects.css'

const projectAreas = [
  {
    title: 'Personal site in progress',
    description:
      'This site is part learning project, part excuse to finally make a homepage that sounds like me instead of a template.',
    tags: ['Vite', 'React', 'TypeScript'],
  },
  {
    title: 'Workflow automation',
    description:
      'A lot of my energy goes into removing repetitive work and building Salesforce processes that people can follow without guessing.',
    tags: ['Salesforce', 'Flows', 'Apex'],
  },
  {
    title: 'Internal operations tooling',
    description:
      'I am always interested in better onboarding, better support handoffs, and the small internal tools that save people time every week.',
    tags: ['IT Operations', 'Documentation', 'Process Design'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section__header">
        <p className="section__eyebrow">Focus Areas</p>
        <h2>What I am building and paying attention to</h2>
        <p>
          These are the areas I keep coming back to, whether I am improving an
          existing system or starting from a mess that needs to be sorted out.
        </p>
      </div>

      <div className="projects__grid">
        {projectAreas.map((project) => (
          <article key={project.title} className="projects__card">
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