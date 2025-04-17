import React from "react";
import "../App.css";

const About = () => {
  return (
    <div className="about" style={{ backgroundColor: "#f0f4f8", padding: "50px 0" }}>
      {/* Education Section */}
      <section className="section fade-in" style={{ backgroundColor: "#f0f8ff", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
        <h2 style={{ color: "#2c3e50", textAlign: "center" }}>Education</h2>
        <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "15px" }}>
          <h4 style={{ color: "#3498db" }}>B.Tech (2020–2024)</h4>
          <p>Gitam University – ECE – CGPA: 7.3</p>
        </div>
        <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "15px" }}>
          <h4 style={{ color: "#2ecc71" }}>Intermediate (2018–2020)</h4>
          <p>Sri Chaitanya Junior College – MPC – CGPA: 9.4</p>
        </div>
        <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "15px" }}>
          <h4 style={{ color: "#e67e22" }}>Schooling (2018)</h4>
          <p>Sri Chaitanya Children’s Academy – SSC – CGPA: 8.5</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section fade-in" style={{ backgroundColor: "#ecf0f1", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
        <h2 style={{ color: "#2c3e50", textAlign: "center" }}>Skills</h2>
        <div className="skills-grid">
          <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "15px" }}>
            <h4 style={{ color: "#9b59b6" }}>Programming Languages</h4>
            <p>Java | Python</p>
          </div>
          <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "15px" }}>
            <h4 style={{ color: "#f39c12" }}>Web Technologies</h4>
            <p>React JS | CSS | JavaScript | HTML</p>
          </div>
          <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "15px" }}>
            <h4 style={{ color: "#e74c3c" }}>Tools / Platforms</h4>
            <p>GitHub | VS Code | MATLAB | MS Office</p>
          </div>
          <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "15px" }}>
            <h4 style={{ color: "#3498db" }}>Database</h4>
            <p>SQL</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section fade-in" style={{ backgroundColor: "#f9f9f9", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
        <h2 style={{ color: "#2c3e50", textAlign: "center" }}>Projects</h2>
        <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "15px" }}>
          <h4 style={{ color: "#2980b9" }}>Railway Track Crack Detection Vehicle</h4>
          <p><i>(IoT and Image Processing)</i></p>
          <ul>
            <li>Designed a cart that detects cracks on railway tracks</li>
            <li>Used LED–LDR system + Image processing for accuracy</li>
          </ul>
        </div>
        <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "15px" }}>
          <h4 style={{ color: "#e67e22" }}>Line Follower Robot</h4>
          <p><i>(Tetrix Prizm)</i></p>
          <ul>
            <li>Used IR sensor to follow a predefined path</li>
          </ul>
        </div>
        <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "15px" }}>
          <h4 style={{ color: "#8e44ad" }}>Weather Monitoring System</h4>
          <p><i>(Arduino UNO + IDE)</i></p>
          <ul>
            <li>Monitors temperature, pressure, humidity & rain</li>
          </ul>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section fade-in" style={{ backgroundColor: "#d5dbdb", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
        <h2 style={{ color: "#2c3e50", textAlign: "center" }}>Certifications</h2>
        <ul>
          <li><a href="/eduskills.pdf" target="_blank" style={{ color: "#2980b9", textDecoration: "none" }}>Embedded Developer Virtual Internship – AICTE EduSkills</a></li>
          <li><a href="https://drive.google.com/file/d/1iMUoQcNAOYVOTomwoSPsgjHkCHkVXqV1/view" target="_blank" style={{ color: "#2980b9", textDecoration: "none" }}>Web Development – Oyasis Infobite</a></li>
          <li><a href="https://drive.google.com/file/d/1GGapljE1mXJ6oZPsGqgz4TY2dI_G4DM0/view" target="_blank" style={{ color: "#2980b9", textDecoration: "none" }}>Java Programming – Internpe</a></li>
          <li style={{ color: "#2980b9", textDecoration: "none" }}>
  Java FullStack Development - Besant Technologies
</li>


        </ul>
      </section>

      {/* Honors & Awards Section */}
      <section className="section fade-in" style={{ backgroundColor: "#f7f9f9", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
        <h2 style={{ color: "#2c3e50", textAlign: "center" }}>Honors & Awards</h2>
        <ul>
          <li>Runner-up in IoT Workshop at Gitam University</li>
        </ul>
      </section>
    </div>
  );
};

export default About;







