import styles from "./Movie.module.css";

export function Movie({
  title,
  director,
  released,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{director}</p>
      <p>{released}</p>
      <button
        style={{
          backgroundColor: isFavorite ? "green" : undefined,
          color: isFavorite ? "white" : undefined,
        }}
        onClick={onToggleFavorite}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
