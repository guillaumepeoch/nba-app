import React from 'react';
import { Link } from 'react-router-dom';
// Get the current year
import { CURRENT_YEAR } from '../../config.js';
// CSS
import styles from './footer.css';

const Footer = function(){
  return(
    <footer className={styles.footer}>
      <Link to="/" className={styles.logo}>
        <img alt="nba logo" src="/images/nba_logo.png"/>
      </Link>
      <div className={styles.right}>
        @NBA {CURRENT_YEAR} All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
