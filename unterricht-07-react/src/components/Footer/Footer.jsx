
import { useContext } from "react";
import { languageContext } from "../../context/LanguageProvider";

const Footer = () => {

    const {language} = useContext(languageContext);

    return (
        <footer>
            <h2>{language === 'en' ? 'Footer' : 'Футер'}</h2>
        </footer>
    )
};

export default Footer;