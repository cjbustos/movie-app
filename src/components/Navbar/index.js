import { useContext } from "react";
import { NavbarContainer } from "./navbar-styled.js";
import { MovieContext } from "../../contexts/MovieContext.js";
import { ThemeContext } from "../../contexts/ThemeContext.js";

const Navbar = () => {

    const { movies } = useContext(MovieContext)
    const { themeStyles } = useContext(ThemeContext)

    return (
        <NavbarContainer themeStyles={themeStyles}>
            <h1>Lista de películas por ver</h1>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Contacto</li>
            </ul>
            <span>Tienes {movies.length} por ver</span>
        </NavbarContainer>
    )
}

export default Navbar;