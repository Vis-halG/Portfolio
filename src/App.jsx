// src/App.jsx

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

// 💡 STEP 1: Define all critical image URLs here
const CLOUDINARY_IMAGE_URLS = [
  "https://res.cloudinary.com/dwtn2kajc/image/upload/v1739437437/Main-OG_rfy4zm.png",
  "https://res.cloudinary.com/dwtn2kajc/image/upload/v1758037232/Untitled_design_3_1_uxiddn_c_crop_w_1587_h_1663_x_0_y_0_t5gzpj.png"
];

const MIN_DURATION = 1500; // 1500ms (1.5 seconds) minimum display time
const FADE_DURATION = 400;  // CSS transition time (0.4s)

// Helper function to load a single image using a Promise
const preloadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = url;
  });
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true); 

  useEffect(() => {
    // 1. Create a Promise that resolves after the minimum time (1500ms)
    const minTimerPromise = new Promise(resolve => 
      setTimeout(resolve, MIN_DURATION)
    );

    // 2. Create a Promise that resolves when ALL images are loaded
    const imageLoadPromise = Promise.all(CLOUDINARY_IMAGE_URLS.map(preloadImage));

    // 3. Wait for BOTH the minimum time AND the image loading to complete.
    Promise.all([minTimerPromise, imageLoadPromise])
      .finally(() => {
        // Calculate the time when the fade-out should START (400ms before total stop time)
        const totalTimeToKeepLoaderVisible = FADE_DURATION; 

        // Start the fade-out process
        const startFadeTimer = setTimeout(() => {
          setIsLoading(false); // Triggers CSS fade-out (isFading = true)
        }, 0); // Start fade immediately after the Promise.all resolves

        // Remove the loader component completely after the fade duration
        const stopLoaderTimer = setTimeout(() => {
          setShowLoader(false); 
        }, totalTimeToKeepLoaderVisible);

        // Cleanup function for the timers
        return () => {
          clearTimeout(startFadeTimer);
          clearTimeout(stopLoaderTimer);
        };
      });

    // Cleanup function (though timers are inside the async block)
    return () => {};
    
  }, []); // Run only once on mount

  // Conditionally render the LoadingScreen component.
  const loader = showLoader ? <LoadingScreen isFading={!isLoading} /> : null;
  
  // Render the full application
  return (
    <div>
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