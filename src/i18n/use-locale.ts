"use client";

import * as React from "react";
import {
  getI18n,
  supportedLanguages,
  type SupportedLanguage,
  isSupportedLanguage,
} from "./config";

export function useLocale() {
  const initialLng = (() => {
    const current = getI18n().language;
    return isSupportedLanguage(current) ? (current as SupportedLanguage) : "en";
  })();
  const [language, setLanguageState] =
    React.useState<SupportedLanguage>(initialLng);

  React.useEffect(() => {
    const inst = getI18n();
    const handler = (lng: string) => {
      if (isSupportedLanguage(lng)) setLanguageState(lng);
    };
    inst.on("languageChanged", handler);
    return () => {
      inst.off("languageChanged", handler);
    };
  }, []);

  const setLanguage = React.useCallback((lng: SupportedLanguage) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("i18nextLng", lng);
      window.localStorage.setItem("lng", lng);
    }
    getI18n().changeLanguage(lng);
  }, []);

  return { language, setLanguage, supportedLanguages };
}
