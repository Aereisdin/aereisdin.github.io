import { useLanguage } from '../i18n/useLanguage'
import './Projects.css'

function Projects() {
  const { copy } = useLanguage()
  const { selectedWork } = copy

  return (
    <section id="projects" className="section projects reveal-on-scroll">
      <div className="section__header">
        <p className="section__eyebrow">{selectedWork.eyebrow}</p>
        <h2>{selectedWork.title}</h2>
        <p>{selectedWork.intro}</p>
      </div>

      <div className="projects__grid">
        {selectedWork.items.map((project) => (
          <article key={project.id} className="projects__card">
            <span className="projects__eyebrow">{selectedWork.itemEyebrow}</span>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <ul className="projects__tags" aria-label={`${project.title} ${selectedWork.tagsAriaSuffix}`}>
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