import GitHubIcon from '../assets/github.svg?react'
import InstagramIcon from '../assets/instagram.svg?react'
import LinkedInIcon from '../assets/linkedin.svg?react'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div>
        <p className="footer__eyebrow">Connect</p>
        <h2>If any of this overlaps with your world, feel free to reach out</h2>
        <p className="footer__copy">
          I am always up for talking shop about IT operations, Salesforce,
          internal tooling, or the weird process problems that somehow become
          technical problems.
        </p>
      </div>

      <div className="footer__links" aria-label="Social links">
        <a
          href="https://linkedin.com/in/kiel-sprague"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
        >
          <LinkedInIcon className="icon" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://www.instagram.com/aereisdin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Instagram profile"
        >
          <InstagramIcon className="icon" />
          <span>Instagram</span>
        </a>
        <a
          href="https://github.com/aereisdin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <GitHubIcon className="icon" />
          <span>GitHub</span>
        </a>
      </div>

      <p className="footer__meta">&copy; {year} Kiel Sprague</p>
    </footer>
  )
}

export default Footer