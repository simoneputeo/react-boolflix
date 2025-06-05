import { useState } from "react";
import { useMovies } from "../context/MoviesContext";

function SearchBar() {
    const [query, setQuery] = useState("");
    const { fetchMovies } = useMovies();

    return (
        <div className="d-flex">
            <input
                type="text"
                className="form-control"
                placeholder="Cerca un film..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-danger ms-2" onClick={() => fetchMovies(query)}>
                Cerca
            </button>
        </div>
    );
}

export default SearchBar;

