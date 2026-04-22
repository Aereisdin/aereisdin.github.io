import App from './App'
import { LanguageProvider } from './i18n/LanguageContext'
import type { LanguageCode } from './i18n/siteCopy'

type AppRootProps = {
  initialLanguage?: LanguageCode
}

function AppRoot({ initialLanguage }: AppRootProps) {
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <App />
    </LanguageProvider>
  )
}

export default AppRoot