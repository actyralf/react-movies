import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Movie } from "./components/Movie";
import { MovieForm } from "./components/MovieForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: "Der Pate",
      director: "Francis Ford Coppola",
      released: "1972",
      isFavorite: false,
    },
    {
      id: uuidv4(),
      title: "Titanic",
      director: "James Cameron",
      released: "1997",
      isFavorite: false,
    },
    {
      id: uuidv4(),
      title: "Das Fenster zum Hof",
      director: "Alfred Hitchcock",
      released: "1954",
      isFavorite: false,
    },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  function handleAddMovie(newMovie) {
    setMovies([{ ...newMovie, id: uuidv4(), isFavorite: false }, ...movies]);
    setIsFormOpen(false);
  }

  return (
    <>
      <NavBar />
      <main>
        <h2>Welcome to Campus Talents Movies!</h2>
        <div className={styles["header-box"]}>
          <p>
            Selected favorites:{" "}
            {movies.reduce((acc, cur) => {
              return acc + (cur.isFavorite ? 1 : 0);
            }, 0)}
          </p>
          <button
            className={styles.button}
            onClick={() => {
              setIsFormOpen((prevIsFormOpen) => !prevIsFormOpen);
            }}
          >
            {isFormOpen ? "Cancel" : "Add Movie"}
          </button>
        </div>
        {isFormOpen ? <MovieForm onAddMovie={handleAddMovie} /> : <></>}
        {/* <p>{JSON.stringify(movies)}</p> */}

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
    </>
  );
}

export default App;
