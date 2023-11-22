import { createContext, useState } from "react";

export const MovieContext = createContext();

const MoviesContextProvider = (props) => {

    /*
    [
        { director: 'X', title: 'Rocky I', id: 1 },
        { director: 'X', title: 'Rambo I', id: 2 },
        { director: 'X', title: 'Rambo II', id: 3 },
    ]
    */

    const [movies, setMovies] = useState([]);

    setTimeout(() => {
        setMovies(props.data)
    }, "1000");

    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MoviesContextProvider;

