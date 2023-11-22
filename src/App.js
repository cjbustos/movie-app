import { AppContainer } from "./App.styled";
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import ThemeToggle from "./components/ThemeToggle";
import MoviesContextProvider from "./contexts/MovieContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import NewMovieForm from "./components/NewMovieForm";
import useAxios from "../src/hooks/useAxios"


function App() {

  const { data } = useAxios("http://localhost:8000/api");

  return (
    <AppContainer>
      <ThemeContextProvider>
        <MoviesContextProvider data={data}>
          <Navbar />
          <MoviesList />
          <NewMovieForm />
        </MoviesContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </AppContainer>
  );
}

export default App;
