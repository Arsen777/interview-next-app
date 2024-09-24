import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  resources: {}, // Leave empty as we are using JSON files
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  // Set the backend options
  backend: {
    loadPath: "/locales/{{lng}}/common.json", // Path to your translation files
  },
});

export default i18next;
