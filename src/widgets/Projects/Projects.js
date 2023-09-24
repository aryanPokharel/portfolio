import React from 'react'
import './projects.css'

const Projects= () => {
    const projects = [
        {
          title: 'Project 1',
          description: 'Description of Project 1.',
          image: 'project1.jpg',
          link: 'https://project1-link.com',
        },
        {
          title: 'Project 2',
          description: 'Description of Project 2.',
          image: 'project2.jpg',
          link: 'https://project2-link.com',
        },
        {
          title: 'Project 3',
          description: 'Description of Project 3.',
          image: 'project3.jpg',
          link: 'https://project3-link.com',
        },
      ];
  return (
    <div className="projects">
    <h1>My Projects</h1>
    <div className="project-list">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Projects