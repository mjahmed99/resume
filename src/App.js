import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const aboutData = {
    title: "About Me",
    description: `I'm a passionate software developer currently pursuing my Master's in Computer Software 
    and Database Development at Loyalist College. With a keen interest in web technologies and modern 
    development practices, I strive to create efficient and user-friendly applications. My journey in 
    software development has equipped me with both technical expertise and problem-solving skills.`,
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "Node.js",
      "SQL",
      "MongoDB",
      "HTML5/CSS3",
      "Git & GitHub",
      "Responsive Design",
      "RESTful APIs"
    ]
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header 
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
      <main>
        <About {...aboutData} isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
    </div>
  );
};

export default App;