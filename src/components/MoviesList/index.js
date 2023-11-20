import { useContext } from "react";
import { MoviesContainer, MoviesUnorderedList } from "./movies-list.styled";
import { MovieContext } from "../../contexts/MovieContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import Movie from "../Movie";

const MoviesList = () => {

    const { movies } = useContext(MovieContext);
    const { themeStyles } = useContext(ThemeContext);

    return (
        <MoviesContainer themeStyles={themeStyles}>
            <h2>Lista de películas</h2>
            <MoviesUnorderedList>
                {movies.map((movie) => <Movie key={movie.id} movie={movie} />
                )}
            </MoviesUnorderedList>
        </MoviesContainer>
    )
}

export default MoviesList;