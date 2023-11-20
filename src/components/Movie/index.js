import { useContext } from "react";
import { MovieContainer } from "./movie.styled";
import { MovieContext } from "../../contexts/MovieContext";

const Movie = ({ movie }) => {

    const { movies, setMovies } = useContext(MovieContext)

    function deleteMovie(id) {
        const filteredMovies = movies.filter(movie => movie.id !== id);
        setMovies(filteredMovies);
    }

    return (
        <MovieContainer onClick={() => deleteMovie(movie.id)}>
            <div>{movie.title}</div>
            <div>{movie.director}</div>
        </MovieContainer>
    )
}

export default Movie;