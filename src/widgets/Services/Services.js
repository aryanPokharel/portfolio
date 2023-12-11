import React from "react";
import "./services.css";
import { Link } from "react-router-dom";

function Services() {
  const servicesData = [
    {
      id: "mobile-development",
      title: "Mobile Application Development",
      description:
        "We specialize in creating innovative and user-friendly mobile applications for iOS and Android platforms.",
      icon: "📱",
    },
    {
      id: "web-development",
      title: "Web Development",
      description:
        "Our expert team of web developers crafts responsive and feature-rich websites tailored to your business needs.",
      icon: "🌐",
    },
    {
      id: "software-development",
      title: "Software Development",
      description:
        "From custom software solutions to enterprise applications, we deliver high-quality software to drive your business forward.",
      icon: "💻",
    },
    {
      id: "robotics",
      title: "Robotics",
      description:
        "Explore the possibilities of robotics with our cutting-edge solutions, pushing the boundaries of automation and innovation.",
      icon: "🤖",
    },
    {
      id: "automation-services",
      title: "Automation Services",
      description:
        "Optimize your business processes with our automation services, improving efficiency and reducing manual workload.",
      icon: "🔄",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Our digital marketing services help you grow your business by reaching your target audience and converting leads.",
      icon: "📈",
    },
  ];

  return (
    <div className="services-container">
      <section className="py-5">
        <div className="container">
          <div style={{ height: "10vh" }}></div>
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h2 className="display-4 fw-bold text-primary">Our Services</h2>
            </div>
            <div className="col-md-6 text-md-end">
              <Link to="/contact">
                <button
                  className="btn btn-primary"
                  style={{ marginTop: "auto" }}
                >
                  Explore
                </button>
              </Link>
            </div>
          </div>
          <div className="row">
            {servicesData.map((service) => (
              <div key={service.id} className="col-md-4 mb-4">
                <div id={service.id} className="card">
                  <div className="card-body">
                    <div className="service-icon">{service.icon}</div>
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
