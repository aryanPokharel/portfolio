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
          backgroundImage: backgroundImg, // Use backticks for dynamic URLs
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          color: "white",
        }}
      >
        <div>
          {/* Stylish Hero Component */}
          <h1 style={{ fontSize: "3em", fontWeight: "bold" }}>
            Welcome to Our Website
          </h1>
          <p style={{ fontSize: "1.5em", maxWidth: "600px" }}>
            Explore our amazing products and discover the freshness of
            peppermint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
