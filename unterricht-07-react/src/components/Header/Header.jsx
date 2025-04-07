
import { useContext } from "react";
import { languageContext } from '../../context/LanguageProvider'

const Header = () => {

    const { language, toogleLanguage } = useContext(languageContext);

    return (
        <header>
            <h2>{language === "en" ? 'Title' : 'Заголовок'}</h2>
            <button onClick={toogleLanguage}>{language === "en" ? 'Russisch' : 'Englisch'}</button>

        </header>
    )
};

export default Header;
