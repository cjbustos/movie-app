import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FormContainer, InputField } from "./new-movie-form.styled";
import { MovieContext } from "../../contexts/MovieContext";

function generateId(movies) {
    const id = Math.max(...movies.map(movie => movie.id)) + 1
    console.log(id)
    return id;
}

const NewMovieForm = () => {

    const { movies, setMovies } = useContext(MovieContext);
    const { themeStyles } = useContext(ThemeContext);
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const newMovie = { director: director, title: title, id: generateId(movies) };
        setMovies(prevState => [...prevState, newMovie]);
        setTitle('');
        setDirector('');
    }

    return (
        <FormContainer themeStyles={themeStyles} onSubmit={handleSubmit}>
            <InputField
                type="text"
                placeholder="Ingrese el nombre de la película"
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <InputField
                type="text"
                placeholder="Ingrese el nombre del director"
                required
                value={director}
                onChange={e => setDirector(e.target.value)}
            />
            <InputField type="submit" />
        </FormContainer>
    )
}

export default NewMovieForm;