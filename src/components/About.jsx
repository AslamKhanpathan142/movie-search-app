import React from "react";
import styles from "./About.module.css";
import image from "../assets/about.jpg"; 

const About = () => {
  return (
    <>
      <div className={styles.aboutWrapper}>
        <div className={styles.heroSection}>
          <img src={image} alt="Cinema" className={styles.heroImage} />
          <div className={styles.heroOverlay}>
            <h1 className={styles.heroTitle}>
              🎬 Welcome to{" "}
              <span className={styles.logoText}>
                Cine<span className={styles.nextText}>Search</span>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className={styles.aboutContainer}>
        <h1 className={styles.heading}>
          🎥 About{" "}
          <span className={styles.logoText}>
            Cine<span className={styles.nextText}>Search</span>
          </span>
        </h1>
        <p className={styles.text}>
          Welcome to <strong>CineSearch</strong> – your personal movie explorer!
          This app is designed to help users search for movies, get detailed
          information, and save their favorites with ease.
        </p>
        <p className={styles.text}>
          CineSearch uses the <strong>OMDb API</strong> to fetch real-time movie
          data including posters, titles, release years, genres, and more.
          Whether you're a film enthusiast or just bored and looking for
          something to watch, CineSearch makes it fun and fast.
        </p>
        <p className={styles.text1}>
          💡 <strong>Key Features:</strong>
          <ul className={styles.list}>
            <li>🔍 Real-time movie search with poster preview</li>
            <li>⭐ Save favorite movies to your collection</li>
            <li>📝 Detailed movie info including plot, ratings, and actors</li>
            <li>📱 Responsive design for mobile and desktop</li>
            <li>🎯 Built with React JS and Font Awesome</li>
          </ul>
        </p>
        <p className={styles.text}>
          This project was created as part of a React JS internship at{" "}
          <strong>CODTECH IT Solutions</strong>. It’s a learning-based project
          focused on real-time API integration and front-end component
          structure.
        </p>
        <p className={styles.text}>
          Feel free to explore the app, and don’t forget to bookmark your
          favorite movies! 🎬
        </p>
      </div>
    </>
  );
};

export default About;
