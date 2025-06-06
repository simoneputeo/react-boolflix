function MovieCard({ movie }) {
    return (
        <div className="col-md-4">
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <h6 className="card-subtitle text-muted">{movie.original_title}</h6>
                    <p>Lingua: {movie.original_language}</p>
                    <p>Voto: {movie.vote_average}</p>
                    <p>Trama: {movie.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
