import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
 
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navbar brand */}
        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
        <img
  src="https://media.licdn.com/dms/image/D5603AQFja0ZY7fn1fQ/profile-displayphoto-shrink_800_800/0/1672651321054?e=2147483647&v=beta&t=nS6sCEJNHtZCE0F2ghOiy8-WOUK9ULecAgWaqnV7_Fw"
  height={50}
  alt="MDB Logo"
  loading="lazy"
  style={{ borderRadius: "50%" }}
/>

        </Link>
 
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Me
            </Link>
          </li>
        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/* Right elements */}
      <div className="d-flex align-items-center">
        {/* Icon */}
        <Link className="text-reset me-3" to="/contact">
        <i class="fa-solid fa-message" />
        </Link>
       
       
      </div>
      {/* Right elements */}
    </div>
    {/* Container wrapper */}
  </nav>

  )
}

export default Navbar