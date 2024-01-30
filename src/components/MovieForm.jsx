import { useState } from "react";
import styles from "./MovieForm.module.css";

export function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [released, setReleased] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onAddMovie({
          title,
          director,
          released,
        });
      }}
      className={styles.form}
    >
      <div className={styles["input-group"]}>
        <label htmlFor="title">Title</label>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
          name="title"
          id="title"
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="director">Director</label>
        <input
          value={director}
          onChange={(event) => {
            setDirector(event.target.value);
          }}
          type="text"
          name="director"
          id="director"
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="released">Released</label>
        <input
          value={released}
          onChange={(event) => {
            setReleased(event.target.value);
          }}
          type="text"
          name="released"
          id="released"
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
