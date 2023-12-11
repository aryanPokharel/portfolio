import React, { useState } from "react";
// import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("N/A");
  const [email, setEmail] = useState("N/A");
  const [message, setMessage] = useState("N/A");
  return (
    <div>
      <section className="card mb-4">
        <div className="card-body">
          <div style={{height : "10vh"}} ></div>
          <h2 className="card-title">Contact</h2>
          <p className="card-text">
            Feel free to reach out to me via email at{" "}
            <a href="mailto:aryanpokharel417@gmail.com">
              aryanpokharel417@gmail.com
            </a>
            .
            <br />
            You can also connect with me on LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/aryan-pokharel-0766401a6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aryan-pokharel
            </a>
            .
          </p>
        </div>
      </section>
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="3"
                    required
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => {}}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
