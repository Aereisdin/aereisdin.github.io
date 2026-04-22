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
        <p className="section__eyebrow">Systems builder</p>
        <h1 className="hero__name">Kiel Sprague</h1>
        <p className="hero__role">
          Working across software, infrastructure, operations, and the systems
          that connect them.
        </p>
        <p className="hero__summary">
          I build practical systems that make work clearer, steadier, and easier
          to scale.
        </p>
        <p className="hero__detail">
          Most of my work sits at the intersection of Salesforce automation,
          web tools, Microsoft 365, security, and the operational details that
          keep an organization moving. I pay attention to how systems connect,
          where friction shows up, and what needs to be simplified so people can
          actually rely on it.
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
            <p className="hero__glance-label">Systems thinking</p>
            <p>I start by looking at the whole system, not just the symptom in front of me.</p>
          </article>
          <article className="hero__glance-card">
            <p className="hero__glance-label">Maintainable fixes</p>
            <p>The best solution is the one people can still support six months later.</p>
          </article>
          <article className="hero__glance-card">
            <p className="hero__glance-label">Experience matters</p>
            <p>I care about how systems feel to use, whether the space is digital, operational, or physical.</p>
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
          <li>I build across IT operations, automation, and infrastructure.</li>
          <li>I simplify processes so they hold up in real use.</li>
          <li>I care about systems and spaces that feel intentional.</li>
        </ul>
      </div>
    </header>
  )
}

export default Header