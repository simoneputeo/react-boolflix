import { createContext, useState, useContext, useCallback } from "react";

const MoviesContext = createContext();

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/search/";
const DEFAULT_LANGUAGE = "it-IT";
const MOVIE = "movie";
const SERIES = "tv";

async function fetchMoviesAndSeries(query) {
    if (!query) return [];

    const movieURL = `${BASE_URL}${MOVIE}?api_key=${API_KEY}&language=${DEFAULT_LANGUAGE}&query=${query}`;
    const seriesURL = `${BASE_URL}${SERIES}?api_key=${API_KEY}&language=${DEFAULT_LANGUAGE}&query=${query}`;

    try {
        const [movieResponse, seriesResponse] = await Promise.all([
            fetch(movieURL),
            fetch(seriesURL)
        ]);

        if (!movieResponse.ok || !seriesResponse.ok)
            throw new Error("Errore nella risposta API");

        const movieData = await movieResponse.json();
        const seriesData = await seriesResponse.json();

        return [...movieData.results, ...seriesData.results].map(item => ({
            id: item.id,
            title: item.title || item.name,
            language: item.original_language,
            vote: item.vote_average,
            overview: item.overview,
            type: item.title ? "movie" : "tv",
            poster: item.poster_path
                ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                : null,
        }));
    } catch (error) {
        console.error("Errore nella ricerca di film e serie TV:", error);
        return [];
    }
}

export function MoviesProvider({ children }) {
    const [movies, setMovies] = useState([]);

    const fetchMovies = useCallback(async (query) => {
        const results = await fetchMoviesAndSeries(query);
        setMovies(results);
    }, []);

    return (
        <MoviesContext.Provider value={{ movies, fetchMovies }}>
            {children}
        </MoviesContext.Provider>
    );
}

export function useMovies() {
    return useContext(MoviesContext);
}
