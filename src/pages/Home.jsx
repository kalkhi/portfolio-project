import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div
        className="home-hero fade-in"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/intro.avif"})`,
        }}
      >
        <div className="hero-content">
          <h1>Hi, I'm Vadla Deepika</h1>
          <p>A passionate Web Developer & ECE Graduate</p>
          <Link to="/about">
            <button className="hero-btn">View My Resume</button>
          </Link>
        </div>
      </div>

      {/* Welcome Section */}
      <div
        className="home-section fade-in"
        style={{
    backgroundImage: `url(${process.env.PUBLIC_URL + "/dee.png"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "black",
  }}
      >
        <div
          className="profile-image"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/deepika.jpeg"})`,
          }}
        ></div>
        <div className="intro-text"
        style={{color:"black"}}>
          <h2>Welcome to My Portfolio</h2>
          <p>
            I'm an Electronics and Communication Engineering graduate from Gitam University
            with a strong passion for software development, web technologies, and data
            structures. Let's build something amazing together!
          </p>
        </div>
      </div>

      {/* About Summary Section */}
      <div
  className="home-section fade-in"
  style={{
    display: "flex",                // ✅ Required for flexDirection to work
    flexDirection: "column",
    color: "black",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/dee.png"})`,
    backgroundSize: "cover",        // ✅ Optional but improves background layout
    backgroundPosition: "center",   // ✅ Optional
    padding: "50px 20px",           // ✅ Optional for spacing
  }}
>
  {/* Your content goes here */}

        <h2>About Me</h2>
        <p style={{ maxWidth: "700px", textAlign: "center" }}>
          I enjoy creating interactive, user-friendly websites using modern web
          technologies. I'm constantly learning and growing, with a strong
          interest in frontend development, React, and building responsive
          designs. I'm also confident in Java, Python, and love solving logical
          problems!
        </p>
      </div>

      {/* About Page Component */}
      <About />

      {/* Projects Page Component */}
      <Projects />

      {/* Contact Section Component */}
      <Contact />
    </div>
  );
};

export default Home;


