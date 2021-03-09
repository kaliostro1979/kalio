import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locale/en/en.json'
import ru from './locale/ru/ru.json'


const Languages = ['en', 'ru']

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources:{
          en: {translation: en},
          ru: {translation: ru},
        },
        fallbackLng: 'en',
        debug: true,
        whitelist: Languages,
        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;