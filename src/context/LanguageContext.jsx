import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div dir={language === "en" ? "ltr" : "rtl"}>{children}</div>
    </LanguageContext.Provider>
  );
};