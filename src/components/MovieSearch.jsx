import React from "react";
import styles from "./MovieSearch.module.css";
import {Link} from "react-router-dom";

const MovieSearch = ({
  handleSearchSubmit,
  searchTerm,
  handleSearchChange,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.logoText}>
          Cine<span className={styles.nextText}>Search</span>
        </span>
      </h1>
      <p className={styles.subtitle}>
        Kindly do a movie or television show search...
      </p>

      <form
        className={styles.searchForm}
        onSubmit={handleSearchSubmit}
        role="search"
        aria-label="Site search"
      >
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>
      <p className={styles.footerText}>
        Watching movies online for free is just better with{" "}
        <span>
          Cine<span style={{color: "#e50914"}}>Search</span>
        </span>
        !
      </p>
      <Link to="/Favorite" className={styles.fullSiteButton}>Show Favorite</Link>
    </div>
  );
};

export default MovieSearch;
