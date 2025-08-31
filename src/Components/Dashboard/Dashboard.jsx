import React from "react";
import "./Dashboard.css";

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
        {/* Left Section */}
        <div className="left-card">
          {/* First Card */}
          <div className="one-card">
          <img src={`./images/${projects[0].image}`} alt={projects[0].title} />
          <p>{projects[0].title}</p>
          </div>

          {/* Second Card - Featured Project */}
          <div className="two-card">
            <img src={`./images/${projects[0].image}`} alt={projects[0].title} />
            <p>{projects[0].title}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-card">
          {/* Third Card (Search Bar) */}
          <div className="three-card">
              
          <img src={`./images/${projects[3].image}`} alt={projects[3].title} />
                <p>{projects[3].title}</p>
          </div>

          {/* Fourth Card - Project Grid */}
          <div className="four-card">
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
            <div className="four-grid-two">
              <div className="four-c">
                <img src={`./images/${projects[3].image}`} alt={projects[3].title} />
                <p>{projects[3].title}</p>
              </div>
              <div className="four-d">
                <div className="four-btn">
                  <button className="btn-1">1</button>
                  <button className="btn-2">2</button>
                </div>
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
