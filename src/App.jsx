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
  const [showLoader, setShowLoader] = useState(true); 

  useEffect(() => {
    const totalDuration = 1500; // Total loading time is 1.0 second
    const fadeDuration = 400;   // CSS transition is 0.4 seconds

    // 1. Trigger the CSS fade-out effect.
    // Time = 1000ms - 400ms = 600ms. Loader starts fading after 0.6 seconds.
    const startFadeTimer = setTimeout(() => {
      setIsLoading(false); // This applies the 'fade-out' class to LoadingScreen
    }, totalDuration - fadeDuration); 

    // 2. Unmount the LoadingScreen component after the total duration.
    // This ensures the main app is visible only when the fade is complete.
    const stopLoaderTimer = setTimeout(() => {
      setShowLoader(false); 
    }, totalDuration);
    
    return () => {
      clearTimeout(startFadeTimer);
      clearTimeout(stopLoaderTimer);
    };
  }, []);

  // Conditionally render the LoadingScreen component.
  // We pass isFading={!isLoading}.
  const loader = showLoader ? <LoadingScreen isFading={!isLoading} /> : null;
  
  // Render the full application
  return (
    <div>
      {/* The loader renders on top of the app until showLoader is false */}
      {loader} 
      
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