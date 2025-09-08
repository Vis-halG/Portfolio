import React, { useState, useEffect } from "react";
import "./Navbar.css";
import PortfolioImg from '../../assets/images/Portfolio.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div>
        <img src={PortfolioImg} alt="Portfolio" />
      </div>

      <div
        className={`menu-toggle ${isMobileMenuOpen ? "close" : ""}`}
        id="mobile-menu"
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav ${isMobileMenuOpen ? "nav-mobile-open" : ""}`}>
        <span className="close-btn" onClick={closeMobileMenu}>
          &times;
        </span>

        <div className="nav-items">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item" >
            <a href="#projects_section">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#skills_section">Tech Stack</a>
          </li>
          <li className="nav-item">
            <a href="#experience_section">Experience</a>
          </li>
          <li className="nav-item">
            <a href="#contact_section">Contact Us</a>
          </li>
        </div>

        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" className="social-icon" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" className="social-icon" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://web.telegram.org" target="_blank" className="social-icon" rel="noreferrer">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href="https://www.whatsapp.com" target="_blank" className="social-icon" rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        <div className="ThemeCV-mb">
          <button
            className="DownloadCV"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1cKmNITw5xUlK-NgA0FHbU-pvf9RUpmDF/view?usp=sharing",
                "_blank"
              );
            }}
          >
            View CV!
          </button>
        </div>
      </ul>

      <div className="ThemeCV">
        <button
          className="DownloadCV"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1cKmNITw5xUlK-NgA0FHbU-pvf9RUpmDF/view?usp=sharing",
              "_blank"
            );
          }}
        >
          View CV!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
