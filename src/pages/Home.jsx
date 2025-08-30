import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { motion } from "framer-motion";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Common Styles
  const sectionStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    gap: isMobile ? "20px" : "50px",
    padding: isMobile ? "30px 15px" : "60px 200px",
    textAlign: isMobile ? "center" : "left",
    color: "#fff",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/dee.png"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
    backdropFilter: "blur(5px)",
    position: "relative",
    overflow: "hidden",
    margin: "50px auto",
  };

  const profileStyle = {
    width: isMobile ? "150px" : "220px",
    height: isMobile ? "150px" : "220px",
    borderRadius: "50%",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/deepika.jpeg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "4px solid #00b4d8",
    boxShadow: "0 10px 25px rgba(0,0,0,0.7)",
    flexShrink: 0,
    transition: "all 0.4s ease",
    cursor: "pointer",
  };

  const introTextStyle = {
    maxWidth: "520px",
    background: "rgba(0,0,0,0.55)",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.7)",
    transition: "all 0.4s ease",
  };

  const h2Style = {
    fontSize: isMobile ? "1.9rem" : "2.5rem",
    marginBottom: "20px",
    background: "linear-gradient(45deg, #00bcd4, #0097a7, #80deea)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
    
  };

  const pStyle = {
    fontSize: isMobile ? "14px" : "16px",
    lineHeight: 1.8,
    color: "#f5f5f5ff",
  };

  // About Section Styles
  const aboutSectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
    padding: isMobile ? "40px 20px" : "60px 150px",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/dee.png"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
    backdropFilter: "blur(5px)",
    margin: "50px auto",
  };

  const aboutTitleStyle = {
    fontSize: isMobile ? "1.9rem" : "2.5rem",
    marginBottom: "25px",
    background: "linear-gradient(45deg, #00bcd4, #0097a7, #80deea)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
    
  };

  const aboutTextStyle = {
    fontSize: isMobile ? "14px" : "16px",
    lineHeight: 1.8,
    maxWidth: "800px",
    color: "#070707ff",
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <motion.div
        className="home-hero fade-in"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/intro.avif"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="hero-content"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Hi, I'm Vadla Deepika</h1>
          <p>A passionate Fullstack Developer & ECE Graduate</p>
          <Link to="/about">
            <button className="hero-btn">View My Resume</button>
          </Link>
        </motion.div>

        <motion.div
          className="hero-project-btn"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link to="/projects" className="no-underline">
            <button className="projects-btn">Projects</button>
          </Link>
          <Link to="/contact" className="no-underline">
            <button className="projects-btn">Contact</button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Profile + Intro Section */}
      <motion.div
        className="home-section fade-in"
        style={sectionStyle}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="profile-image"
          style={profileStyle}
          whileHover={{ scale: 1.08, rotate: 2 }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.div
          className="intro-text"
          style={introTextStyle}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 style={h2Style}>Welcome to My Portfolio</h2>
          <p style={pStyle}>
            I'm an Electronics and Communication Engineering graduate from
            Gitam University with a strong passion for Frontend & Full-Stack
            Development driven by curiosity, creativity, and code. From crafting
            pixel-perfect UIs to architecting robust backend systems, I bring
            ideas to life through technology. Let's build something amazing
            together!
          </p>
        </motion.div>
      </motion.div>

      {/* Neat About Section */}
      <motion.div
        style={aboutSectionStyle}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 style={aboutTitleStyle}>About Me</h2>
        <p style={aboutTextStyle}>
          I enjoy creating interactive, user-friendly websites using modern web
          technologies. I'm constantly learning and growing, with a strong
          interest in frontend development, React, and building responsive
          designs. I'm also confident in Java, Python, and love solving logical
          problems. I enjoy designing beautiful UI/UX layouts and bringing
          creative ideas to life through code. My goal is to make the web a more
          interactive and engaging experience for everyone.
        </p>
      </motion.div>

      {/* Other sections */}
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;




