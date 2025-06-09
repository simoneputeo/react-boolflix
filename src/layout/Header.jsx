import SearchBar from "../components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Header() {
    return (
        <header className="container-fluid bg-dark text-white py-3">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="text-danger fw-bold">Boolflix</h1>
                <SearchBar />
            </div>
        </header>
    );
}

export default Header;
