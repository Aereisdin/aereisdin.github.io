import { defaultLanguage, supportedLanguages, type LanguageCode } from './siteCopy'

function normalizePathname(pathname: string) {
  const withoutIndex = pathname.replace(/index\.html$/, '')
  return withoutIndex.endsWith('/') ? withoutIndex : `${withoutIndex}/`
}

export function getPathForLanguage(language: LanguageCode) {
  return language === defaultLanguage ? '/' : `/${language}/`
}

export function getLanguageFromPathname(pathname: string): LanguageCode | null {
  const normalizedPathname = normalizePathname(pathname)

  if (normalizedPathname === '/') {
    return defaultLanguage
  }

  for (const { code } of supportedLanguages) {
    if (code === defaultLanguage) {
      continue
    }

    if (normalizedPathname === `/${code}/` || normalizedPathname.startsWith(`/${code}/`)) {
      return code
    }
  }

  return null
}