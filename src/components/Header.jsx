import React from 'react';
import styles from './Header.module.css';

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  return (
    <header className={`${styles.header} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <div className={styles.content}>
        <h1>Jawad Ahmed Mohammed</h1>
        <p>Full-Stack Developer</p>
      </div>
      <button 
        className={styles.toggleButton}
        onClick={onToggleDarkMode}
      >
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </header>
  );
};

export default Header;