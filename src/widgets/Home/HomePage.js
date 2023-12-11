import React from 'react';
import LandingPage from '../../components/Landing';

const HomePage = () => {
  return (
    <div>
      {/* Display Home Page text at the center of the screen */}
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{
            height: "100vh",
          }}
        ></div>
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default HomePage;
