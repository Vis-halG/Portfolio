import React from "react";
import "./Dashboard.css";

// Static project data
const projects = [
  { id: 1, title: "E-commerce Clone", image: "ecommerce.jpg" },
  { id: 2, title: "To-Do App", image: "todo.jpg" },
  { id: 3, title: "Weather App", image: "weather.jpg" },
  { id: 4, title: "Netflix Clone", image: "netflix.jpg" },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="cards">
        
        {/* ===== Left Section ===== */}
        <div className="left-card">
          
          {/* Primary Card: E-commerce Clone */}
          <div className="one-card">
            <img src={`./images/${projects[0].image}`} alt={projects[0].title} />
            <p>{projects[0].title}</p>
          </div>

          {/* Featured Card: Same as Primary (E-commerce Clone) */}
          <div className="two-card">
            <img src={`./images/${projects[0].image}`} alt={projects[0].title} />
            <p>{projects[0].title}</p>
          </div>
        </div>

        {/* ===== Right Section ===== */}
        <div className="right-card">
          
          {/* Highlighted Project: Netflix Clone */}
          <div className="three-card">
            <img src={`./images/${projects[3].image}`} alt={projects[3].title} />
            <p>{projects[3].title}</p>
          </div>

          {/* Grid Layout with Multiple Mini Cards */}
          <div className="four-card">
            
            {/* Grid Row 1: Two Mini Cards */}
            <div className="four-grid-one">
              <div className="four-a">
                <img src={`./images/${projects[3].image}`} alt={projects[3].title} />
                <p>{projects[3].title}</p>
              </div>

              <div className="four-b">
                <img src={`./images/${projects[3].image}`} alt={projects[3].title} />
                <p>{projects[3].title}</p>
              </div>
            </div>

            {/* Grid Row 2: One Project + Pagination/Label */}
            <div className="four-grid-two">
              
              {/* Another Project Card */}
              <div className="four-c">
                <img src={`./images/${projects[3].image}`} alt={projects[3].title} />
                <p>{projects[3].title}</p>
              </div>

              {/* Footer Section: Pagination Buttons + Label */}
              <div className="four-d">
                
                {/* Step Buttons */}
                <div className="four-btn">
                  <button className="btn-1">1</button>
                  <button className="btn-2">2</button>
                </div>

                {/* 'More Projects' Label */}
                <div className="four-e">
                  <p>More Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div> 
    </div>
  );
};

export default Dashboard;
