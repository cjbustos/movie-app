import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import ThemeToggle from "./components/ThemeToggle";
import { AppContainer } from "./App.styled";
import MoviesContextProvider from "./contexts/MovieContext";

export const ThemeContext = createContext();

function App() {

  const [isLightTheme, setIsLightTheme] = useState(false);
  const updateThemeStyles = () => setIsLightTheme(!isLightTheme);

  const themeStyles = `
      color: ${isLightTheme ? '#555' : '#ddd'};
      background: ${isLightTheme ? '#eee' : '#555'};
  `

  return (
    <AppContainer>
      <ThemeContext.Provider value={{ updateThemeStyles, themeStyles }}>
        <MoviesContextProvider>
          <Navbar />
          <MoviesList />
        </MoviesContextProvider>
        <ThemeToggle />
      </ThemeContext.Provider>
    </AppContainer>
  );
}

export default App;
