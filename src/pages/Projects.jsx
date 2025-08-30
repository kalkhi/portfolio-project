import React from "react";
import "../App.css";
import { motion } from "framer-motion"; // 👈 animation library

const Projects = () => {
  const projectData = [
    {
      title: "Weather App",
      desc: "A simple weather monitoring web app that shows real-time weather updates using a clean UI.",
      img: `${process.env.PUBLIC_URL}/monitor.avif`,
      link: "https://kalkhi.github.io/weather-monitoring-/",
    },
    {
      title: "Chatbot",
      desc: "A simple AI chatbot UI integrated with emoji support and custom avatar for real-time interactions.",
      img: `${process.env.PUBLIC_URL}/chatbot.jpg`,
      link: "https://kalkhi.github.io/chatbot/",
    },
    {
      title: "Application Form",
      desc: "A responsive HTML application form with proper layout and field validation.",
      img: `${process.env.PUBLIC_URL}/application.jpeg`,
      link: "https://kalkhi.github.io/application-form-html/",
    },
    {
      title: "Feedback Form",
      desc: "A user-friendly feedback form built using HTML and CSS for collecting user input.",
      img: `${process.env.PUBLIC_URL}/form.png`,
      link: "https://kalkhi.github.io/feedback-form/",
    },
    {
      title: "Calculator App",
      desc: "A basic calculator web app created with HTML and CSS, supporting arithmetic operations.",
      img: `${process.env.PUBLIC_URL}/calculator.avif`,
      link: "https://kalkhi.github.io/calculatorjs/",
    },
  ];

  // Styles
  const containerStyle = {
  backgroundImage: `linear-gradient(rgba(0, 13, 50, 0.7), rgba(0, 13, 50, 0.7)), url(${process.env.PUBLIC_URL}/project.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  padding: "5rem 2rem",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "50px",
};


 const titleStyle = {
  fontSize: "2.8rem",
  fontWeight: "bold",
  background: "linear-gradient(45deg, #6dd5fa, #00c6ff, #7ee8fa)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center",
};


  const projectGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    width: "100%",
    maxWidth: "1200px",
  };

  const cardStyle = {
    background: "rgba(0,0,0,0.55)",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
    transition: "all 0.4s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "#fff",
  };

  const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderBottom: "2px solid #00bcd4",
    transition: "transform 0.3s ease",
  };

  const infoStyle = {
    padding: "1rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  };

  const buttonStyle = {
    alignSelf: "flex-start",
    padding: "8px 16px",
    borderRadius: "12px",
    background: "linear-gradient(45deg, #00bcd4, #0097a7)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
    boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
    transition: "all 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <motion.h2
        style={titleStyle}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects 🚀
      </motion.h2>

      <div style={projectGridStyle}>
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            style={cardStyle}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.8)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={project.img}
              alt={project.title}
              style={imgStyle}
            />
            <div style={infoStyle}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={buttonStyle}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "scale(1.1) translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "scale(1) translateY(0)")
                }
              >
                Live Preview
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;










