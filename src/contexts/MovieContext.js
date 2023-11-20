import { createContext, useState } from "react";

export const MovieContext = createContext();

const MoviesContextProvider = (props) => {

    const [movies, setMovies] = useState([
        { director: 'X', title: 'Rocky I', id: 1 },
        { director: 'X', title: 'Rambo I', id: 2 },
        { director: 'X', title: 'Rambo II', id: 3 },
    ])

    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MoviesContextProvider;

