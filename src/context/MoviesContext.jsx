import { createContext, useState, useContext } from "react";

const MoviesContext = createContext();

export function MoviesProvider({ children }) {
    const [movies, setMovies] = useState([]);

    async function fetchMovies(query) {
        if (!query) return;

        const API_KEY = process.env.REACT_APP_API_KEY;
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
        <MoviesContext.Provider value={{ movies, fetchMovies }}>
            {children}
        </MoviesContext.Provider>
    );
}

export function useMovies() {
    return useContext(MoviesContext);
}
