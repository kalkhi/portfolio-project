import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../App.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5upqtw5",        // ✅ Your Service ID
        "template_9ba6tn7",        // 🔄 Replace with your actual Template ID
        form.current,
        "dPAL_uL8GsLbytsWI"       // ✅ Your Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message, try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <div
      className="contact-page"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/contact.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="contact-header fade-in">
        <h2 style={{ color: "white" }}>Contact Me</h2>
        <p style={{ color: "white" }}>
          Let’s connect and build something great together!
        </p>
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

      {/* Contact Form */}
      <section className="contact-form fade-in">
        <h3 style={{ color: "white" }}>Send a Message</h3>
        <form ref={form} onSubmit={sendEmail} className="form-container">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <input type="text" name="user_phone" placeholder="Your Phone Number" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;


