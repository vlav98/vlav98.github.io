import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import commonJson from "../locales/en/common.json";
import commonFrJson from "../locales/fr/common.json";

const resources = {
  en: {
    common: commonJson,
  },
  fr: {
    common: commonFrJson,
  },
};

i18n
  .use(initReactI18next)
  .init({ resources, lng: "en", interpolation: { escapeValue: false } });

export default i18n;
