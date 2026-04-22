import { useLanguage } from '../i18n/useLanguage'
import './LanguageBar.css'

function LanguageBar() {
  const { language, setLanguage, languages, copy } = useLanguage()

  return (
    <div className="page-topbar">
      <div className="language-bar" aria-label={copy.languageBar.ariaLabel}>
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
      </div>
    </div>
  )
}

export default LanguageBar