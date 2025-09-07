import React from "react";
import "./Dashboard.css";

// Project data
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
        
        {/* ---------------- Left Section ---------------- */}
        <div className="left-card">
          
          {/* First Card (E-commerce Clone) */}
          <div className="one-card">
            <img src={`./images/${projects[0].image}`} alt={projects[0].title} />
            <p>{projects[0].title}</p>
          </div>

          {/* Second Card - Featured Project (Again E-commerce Clone for now) */}
          <div className="two-card">
            <img src={`./images/${projects[0].image}`} alt={projects[0].title} />
            <p>{projects[0].title}</p>
          </div>
        </div>

        {/* ---------------- Right Section ---------------- */}
        <div className="right-card">
          
          {/* Third Card (Netflix Clone) */}
          <div className="three-card">
            <img src={`./images/${projects[3].image}`} alt={projects[3].title} />
            <p>{projects[3].title}</p>
          </div>

          {/* Fourth Card - Grid layout with multiple mini cards */}
          <div className="four-card">
            
            {/* First row of grid */}
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

            {/* Second row of grid */}
            <div className="four-grid-two">
              
              {/* Left part (Netflix again) */}
              <div className="four-c">
                <img src={`./images/${projects[3].image}`} alt={projects[3].title} />
                <p>{projects[3].title}</p>
              </div>

              {/* Right part (Buttons + More Projects) */}
              <div className="four-d">
                
                {/* Pagination / Step buttons */}
                <div className="four-btn">
                  <button className="btn-1">1</button>
                  <button className="btn-2">2</button>
                </div>

                {/* Label for more projects */}
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
