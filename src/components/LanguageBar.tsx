import GitHubIcon from '../assets/github.svg?react'
import InstagramIcon from '../assets/instagram.svg?react'
import LinkedInIcon from '../assets/linkedin.svg?react'
import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import './LanguageBar.css'

function AirbnbIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path d="M320.5 437.1C295.3 405.4 280.4 377.7 275.5 353.9C253 265.9 388.1 265.9 365.6 353.9C360.2 378.1 345.3 405.9 320.6 437.1L320.5 437.1zM458.7 510.3C416.6 528.6 375 499.4 339.4 459.8C443.3 329.7 385.5 259.8 320.6 259.8C265.7 259.8 235.4 306.3 247.3 360.3C254.2 389.5 272.5 422.7 301.7 459.8C269.2 495.8 241.2 512.5 216.5 514.7C166.5 522.1 127.4 473.6 145.2 423.6C160.3 384.4 256.9 192.4 261.1 182C276.9 151.9 286.7 124.6 320.5 124.6C352.8 124.6 363.9 150.5 380.9 184.5C416.9 255.1 470.3 362 495.7 423.6C508.9 456.7 494.3 494.9 458.7 510.2zM505.7 374.2C376.8 99.9 369.7 96 320.6 96C275.1 96 255.7 127.7 235.9 168.8C129.7 381.1 119.5 411.2 118.6 413.8C93.4 483.1 145.3 544 208.2 544C229.9 544 268.8 537.9 320.6 481.6C379.3 545.4 421.9 544 433 544C495.9 544.1 547.9 483.1 522.6 413.8C522.6 409.9 505.8 374.9 505.8 374.2L505.8 374.2z" />
    </svg>
  )
}

function LanguageBar() {
  const { language, setLanguage, languages, copy } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const socialLinks = [
    {
      href: 'https://linkedin.com/in/kiel-sprague',
      ariaLabel: copy.contact.socialLinks.linkedinAriaLabel,
      label: copy.contact.socialLinks.linkedin,
      Icon: LinkedInIcon,
    },
    {
      href: 'https://www.instagram.com/aereisdin/',
      ariaLabel: copy.contact.socialLinks.instagramAriaLabel,
      label: copy.contact.socialLinks.instagram,
      Icon: InstagramIcon,
    },
    {
      href: 'https://github.com/aereisdin',
      ariaLabel: copy.contact.socialLinks.githubAriaLabel,
      label: copy.contact.socialLinks.github,
      Icon: GitHubIcon,
    },
    {
      href: 'https://airbnb.com/h/foxlanternlemon',
      ariaLabel: copy.venture.ctaLabel,
      label: 'Airbnb',
      Icon: AirbnbIcon,
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page-topbar">
      <div className={`language-bar${isScrolled ? ' is-compact' : ''}`} aria-label={copy.languageBar.ariaLabel}>
        {isScrolled ? (
          <>
            <a
              className="language-bar__home"
              href="#page-top"
              aria-label={copy.languageBar.homeAriaLabel}
            >
              <span className="language-bar__home-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z" />
                </svg>
              </span>
            </a>
            <div className="language-bar__socials" aria-label={copy.contact.socialLinksAriaLabel}>
              {socialLinks.map(({ href, ariaLabel, label, Icon }) => (
                <a
                  key={href}
                  className="language-bar__social-link"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  title={label}
                >
                  <Icon
                    className={`language-bar__social-icon${label === 'Airbnb' ? ' language-bar__social-icon--airbnb' : ''}`}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="language-bar__label">{copy.languageBar.label}</p>
            <div className="language-bar__buttons">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  className={`language-bar__button${language === item.code ? ' is-active' : ''}`}
                  onClick={() => setLanguage(item.code)}
                  disabled={!item.isAvailable}
                  aria-pressed={language === item.code}
                  aria-label={item.label}
                  title={!item.isAvailable ? copy.languageBar.unavailableLabel : item.label}
                >
                  {item.shortLabel}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default LanguageBar