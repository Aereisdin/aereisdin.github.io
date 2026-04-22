import { useEffect, useState } from 'react'
import './Header.css'

const terminalLines = [
  {
    command: 'check-infrastructure',
    note: 'Making sure the important stuff is stable before anything clever happens.',
  },
  {
    command: 'untangle-salesforce-flow',
    note: 'Usually means finding the part everyone has been quietly working around.',
  },
  {
    command: 'write-it-down',
    note: 'Because solving it once is not enough if nobody can follow it later.',
  },
  {
    command: 'build-the-small-tool',
    note: 'The kind that saves five minutes a day until it turns into a real win.',
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
        <h1>Kiel Sprague</h1>
        <p className="hero__summary">
          I work in IT, build systems, and spend a lot of time fixing the kind
          of problems that slow people down.
        </p>
        <p className="hero__detail">
          Most of my work lives somewhere between infrastructure, Salesforce,
          documentation, and internal tools. I like making things clearer,
          steadier, and easier to maintain than they were before.
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
            <p className="hero__glance-label">Reliable systems</p>
            <p>I like keeping the core work stable before layering on anything extra.</p>
          </article>
          <article className="hero__glance-card">
            <p className="hero__glance-label">Clear handoffs</p>
            <p>Good process matters more to me than clever complexity nobody can support.</p>
          </article>
          <article className="hero__glance-card">
            <p className="hero__glance-label">Useful tools</p>
            <p>The best fixes are usually small, practical, and easy for the next person to follow.</p>
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
          <li>I keep day-to-day IT work moving.</li>
          <li>I build Salesforce processes that make sense.</li>
          <li>I write documentation people can actually use.</li>
        </ul>
      </div>
    </header>
  )
}

export default Header