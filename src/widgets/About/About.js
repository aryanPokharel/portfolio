
import '../About/About.css'
import project1 from "../../media/budgetBuddy.png";
import project2 from "../../media/budgetBuddy.png";
import project3 from "../../media/budgetBuddy.png";
import project4 from "../../media/budgetBuddy.png";
import project5 from "../../media/budgetBuddy.png";

function About() {
  
  const handleDownload = () => {
    const apkUrl = process.env.PUBLIC_URL + "../../files/budgetBuddy.apk";
    const link = document.createElement("a");
    link.href = apkUrl;
    link.download = "budgetBuddy.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-us-container">
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2 className="display-4 fw-bold text-primary mb-4">My Story</h2>
              <p className="lead text-muted">
                Hi, I'm Aryan Pokharel, a freelance developer, mobile & web,
                based in Kathmandu. Here, you can learn a bit about me, my
                background, and my interests.
              </p>
            </div>
            <div className="col-md-6 offset-md-1">
              <p className="lead text-muted">
                Background I have a background in Computer Science, and I'm
                currently working as a freelancer. I have 3+ years of experience
                in mobile and web development, and I'm a passionate learner.
              </p>
              <p className="lead text-muted">
                Skills Web Development With MERN Mobile Development With Flutter
                & React Native Robotics & Micro-processors
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="team">
        <div className="container">
          <h2 className="display-4 fw-bold text-primary mb-4">
            Check Out My Projects
          </h2>
          <div className="row row-cols-1 row-cols-md-3">
            {projects.map((project, index) => (
              <div key={index} className="col mb-4">
                <div className="card">
                  <div className="image-container">
                    <img
                      src={project.image}
                      className="card-img-top project-image"
                      alt={`Team project ${index + 1}`}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      {project.name}{"   "}
                      {project.name === "Budget Buddy" && (
                        <i
                          className="fas fa-download"
                          onClick={handleDownload}
                        />
                      )}
                    </h5>

                    <p className="card-text">{project.title}</p>
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

const projects = [
  { name: "Budget Buddy", title: "Finance App", image: project1 },

  { name: "Freelance Nepal", title: "Freelancing App", image: project2 },
  { name: "Smart Door", title: "IoT Smart Gate", image: project3 },
  { name: "Freelancin Website", title: "Web Interface", image: project4 },
  {
    name: "Sipalu",
    title: "Workforce Hiring App",
    image: project5,
  },
];

export default About;
