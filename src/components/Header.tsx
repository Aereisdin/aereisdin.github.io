import './Header.css'

function Header() {
  return (
    <header className="hero section">
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
      </div>
      <div className="hero__panel" aria-label="Core strengths">
        <p className="hero__panel-label">The short version</p>
        <ul className="hero__highlights">
          <li>I keep day-to-day IT work moving.</li>
          <li>I build Salesforce processes that make sense.</li>
          <li>I write documentation people can actually use.</li>
          <li>I like tools that solve real internal problems.</li>
        </ul>
      </div>
    </header>
  )
}

export default Header