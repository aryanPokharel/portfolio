import React from "react";
// we need to import the image from ../../media/homeBg.jpg as a variable named backgroundImage
import backgroundImage from "../../media/homeBg.png";

var backgroundImg = "url(" + backgroundImage + ")";

const HomePage = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: backgroundImg, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          color: "white",
        }}
      >
        <div>
          {/* Stylish Hero Component */}
          <h1 style={{ fontSize: "3em", fontWeight: "bold",  }}>
            Welcome
          </h1>
          <p style={{ fontSize: "1.5em", maxWidth: "600px" }}>
            Find out more about me by strolling around!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
