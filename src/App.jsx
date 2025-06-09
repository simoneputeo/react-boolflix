import { MoviesProvider } from "./context/MoviesContext";
import MoviesList from "./components/MoviesList";
import Header from "./layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



function App() {
  return (
    <MoviesProvider>

      <Header />
      <MoviesList />

    </MoviesProvider>
  );
}

export default App;
