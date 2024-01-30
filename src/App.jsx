import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Movie } from "./components/Movie";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Der Pate",
      director: "Francis Ford Coppola",
      released: "1972",
      isFavorite: false,
    },
    {
      id: 2,
      title: "Titanic",
      director: "James Cameron",
      released: "1997",
      isFavorite: false,
    },
    {
      id: 3,
      title: "Das Fenster zum Hof",
      director: "Alfred Hitchcock",
      released: "1954",
      isFavorite: false,
    },
  ]);

  function handleToggleFavorite(id) {
    setMovies(
      movies.map((movie) => {
        if (id === movie.id) {
          return {
            ...movie,
            isFavorite: !movie.isFavorite,
          };
        } else {
          return movie;
        }
      })
    );
  }

  function handleDeleteMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  return (
    <>
      <NavBar />
      <main>
        <h2>Welcome to Campus Talents Movies!</h2>
        <p>
          Selected favorites:{" "}
          {movies.reduce((acc, cur) => {
            return acc + (cur.isFavorite ? 1 : 0);
          }, 0)}
        </p>
        {movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              director={movie.director}
              released={movie.released}
              isFavorite={movie.isFavorite}
              onToggleFavorite={() => {
                handleToggleFavorite(movie.id);
              }}
              onDelete={() => {
                handleDeleteMovie(movie.id);
              }}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}

export default App;
