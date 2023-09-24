import React from 'react'
import './projects.css'


const Projects= () => {
    const projects = [
        {
          title: 'Budget Buddy',
          description: 'Mobile app that helps you manage your budget and expenses. Built with Flutter.',
          image: 'https://www.banking24seven.com/wp-content/uploads/2018/12/BANKING-featured-image-of-finance-budget.jpg',
          link: 'https://github.com/aryanPokharel/BudgetBuddy.git',
        },
        {
          title: 'Freelance Nepal',
          description: 'Web app that helps you find freelance jobs in Nepal. Built with React.',
          image: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png',
          link: 'https://github.com/softwarica-github/web-api-batch-28---front-end-aryanPokharel.git',
        },
        {
          title: 'Smart Gate with NodeMCU',
          description: 'IoT project that uses NodeMCU to automate the opening and closing of a gate.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/NodeMCU_DEVKIT_1.0.jpg',
          link: 'https://youtu.be/OBdi1tBsvJY',
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