import { useEffect, useState } from 'react'
import './Header.css'

const terminalLines = [
  {
    command: 'map-system-friction',
    note: 'Find the handoff, bottleneck, or workaround that is creating the most drag.',
  },
  {
    command: 'stabilize-the-core',
    note: 'Reliable foundations matter more than impressive complexity.',
  },
  {
    command: 'untangle-salesforce-flow',
    note: 'Automation should clarify a process, not bury it under more moving parts.',
  },
  {
    command: 'design-the-handoff',
    note: 'Tooling, documentation, and ownership should make the next step obvious.',
  },
]

function Header() {
  const [activeLine, setActiveLine] = useState(0)
  const [typedState, setTypedState] = useState({ lineIndex: -1, length: 0 })

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveLine((currentLine) => (currentLine + 1) % terminalLines.length)
    }, 2400)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const activeCommand = terminalLines[activeLine].command
    const timer = window.setInterval(() => {
      setTypedState((currentState) => {
        const nextLength =
          currentState.lineIndex === activeLine ? currentState.length + 1 : 1

        if (nextLength >= activeCommand.length) {
          window.clearInterval(timer)
          return { lineIndex: activeLine, length: activeCommand.length }
        }

        return { lineIndex: activeLine, length: nextLength }
      })
    }, 42)

    return () => window.clearInterval(timer)
  }, [activeLine])

  return (
    <header className="hero section reveal-on-scroll">
      <div className="hero__content">
        <p className="section__eyebrow">Kiel Sprague</p>
        <h1 className="hero__name">Kiel Sprague</h1>
        <p className="hero__role">Systems Builder</p>
        <p className="hero__summary">
          I build and refine the systems behind modern work, connecting people,
          processes, and technology into something reliable, efficient, and
          thoughtfully designed.
        </p>
        <p className="hero__detail">
          Guided by clarity, durability, and the belief that well-built systems
          should feel as good as they function.
        </p>
        <div className="hero__actions">
          <a className="button-link" href="#projects">
            See what I work on
          </a>
          <a className="button-link button-link--secondary" href="#experience">
            Read the experience
          </a>
        </div>

        <div className="hero__glance" aria-label="Work at a glance">
          <article className="hero__glance-card">
            <p className="hero__glance-label">People and process</p>
            <p>I pay attention to how work moves between people, systems, and the points where things usually break down.</p>
          </article>
          <article className="hero__glance-card">
            <p className="hero__glance-label">Durable systems</p>
            <p>I want solutions that stay stable, readable, and useful long after the first implementation.</p>
          </article>
          <article className="hero__glance-card">
            <p className="hero__glance-label">Intentional design</p>
            <p>I care about systems that are not only functional, but feel clear, thoughtful, and well-crafted.</p>
          </article>
        </div>
      </div>
      <div className="hero__panel" aria-label="Terminal snapshot">
        <div className="hero__panel-top">
          <div className="hero__traffic-lights" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="hero__panel-label">A rough summary of the work</p>
        </div>

        <div className="hero__terminal" aria-live="polite">
          {terminalLines.map((line, index) => (
            <div
              key={line.command}
              className={`hero__terminal-line${index === activeLine ? ' is-active' : ''}`}
            >
              <p className="hero__terminal-command">
                <span aria-hidden="true">PS&gt;</span>{' '}
                {index === activeLine
                  ? line.command.slice(
                      0,
                      typedState.lineIndex === activeLine ? typedState.length : 0,
                    )
                  : line.command}
                {index === activeLine ? (
                  <span className="hero__terminal-cursor" aria-hidden="true"></span>
                ) : null}
              </p>
              <p className="hero__terminal-note">{line.note}</p>
            </div>
          ))}
        </div>

        <ul className="hero__highlights">
          <li>I build structure behind modern work.</li>
          <li>I refine systems for clarity and reliability.</li>
          <li>I care how solutions function and how they feel.</li>
        </ul>
      </div>
    </header>
  )
}

export default Header