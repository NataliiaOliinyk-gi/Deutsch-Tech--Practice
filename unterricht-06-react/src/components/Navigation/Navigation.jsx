
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Startseite</NavLink></li>
                <li><NavLink to="/about">Über uns</NavLink></li>
                <li><NavLink to="/contact">Kontakt</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navigation;