import { MoviesProvider } from "./context/MoviesContext";
import SearchBar from "./components/SearchBar";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <MoviesProvider>
      <div className="container mt-4">
        <h1 className="text-center">🎬 Ricerca Film</h1>
        <SearchBar />
        <MoviesList />
      </div>
    </MoviesProvider>
  );
}

export default App;
