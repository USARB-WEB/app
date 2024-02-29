
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en/translation.json';
import translationRo from './locales/ro/translation.json';
import translationDe from './locales/de/translation.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
        en: {
            translation: translationEn
        },
        ro: {
            translation: translationRo
        },
        de: {
            translation: translationDe
        }
    }
  });

export default i18n;