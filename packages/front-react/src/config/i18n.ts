import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translations from './translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: translations,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production',
    ns: ['general'],
    defaultNS: 'general',
    nsSeparator: ':',
    keySeparator: '.',
    interpolation: {
      formatSeparator: ',',
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
