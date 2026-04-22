import { renderToString } from 'react-dom/server'
import AppRoot from './AppRoot'
import { getPathForLanguage } from './i18n/languageRoutes'
import { defaultLanguage, siteCopy, supportedLanguages, type LanguageCode } from './i18n/siteCopy'
import { siteConfig } from './siteConfig'

const localeMap: Record<LanguageCode, string> = {
  en: 'en_US',
  es: 'es_ES',
  ja: 'ja_JP',
  de: 'de_DE',
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function getCanonicalUrl(language: LanguageCode) {
  return new URL(getPathForLanguage(language), siteConfig.siteUrl).toString()
}

function getSocialPreviewUrl() {
  return new URL(siteConfig.socialPreview.path, siteConfig.siteUrl).toString()
}

export const prerenderPages = supportedLanguages.map(({ code }) => {
  const copy = siteCopy[code] ?? siteCopy[defaultLanguage]

  return {
    language: code,
    path: getPathForLanguage(code),
    title: copy.meta.title,
    description: copy.meta.description,
    canonicalUrl: getCanonicalUrl(code),
  }
})

export function renderPage(language: LanguageCode) {
  return renderToString(<AppRoot initialLanguage={language} />)
}

export function renderHeadTags(language: LanguageCode) {
  const copy = siteCopy[language] ?? siteCopy[defaultLanguage]
  const canonicalUrl = getCanonicalUrl(language)
  const socialPreviewUrl = getSocialPreviewUrl()
  const locale = localeMap[language]
  const alternateLinks = prerenderPages
    .map(
      (page) =>
        `<link rel="alternate" hreflang="${page.language}" href="${page.canonicalUrl}" />`,
    )
    .join('\n    ')
  const alternateLocales = supportedLanguages
    .filter((item) => item.code !== language)
    .map((item) => `<meta property="og:locale:alternate" content="${localeMap[item.code]}" />`)
    .join('\n    ')
  const jsonLd = JSON.stringify(
    [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.personName,
        url: siteConfig.siteUrl,
        inLanguage: language,
        description: copy.meta.description,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: siteConfig.personName,
        url: canonicalUrl,
        jobTitle: copy.hero.role,
        sameAs: [
          siteConfig.socialLinks.linkedin,
          siteConfig.socialLinks.instagram,
          siteConfig.socialLinks.github,
        ],
      },
    ],
    null,
    2,
  ).replaceAll('<', '\\u003c')

  return [
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<link rel="alternate" hreflang="x-default" href="${getCanonicalUrl(defaultLanguage)}" />`,
    alternateLinks,
    '<meta name="robots" content="index, follow" />',
    `<meta property="og:site_name" content="${escapeHtml(siteConfig.personName)}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:title" content="${escapeHtml(copy.meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(copy.meta.description)}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:locale" content="${locale}" />`,
    `<meta property="og:image" content="${socialPreviewUrl}" />`,
    `<meta property="og:image:type" content="image/png" />`,
    `<meta property="og:image:width" content="${siteConfig.socialPreview.width}" />`,
    `<meta property="og:image:height" content="${siteConfig.socialPreview.height}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(siteConfig.socialPreview.alt)}" />`,
    alternateLocales,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(copy.meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(copy.meta.description)}" />`,
    `<meta name="twitter:image" content="${socialPreviewUrl}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(siteConfig.socialPreview.alt)}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ]
    .filter(Boolean)
    .join('\n    ')
}