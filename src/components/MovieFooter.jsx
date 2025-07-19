import React from "react";
import styles from "./MovieFooter.module.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWordpress,
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const MovieFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <h3 className={styles.heading}>DevCineSearch</h3>
            <ul className={styles.list}>
              <Link to='/' className={styles.listItem}>Homepage</Link>
              <Link to='/Favorite' className={styles.listItem}>Favorite</Link>
              <Link to='/Content' className={styles.listItem}>Content</Link>
            </ul>
          </div>
          <div className={styles.col}>
            <h3 className={styles.heading}>Get Support</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Support Forum</li>
              <li className={styles.listItem}>Documentation</li>
              <li className={styles.listItem}>FAQ</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3 className={styles.heading}>Resources</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Free Ebooks</li>
              <li className={styles.listItem}>Download</li>
              <li className={styles.listItem}>CineSearch Blog</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3 className={styles.heading}>CineSearch</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Hosting Plans</li>
              <Link to='/Content' className={styles.listItem}>Features</Link>
              <Link to='/About' className={styles.listItem}>About CineSearch</Link>
            </ul>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.leftBottom}>
            <div>
              <span className={styles.logoText}>
                Cine<span className={styles.nextText}>Search</span>
              </span>
            </div>
            <p className={styles.legalText}>
              © 2025 CineSearch Inc. All rights reserved.
            </p>
            <p className={styles.legalText}>Legal information</p>
            <p className={styles.legalText}>
              CineSearch and WordPress® are registered trademarks.
            </p>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="WordPress" className={styles.socialLink}>
                <FontAwesomeIcon icon={faWordpress} size="lg" />
              </a>
              <a href="#" aria-label="Facebook" className={styles.socialLink}>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="lg"
                  style={{ color: "red" }}
                />
              </a>
              <a href="#" aria-label="Twitter" className={styles.socialLink}>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialLink}>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" aria-label="YouTube" className={styles.socialLink}>
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </div>
          <button
            aria-label="Select language"
            className={styles.langButton}
            type="button"
          >
            <FontAwesomeIcon icon={faGlobe} /> English
          </button>
        </div>
      </div>
    </footer>
  );
};

export default MovieFooter;
