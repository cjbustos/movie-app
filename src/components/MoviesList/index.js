import { useContext } from "react";
import { MovieItem, MoviesContainer, MoviesUnorderedList } from "./movies-list.styled";
import { MovieContext } from "../../contexts/MovieContext";
import { ThemeContext } from "../../contexts/ThemeContext";

const MoviesList = () => {

    const { movies } = useContext(MovieContext);
    const { themeStyles } = useContext(ThemeContext);

    return (
        <MoviesContainer themeStyles={themeStyles}>
            <h2>Lista de películas</h2>
            <MoviesUnorderedList>
                {movies.map(movie => (
                    <MovieItem key={movie.id}>{movie.title}</MovieItem>
                ))}
            </MoviesUnorderedList>
        </MoviesContainer>
    )
}

export default MoviesList;