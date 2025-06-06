import { useMovies } from "../context/MoviesContext";
import MovieCard from "./MovieCard";

function MoviesList() {
    const { movies, error } = useMovies();

    return (
        <div className="row">
            {error ? <p>{error}</p> : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    );
}

export default MoviesList;
