import GitHubIcon from '../assets/github.svg?react'
import InstagramIcon from '../assets/instagram.svg?react'
import LinkedInIcon from '../assets/linkedin.svg?react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <h2>Building a Better Tomorrow</h2>
      <p>
      <a
        href="https://linkedin.com/in/kiel-sprague"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn profile (opens in a new tab)"
      >
       <LinkedInIcon className="icon" />
      </a> |&nbsp;
      <a
        href="https://www.instagram.com/aereisdin/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Instagram profile (opens in a new tab)"
      >
        <InstagramIcon className="icon" />  
      </a> |&nbsp;
      <a
        href="https://github.com/aereisdin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile (opens in a new tab)"
      >
        <GitHubIcon className="icon" />
        </a></p>
      <br/>
      <p>&copy; 2024 Kiel Sprague. All rights reserved.
        Photo by <a href="https://www.pexels.com/@itsehsanh/" target="_blank" rel="noopener noreferrer">Ehsan Haquez</a> on <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">Pexels</a> and <a href="https://www.instagram.com/itsehsanh" target="_blank" rel="noopener noreferrer">Instagram</a>.
      </p>
    </footer>
  )
}

export default Footer