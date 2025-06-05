import { useState } from "react";
import SearchBar from "../src/components/SearchBar";
import { MoviesProvider } from "./context/MoviesContext";
import MoviesList from "../src/components/MoviesList";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';


function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMovies(query) {
    if (!query) return;

    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

    try {
      const response = await fetch(URL);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Errore nella ricerca dei film:", error);
    }
  }

  return (
    <MoviesProvider>
      <div>
        <SearchBar onSearch={fetchMovies} />
        <div className="container mt-4">
          {movies.map((movie) => (
            <div key={movie.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <h6 className="card-subtitle text-muted">{movie.original_title}</h6>
                <p>Lingua: {movie.original_language}</p>
                <p>Voto: {movie.vote_average}</p>
              </div>
            </div>
          ))}
        </div>
        <MoviesList />
      </div>
    </MoviesProvider>

  );
}

export default App;
