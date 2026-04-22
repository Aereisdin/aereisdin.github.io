import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import './Header.css'

function Header() {
  const { copy } = useLanguage()
  const { hero } = copy
  const terminalLines = hero.terminalLines
  const [activeLine, setActiveLine] = useState(0)
  const [typedState, setTypedState] = useState({ lineIndex: -1, length: 0 })

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveLine((currentLine) => (currentLine + 1) % terminalLines.length)
    }, 2400)

    return () => window.clearInterval(timer)
  }, [terminalLines.length])

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
  }, [activeLine, terminalLines])

  return (
    <header className="hero section reveal-on-scroll">
      <div className="hero__content">
        <p className="section__eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__name">{hero.name}</h1>
        <p className="hero__role">{hero.role}</p>
        <p className="hero__summary">
          {hero.summary}
        </p>
        <p className="hero__detail">{hero.detail}</p>
        <div className="hero__actions">
          <a className="button-link" href="#projects">
            {hero.actions.projects}
          </a>
          <a className="button-link button-link--secondary" href="#experience">
            {hero.actions.experience}
          </a>
        </div>

        <div className="hero__glance" aria-label={hero.glanceAriaLabel}>
          {hero.glanceCards.map((card) => (
            <article key={card.label} className="hero__glance-card">
              <p className="hero__glance-label">{card.label}</p>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="hero__panel" aria-label={hero.panelAriaLabel}>
        <div className="hero__panel-top">
          <div className="hero__traffic-lights" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="hero__panel-label">{hero.panelLabel}</p>
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
          {hero.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header