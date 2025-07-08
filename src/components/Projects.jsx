import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "Smart Task Manager",
      description: "A productivity dashboard with custom React hooks and reusable components."
    },
    {
      name: "BioSeq Analyzer",
      description: "DNA/RNA sequence analysis using LCS algorithm and real-time queue simulation."
    },
    {
      name: "Book Reservation App",
      description: "Client-side book reservation system using JavaScript, HTML, and Bootstrap."
    }
  ];

  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, idx) => (
          <li key={idx}>
            <strong>{project.name}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
