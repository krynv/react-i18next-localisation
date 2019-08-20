import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend)          // load translations using xhr -> see /public/locales
    .use(LanguageDetector) // detect the user's language
    .use(initReactI18next) // pass the i18n instance to react-i18next
    .init({                // initialise i18next
        fallbackLng: 'en', // set default language to english
        debug: true,

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;