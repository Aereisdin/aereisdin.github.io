import { createContext } from 'react'
import { englishCopy, supportedLanguages, type LanguageCode } from './siteCopy'

export type LanguageContextValue = {
  language: LanguageCode
  setLanguage: (nextLanguage: LanguageCode) => void
  copy: typeof englishCopy
  languages: typeof supportedLanguages
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)