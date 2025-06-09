import React from "react";

const languageToCountry = {
    en: "us",
    fr: "fr",
    it: "it",
    es: "es",
    de: "de",
    ja: "jp",
    hi: "in"
};

const getFlagURL = (language) => {
    const countryCode = languageToCountry[language] || language; // Se non trovato, usa il codice lingua
    return `https://flagcdn.com/w40/${countryCode}.png`;
};

function generateStars(vote) {
    const stars = Math.round(vote / 2);
    return "⭐".repeat(stars) || "N/A";
}

function MovieCard({ movie }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                {movie.poster ? (
                    <img src={movie.poster} alt={movie.title} className="card-img-top img-fluid" />
                ) : (
                    <div className="card-img-top bg-secondary text-white text-center p-3">
                        <p>Immagine non disponibile</p>
                    </div>
                )}
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <div className="d-flex align-items-center">
                        <img src={getFlagURL(movie.language)} alt="Bandiera lingua" width="30" className="me-2" />
                        <span className="badge bg-primary">{movie.type === "movie" ? "Film" : "Serie TV"}</span>
                    </div>
                    <p className="mt-2"><strong>Voto:</strong> {generateStars(movie.vote)} ({movie.vote}/10)</p>
                    <p className="text-muted">{movie.overview.substring(0, 100)}...</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
