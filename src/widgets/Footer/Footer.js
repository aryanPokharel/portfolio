import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-light text-center text-white">
  {/* Grid container */}
  <div className="container p-4 pb-0">
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <Link
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#3b5998" }}
        to="https://www.facebook.com/aryan.pokharel.167"
        target='new'
        role="button"
      >
        <i className="fab fa-facebook-f" />
      </Link>
      {/* Twitter */}
      <Link
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#55acee" }}
        to="https://twitter.com/AryanPokharel5"
        target='new'
        role="button"
      >
        <i className="fab fa-twitter" />
      </Link>
     
      {/* Instagram */}
      <Link
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#dd4b39" }}
        to="https://www.instagram.com/aryan_nep/"
        target='new'
        role="button"
      >
        <i className="fab fa-instagram" />
      </Link>
      {/* Linkedin */}
      <Link
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#0082ca" }}
        to="https://www.linkedin.com/in/aryan-pokharel-0766401a6/"
        target='new'
        role="button"
      >
        <i className="fab fa-linkedin-in" />
      </Link>
      {/* Github */}
      <Link
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#333333" }}
        to="https://github.com/aryanPokharel"
        target='new'
        role="button"
      >
        <i className="fab fa-github" />
      </Link>
    </section>

  </div>

  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
    © 2023 Copyright : 

       Aryan Pokharel

  </div>

</footer>

  )
}

export default Footer