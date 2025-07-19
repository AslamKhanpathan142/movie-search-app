import React from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ searchResults, searchTerm, handleAddFavorite }) => {
  return (
    <>
      <h1 className={styles.heading}>Search Results : {searchTerm}</h1>
      <p className={styles.subheading}>Movies and TV shows</p>

      {searchResults.length === 0 && (
        <div className={styles.noResults}>
          <h2>No results found for "{searchTerm}"</h2>
          <p>Please try a different search term.</p>
        </div>
      )}

      <div className={styles.container}>
        {Array.isArray(searchResults) &&
          searchResults.map((movie) => (
    
            <div className={styles.card} key={movie.imdbID}>
              <img
                src={movie.Poster}
                alt="Movie Poster"
                className={styles.image}
                width={320}
                height={440}
              />
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <h2 className={styles.title}>
                  {movie.Title}
                </h2>
                <p className={styles.subtitle}>
                  Not Rated • Drama, Comedy • {movie.Type} : ({movie.Year})
                </p>
                <button aria-label="Explore Now" className={styles.button}
                onClick={(evt) => handleAddFavorite(evt, movie)}>
                  Add to Favorites
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MovieCard;
