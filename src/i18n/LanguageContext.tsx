import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { LanguageContext, type LanguageContextValue } from './languageContextStore'
import {
  defaultLanguage,
  englishCopy,
  hasLanguageCopy,
  siteCopy,
  supportedLanguages,
  type LanguageCode,
} from './siteCopy'

const storageKey = 'site-language'

function getInitialLanguage(): LanguageCode {
  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  const storedLanguage = window.localStorage.getItem(storageKey) as LanguageCode | null
  return storedLanguage && hasLanguageCopy(storedLanguage) ? storedLanguage : defaultLanguage
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(getInitialLanguage)

  const copy = useMemo(() => siteCopy[language] ?? englishCopy, [language])

  useEffect(() => {
    window.localStorage.setItem(storageKey, language)
    document.documentElement.lang = language
    document.title = copy.meta.title
  }, [copy.meta.title, language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        if (!hasLanguageCopy(nextLanguage)) {
          return
        }

        setLanguageState(nextLanguage)
      },
      copy,
      languages: supportedLanguages,
    }),
    [copy, language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
