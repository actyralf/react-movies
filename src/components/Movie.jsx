import styles from "./Movie.module.css";

export function Movie({
  title,
  director,
  released,
  isFavorite,
  onToggleFavorite,
  onDelete,
}) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{director}</p>
      <p>{released}</p>
      <div className={styles["button-group"]}>
        <button
          className={styles.button}
          style={{
            backgroundColor: isFavorite ? "green" : undefined,
            color: isFavorite ? "white" : undefined,
          }}
          onClick={onToggleFavorite}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
        <button className={styles.button} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
