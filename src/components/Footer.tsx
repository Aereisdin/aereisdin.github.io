import GitHubIcon from '../assets/github.svg?react'
import InstagramIcon from '../assets/instagram.svg?react'
import LinkedInIcon from '../assets/linkedin.svg?react'
import { useLanguage } from '../i18n/useLanguage'
import './Footer.css'

function Footer() {
  const { copy } = useLanguage()
  const { contact } = copy
  const year = new Date().getFullYear()

  return (
    <footer className="footer reveal-on-scroll">
      <div>
        <p className="footer__eyebrow">{contact.eyebrow}</p>
        <h2>{contact.title}</h2>
        <p className="footer__copy">{contact.copy}</p>
      </div>

      <div className="footer__links" aria-label={contact.socialLinksAriaLabel}>
        <a
          href="https://linkedin.com/in/kiel-sprague"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={contact.socialLinks.linkedinAriaLabel}
        >
          <LinkedInIcon className="icon" />
          <span>{contact.socialLinks.linkedin}</span>
        </a>
        <a
          href="https://www.instagram.com/aereisdin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={contact.socialLinks.instagramAriaLabel}
        >
          <InstagramIcon className="icon" />
          <span>{contact.socialLinks.instagram}</span>
        </a>
        <a
          href="https://github.com/aereisdin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={contact.socialLinks.githubAriaLabel}
        >
          <GitHubIcon className="icon" />
          <span>{contact.socialLinks.github}</span>
        </a>
      </div>

      <p className="footer__meta">&copy; {year} {contact.metaName}</p>
    </footer>
  )
}

export default Footer