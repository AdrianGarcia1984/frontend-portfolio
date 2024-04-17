import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import global_es from './lang/es/global.json'
import global_en from './lang/en/global.json'

export const langs = [
  {
      value: "en",
      label: "English",
      //icon: "https://flagcdn.com/60x45/us.png",
  },
  {
      value: "es",
      label: "Español",
      //icon: "https://flagcdn.com/60x45/co.png",
  },
];

const resources = {
  en: {
    translation: global_en,
  },
  es: {
    translation: global_es,
  }
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    //debug: true,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
  });

export default i18n;