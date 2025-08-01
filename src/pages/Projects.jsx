import React from "react";
import "../App.css";

const Projects = () => {
  return (
    <div
       style={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/project.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    paddingTop: "100px",  // 👈 Add this
    padding: "2rem",
    position: "relative", // important to layer z-index
    zIndex: 0,
  }}
    >
      <h2 className="projects-title">My Projects</h2>

      <div className="project-container">
        {/* Weather App */}
        <div className="project-card-single">
          <img
            src={`${process.env.PUBLIC_URL}/monitor.avif`}
            alt="Weather App"
            className="project-thumb"
          />
          <div className="project-info">
            <h3>Weather App</h3>
            <p>A simple weather monitoring web app that shows real-time weather updates using a clean UI.</p>
            <a
              href="https://kalkhi.github.io/weather-monitoring-/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-preview-btn"
            >
              Live Preview
            </a>
          </div>
        </div>

        {/* Chatbot */}
        <div className="project-card-single">
          <img
            src={`${process.env.PUBLIC_URL}/chatbot.jpg`}
            alt="Chatbot"
            className="project-thumb"
          />
          <div className="project-info">
            <h3>Chatbot</h3>
            <p>A simple AI chatbot UI integrated with emoji support and custom avatar for real-time interactions.</p>
            <a
              href="https://kalkhi.github.io/chatbot/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-preview-btn"
            >
              Live Preview
            </a>
          </div>
        </div>

        {/* Application Form */}
        <div className="project-card-single">
          <img
            src={`${process.env.PUBLIC_URL}/application.jpeg`}
            alt="Application Form"
            className="project-thumb"
          />
          <div className="project-info">
            <h3>Application Form</h3>
            <p>A responsive HTML application form with proper layout and field validation.</p>
            <a
              href="https://kalkhi.github.io/application-form-html/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-preview-btn"
            >
              Live Preview
            </a>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="project-card-single">
          <img
            src={`${process.env.PUBLIC_URL}/form.png`}
            alt="Feedback Form"
            className="project-thumb"
          />
          <div className="project-info">
            <h3>Feedback Form</h3>
            <p>A user-friendly feedback form built using HTML and CSS for collecting user input.</p>
            <a
              href="https://kalkhi.github.io/feedback-form/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-preview-btn"
            >
              Live Preview
            </a>
          </div>
        </div>

        {/* Calculator App */}
        <div className="project-card-single">
          <img
            src={`${process.env.PUBLIC_URL}/calculator.avif`}
            alt="Calculator App"
            className="project-thumb"
          />
          <div className="project-info">
            <h3>Calculator App</h3>
            <p>A basic calculator web app created with HTML and CSS, supporting arithmetic operations.</p>
            <a
              href="https://kalkhi.github.io/calculatorjs/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-preview-btn"
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;







