import React from "react";
import Home from    "./Components/Home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import CursorFollower from "./Components/CursorFollower/CursorFollower.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <CursorFollower />
      <Navbar />
      <Home />
      <Projects/>
      <Skills/>
      <Experience/>
      <ContactUs/>
       <Footer/>
    </div>
  );
}

export default App;
