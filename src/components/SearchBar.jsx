import { useState } from "react";
import { useMovies } from "../context/MoviesContext";

function SearchBar() {
    const [query, setQuery] = useState("");
    const { searchMovies } = useMovies();

    function handleSearch() {
        searchMovies(query);
    }

    function handleChange(event) {
        setQuery(event.target.value);
    }

    return (
        <div className="d-flex">
            <input
                type="text"
                className="form-control"
                placeholder="Cerca un film..."
                value={query}
                onChange={handleChange}
            />
            <button className="btn btn-danger ms-2" onClick={handleSearch}>
                Cerca
            </button>
        </div>
    );
}

export default SearchBar;
