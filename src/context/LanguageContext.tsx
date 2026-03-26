"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Lang = "pl" | "en";

interface LanguageContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  isLoaded: boolean;
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: "pl",
  setLang: () => {},
  isLoaded: false,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("pl");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored) setLang(stored);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) localStorage.setItem("lang", lang);
  }, [lang, isLoaded]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
