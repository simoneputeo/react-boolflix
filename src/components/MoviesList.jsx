import { useMovies } from "../context/MoviesContext";

function MoviesList() {
    const { movies } = useMovies();

    return (
        <div className="row">
            {movies.map((movie) => (
                <div key={movie.id} className="col-md-4">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <h6 className="card-subtitle text-muted">{movie.original_title}</h6>
                            <p>Lingua: {movie.original_language}</p>
                            <p>Voto: {movie.vote_average}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MoviesList;
