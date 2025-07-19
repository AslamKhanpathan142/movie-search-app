import React from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./Favorite.module.css";

function Favorite() {
  const { addFavorite,handleRemoveFavorite } = useOutletContext();
  console.log(addFavorite);
  return (
    <>
      <h1 className={styles.heading}>🎬 Your Favorite Movies</h1>
      <p className={styles.description}>
        Here are the movies you’ve added to your favorites. This list helps you
        quickly access the films you love the most. You can remove a movie from
        your favorites anytime.
      </p>

      { addFavorite.length === 0 && (
        <div className={styles.emptyContainer}>
          <h2 className={styles.emptyMessage}>Your favorites list is empty!</h2>
          <p className={styles.emptyDescription}>
            Start adding movies to your favorites to see them here.
          </p>
        </div>
      )}

      <div className={styles.container}>
        {addFavorite.map((movie) => (
          <div className={styles.card} key={movie.imdbID}>
            <div className={styles.imageContainer}>
              <img
                src={movie.Poster}
                alt="How to Please a Woman"
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>{movie.Title}</h2>
              <p className={styles.details}>
                Not Rated • Drama, Comedy • {movie.Type} : ({movie.Year})
              </p>
              <button className={styles.button} onClick={(evt) => handleRemoveFavorite(evt,movie)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Favorite;
