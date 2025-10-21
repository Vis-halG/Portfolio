import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import CursorFollower from "./Components/CursorFollower/CursorFollower.jsx";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen.jsx"; 
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading screen duration to 0.5 seconds (500ms)
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 500); 

    return () => clearTimeout(timer); 
  }, []);

  // Show the loading screen while isLoading is true
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Render the full application once loading is complete
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