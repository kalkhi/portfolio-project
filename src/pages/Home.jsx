import React from "react";
import { Link } from "react-router-dom"; // Import Link for client-side routing
import "../App.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div
        className="home-hero fade-in"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/resume.jpeg"})`,
        }}
      >
        <div className="hero-content">
          <h1>Hi, I'm Vadla Deepika</h1>
          <p>A passionate Web Developer & ECE Graduate</p>
          <Link to="/about"> {/* Use Link for routing */}
            <button className="hero-btn">View My Resume</button>
          </Link>
        </div>
      </div>

      {/* Profile Section */}
      <div className="home-section fade-in">
        <div
          className="profile-image"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/deepika.jpeg"})`,
          }}
        ></div>
        <div className="intro-text">
          <h2>Welcome to My Portfolio</h2>
          <p>
            I'm an Electronics and Communication Engineering graduate from
            Gitam University with a strong passion for software development, web
            technologies, and data structures. Let's build something amazing
            together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;


