import React from 'react'

import './about.css'
import { Link } from 'react-router-dom'


function About() {
  return (
    <div className="about-me">
      <div className="container">
        {/* About Me Card */}
        <section className="card mb-4">
          <div className="card-body">
            <h1 className="card-title">About Me</h1>
 
            <p className="card-text">
              Hi, I'm Aryan Pokharel, a freelance developer, mobile & web, based in Kathmandu.
              Here, you can learn a bit about me, my background, and my interests.
            </p>
          </div>
        </section>

        {/* Background Section */}
        <section className="row mb-4">
          <div className="col-md-6">
            <h2 className="mb-3">Background</h2>
            <p>
              I have a background in Computer Science, and I'm currently working as a
              freelancer. I have 3+ years of experience in mobile and web development,
              and I'm a passionate learner.
            </p>
          </div>
          
          {/* Skills Section */}
          <div className="col-md-6">
            <h2 className="mb-3">Skills</h2>
            <ul className="list-unstyled">
              <li>Web Development With MERN</li>
              <li>Mobile Development With Flutter & React Native</li>
              <li>Robotics & Micro-processors</li>
              {/* Add more skills */}
            </ul>
          </div>
        </section>

        {/* Interests Card */}
        <section className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">Interests</h2>
            <p className="card-text">
              Problem-solving is what sparks my interest in building viable software
              solutions for my clients.
            </p>
          </div>
        </section>

        
      </div>
    </div>
  )
}

export default About