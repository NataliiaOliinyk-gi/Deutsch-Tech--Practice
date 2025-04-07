
import { useState, createContext } from "react";

export const languageContext = createContext('en');

const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState('en');

    const toogleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === "en" ? "ru" : "en"))
    }

    return (
        <languageContext.Provider value={{ language, toogleLanguage }}>
            {children}
        </languageContext.Provider>
    )
};

export default LanguageProvider;