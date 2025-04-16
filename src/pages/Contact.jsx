import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div
  className="contact-page"
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL + "/conn.jpeg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
   
      <section className="contact-header fade-in">
      <h2 style={{ color: "white" }}>Contact Me</h2>
        <p style={{ color: "white" }}> Let’s connect and build something great together!</p>
      </section>

      <section className="contact-info fade-in">
        <div className="info-block">
          <i className="fa-regular fa-envelope"></i>
          <div>
            <h4>Email</h4>
            <p>vadladeepika944@gmail.com</p>
          </div>
        </div>

        <div className="info-block">
          <i className="fa-solid fa-phone-volume"></i>
          <div>
            <h4>Phone</h4>
            <p>6281408869</p>
          </div>
        </div>
      </section>

      <section className="social-media fade-in">
        <h3 style={{ color: "white" }}>Connect on Social Media</h3>
        <div className="social-links">
  <a
    href="http://linkedin.com/in/vadla-deepika-4a53a8229"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "white" }}
  >
    <i className="fa-brands fa-linkedin"></i> LinkedIn
  </a>

  <a
    href="https://github.com/kalkhi"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "white" }}
  >
    <i className="fa-brands fa-github"></i> GitHub
  </a>
</div>

      </section>
    </div>
  );
};

export default Contact;
