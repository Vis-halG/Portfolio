import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-split">
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#tech-stack">Tech Stack</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <div className="footer-social">
          
          <a href="https://github.com/Vis-halG">
           <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/vishalsgupta" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:vishalsgupta@example.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="tel:+1234567890" aria-label="Phone">
            <i className="fas fa-phone"></i>
          </a>
        </div>
        </div>
      
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Vishal S. Gupta. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
