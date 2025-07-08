import React from 'react';

const Skills = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "Express", "SQL", "Java", "HTML", "CSS", "Python", "Git"
  ];

  return (
    <section>
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
