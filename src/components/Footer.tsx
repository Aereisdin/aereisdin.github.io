import GitHubIcon from '../assets/github.svg?react'
import InstagramIcon from '../assets/instagram.svg?react'
import LinkedInIcon from '../assets/linkedin.svg?react'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer reveal-on-scroll">
      <div>
        <p className="footer__eyebrow">Contact</p>
        <h2>If you are working on something that needs structure, clarity, or refinement, I would be glad to connect.</h2>
        <p className="footer__copy">
          Let&apos;s build something that works.
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