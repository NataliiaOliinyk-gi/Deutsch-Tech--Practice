
import { useContext } from "react";
import { languageContext } from "../../context/LanguageProvider";

const MainContent = () => {

    const { language } = useContext(languageContext);

    return (
        <main>
            <h2>{language === 'en' ? 'Main Content' : 'Главный текст'}</h2>
        </main>
    )
};

export default MainContent;