import { useState, useEffect } from "react";
import { translations } from "../i18n/translations";
import { LangContext } from "./langContext";

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {
      //
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => translations[lang][key] ?? translations.en[key] ?? key;

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}
