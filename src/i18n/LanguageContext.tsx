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
import { getLanguageFromPathname, getPathForLanguage } from './languageRoutes'

const storageKey = 'site-language'

function getInitialLanguage(initialLanguage?: LanguageCode): LanguageCode {
  if (initialLanguage && hasLanguageCopy(initialLanguage)) {
    return initialLanguage
  }

  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  const routeLanguage = getLanguageFromPathname(window.location.pathname)

  if (routeLanguage && hasLanguageCopy(routeLanguage)) {
    return routeLanguage
  }

  const storedLanguage = window.localStorage.getItem(storageKey) as LanguageCode | null
  return storedLanguage && hasLanguageCopy(storedLanguage) ? storedLanguage : defaultLanguage
}

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode
  initialLanguage?: LanguageCode
}) {
  const [language, setLanguageState] = useState<LanguageCode>(() => getInitialLanguage(initialLanguage))

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

        if (typeof window !== 'undefined') {
          const nextPath = getPathForLanguage(nextLanguage)
          const currentPath = getPathForLanguage(language)

          if (nextPath !== currentPath) {
            window.localStorage.setItem(storageKey, nextLanguage)
            window.location.assign(`${nextPath}${window.location.hash}`)
            return
          }
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
