import { useContext } from "react";
import { ThemeContext } from "../../App";
import { NavbarContainer } from "./navbar-styled.js";
import { MovieContext } from "../../contexts/MovieContext.js";

const Navbar = () => {

    const { movies } = useContext(MovieContext)
    const { themeStyles } = useContext(ThemeContext)

    return (
        <NavbarContainer themeStyles={themeStyles}>
            <h2>Lista de películas: {movies.length} </h2>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Contacto</li>
            </ul>
        </NavbarContainer>
    )
}

export default Navbar;