import { AppContainer } from "./App.styled";
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import ThemeToggle from "./components/ThemeToggle";
import MoviesContextProvider from "./contexts/MovieContext";
import ThemeContextProvider from "./contexts/ThemeContext";


function App() {

  return (
    <AppContainer>
      <ThemeContextProvider>
        <MoviesContextProvider>
          <Navbar />
          <MoviesList />
        </MoviesContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </AppContainer>
  );
}

export default App;
