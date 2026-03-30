import i18next, { type i18n } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/public/locales/en.json";
import vi from "@/public/locales/vi.json";

export const supportedLanguages = ["en", "vi"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

let instance: i18n | null = null;

export function isSupportedLanguage(lng: string): lng is SupportedLanguage {
  return supportedLanguages.includes(lng as SupportedLanguage);
}

function detectInitialLanguage(): SupportedLanguage {
  if (typeof window === "undefined") return "en";

  const stored =
    window.localStorage.getItem("i18nextLng") ??
    window.localStorage.getItem("lng");

  if (stored && isSupportedLanguage(stored)) return stored;

  const nav = window.navigator?.language?.split("-")[0];
  if (nav && isSupportedLanguage(nav)) return nav;

  return "en";
}

export function initI18n(): i18n {
  if (instance) return instance;

  const i18n = i18next.createInstance();

  i18n.use(initReactI18next).init({
    lng: detectInitialLanguage(),
    fallbackLng: "en",
    supportedLngs: supportedLanguages,
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    interpolation: {
      escapeValue: false,
    },
    initImmediate: false,
  });

  instance = i18n;
  return i18n;
}

export function getI18n(): i18n {
  if (instance) return instance;
  if (typeof window !== "undefined") return initI18n();
  return i18next;
}
