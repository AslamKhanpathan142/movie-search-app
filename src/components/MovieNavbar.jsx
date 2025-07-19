import React, { useState } from "react";
import styles from "./MovieNavbar.module.css";
import { Link } from "react-router-dom";

const MovieNavbar = ({
  handleSearchSubmit,
  searchTerm,
  handleSearchChange,
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={styles.navbar} role="banner" aria-label="Primary">
        <div className={styles.logo} tabIndex="0" aria-label="Movies Logo">
          <span className={styles.logoText}>
            Cine<span className={styles.nextText}>Search</span>
          </span>
        </div>
        <nav role="navigation" aria-label="Main navigation">
          <div
            className={styles.menuIcon}
            role="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleMenu();
            }}
            tabIndex="0"
          >
            {
              isMobileMenuOpen
                ? "\u2715" /* X icon */
                : "\u2630" /* hamburger icon */
            }
          </div>
          <ul
            className={`${
              isMobileMenuOpen ? styles.navListMobileVisible : ""
            } ${isMobileMenuOpen ? styles.navListMobile : ""}`}
          >
            <li className={isMobileMenuOpen ? styles.liMobile : ""}>
              <Link
                to="/"
                tabIndex={isMobileMenuOpen ? "0" : "-1"}
                className={styles.a}
              >
                Home
              </Link>
            </li>
            <li className={isMobileMenuOpen ? styles.liMobile : ""}>
              <Link
                to="/Favorite"
                tabIndex={isMobileMenuOpen ? "0" : "-1"}
                className={styles.a}
              >
                Favorites
              </Link>
            </li>
            <li className={isMobileMenuOpen ? styles.liMobile : ""}>
              <Link
                to="/About"
                tabIndex={isMobileMenuOpen ? "0" : "-1"}
                className={styles.a}
              >
                About
              </Link>
            </li>
            <li className={isMobileMenuOpen ? styles.liMobile : ""}>
              <Link
                to="/Content"
                tabIndex={isMobileMenuOpen ? "0" : "-1"}
                className={styles.a}
              >
                Content
              </Link>
            </li>
            <li className={isMobileMenuOpen ? styles.liMobile : ""}>
              <form
                className={styles.searchForm}
                onSubmit={handleSearchSubmit}
                role="search"
                aria-label="Site search"
              >
                <input
                  type="search"
                  className={styles.searchInput}
                  placeholder="Search movies..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  aria-label="Search movies"
                  tabIndex={isMobileMenuOpen ? "0" : "-1"}
                />
                <button
                  type="submit"
                  className={styles.searchButton}
                  aria-label="Submit search"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.searchIcon}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14a7 7 0 0 1 0 14z"
                    />
                  </svg>
                </button>
              </form>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MovieNavbar;
