import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// Importing translation files

import translationFR from "./locales/fr/translation.json";
import translationMG from "./locales/mg/translation.json";


//Creating object with the variables of imported translation files
const resources = {
    fr: {
        translation: translationFR,
    },
    mg: {
        translation: translationMG,
    },
};

//i18N Initialization

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng:"fr", //default language
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;