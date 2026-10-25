import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, hi } from './strings'
import { load } from '../storage'

export type Lang = 'hi' | 'en'

i18n.use(initReactI18next).init({
  resources: { hi: { translation: hi }, en: { translation: en } },
  lng: load<Lang>('lang', 'hi'),
  fallbackLng: 'hi',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (l) => {
  document.documentElement.lang = l
})
document.documentElement.lang = i18n.language

export default i18n
