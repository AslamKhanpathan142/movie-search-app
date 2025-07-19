import React from "react";
import styles from "./Content.module.css";
import img1 from "../assets/search.png";
import img2 from "../assets/favourite.png";
import img3 from "../assets/details.png";
import img4 from "../assets/tech.png";
import img5 from "../assets/codtech.png";

const Content = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        📚{" "}
        <span className={styles.logoText}>
          Cine<span className={styles.nextText}>Search</span>
        </span>{" "}
        Features & Technology
      </h1>

      <section className={`${styles.section} ${styles.fadeIn}`}>
        <img src={img1} alt="Search" className={styles.image} />
        <div>
          <h2 className={styles.subheading}>🔍 Movie Search</h2>
          <p className={styles.text}>
            CineSearch allows users to search for movies and TV shows using the
            OMDb API. Simply enter a title, and the app fetches details like
            poster, year, and genre.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.slideUp}`}>
        <img src={img2} alt="Favorites" className={styles.image} />
        <div>
          <h2 className={styles.subheading}>⭐ Add to Favorites</h2>
          <p className={styles.text}>
            Save your favorite movies by clicking “Add.” All saved movies are
            listed in a separate page and stay even after refresh.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.fadeIn}`}>
        <img src={img3} alt="Details" className={styles.image} />
        <div>
          <h2 className={styles.subheading}>🎬 Movie Details</h2>
          <p className={styles.text}>
            Clicking the ➜ button leads to a dedicated page that shows full
            movie information like plot, cast, director, and rating.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.slideUp}`}>
        <img src={img4} alt="Tech Stack" className={styles.image} />
        <div>
          <h2 className={styles.subheading}>💻 Tech Stack</h2>
          <ul className={styles.list}>
            <li>⚛️ React JS with Router</li>
            <li>🎨 CSS Modules</li>
            <li>🎞️ OMDb API</li>
            <li>🌐 Font Awesome</li>
          </ul>
        </div>
      </section>

      <section className={`${styles.section} ${styles.fadeIn}`}>
        <img src={img5} alt="CODTECH" className={styles.image} />
        <div>
          <h2 className={styles.subheading}>🚀 Internship Project</h2>
          <p className={styles.text}>
            This project was built during an internship with CODTECH. It helped
            in learning real-world API integration, UI components, and
            responsive design.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Content;
