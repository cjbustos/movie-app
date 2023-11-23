import { createContext, useReducer } from "react";
import moviesReducer from "../reducers/moviesReducer";

export const MovieContext = createContext();

const initialState = [
    { director: 'X', title: 'Rocky I', id: 1 },
    { director: 'X', title: 'Rambo I', id: 2 },
    { director: 'X', title: 'Rambo II', id: 3 },
];

const MoviesContextProvider = (props) => {

    /*
    [
        { director: 'X', title: 'Rocky I', id: 1 },
        { director: 'X', title: 'Rambo I', id: 2 },
        { director: 'X', title: 'Rambo II', id: 3 },
    ]
    */

    const [movies, dispatch] = useReducer(moviesReducer, initialState);

    /*
    setTimeout(() => {
        setMovies(props.data)
    }, "1000");
    */
   
    return (
        <MovieContext.Provider value={{ movies, dispatch }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MoviesContextProvider;

