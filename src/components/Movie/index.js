import { useContext } from "react";
import { MovieContainer } from "./movie.styled";
import { MovieContext } from "../../contexts/MovieContext";
import { ACTIONS } from "../../reducers/moviesReducer";

const Movie = ({ movie }) => {

    const { dispatch } = useContext(MovieContext)

    function deleteMovie(id) {
        dispatch({ type: ACTIONS.REMOVE_MOVIE, payload: id })
    }

    return (
        <MovieContainer onClick={() => deleteMovie(movie.id)}>
            <div>{movie.title}</div>
            <div>{movie.director}</div>
        </MovieContainer>
    )
}

export default Movie;