import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ru from "./locales/ru.json";
import kk from "./locales/kk.json";

const resources = {
  en,
  ru,
  kk,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: ["ru", "en", "kk"],
});

export default i18n;
