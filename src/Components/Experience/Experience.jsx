import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience" id="experience_section">
      <h2 className="head-title">Experience</h2>

      {/* First Experience Card */}
      <div className="experience-container">
        <div className="heading">
          <img
            src="https://res.cloudinary.com/dbithmxnp/image/upload/v1738544860/magic-bus-logo_tscczx.gif"
            alt="Magic Bus Foundation"
            className="experience-image"
          />
          <h2>Magic Bus Foundation</h2>
        </div>
        <div className="experience-content">
          <p className="training">
            <strong>Front-end Development (Training)</strong>
          </p>
          <p>
            Completed an intensive offline training program in Web Designing &
            UX/UI, gaining expertise in modern web development skills and
            industry-relevant tools. The curriculum included hands-on experience
            with: Technical Skills: HTML, CSS, JavaScript, AngularJS, ReactJS,
            and Adobe Photoshop.
          </p>
          <p>
            Additional Tools: Advanced web designing tools and technologies
            essential for crafting responsive and user-friendly websites
          </p>
          <p>
            Worked with a team to create user interfaces with React, using HTML,
            CSS, and JavaScript. Tested features for browser compatibility,
            staying current with front-end trends to enhance skills and deliver
            optimized solutions.
          </p>
        </div>
      </div>

      {/* Second Experience Card (Clone for new experience) */}
      <div className="experience-container-two">
        <div className="heading">
          <img
            src="https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg"
            alt="FreeCodeCamp"
            className="experience-image"
          />
          <h2>FreeCodeCamp</h2>
        </div>
        <div className="experience-content">
          <p className="training">
            <strong>Responsive Web Design</strong>
          </p>
          <p>
        I completed the Responsive Web Design Certification from freeCodeCamp. This certification required me to complete more than 300 hours of coursework and projects, strengthening my expertise in HTML5, CSS3, Flexbox, CSS Grid, and mobile-first responsive design. 
          </p>
          <p>
          The projects I built — including a Technical Documentation Page, Tribute Page, and Product Landing Page — helped me gain practical experience in designing clean, accessible, and user-friendly interfaces.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
