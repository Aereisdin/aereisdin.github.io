import { useState } from 'react'
import './Projects.css'

const projectAreas = [
  {
    id: 'personal-site',
    title: 'Personal site in progress',
    description:
      'This site is part learning project, part excuse to finally make a homepage that sounds like me instead of a template.',
    challenge:
      'Turning a default starter into something with a point of view without overbuilding it.',
    build:
      'A lightweight React and TypeScript homepage with custom layout, playful motion, and cleaner personal copy.',
    payoff:
      'It gives me a place to experiment in public and improve the site in small pieces instead of waiting for a perfect rewrite.',
    tags: ['Vite', 'React', 'TypeScript'],
  },
  {
    id: 'workflow-automation',
    title: 'Workflow automation',
    description:
      'A lot of my energy goes into removing repetitive work and building Salesforce processes that people can follow without guessing.',
    challenge:
      'Automation is only helpful when the people using it can understand what it is doing and why.',
    build:
      'Flows, Apex, and supporting process cleanup that reduce repeated manual work and make handoffs less fragile.',
    payoff:
      'Less hidden tribal knowledge, fewer awkward workarounds, and better visibility when something breaks.',
    tags: ['Salesforce', 'Flows', 'Apex'],
  },
  {
    id: 'internal-ops',
    title: 'Internal operations tooling',
    description:
      'I am always interested in better onboarding, better support handoffs, and the small internal tools that save people time every week.',
    challenge:
      'Small internal pain points rarely look exciting, but they stack up fast when nobody owns them.',
    build:
      'Documentation, support improvements, and practical tools that smooth out repeat work for a small team.',
    payoff:
      'People spend less time re-solving the same problem and more time getting on with what they were trying to do.',
    tags: ['IT Operations', 'Documentation', 'Process Design'],
  },
]

function Projects() {
  const [expandedProject, setExpandedProject] = useState(projectAreas[0].id)

  return (
    <section id="projects" className="section projects reveal-on-scroll">
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
          <article
            key={project.id}
            className={`projects__card${expandedProject === project.id ? ' is-expanded' : ''}`}
          >
            <button
              type="button"
              className="projects__toggle"
              onClick={() =>
                setExpandedProject((currentProject) =>
                  currentProject === project.id ? '' : project.id,
                )
              }
              aria-expanded={expandedProject === project.id}
            >
              <span className="projects__toggle-copy">
                <span className="projects__eyebrow">Open card</span>
                <h3>{project.title}</h3>
              </span>
              <span className="projects__toggle-icon" aria-hidden="true">
                {expandedProject === project.id ? '−' : '+'}
              </span>
            </button>

            <p>{project.description}</p>

            {expandedProject === project.id ? (
              <div className="projects__details">
                <p>
                  <strong>Problem:</strong> {project.challenge}
                </p>
                <p>
                  <strong>Build:</strong> {project.build}
                </p>
                <p>
                  <strong>Why it matters:</strong> {project.payoff}
                </p>
              </div>
            ) : null}

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