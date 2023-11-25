import { createContext, useEffect, useReducer, useRef } from "react";
import moviesReducer from "../reducers/moviesReducer";
import axios from "axios";

export const MovieContext = createContext();

/* const initialState = [
    { director: 'X', title: 'Rocky I', id: 1 },
    { director: 'X', title: 'Rambo I', id: 2 },
    { director: 'X', title: 'Rambo II', id: 3 },
]; */

const MoviesContextProvider = (props) => {

    const [movies, dispatch] = useReducer(moviesReducer, []);

    const initialized = useRef(false)

    useEffect(() => {

        if (!initialized.current) {

            initialized.current = true;

            axios.get('http://localhost:8000/api')
                .then(response => {
                    // manejar respuesta exitosa
                    console.log(response.data);
                    dispatch({
                        type: 'INITIALIZE',
                        payload: response.data
                    })
                });
        }
    }, [])

    return (
        <MovieContext.Provider value={{ movies, dispatch }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MoviesContextProvider;

