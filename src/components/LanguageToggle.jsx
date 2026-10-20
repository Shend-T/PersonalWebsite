import { useLang } from "../hooks/useLang";

export default function LanguageToggle() {
  const { lang, setLang } = useLang("en");

  return (
    <div>
      <button
        className={lang === "en" ? "lang-btn active" : "lang-btn"}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        className={lang === "sq" ? "lang-btn active" : "lang-btn"}
        onClick={() => setLang("sq")}
        aria-pressed={lang === "sq"}
      >
        SQ
      </button>
    </div>
  );
}
