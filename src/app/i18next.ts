import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import i18n from "i18next";
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
