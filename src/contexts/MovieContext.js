import { createContext, useState } from "react";

export const MovieContext = createContext();

const MoviesContextProvider = (props) => {

    const [movies, setMovies] = useState([
        { title: 'Rocky I', id: 1 },
        { title: 'Rambo I', id: 2 },
        { title: 'Rambo II', id: 3 },
    ])

    return (
        <MovieContext.Provider value={{ movies }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MoviesContextProvider;

