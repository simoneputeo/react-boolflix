import { useState } from "react";
import { useMovies } from "../context/MoviesContext";

function SearchBar() {
    const [query, setQuery] = useState("");
    const { fetchMovies } = useMovies();

    function handleSearch() {
        if (!query.trim()) return;
        if (typeof fetchMovies === "function") {
            fetchMovies(query);
        } else {
            console.error("Errore: fetchMovies non è una funzione valida.");
        }
    }

    function handleChange(event) {
        setQuery(event.target.value);
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-4">
                    <input
                        type="text"
                        className="form-control w-100"
                        placeholder="Cerca un film..."
                        value={query}
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                    />
                </div>
            </div>
        </div>

    );
}

export default SearchBar;
