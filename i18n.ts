import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './translateFile/pt/translation.json';
import en from './translateFile/en/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },
  lng: 'pt', // idioma padrão
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
