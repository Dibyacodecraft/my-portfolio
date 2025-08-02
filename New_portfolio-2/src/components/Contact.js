import React from 'react';
import { SpotlightCard } from 'react-bits';

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <SpotlightCard className="contact-card" spotlightColor="#0072ff">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:dibya4096@gmail.com">dibya4096@gmail.com</a>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <a href="https://github.com/Dibyacodecraft" target="_blank" rel="noopener noreferrer">
                github.com/Dibyacodecraft
              </a>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/dibya-ranjan-jena-184659316/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/dibya-ranjan-jena-184659316/
              </a>
            </div>
          </div>
          <div className="contact-message">
            <h3>Send a Message</h3>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}