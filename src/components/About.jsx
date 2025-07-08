import React, { useState } from 'react';
import styles from './About.module.css';

const About = ({ title, description, skills }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const shortDescription = description.slice(0, 100) + '...';

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.description}>
          {showFullDescription ? description : shortDescription}
          <button 
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? 'Show Less' : 'Read More'}
          </button>
        </div>

        {skills.length > 0 && (
          <div className={styles.skillsSection}>
            <h3>Skills</h3>
            <ul className={styles.skillsList}>
              {skills.map((skill, index) => (
                <li key={index} className={styles.skillItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;