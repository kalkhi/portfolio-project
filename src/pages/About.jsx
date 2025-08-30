import React from "react";
import { motion } from "framer-motion";
import "../App.css";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const sectionStyle = {
  backgroundColor: "#001d3d",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6)",
  marginBottom: "20px",
};

const cardStyle = {
  backgroundColor: "#003566",
  padding: "15px",
  borderRadius: "8px",
  marginBottom: "15px",
};

const About = () => {
  return (
    <motion.div
      className="about"
      style={{ backgroundColor: "#000814", padding: "50px 0" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Education Section */}
      <motion.section className="section" variants={fadeUp} style={sectionStyle}>
        <motion.h2
          style={{ color: "#00b4d8", textAlign: "center" }}
          variants={fadeUp}
        >
          Education
        </motion.h2>
        <motion.div variants={staggerChildren}>
          <motion.div className="card" variants={fadeLeft} style={cardStyle}>
            <h4 style={{ color: "#a8dee9ff" }}>B.Tech (2020–2024)</h4>
            <p style={{ color: "white" }}>
              Gitam University – ECE – CGPA: 7.3
            </p>
          </motion.div>
          <motion.div className="card" variants={fadeRight} style={cardStyle}>
            <h4 style={{ color: "#a8dee9ff" }}>Intermediate (2018–2020)</h4>
            <p style={{ color: "#e0e0e0" }}>
              Sri Chaitanya Junior College – MPC – CGPA: 9.4
            </p>
          </motion.div>
          <motion.div className="card" variants={fadeLeft} style={cardStyle}>
            <h4 style={{ color: "#a8dee9ff" }}>Schooling (2018)</h4>
            <p style={{ color: "#e0e0e0" }}>
              Sri Chaitanya Children’s Academy – SSC – CGPA: 8.5
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="section" variants={fadeUp} style={sectionStyle}>
        <motion.h2
          style={{ color: "#00b4d8", textAlign: "center" }}
          variants={fadeUp}
        >
          Skills
        </motion.h2>
        <motion.div className="skills-grid" variants={staggerChildren}>
          <motion.div className="card" variants={fadeLeft} style={cardStyle}>
            <h4 style={{ color: "#a8dee9ff" }}>Programming Languages</h4>
            <p style={{ color: "#e0e0e0" }}>Java | Python</p>
          </motion.div>
          <motion.div className="card" variants={fadeRight} style={cardStyle}>
            <h4 style={{ color: "#a8dee9ff" }}>Web Technologies</h4>
            <p style={{ color: "#e0e0e0" }}>React JS | CSS | JavaScript | HTML</p>
          </motion.div>
          <motion.div className="card" variants={fadeLeft} style={cardStyle}>
            <h4 style={{ color: "#a8dee9ff" }}>Tools / Platforms</h4>
            <p style={{ color: "#e0e0e0" }}>GitHub | VS Code | MATLAB | MS Office</p>
          </motion.div>
          <motion.div className="card" variants={fadeRight} style={cardStyle}>
            <h4 style={{ color: "#a8dee9ff" }}>Database</h4>
            <p style={{ color: "#e0e0e0" }}>SQL</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section className="section" variants={fadeUp} style={sectionStyle}>
        <motion.h2
          style={{ color: "#00b4d8", textAlign: "center" }}
          variants={fadeUp}
        >
          Academic Projects
        </motion.h2>
        <motion.div variants={staggerChildren}>
          <motion.div className="card" variants={fadeLeft} style={cardStyle}>
            <h4 style={{ color: "#a8dee9ff" }}>
              Railway Track Crack Detection Vehicle
            </h4>
            <p style={{ color: "#e0e0e0" }}>
              <i>(IoT and Image Processing)</i>
            </p>
            <ul style={{ color: "#e0e0e0" }}>
              <li>Designed a cart that detects cracks on railway tracks</li>
              <li>Used LED–LDR system + Image processing for accuracy</li>
            </ul>
          </motion.div>
          <motion.div className="card" variants={fadeRight} style={cardStyle}>
            <h4 style={{ color: "#a8dee9ff" }}>Line Follower Robot</h4>
            <p style={{ color: "#e0e0e0" }}>
              <i>(Tetrix Prizm)</i>
            </p>
            <ul style={{ color: "#e0e0e0" }}>
              <li>Used IR sensor to follow a predefined path</li>
            </ul>
          </motion.div>
          <motion.div className="card" variants={fadeLeft} style={cardStyle}>
            <h4 style={{ color: "#a8dee9ff" }}>Weather Monitoring System</h4>
            <p style={{ color: "#e0e0e0" }}>
              <i>(Arduino UNO + IDE)</i>
            </p>
            <ul style={{ color: "#e0e0e0" }}>
              <li>Monitors temperature, pressure, humidity & rain</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section className="section" variants={fadeUp} style={sectionStyle}>
        <motion.h2
          style={{ color: "#a8dee9ff", textAlign: "center" }}
          variants={fadeUp}
        >
          Certifications
        </motion.h2>
        <motion.ul variants={staggerChildren} style={{ color: "#fafafaff" }}>
          <motion.li variants={fadeLeft}>
            <a
              href="https://drive.google.com/file/d/1dyyuGmm9oi-aBCZTiaeYwU2jw3eE4yWM/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#e5ebecff", textDecoration: "none" }}
            >
              Embedded Developer Virtual Internship – AICTE EduSkills
            </a>
          </motion.li>
          <motion.li variants={fadeRight}>
            <a
              href="https://drive.google.com/file/d/1iMUoQcNAOYVOTomwoSPsgjHkCHkVXqV1/view"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#eff6f8ff", textDecoration: "none" }}
            >
              Web Development – Oyasis Infobite
            </a>
          </motion.li>
          <motion.li variants={fadeLeft}>
            <a
              href="https://drive.google.com/file/d/1GGapljE1mXJ6oZPsGqgz4TY2dI_G4DM0/view"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fefefeff", textDecoration: "none" }}
            >
              Java Programming – Internpe
            </a>
          </motion.li>
          <motion.li variants={fadeRight} style={{ color: "#f9f9f9ff" }}>
            Java FullStack Development - Besant Technologies
          </motion.li>
        </motion.ul>
      </motion.section>

      {/* Honors & Awards Section */}
      <motion.section className="section" variants={fadeUp} style={sectionStyle}>
        <motion.h2
          style={{ color: "#60c0e2ff", textAlign: "center" }}
          variants={fadeUp}
        >
          Honors & Awards
        </motion.h2>
        <motion.ul variants={staggerChildren} style={{ color: "#e0e0e0" }}>
          <motion.li variants={fadeLeft}>
            Runner-up in IoT Workshop at Gitam University
          </motion.li>
        </motion.ul>
      </motion.section>
    </motion.div>
  );
};

export default About;









